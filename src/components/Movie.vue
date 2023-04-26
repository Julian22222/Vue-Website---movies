<template>
  <li v-for="movie in movies" :key="movie._id">
    <img v-bind:src="movie.poster" alt="single poster" />
    <div class="container">
      <h4>
        <b> {{ movie.title }}</b>
      </h4>
      <p>{{ movie.rating }}</p>
    </div>
  </li>
</template>

<script>
export default {
  // props: ["movieList"] - unpacking props from App.vue to use them in this component
  props: ["movies"],
  components: {
    // TodoItem,
  },
  // data() {
  //   return {
  //     image: ''
  //   };
  // },
};
</script>

<style scoped>
/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
  width: 300px;
}

li {
  margin-right: 6px;
}

.container {
  text-align: center;
}
</style>
