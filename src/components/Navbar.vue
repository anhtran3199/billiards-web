<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <div class="container">
      <a href="/" class="navbar-brand">Home</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="/profile" class="nav-link" v-if="loggedIn">{{ username }}</a>
            <a href="/login" class="nav-link" v-else>Login</a>
            <!-- <a href="/login" class="nav-link">Login</a> -->
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="nav-link" v-if="loggedIn" @click="logout">Logout</a>
            <a href="/register" class="nav-link" v-else>Register</a>
            <!-- <a href="/register" class="nav-link">Register</a> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      authorization: JSON.parse(localStorage.getItem('authorization')),
      username: this.authorization === null ? '' : JSON.parse(localStorage.getItem('authorization')).data.username
    }
  },
  methods: {
    loggedIn() {
      console.log(this.username);
      return this.authorization === null ? false : true
    },
    logout() {
      localStorage.removeItem('authorization')
      this.$router.push('/login')
    }
  }
};
</script>

<style>
.navbar-collapse {
    display: flex;
    justify-content: flex-end;
}
</style>