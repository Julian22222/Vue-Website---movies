<template>
  <div class="backdrop">
    <div class="modal">
      <div class="btn-container">
        <button @click="hadleBtn()">Crime</button>
        <button @click="hadleBtn()">Drama</button>
        <button @click="hadleBtn()">Romance</button>
        <button @click="hadleBtn()">Biography</button>
        <button @click="hadleBtn()">Mystery</button>
        <button @click="hadleBtn()">Adventure</button>
        <button @click="hadleBtn()">Action</button>
        <button @click="hadleBtn()">Comedy</button>
        <button @click="hadleBtn()">Fantasy</button>
      </div>
    </div>
  </div>

  <hr style="height: 25px" />

  <button class="closeBtn" @click="handleClose">x</button>
</template>

<script>
import App from "@/App.vue";
export default {
  components: { App },
  // props: ["login"],
  data() {
    return {};
  },
  methods: {
    hadleBtn() {
      this.$emit("check");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.btn-container {
  display: flex;
  justify-content: space-around;
  color: black;
}

.eachBtn {
  border: black;
  background: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  padding: 8px 15px;
}

.name {
  margin-bottom: 5px;
}

.active {
  background-color: grey;

  /* width: 100px; */
}

.login {
  margin-left: 50px;
  margin-top: 5px;
}

.register {
  margin-right: 60px;
  margin-top: 5px;
}

.btn {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.closeBtn {
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.text-input {
  text-align: center;
  color: black;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
