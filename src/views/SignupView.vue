<template>
  <div class="container-fluid">
    <div class="row image">
      <div class="col-6 p-0">
        <img src="../assets/Banner.svg" alt="" />
      </div>

      <div class="col-6 pt-5">
        <h1 class="heading fs-32 fw-700">Sign UP</h1>

        <div class="row mt-5 mb-5">
          <div class="col-6">
            <div class="social">
              <img src="../assets/Google.svg" alt="" />
              <div class="font fs-16 fw-700">Sign Up With Google</div>
            </div>
          </div>
          <div class="col-6">
            <div class="social">
              <img src="../assets/path18.svg" alt="" />
              <div class="font fs-16 fw-700">Sign Up With LinkedIn</div>
            </div>
          </div>
        </div>

        <div class="Or mt-5 mb-5">
          <h2 class="or-color">OR</h2>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="form-floating mb-3">
              <small
                class="text-danger fs-12 fw-400"
                v-if="(submitted || signup .get('firstname')?.touched)  && signup.get('firstname')?.errors?.['required']"
                >First Name</small
              >
              <input
                v-model="Firstname"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">First Name</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating mb-3">
              <input
                v-model="Lastname"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Last Name</label>
            </div>
          </div>
        </div>

        <div class="form-floating mb-3">
          <input
            v-model="Email"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email</label>
        </div>

        <div class="form-floating mb-3">
          <input
            v-model="Password"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input
            v-model="Confirmpassword"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Confirm Password</label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            By accepting your agree to Yantraka.AI's
            <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
          </label>
        </div>

        <div class="d-grid gap-2">
          <button class="button mt-5" type="submit" @click="signup()">
            Sign Up
          </button>
        </div>

        <div class="row mt-5">
          <div class="col-12">
            <div class="text-center fs-16 fw-400">
              Already a user? &nbsp; <a href="#">SignIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "signup-Page",
  data() {
    return {
      Firstname: "",
      Lastname: "",
      Email: "",
      Password: "",
      Confirmpassword: "",
    };
  },
  methods: {
    signup() {
      const adduser = {
        firstname: this.Firstname,
        lastname: this.Lastname,
        email: this.Email,
        password: this.Password,
        confirmpassword: this.Confirmpassword,
      };
      axios
        .post(
          "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/signup",
          adduser
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log("Error : ", e);
        });

      console.log(adduser);
    },
  },
};
</script>
<style scopped>
.image {
  height: 100vh;
}

.social {
  display: flex;
  padding: 16px 32px 16px 24px;
  border: 1px solid #e3e7ed;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px 16px 24px;
  gap: 8px;
}
.social:hover {
  border: 1px dotted #6237de;
}

.terms {
  text-decoration: none;
  color: #000;
}

.form-control:hover {
  border: 1px solid #6b38fd;
}

input:focus {
  outline: none;
}

.or-color {
  color: #a7afba;
  font-weight: 400;
  font-size: 14px;
}

a:link,
a:visited {
  text-decoration: none;
  color: #6b38fd;
}

h2 {
  display: flex;
  flex-direction: row;
}

h2:before,
h2:after {
  content: "";
  flex: 1 1;
  border-bottom: 0.5px solid #a7afba;
  margin: auto;
}
.button,
.button:visited {
  padding: 16px 24px;
  background-color: #6237de;
  border-radius: 0;
  color: #fff;
  border: none;
}

.button:hover,
.button:focus {
  border: none;
  background-color: #6237de;
  color: #fff;
}
</style>
