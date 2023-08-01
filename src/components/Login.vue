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
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-left"
                  placeholder="Username"
                  style="margin-bottom: 10px; border-radius: 10px;"
                  required
                />
              </div>
              <div class="form-group d-flex">
                <input
                  type="password"
                  class="form-control rounded-left"
                  placeholder="Password"
                  style="border-radius: 10px;"
                  required
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="form-control btn btn-primary rounded submit px-3"
                >
                  Login
                </button>
              </div>
              <div class="form-group d-md-flex">
                <div class="w-50">
                  <label class="checkbox-wrap checkbox-primary"
                    >Remember Me
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