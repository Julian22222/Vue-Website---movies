<template>
  <div>
    <div class="title-container">
      <div>
        <h2>{{ card.title }}</h2>
        <!-- <p>The Movie Card is {{ id }}</p>
    <p>{{ card }}</p> -->
      </div>
      <div></div>
    </div>

    <div class="container">
      <div>
        <img v-bind:src="card.poster" alt="single poster" width="500" />
        <div class="btn">
          <button @click="card.votes++">Like</button>
          <button @click="card.votes--">Dislike</button>
        </div>
      </div>
      <div class="description">
        <p>Rating: {{ card.rating }}</p>
        <p>Director: {{ card.director }}</p>
        <p>Year: {{ card.year }}</p>
        Genres:
        <div class="eachGenre" v-for="genre in card.genres" :key="genre">
          {{ genre }}
        </div>

        <!-- <p>{{ card.genres }}</p> -->
        <p>Duration: {{ card.duration }}</p>
        <p>Duration: {{ showMinutes() }}</p>
        <p>Votes: {{ card.votes }}</p>

        <!-- {{ card.trailer }}
        {{ this.hey }} -->

        <!-- <iframe
          width="560"
          height="315"
          :src="card.trailer"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> -->

        <!-- <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          :src="
            'https://www.youtube.com/embed/' +
            video.videoId +
            '?autoplay=0&origin=http://example.com'
          "
          frameborder="0"
        ></iframe> -->

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SCTzYY95Aw4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br />
        <button @click="addToFavorites">Add to your Favorites</button>

        <div class="review">
          <b> Reviews: </b>
          <hr />
          <p class="revieBox" v-for="review in card.reviews" :key="review._id">
            {{ review.name }} : {{ review.text }}
          </p>
        </div>
        <button v-if="commentBtn" class="addComment" @click="addComment">
          Add a comment
        </button>

        <div class="container-form" v-if="this.commentStatus === true">
          <textarea
            v-model="text"
            class="comment-container"
            ref="commentText"
          ></textarea>
          <button class="post" @click="handlePost">Post</button>
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
  // props:['id']  the same as-> id: this.$route.params.id
  data() {
    return {
      // id: this.$route.params.id,
      card: [],
      commentStatus: false,
      commentBtn: true,
      name: "unauthorised user",
      text: "",
      genresList: "",
      hey: "card.trailer",
    };
  },
  /////////////////////////////
  mounted() {
    // fetch("https://jsonplaceholder.tyicode.com/todos?_limit=3")
    // fetch(`https://movies-ypff.onrender.com/movies/${this.$route.params.id}`)
    fetch(`http://localhost:8082/movies/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.card = data;
      });
  },
  methods: {
    // inside methods always use this. to access the data variables - this.card
    showMinutes() {
      //   return card.duration.hours * 60 + card.duration.minutes;
      return "hello";
      // this.card.duration,
      //   return this.card?.duration.hours;
      //   return duration.hours * 60 + duration.minutes;
    },
    addComment() {
      this.commentStatus = true;
      this.commentBtn = false;
    },
    handlePost() {
      console.log(this.$refs.commentText.value);
      this.commentBtn = true;
      this.commentStatus = false;
      this.card.reviews.push({ name: this.name, text: this.text });
      this.text = "";
      //   this.card.review.name.push("huj");
      //   this.card.review.text.push(this.$refs.commentText.value);
    },
    addToFavorites(e) {
      console.log(e.target.baseURI);
      console.log(e.target);
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

.title-container {
  display: flex;
  justify-content: space-around;
}

img {
  margin-left: 70px;
}

.eachGenre {
  /* display: flex;
  flex-direction: column; */
  display: inline-block;
  margin: 20px 10px 0 5px;
  padding: 6px 18px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;

  /* cursor: pointer; */
}

.description {
  margin-left: 50px;
}

.container-form {
  padding: 5px 10px;
}

.btn {
  margin-left: 270px;
}

.addComment {
  margin-bottom: 50px;
}

.revieBox {
  background-color: rgb(116, 89, 89);
  border-radius: 5px;
  padding: 5px;
}

.post {
  margin-bottom: 100px;
}

.comment-container {
  width: 60%;
  height: 50px;
  margin-right: 10px;
  /* margin-bottom: 100px; */
}

.review {
  margin-top: 80px;
}

img {
  margin-left: 130px;
}
</style>
