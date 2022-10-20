<template>
  <div class="container">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-white fixed-top"
      style="padding: 1.15rem 60px"
    >
      <a class="navbar-brand" href="#">
        <img src="../assets/Logo.svg" alt="" />
      </a>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="/#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#pricing">Pricing</a>
        </li>
        <li class="nav-item">
          <router-link :to="`/prediction`" class="nav-link"
            >Predictions</router-link
          >
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
          <div class="dropstart">
            <li class="nav-item dropdown ms-auto" v-if="isAuthenticated">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  width="28"
                  alt="Avatar"
                  src="../assets/person-circle.svg"
                />
              </a>
              <ul class="dropdown-menu">
                <li class="d-flex justify-content-center">
                  <img
                    width="19"
                    heigh="20"
                    alt="setting"
                    src="../assets/setting-img.svg"
                  />
                  <router-link :to="`/setting`" class="nav-link"
                    >Settings</router-link
                  >
                </li>
                <hr class="dropdown-divider" />
                <li class="d-flex justify-content-center">
                  <img
                    width="19"
                    heigh="20"
                    alt="setting"
                    src="../assets/Logout-img.svg"
                  />
                  <Logout />
                </li>
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
import createAuth0Client from "@auth0/auth0-spa-js";

export default {
  name: "nav-page",
  props: {},

  components: { Login, Logout },
  data() {
    return {
      // const token = useAuth0()
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },

  created() {
    console.log(this.getid());
  },

  methods: {
    async getid() {
      const auth0Client = await createAuth0Client({
        domain: "dev-fwx278xt.us.auth0.com",
        client_id: "cR6oOiZxiNjyw5SZ8blf8F9wHtrOyLj8",
      });
      const claimsInfo = await auth0Client.getIdTokenClaims();
      localStorage.setItem("id_token", claimsInfo.__raw);
      console.log(claimsInfo.__raw);
    },
  },

  // methods: {

  //   async getAccessTokenSilently() {
  //     localStorage.setItem("token", await this.$auth.getAccessTokenSilently());
  //     console.log("token")

  //   },
  //  async mounted(){
  //     console.log(await this.getAccessTokenSilently());
  //     console.log(await this.getIdToken());
  //   },
  //    async getIdToken() {
  //     localStorage.setItem("id_token",await this.$auth.getIdTokenClaims());
  //     console.log("id_token");
  //     console.log(localStorage.getItem("id_token"));
  //    }

  // }
};
</script>
<style scoped>
.container-fluid {
  width: 60% !important;
  padding: 2rem !important;
}
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

.dropstart .dropdown-toggle::before {
  border-right: 0px;
  border-bottom: 0px;
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  border-bottom: 1px solid #e3e7ed;
}
</style>
