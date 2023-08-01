<template>
  <section class="ftco-section">
    <div class="container">
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
            <form action="#" class="login-form">
              <div class="form-outline">
                <input type="username" id="phone" class="form-control form-control-lg" />
                <label class="form-label" for="phone">Username</label>
              </div>
              <div class="form-outline mt-2">
                <input type="password" id="password" class="form-control form-control-lg" />
                <label class="form-label" for="phone">Password</label>
              </div>
              <div class="form-group">
                <button type="submit" class="form-control btn btn-primary rounded submit px-3">
                  Login
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    // if (document.getElementById('mdb-script')) return; // was already loaded
    var scriptTag = document.createElement("script");
    scriptTag.src = "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js";
    scriptTag.id = "mdb-script";
    document.getElementsByTagName('head')[0].appendChild(scriptTag);
  }
};
</script>

<style>
.login-wrap {
  margin-top: 50%;
  margin-bottom: 52%;
  background-color: rgba(255, 255, 255, 0.6) !important;
  border-radius: 20px;
}

.submit {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>