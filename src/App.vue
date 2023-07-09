<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- all content before and after RoterView -will show on every single page -->
  <div class="nav-container">
    <div class="links">
      <h1 class="header">Best <span>Vue</span>Movies.</h1>

      <img
        src="https://cre.ab.ca/wp-content/uploads/2019/05/pattern-title-background-1920x150.svg"
        alt="Movie baner"
        class="banner-img"
      />

      <div class="loginMMM" v-if="!showUserName">
        <button @click="hadleLogin()">
          <img width="25" src="../src/assets/svg-icons/user.png" />
          Login / Registration
        </button>
      </div>

      <div v-if="showUserName">
        <p>Welcome back {{ showUserName }}</p>
      </div>

      <div v-if="login">
        <LoginRegister @close="hadleLogin()" @closeBtn="handleCloseBtn" />
      </div>

      <div v-if="showUserName" class="logout">
        <button @click="hadleLogot()">Logout</button>
      </div>

      <div id="nav">
        <router-link to="/">Home</router-link>
        <!--will link the same component
           <router-link :to="{ name:'home'}">Home</router-link> -->
        <router-link to="/top">Top movies</router-link>
        <router-link to="/favorites">Favorite movies</router-link>
        <!-- to="{ name: 'enquiries' }" -another way to link components -->
        <router-link :to="{ name: 'enquiries' }">Enquiries</router-link>
      </div>
    </div>
    <!-- <br /> -->

    <hr />
    <hr />
  </div>
  <!-- RouterView - here our router components will be dinamicly injected, depending on the rout we visit
    will render different components on the page -->
  <main>
    <RouterView />
  </main>
</template>

<script>
import LoginRegister from "@/components/Login-Register.vue";
import { computed } from "vue";

export default {
  data() {
    return {
      login: false,
      userName: "",
      showUserName: "",
      showUserId: "",
    };
  },
  // provide is similar to React context in Vue -this data will be available in any component
  provide() {
    return {
      activeUser: computed(() => this.showUserName),
      activeUserId: computed(() => this.showUserId),
      // myName: "Santa",
    };
  },
  methods: {
    hadleLogin() {
      this.login = !this.login;
    },

    hadleLogot() {
      this.showUserName = "";
    },

    userLoginDetails(user) {
      this.userName = user;
    },
    handleCloseBtn(userDetails, userId) {
      // reverses the variable - if it is false -it will turn true, and other way round
      this.login = !this.login;
      this.showUserName = userDetails;
      this.showUserId = userId;
      // console.log(this.showUserName);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
  /* font-family: "Fira Sans", sans-serif; */
}

body {
  background-color: #33323a;
  /* background-color: #abced8; */
  color: beige;
}

.banner-img {
  display: block;
  width: 100%;
  /* put picture on backgroun position */
  object-fit: cover;
  position: relative;
  z-index: 0;
}

#nav {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: white;
  /* text-decoration:none - remove underline from nav words; */
  text-decoration: none;
  padding: 10px;
}

.loginMMM button {
  border: none;
  background: none;
  color: beige;
  font-size: 16px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  margin-right: 50px;
  /* margin-top: -30px; */
  cursor: pointer;
}

/* .nav-container {
  display: flex;
  justify-content: flex-end;
} */

.login {
  margin-top: -40px;
  margin-right: 50px;
}

.logout button {
  border: none;
  background: none;
  color: beige;
  font-size: 16px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  margin-right: 50px;
  /* margin-top: -50px; */
  cursor: pointer;
}

.header {
  background-color: #2c3d4e;
  padding: 10px 16px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

h1 span {
  color: #42b883;
}

/* active nav bar color */
#nav a.router-link-exact-active {
  color: aquamarine;
}
</style>
