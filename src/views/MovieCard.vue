<template>
  <div>
    <!-- <p>Loged In User: {{ activeUserId }}</p>
    {{ activeUser }} -->

    <div class="title-container">
      <div>
        <h2>{{ card.title }}</h2>
        <hr />
        <!-- <p>The Movie Card is {{ id }}</p>
    <p>{{ card }}</p> -->
      </div>
      <div></div>
    </div>

    <div class="container">
      <div>
        <img v-bind:src="card.poster" alt="single poster" width="500" />
        <div class="btn-container">
          <div style="display: inline-block">
            <button class="btn" @click="handleLikeVotes">
              Like
              <img width="15" src="../assets/svg-icons/like.png" />
            </button>
          </div>

          <button class="btn" @click="handleDislikeVotes">
            Dislike
            <img width="15" src="../assets/svg-icons/dislike.png" />
          </button>
        </div>
      </div>
      <div class="description">
        <div style="display: inline-block">
          <img width="25" src="../assets/svg-icons/star.png" />
          <p style="display: inline-block" class="img-svg">
            Rating: {{ card.rating }}
          </p>
        </div>
        <br />

        <div style="display: inline-block">
          <img width="25" src="../assets/svg-icons/videocamera.png" />
          <p style="display: inline-block" class="img-svg">
            Director: {{ card.director }}
          </p>
        </div>
        <br />

        <div style="display: inline-block">
          <img width="25" src="../assets/svg-icons/info.png" />

          <p style="display: inline-block" class="img-svg">
            Year: {{ card.year }}
          </p>
        </div>
        <br />

        <div style="display: inline-block">
          <img width="25" src="../assets/svg-icons/genre.png" />
          <div style="display: inline-block" class="img-svg">
            Genres:
            <div class="eachGenre" v-for="genre in card.genres" :key="genre">
              {{ genre }}
            </div>
          </div>
        </div>

        <br />
        <div style="display: inline-block">
          <img width="25" src="../assets/svg-icons/time-left.png" />

          <!-- If the information is being loaded in asynchronous you may need to check that the card.duration object exist first -->
          <p
            v-if="card.duration"
            style="display: inline-block"
            class="votes img-svg"
          >
            Duration: {{ card.duration.hours }} hours
            {{ card.duration.minutes }} minutes
          </p>
        </div>
        <br />

        <div>
          <img width="25" src="../assets/svg-icons/messenger.png" />
          <p class="votes img-svg" style="display: inline-block">
            Votes: {{ card.votes }}
          </p>
        </div>

        <iframe
          width="560"
          height="315"
          :src="card.trailer"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <br />
        <button class="fav" @click="addToFavorites">
          Add to your Favorites
        </button>

        <div v-if="textFav !== ''" class="error">{{ textFav }}</div>

        <div class="review">
          <b> Reviews: </b>
          <hr />

          <p class="revieBox" v-for="review in card.reviews" :key="review._id">
            {{ review.name }} : {{ review.text }}

            <button
              v-if="review.name === this.activeUser.value"
              @click="deleteComment(review._id)"
            >
              delete
            </button>
          </p>
        </div>

        <div v-if="card.reviews">
          <div v-if="card.reviews.length < 1">
            <p class="noComments">No comments! Add your comment.</p>
          </div>
        </div>

        <button v-if="commentBtn" class="addComment" @click="addComment">
          Add a comment
        </button>

        <div class="container-form" v-if="this.commentStatus === true">
          <div v-if="this.activeUser.value !== ''">
            <textarea
              v-model="text"
              class="comment-container"
              ref="commentText"
            ></textarea>
            <button class="post" @click="handlePost">Post</button>
          </div>
          <div v-if="this.activeUser.value === ''">
            <p class="error">Please Log In to leave Comments!!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VueElement } from "vue";

