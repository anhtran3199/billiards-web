<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7 custom-wrap">
          <div
            class="card shadow-2-strong card-registration"
            style="border-radius: 15px"
          >
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="username"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="username">Username</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="fullName"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="fullName">Full name</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div class="form-outline w-100">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="aliasName"
                      />
                      <label for="aliasName" class="form-label"
                        >Alias name</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="password"
                        id="password"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="password">Password</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <input
                        type="email"
                        id="email"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="email">Email</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <input
                        type="tel"
                        id="phone"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="phone">Phone Number</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <select class="select form-control-lg">
                      <option value="" disabled>Choose user role</option>
                      <option value="ROLE_USER">User</option>
                      <option value="ROLE_ADMIN">Admin</option>
                    </select>
                    <label class="form-label select-label ml-2"
                      >User role</label
                    >
                  </div>
                </div>

                <div class="mt-4 pt-2">
                  <input
                    class="btn btn-primary btn-lg"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
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
.gradient-custom {
  background-image: linear-gradient(rgb(154, 218, 238), rgb(43, 70, 221));
  /* fallback for old browsers */
  background: rgb(154, 218, 238);

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to bottom right,
    rgb(154, 218, 238),
    rgb(43, 70, 221)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to bottom right,
    rgb(154, 218, 238),
    rgb(43, 70, 221)
  );
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 13px;
}
/* .card {
  background-color: rgba(255, 255, 255, 0.6) !important;
  border-radius: 5%;
} */
/* .form-outline {
  border: 1px solid black;
  border-radius: 10px;
} */
</style>