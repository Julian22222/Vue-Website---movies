<!-- <template>
  <div id="app">
    <div class="post">
      <h1>Best Movies</h1>
      <hr />

      <h4>Login / Registration</h4>
      <input type="text" placeholder="search your movie" />
      <input type="submit" />
      <br />
      <br />
      <div class="links">
        <a href="/">Home</a>
        <a href="/topmovies">Top movies</a>
      </div>
      <p>
        Home / Top movies /////////////// Sorting by -Year / Genres / Ratings /
        Reviews / Votes
      </p>

      <MovieList v-bind:movies="movies" />
    </div>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
export default {
  name: "App",
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    fetch("http://localhost:8081/movies")
      .then((res) => res.json())
      .then((data) => {
        this.movies = data;
      });
  },
  methods: {},
  components: { MovieList },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  text-align: center;
}

.links a {
  margin-right: 20px;
}
</style> -->

<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
