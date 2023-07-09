<template>
  <div class="card">
    <ul>
      <Movie v-bind:movies="movies" v-bind:resultSearch="resultSearch" />
    </ul>
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";
export default {
  // props: ["movies"] - unpacking props from Home.vue to use them in this component
  props: ["movies", "resultSearch"],
  components: {
    Movie,
  },
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
