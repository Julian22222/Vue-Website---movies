<template>
  <div class="card">
    <ul>
      <!-- <li v-for="movie in movies"> -->
      <Movie v-bind:movies="movies" />
      <!-- <img v-bind:src="movie.poster" alt="single poster" />
        <div class="container">
          <h4>
            <b> {{ movie.title }}</b>
          </h4>
          <p>{{ movie.rating }}</p>
        </div> -->
      <!-- </li> -->
      <!-- <li v-for="movie in movies">{{ movie.title }}</li> -->
      <!-- <li>List number 1</li> -->
    </ul>
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";
export default {
  // props: ["movieList"] - unpacking props from App.vue to use them in this component
  props: ["movies"],
  components: {
    Movie,
  },
  // data() {
  //   return {
  //     image: ''
  //   };
  // },
};
</script>

<style scoped>
/* .card { */
/* Add shadows to create the "card" effect */
/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
} */

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
}

ul {
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
}
</style>
