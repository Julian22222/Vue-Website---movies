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
      <!-- <h1>Best Movies</h1> -->

      <!-- <router-view /> -->

      <!-- <div class="search">
        <input type="text" placeholder="search your movie" />
        <input type="submit" />
      </div> -->

      <br />
      <br />
      <!-- <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/top">Top movies</router-link>
      </div> -->
      <div class="sort-search-bar">
        <div>
          <label>Sort By: </label>
          <select onChange="{handleChange}">
            <option></option>
            <option value="rating">rating</option>
            <option value="rating">year</option>
            <option value="genres">genres</option>
            <option value="duration">duration</option>
            <option value="reviews">reviews</option>
            <option value="votes">votes</option>
          </select>

          <span> Order: </span>
          <select onChange="{handleOrder}">
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </div>

        <div class="search">
          <input type="text" placeholder="search your movie" />
          <input type="submit" />
        </div>
      </div>

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
  /* color: #2c3e50; */
  margin-top: 60px;
}

h1 {
  text-align: center;
}

h4 {
  text-align: end;
}

.search {
  /* text-align: center; */
  margin-right: 80px;
}

.links a {
  margin-right: 20px;
  color: beige;
}

links {
  color: beige;
}

span {
  margin-left: 10px;
}

.sort-search-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
}
</style>
