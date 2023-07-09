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
      <!-- /////////////////// V-IF - LOGIN-->
      <div v-if="login" class="text-input">
        <div class="name">
          <label>Email: </label>
          <input
            v-model="LoginUser.email"
            type="email"
            placeholder="insert your email"
          />
        </div>
        <!-- /////////////////// -->

        <label>Password: </label>
        <input
          v-model="LoginUser.password"
          type="password"
          placeholder="insert your password"
        />
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <br />
        <br />
        <button class="btn" @click="handleLoginUser()">Login</button>
        <br />
      </div>
      <!-- ////////////////////// V-IF- REGISTER-->
      <div v-if="!login" class="text-input">
        <div class="name">
          <label>Name: </label>
          <input
            v-model="User.name"
            type="text"
            placeholder="insert your name"
          />
        </div>
        <!-- /////////////////// -->
        <div class="name">
          <label>Email: </label>
          <input
            v-model="User.email"
            type="email"
            placeholder="insert your email"
          />
        </div>
        <!-- /////////////////// -->

        <label>Password: </label>
        <input
          v-model="User.password"
          type="password"
          placeholder="insert your password"
        />
        <!-- //////////////////////// -->
        <br />
        <label>Confirm Password: </label>
        <input
          v-model="confPass"
          type="password"
          placeholder="insert your password"
        />
        <!-- will show an error msg if the password is short -->
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <div v-if="msgWhenRegister" class="error">{{ msgWhenRegister }}</div>
        <div v-if="userError" class="error">{{ userError }}</div>
        <br />
        <br />
        <button class="btn" @click="handleConfirm()">Confirm</button>
        <br />
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import axios from "axios";
import { toRaw } from "vue";

export default {
  // props: ["login"],
  data() {
    return {
      login: true,
      // LoginUser - all the inputs from LogIn Form
      LoginUser: { email: "", password: "" },
      confPass: "",
      passwordError: "",
      userError: "",
      // User - all the inputs from Registration Form
      User: { name: "", email: "", password: "" },
      // allUSersData - data that you receive from database of all users
      allUsersData: null,
      // showUserName -name that shows when User Loged In
      showUserName: "Unauthorised_User ",
      showUserNameID: "",
      msgWhenRegister: "",
    };
  },
  methods: {
    handleConfirm() {
      /////////////////////////////////////////////////////////if the user name exist -> don't allow to register
      fetch("https://movies-ypff.onrender.com/users")
        // fetch(`http://localhost:3007/users`)
        .then((res) => res.json())
        .then((data) => {
          this.allUsersData = data;
        });

      // convert Proxy array to array
      console.log(JSON.parse(JSON.stringify(this.allUsersData)));

      const parsedAllUsersData = JSON.parse(JSON.stringify(this.allUsersData));

      const findExistingUser = parsedAllUsersData.find((user) => {
        return (
          user.name === this.User.name
          // && user.email === this.User.email
        );
      });

      console.log(findExistingUser);

      // const getNamesFromArr = parsedAllUsersData.map((element) => {
      //   return element.name;
      // });

      // console.log(getNamesFromArr);

      // const getEachNameFromArr = getNamesFromArr.forEach((el) => {
      //   return el;
      // });

      // console.log(getEachNameFromArr);

      // const findExistUSer = parsedAllUsersData.includes(getEachNameFromArr);

      // console.log(findExistUSer);

      this.userError =
        findExistingUser === undefined
          ? ""
          : "This User already exist, use another name";

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////

      // this.$emit("close");
      this.passwordError =
        this.User.password.length > 4
          ? ""
          : "Password must be at least 5 chars long";

      this.passwordError =
        this.confPass === this.User.password ? "" : "Passwords do not match!";

      if (!this.passwordError && !this.userError) {
        // if there is no errors we send data to the server
        this.msgWhenRegister = "You have successfully Registered!!!";

        console.log("SENT Data");

        let newUser = {
          name: this.User.name,
          email: this.User.email,
          password: this.User.password,
        };

        // console.log(newUser);
        // (we post -newUser to the server -> http://localhost:3007/users)
        ////////////////
        axios
          .post("https://movies-ypff.onrender.com/users", newUser)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        this.User.name = "";
        this.User.email = "";
        this.User.password = "";
        this.confPass = "";
      }
    },
    handleLoginUser() {
      axios
        .get("https://movies-ypff.onrender.com/users")
        .then((res) => {
          // console.log(res.request.response);
          // console.log(res.data);
          // console.log(typeof res.data);
          // this.allUsersData = res.request.response;
          this.allUsersData = res.data;
          // console.log(toRaw(this.allUsersData));

          // toRaw --> use to get rid from Proxy object
          const findMyUser = toRaw(this.allUsersData).find((user) => {
            return (
              user.email === this.LoginUser.email &&
              user.password === this.LoginUser.password
            );
          });

          // console.log(findMyUser);

          if (findMyUser) {
            this.showUserName = findMyUser.name;
            this.showUserNameID = findMyUser._id;

            // console.log(this.showUserName);
            // this.$emit("closeBtn", this.showUserName) - passing this.showUserName to the App.vue closeBtn method
            this.$emit("closeBtn", this.showUserName, this.showUserNameID);
          }
          ////
          if (!findMyUser) {
            this.passwordError = "Email or Password is incorrect!";

            //     this.passwordError =
            // this.User.password.length > 4
            //   ? ""
            //   : "Password must be at least 5 chars long";
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // console.log(typeof this.allUsersData);
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
