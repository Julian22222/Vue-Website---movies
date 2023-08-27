<template>
  <div>
    <div class="post">
      <br />
      <br />

      <div class="sort-search-bar">
        <div class="genresBtn">
          <label>Genres: </label>
          <select v-model="genre">
            <option></option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
            <option value="biography">Biography</option>
            <option value="mystery">Mystery</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>

        <div>
          <label>Sort By: </label>
          <select v-model="sort">
            <option></option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
            <option value="duration">Duration</option>
            <option value="reviews">Reviews</option>
            <option value="votes">Votes</option>
          </select>

          <span> Order: </span>
          <select v-model="order">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div class="search">
          <input
            type="text"
            placeholder="search your movie"
            ref="search"
            v-model="search"
          />
          <button @click="handleClick()">Search</button>
        </div>
      </div>

      <MovieList v-bind:movies="movies" v-bind:resultSearch="resultSearch" />
    </div>
  </div>
</template>

<script>
// import new component in here
import MovieList from "@/components/MovieList";
import LoginRegister from "@/components/Login-Register.vue";

export default {
  name: "App",
  // props: ["login"],
  data() {
    return {
      movies: [],
      login: false,
      sort: "",
      order: "desc",
      search: null,
      genre: "",
      // showUserName: "",
    };
  },

  mounted() {
    fetch("https://movies-ypff.onrender.com/movies")
      // fetch("http://localhost:3007/movies")
      .then((res) => res.json())
      .then((data) => {
        this.movies = data;
        console.log("THISSSSSSSSSSSSSSSSSSSSS");
      })
      .catch((err) => console.error(err.message));
  },
  updated() {
    ////////////////////////sort by RATING
    if (this.sort === "rating" && this.order === "desc") {
      this.movies.sort((a, b) => {
        if (a.rating < b.rating) return 1;
      });
    }
    if (this.sort === "rating" && this.order === "asc") {
      this.movies.sort((a, b) => {
        if (a.rating > b.rating) return 1;
      });
    }
    //////////////////////sort by YEAR
    if (this.sort === "year" && this.order === "desc") {
      this.movies.sort((a, b) => {
        if (a.year < b.year) return 1;
      });
    }
    if (this.sort === "year" && this.order === "asc") {
      this.movies.sort((a, b) => {
        if (a.year > b.year) return 1;
      });
    }
    //////////////////////////sort by DURATION
    if (this.sort === "duration" && this.order === "desc") {
      this.movies.sort((a, b) => {
        if (
          a.duration.hours * 60 + a.duration.minutes <
          b.duration.hours * 60 + b.duration.minutes
        )
          return 1;
      });
    }
    if (this.sort === "duration" && this.order === "asc") {
      this.movies.sort((a, b) => {
        if (
          a.duration.hours * 60 + a.duration.minutes >
          b.duration.hours * 60 + b.duration.minutes
        )
          return 1;
      });
    }
    ////////////////////////sort by Reviews
    if (this.sort === "reviews" && this.order === "desc") {
      this.movies.sort((a, b) => {
        if (a.reviews.length < b.reviews.length) return 1;
      });
    }
    if (this.sort === "reviews" && this.order === "asc") {
      this.movies.sort((a, b) => {
        if (a.reviews.length > b.reviews.length) return 1;
      });
    }
    ///////////////////////sort by VOTES
    if (this.sort === "votes" && this.order === "desc") {
      this.movies.sort((a, b) => {
        if (a.votes < b.votes) return 1;
      });
    }
    if (this.sort === "votes" && this.order === "asc") {
      this.movies.sort((a, b) => {
        if (a.votes > b.votes) return 1;
      });
    }
    ////////////////////// SEARCH MOVIE
    if (this.search === this.$refs.search.value) {
      this.movies.filter((e) => {
        e.title === this.$refs.search.value;
      });
    }
  },
  methods: {
    handleClick() {
      this.$refs.search.focus();
      //   focus - when you click search the cursor appears in the input
      console.log(this.$refs.search.value);
      //   this.$refs.search.classList.add('active') - add class="active to ref="search"
      // this.search = this.$refs.search.value;

      console.log("Genre", this.genre);
    },
    hadleLogin() {
      this.login = !this.login;
    },
    hadleLogot() {
      this.showUserName = "";
    },
    handleCloseBtn(userDetails) {
      // reverses the variable - if it is false -it will turn true, and other way round
      this.login = !this.login;
      this.showUserName = userDetails;
      console.log(this.showUserName);
    },
  },
  //   components:{} need to register imported component in this component
  computed: {
    resultSearch() {
      this.sort = "";
      this.order = "desc";

      if (this.search) {
        this.genre = "";

        // return this.movies.filter((data) =>
        //   data.toLowerCase().includes(this.search.value.toLowerCase())
        // );

        return this.movies.filter((movie) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => movie.title.toLowerCase().includes(v));
        });
      } else if (this.genre !== "") {
        return this.movies.filter((movie) => {
          return movie.genres.includes(this.genre);
        });
      } else {
        return this.movies;
      }
    },
  },
  components: { MovieList, LoginRegister },
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

body {
  min-height: 100vh;
}

.login button {
  border: none;
  background: none;
  color: beige;
  font-size: 16px;
  font-weight: bold;
  float: right;
  margin-top: -30px;
  cursor: pointer;

  /* display: flex;
  justify-content: flex-end; */
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

.genresBtn {
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  color: beige;
  cursor: pointer;
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
  margin-top: 40px;
}
</style>
