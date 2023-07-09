<template>
  <div class="comment_container">
    <ul>
      <li v-for="element in commentList" :key="element.name">
        Name: {{ element.name }}.
        <br />
        Enquiry: {{ element.text }}
      </li>
    </ul>
  </div>
  <button @click="handleEnquiry()">Leave Enquiry</button>

  <form v-if="showContainer" @submit.prevent="handleSubmit">
    <button @click="close" class="closeBtn">x</button>
    <label>Name: </label>
    <input type="text" required v-model="name" placeholder="insert your name" />
    <br />
    <!-- <label> Role: </label>
    <select></select> -->
    <label>Enquiry: </label>
    <textarea
      required
      ref="enquiryText"
      v-model="text"
      placeholder="your enquiry"
    ></textarea>
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      commentList: [
        {
          name: "Emy",
          text: " The more content, the better. Make a blog with regular updates where you can write news regarding upcoming movies.This is a very good tool to begin. All the best with your Movie website.",
        },
      ],
      name: "",
      text: "",
      showContainer: false,
      terms: false,
    };
  },
  methods: {
    handleEnquiry() {
      this.showContainer = true;
    },
    close() {
      this.showContainer = false;
    },
    handleSubmit() {
      // console.log("form submitted");
      this.showContainer = false;
      this.commentList.push({ name: this.name, text: this.text });
      (this.name = ""), (this.text = "");
      this.terms = false;
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

button {
  float: right;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid black;
  /* color: #555; */
}

textarea {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  height: 70px;
  /* border: none; */
  /* border-bottom: 1-x solid black;
  color: #555; */
}

.closeBtn {
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
}

li {
  background-color: rgb(116, 89, 89);
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 5px;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.comment_container {
  margin-top: 10px;
}
</style>