export default {
  inject: ["activeUserId", "activeUser"],

  //   name: "App",
  props: ["id"],
  ////////////////////
  // props:['id']  the same as-> id: this.$route.params.id
  data() {
    return {
      // id: this.$route.params.id,
      card: [],
      SingleUser: [],
      favMovies: [],
      commentStatus: false,
      commentBtn: true,
      // name: "unauthorised user",
      text: "",
      textFav: "",
      // genresList: "",
    };
  },
  /////////////////////////////
  mounted() {
    // fetch("https://jsonplaceholder.tyicode.com/todos?_limit=3")
    fetch(`https://movies-ypff.onrender.com/movies/${this.$route.params.id}`)
      // fetch(`http://localhost:3007/movies/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.card = data;
      });

    //////////////////////////single user request
    // fetch(`http://localhost:3007/users/${this.activeUserId.value}`)
    fetch(`https://movies-ypff.onrender.com/users/${this.activeUserId.value}`)
      .then((res) => res.json())
      .then((data) => {
        this.SingleUser = data;
      });
  },
  methods: {
    // inside methods always use this. to access the data variables - this.card
    showMinutes() {
      //   return card.duration.hours * 60 + card.duration.minutes;
      // this.card.duration,
      //   return this.card?.duration.hours;
      //   return duration.hours * 60 + duration.minutes;
    },
    addComment() {
      this.commentStatus = true;
      this.commentBtn = false;
    },
    handleLikeVotes() {
      const updatetedVotes = this.card.votes + 1;
      this.card.votes++;
      // console.log(updatetedVotes);
      // console.log(this.card);

      // console.log(this.$route.params.id);

      axios
        .patch(
          `https://movies-ypff.onrender.com/movies/${this.$route.params.id}`,
          //
          // `http://localhost:3007/movies/${this.$route.params.id}`,
          {
            votes: updatetedVotes,
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDislikeVotes() {
      const updatetedVotes = this.card.votes - 1;
      this.card.votes--;
      // console.log(updatetedVotes);
      // console.log(this.card);

      // console.log(this.$route.params.id);

      axios
        .patch(
          `https://movies-ypff.onrender.com/movies/${this.$route.params.id}`,
          //
          // `http://localhost:3007/movies/${this.$route.params.id}`,
          {
            votes: updatetedVotes,
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handlePost() {
      console.log(this.$refs.commentText.value);
      this.commentBtn = true;
      this.commentStatus = false;
      this.card.reviews.push({ name: this.activeUser.value, text: this.text });
      this.text = "";
      console.log(typeof this.card.duration);
      //   this.card.review.name.push("huj");
      //   this.card.review.text.push(this.$refs.commentText.value);

      axios
        .patch(
          `https://movies-ypff.onrender.com/movies/${this.$route.params.id}`,
          //
          // `http://localhost:3007/movies/${this.$route.params.id}`,
          {
            reviews: this.card.reviews,
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToFavorites(e) {
      // console.log(this.activeUserId.value);

      // console.log(this.activeUser);

      this.textFav =
        this.activeUserId.value === ""
          ? "Please LogIn to add your favorite movies to the list"
          : "Movie has been added to the Favorite Movies List!";
      // console.log(e.target.baseURI);
      // console.log(e.target);

      const newMovieAdding = this.$route.params.id;

      console.log(this.SingleUser);
      console.log(JSON.parse(JSON.stringify(this.SingleUser)).favorites);

      this.SingleUser.favorites.push(newMovieAdding);
      /////////////////////////////////////////
      // JSON.parse(JSON.stringify(item))  -is used to convert Proxy object to array

      console.log("This Movie ID->", newMovieAdding);
      console.log(typeof newMovieAdding);

      console.log(
        "Array of favorites of this user",
        JSON.parse(JSON.stringify(this.SingleUser)).favorites
      );

      axios
        .patch(
          `https://movies-ypff.onrender.com/users/${this.activeUserId.value}`,
          //
          // `http://localhost:3007/users/${this.activeUserId.value}`,
          {
            // favorites: updatetedFavorites,
            favorites: this.SingleUser.favorites,
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteComment(id) {
      console.log(id);

      console.log(JSON.parse(JSON.stringify(this.card.reviews)));

      // console.log(this.card.reviews);

      const reviewsArr = JSON.parse(JSON.stringify(this.card.reviews));

      console.log(reviewsArr);

      this.card.reviews = reviewsArr.filter((comment) => {
        return comment._id !== id;
      });

      axios
        .patch(
          `https://movies-ypff.onrender.com/movies/${this.$route.params.id}`,
          //
          // `http://localhost:3007/movies/${this.$route.params.id}`,
          {
            reviews: this.card.reviews,
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  //   components: { MovieList },
};
</script>

<style scoped>
/* body {
  min-height: 100vh;
} */

.container {
  display: flex;
  justify-content: space-between;
  /* text-align: end; */
}

.title-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  /* border-bottom: 5px solid white;
  border-block-end-width: 50px; */
}

img {
  margin-left: 70px;
}

.eachGenre {
  /* display: flex;
  flex-direction: column; */
  display: inline-block;
  margin: 5px 2px 5px 0;
  padding: 6px 18px;
  background: #eee;
  border-radius: 30px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;

  /* cursor: pointer; */
}

.fav {
  margin-top: 10px;
}

.description {
  /* margin-left: 50px; */
  margin-right: 200px;
}

.votes {
  margin-bottom: 20px;
}

.container-form {
  padding: 5px 10px;
}

.btn-container {
  margin-top: 10px;
  margin-left: 180px;
  margin-bottom: 100px;
}

.btn {
  padding: 5px 5px;
  margin-right: 5px;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

.addComment {
  margin-bottom: 50px;
  margin-top: 10px;
}

.revieBox {
  background-color: rgba(116, 89, 89, 0.5);
  /* background-color: rgb(116, 89, 89); */
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
}

.noComments {
  margin-top: 5px;
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

.img-svg {
  margin-left: 10px;
}
</style>
