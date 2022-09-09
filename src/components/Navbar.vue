<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-white">
      <a class="navbar-brand" href="#">
        <img src="../assets/Logo.svg" alt="" />
      </a>

      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQ</a>
        </li>
      </ul>
      <div class="register">
        <ul class="nav justify-content-end">
          <div class="res" v-if="!isAuthenticated">
            <li class="nav-item fw-700px fs-16px">
              <a href="/signup" class="nav-link fs-16 fw-700">SignUp</a>
            </li>
            <li class="nav-ite ms-auto">
              <Login />
            </li>
          </div>
          <div class="dropdown">
            <li class="nav-item dropdown ms-auto" v-if="isAuthenticated">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-user" style="font-size: 48px; color: red"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li><Logout /></li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </div>
  <hr />
</template>

<script>
import Login from "./Login.vue";
import Logout from "./Logout.vue";

export default {
  name: "nav-page",
  props: {},

  components: { Login, Logout },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>
<style scoped>
ul {
  margin: 0 auto;
}

.res {
  display: flex;
}

a {
  color: #000000;
}

a:hover {
  color: #000000;
}

.login {
  color: #000000;
  box-sizing: border-box;
  padding: 8px 24px;
  gap: 10px;
  /* width: 99px; */
  height: 40px;
  border: 1px solid #e3e7ed;
  background: none;
}

.login:hover {
  border: 2px dotted #6237de;
}
</style>
