<template>
  <section class="vh-100 gradient-custom login-background">
    <div class="container py-5 h-100">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="login-wrap p-4 p-md-5">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-user-o"></span>
            </div>
            <h3 class="text-center mb-4">Sign In</h3>
            <!-- <form @submit.prevent="handleLogin" class="login-form"> -->
            <div class="login-form">
              <div class="form-outline">
                <input type="username" v-model="username" class="form-control form-control-lg" />
                <label class="form-label" for="phone">Username</label>
              </div>
              <div class="form-outline mt-2">
                <input type="password" v-model="password" class="form-control form-control-lg" />
                <label class="form-label" for="phone">Password</label>
              </div>
              <div>
                <p v-show="message" style="color: red">{{ this.message }}</p>
              </div>
              <div class="form-group">
                <button @click="handleLogin" class="form-control btn btn-primary rounded submit px-3">
                  Login
                </button>
                <button @click="handleSignUp" class="form-control btn btn-primary rounded submit px-3">
                  Sign up
                </button>
              </div>
              <div class="form-group d-md-flex">
                <div class="w-50">
                  <label class="checkbox-wrap checkbox-primary">Remember Me
                    <input type="checkbox" checked />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="w-50 text-md-right float-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      message: '',
    }
  },
  mounted() {
    if (document.getElementById('mdb-script')) return; // was already loaded
    var scriptTag = document.createElement("script");
    scriptTag.src = "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js";
    scriptTag.id = "mdb-script";
    document.getElementsByTagName('head')[0].appendChild(scriptTag);
  },
  methods: {

    async handleLogin() {
      try {
        const response = await axios.post("/auth/login", {
          username: this.username,
          password: this.password
        });
        this.saveAuthorization(response)
        this.redirectToHomePage()
      } catch(error) {
        this.handleError(error)
      }
    },
    async handleSignUp() {
      try {
        const response = await axios.post("/auth/sign-up", {
          username: this.username,
          password: this.password,
          fullName: "Default name"
        });
        this.saveAuthorization(response)
        this.redirectToHomePage()
      } catch(error) {
        this.handleError(error)
      }
    },

    redirectToHomePage() {
      this.$router.push('/')
      this.$router.go(0)
    },
    saveAuthorization(authorization) {
      localStorage.setItem('authorization', JSON.stringify(authorization))
    },
    handleError(error) {
      this.message = error.response.data.message
    }
  }
};
</script>

<style>
.login-wrap {
  margin-top: 40%;
  margin-bottom: 40%;
  background-color: rgba(255, 255, 255, 0.6) !important;
  border-radius: 20px;
}

.submit {
  margin-top: 20px;
  margin-bottom: 20px;
}
.login-background {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  ) !important;
}
</style>