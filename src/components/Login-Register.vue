<template>
  <div class="backdrop">
    <div class="modal">
      <div class="btn-container">
        <button class="eachBtn login active" ref="loginRef" @click="hadleLogin">
          Login
        </button>
        <hr style="height: 25px" />
        <button
          class="eachBtn register"
          ref="registerRef"
          @click="hadleRegister"
        >
          Register
        </button>
        <button class="closeBtn" @click="handleClose">x</button>
      </div>
      <br />
      <hr style="margin-top: -20px" />
      <br />
      <!-- /////////////////// V-IF-->
      <div v-if="login" class="text-input">
        <div class="name">
          <label>Email: </label>
          <input v-model="email" type="email" placeholder="insert your email" />
        </div>
        <!-- /////////////////// -->

        <label>Password: </label>
        <input
          v-model="password"
          type="password"
          placeholder="insert your password"
        />

        <br />
        <br />
        <button class="btn" @click="handleConfirm()">Confirm</button>
        <br />
      </div>
      <!-- ////////////////////// V-IF-->
      <div v-if="!login" class="text-input">
        <div class="name">
          <label>Name: </label>
          <input v-model="name" type="text" placeholder="insert your name" />
        </div>
        <!-- /////////////////// -->
        <div class="name">
          <label>Email: </label>
          <input v-model="email" type="email" placeholder="insert your email" />
        </div>
        <!-- /////////////////// -->

        <label>Password: </label>
        <input
          v-model="password"
          type="password"
          placeholder="insert your password"
        />
        <!-- will show an error msg if the password is short -->
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <br />
        <br />
        <button class="btn" @click="handleConfirm()">Confirm</button>
        <br />
      </div>
    </div>
  </div>
  <br />
  <hr />
  {{ login }}
</template>

<script>
export default {
  // props: ["login"],
  data() {
    return {
      login: true,
      name: "",
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    handleConfirm() {
      // this.$emit("close");
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 chars long";

      if (!this.passwordError) {
        console.log("SENT Data");
        // if there is no errors we send data to the server
      }
    },
    hadleLogin() {
      // this.$refs.loginRef.classList.add("active") - add the class -active to the ref="loginRef"
      this.$refs.loginRef.classList.add("active");
      this.$refs.registerRef.classList.remove("active");
      this.login = true;
    },
    hadleRegister() {
      this.$refs.registerRef.classList.add("active");
      this.$refs.loginRef.classList.remove("active");
      this.login = false;
    },
    handleClose() {
      this.$emit("closeBtn");
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
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
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
