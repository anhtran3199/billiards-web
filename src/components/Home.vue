<template>
  <section class="vh-100 gradient-custom home-background">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-7">
          <div class="login-wrap p-12 p-md-5">
            Hello
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  async created() {
    const response = await axios.get("/user/list")
    console.log();
    return response
  }
};
</script>

<style>
.home-background {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  ) !important;
}
</style>