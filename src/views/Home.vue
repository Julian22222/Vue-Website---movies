<!-- <template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor earum
      error deserunt doloremque quisquam. Aspernatur esse impedit dolorem.
    </p>
    <a href="/todos">Todos</a>
  </div>
</template> -->
<template>
  <div>
    <div class="post">
      <h1>Best Movies</h1>
      <hr />
      <!-- <router-view /> -->

      <h4>Login / Registration</h4>
      <input type="text" placeholder="search your movie" />
      <input type="submit" />
      <br />
      <br />
      <div class="links">
        <a href="/">Home</a>
        <a href="/top">Top movies</a>
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
// /home/codenitro/VSCode/northocoders/project/vue/vue-movies-website/src/components/MovieList.vue

import MovieList from "@/components/MovieList";
export default {
  name: "App",
  data() {
    return {
      movies: [
        // { id: 1, title: "buy groceries" },
        // { id: 2, title: "wash car" },
      ],
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
</style>
