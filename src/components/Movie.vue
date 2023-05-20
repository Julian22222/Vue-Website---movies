<template>
  <li v-for="movie in searchMovie" :key="movie._id">
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
  {{ search }}
</template>

<script>
export default {
  // props: ["movieList"] - unpacking props from App.vue to use them in this component
  props: ["movies", "search"],
  components: {},
  // data() {
  //   return {
  //     image: ''
  //   };
  // },
  methods: {},
  updated() {
    // const searchMovie = () => {
    //   return this.movies.filter((element) => {
    //     element.title.toLowerCase().includes(this.search.trim().toLowerCase());
    //   });
    // };
    //  if (this.search.trim().length > 0) {
    //       return this.movies.filter((element) => {
    //         element.title
    //           .toLowerCase()
    //           .includes(this.search.trim().toLowerCase());
    //       });
    //     }
  },
  computed: {
    // ratingSort() {
    //   return movies.sort((movie) => movie.rating - movie.rating);
    // },
    searchMovie() {
      if (this.search.trim().length > 0) {
        return this.movies.filter((element) => {
          element.title
            .toLowerCase()
            .includes(this.search.trim().toLowerCase());
        });
      }
      return this.movies;
    },
  },
};
</script>

<style scoped>
/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
  width: 300px;
  height: 450px;
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

/* .container-info {
  display: flex;
  justify-content: space-around;
} */

.container h4 {
  text-align: center;
  margin: 0;
}
</style>
