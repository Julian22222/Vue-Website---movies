<template>
  <li v-for="movie in resultSearch" :key="movie._id">
    <!-- name: 'movieCard' - linking component to this router link -->
    <!-- params: { id: movie._id } -adding id to our url route / path / end point -->
    <!-- params: { id: movie._id } - passing id as a key with value movie._id to our router.js -->
    <router-link :to="{ name: 'movieCard', params: { id: movie._id } }">
      <div class="container">
        <img v-bind:src="movie.poster" alt="single poster" />

        <h4>
          {{ movie.title }}
        </h4>
        <p>{{ movie.rating }}</p>
      </div>
    </router-link>
  </li>

  <div v-if="movies.length === 0">Loading....</div>
</template>

<script>
export default {
  // props: ["movieList"] - unpacking props from App.vue to use them in this component
  props: ["movies", "resultSearch"],
  components: {
    // TodoItem,
  },
  // data() {
  //   return {
  //     image: ''
  //   };
  // },
  methods: {},
  computed: {
    ratingSort() {
      return movies.sort((movie) => movie.rating - movie.rating);
    },
  },
};
</script>

<style scoped>
/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
  width: 290px;
  height: 440px;
}

li {
  margin-right: 6px;
  margin-bottom: 10px;
}

.container {
  /* text-align: center; */
  /* justify-content: center; */
  /* background-color: black; */
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

p {
  /* display: flex;
  justify-content: flex-end; */
  background-color: orange;
  padding: 5px;
  width: 25px;
  margin-left: 255px;
  margin-top: -465px;
  position: absolute;
  border-radius: 5px;
}

/* .container-info {
  display: flex;
  justify-content: space-around;
} */

.container h4 {
  text-align: center;
  margin: 0;
  color: beige;
}
</style>
