<!-- <template>
  <div>
    <div>
      <div class="post">
        <h2>Best Movies</h2>
        <hr />
        <h4>Login / Registration</h4>
        <input type="text" placeholder="search your movie" />
        <input type="submit" />

        <p>
          Home / Top movies /////////////// Sorting by -Year / Genres / Ratings
          / Reviews / Votes
        </p>

        <MovieList v-bind:movies="movies" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
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
      // fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
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
</style> -->
