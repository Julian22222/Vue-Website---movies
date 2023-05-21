<template>
  <div v-if="login">
    <LoginRegister @close="hadleLogin()" @closeBtn="handleCloseBtn" />
  </div>
  <div>
    <div class="login">
      <button @click="hadleLogin()">Login / Registration</button>
    </div>
    <div class="post">
      <br />
      <br />

      <div class="sort-search-bar">
        <button class="genresBtn">Genres</button>
        <!-- press btn ->open a popup window to choose a genres, than will give you a
        films with that genre -->

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

      <MovieList v-bind:movies="movies" />
    </div>
  </div>
  {{ search }}
</template>

<script>
// /home/codenitro/VSCode/northocoders/project/vue/vue-movies-website/src/components/MovieList.vue

// import new component in here
import MovieList from "@/components/MovieList";
import LoginRegister from "@/components/Login-Register.vue";

export default {
  name: "App",
  // props: ["login"],
  data() {
    return {
      movies: [
        // { id: 1, title: "buy groceries" },
        // { id: 2, title: "wash car" },
      ],
      login: false,
      sort: "",
      order: "desc",
      search: "",
    };
  },
  mounted() {
    // fetch("https://movies-ypff.onrender.com/movies")
    fetch("http://localhost:8082/movies")
      .then((res) => res.json())
      .then((data) => {
        this.movies = data;
      });
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
    },
    hadleLogin() {
      this.login = !this.login;
    },
    handleCloseBtn() {
      // reverses the variable - if it is false -it will turn true, and other way round
      this.login = !this.login;
    },
  },
  //   components:{} need to register imported component in this component
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
