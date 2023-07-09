<template>
  <h2 v-if="this.activeUser.value === ''">
    To add your list of favorite movies you need to Log In.
  </h2>
  <!-- <button @click="handleCheck">Check</button> -->
  <div v-if="this.activeUser.value !== ''">
    <p>Loged In User: {{ activeUser }}</p>

    <div v-if="showCorrectUser[0]">
      <!-- <b> Favorite Movies IDs for This User : </b>
      {{ showCorrectUser[0].favorites.flat() }} -->

      <ul>
        <li v-for="movie in findFavUserMovies" :key="movie._id">
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
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // inject works in combination with provide -similar to React context in Vue
  // use inject to use this variable in here
  inject: ["activeUser"],

  data() {
    return {
      showCorrectUser: [],
      allMovies: [],
    };
  },
  mounted() {
    fetch("https://movies-ypff.onrender.com/users")
      // fetch("http://localhost:3007/users")
      .then((res) => res.json())
      .then((data) => {
        this.showCorrectUser = data.filter((element) => {
          return element.name === this.activeUser.value;
        });
      })
      .catch((err) => console.error(err.message));

    fetch("https://movies-ypff.onrender.com/movies")
      // fetch("http://localhost:3007/movies")
      .then((res) => res.json())
      .then((data) => {
        this.allMovies = data;
      })
      .catch((err) => console.error(err.message));
  },
  methods: {
    // handleCheck() {
    //   console.log(this.activeUser.value);
    //   // to convert from Proxy array to array
    //   console.log(JSON.stringify(this.showCorrectUser));
    //   console.log(
    //     JSON.parse(JSON.stringify(this.showCorrectUser))[0].favorites.flat()
    //   );
    //   console.log(JSON.parse(JSON.stringify(this.allMovies)));
    // },
  },
  computed: {
    findFavUserMovies() {
      // to convert from proxy array to array
      // const savedFavArr = JSON.parse(
      //   JSON.stringify(this.showCorrectUser[0].favorites.flat())
      // );

      // array of ids of favorite movies
      const savedFavArr = this.showCorrectUser[0].favorites.flat();

      const result = [];
      savedFavArr.forEach((favMov) => {
        result.push(...this.allMovies.filter((mov) => mov._id == favMov));
      });

      console.log(result);

      return result;
    },
  },
};
</script>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

img {
  border-radius: 5px 5px 0 0;
  width: 290px;
  height: 440px;
}

li {
  margin-right: 6px;
  margin-bottom: 10px;
}

container {
  /* text-align: center; */
  /* justify-content: center; */
  /* background-color: black; */
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

p {
  /* display: flex;
  justify-content: flex-end; */
  background-color: orange;
  padding: 5px;
  width: 25px;
  margin-left: 255px;
  margin-top: -465px;
  position: absolute;
  border-radius: 5px;
}

/* .container-info {
  display: flex;
  justify-content: space-around;
} */

.container h4 {
  text-align: center;
  margin: 0;
  color: beige;
}

ul {
  margin-top: 10px;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
}
</style>
