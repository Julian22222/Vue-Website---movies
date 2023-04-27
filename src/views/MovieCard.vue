<template>
  <div>
    <h2>{{ card.title }}</h2>
    <!-- <p>The Movie Card is {{ id }}</p>
    <p>{{ card }}</p> -->

    <div class="container">
      <div>
        <img v-bind:src="card.poster" alt="single poster" width="500" />
        <div class="btn">
          <button>Like</button>
          <button>Dislike</button>
        </div>
      </div>
      <div class="description">
        <p>Rating: {{ card.rating }}</p>
        <p>Director: {{ card.director }}</p>
        <p>Year: {{ card.year }}</p>
        <p>Genres: {{ card.genres }}</p>
        <p>Duration: {{ card.duration }}</p>
        <!-- <p>Duration: {{ time(this.card.duration) }}</p> -->
        <p>Votes: {{ card.votes }}</p>
        <!-- {{ card.trailer }} -->

        <!-- <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SCTzYY95Aw4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> -->

        <div class="review">
          Reviews:
          <hr />
          <p class="revieBox" v-for="review in card.reviews">
            {{ review.name }} : {{ review.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueElement } from "vue";

export default {
  //   name: "App",
  props: ["id"],
  ////////////////////
  // props:['id']  the same as--> id: this.$route.params.id
  data() {
    return {
      // id: this.$route.params.id,
      card: [{ title: "Hello" }],
    };
  },
  /////////////////////////////
  mounted() {
    // fetch("https://jsonplaceholder.tyicode.com/todos?_limit=3")
    fetch(`http://localhost:8081/movies/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.card = data;
      });
  },
  methods: {
    time(duration) {
      return duration.hours * 60 + duration.minutes;
      console.log(duration);
    },
  },
  //   components: { MovieList },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  /* text-align: end; */
}

img {
  margin-left: 70px;
}

.description {
  margin-left: 50px;
}

.btn {
  margin-left: 270px;
}

.revieBox {
  background-color: darkslateblue;
  border-radius: 5px;
  padding: 5px;
}

.review {
  margin-top: 80px;
}

h2 {
  margin-left: 8%;
}
</style>
