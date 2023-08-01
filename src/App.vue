<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
#app {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
