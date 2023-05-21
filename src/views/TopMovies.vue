<template>
  <main class="container">
    <h2>Top Movies</h2>
    <h3>All the movies with rating 9.0 and higher.</h3>

    <div>
      <ul>
        <li v-for="movie in movies" :key="movie._id">
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
  </main>
</template>

<script scoped>
export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {},
  computed: {},
  mounted() {
    fetch("http://localhost:8081/movies")
      .then((res) => res.json())
      .then((data) => {
        this.movies = data.filter((element) => {
          return element.rating >= 9;
        });
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
img {
  border-radius: 5px 5px 0 0;
  width: 300px;
  height: 450px;
}

li {
  margin-right: 6px;
  margin-bottom: 10px;
}

.container {
  /* text-align: center; */
  /* justify-content: center; */
  /* background-color: black; */
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.container h4 {
  text-align: center;
  margin: 0;
}

ul {
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
}
</style>
