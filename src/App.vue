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
  <!-- all content before and after RoterView -will show on every single page -->
  <div class="nav-container">
    <div class="links">
      <h1>Best Movies.</h1>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <!--will link the same component
           <router-link :to="{ name:'home'}">Home</router-link> -->
        <router-link to="/top">Top movies</router-link>
        <router-link to="/favorites">Favorite movies</router-link>
        <router-link to="/enquiries">Enquiries</router-link>
      </div>
      <!-- <div class="login">
        <button @click="hadleLogin()">Login / Registration</button>
      </div> -->
    </div>
    <!-- <br /> -->

    <hr />
    <hr />
  </div>
  <!-- RouterView - here our router components will be dinamicly injected, depending on the rout we visit
    will render different components on the page -->
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  data() {
    return {
      // login: false,
    };
  },
  // methods: {
  //   hadleLogin() {
  //     this.login = true;
  //     console.log(this.login);
  //   },
  // },
};
</script>

<style>
body {
  background-color: #33323a;
  /* background-color: #abced8; */
  color: beige;
}

#nav {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: white;
  /* text-decoration:none - remove underline from nav words; */
  text-decoration: none;
  padding: 10px;
}

/* .nav-container {
  display: flex; 
  justify-content: flex-end;
} */

.login {
  margin-top: -60px;
  margin-right: 50px;
}

/* active nav bar color */
#nav a.router-link-exact-active {
  color: aquamarine;
}
</style>
