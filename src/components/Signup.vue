<template>
  <div class="conatiner-fluid">
    <div class="row">
      <div class="col-6">
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
          <p class="or-color">OR</p>
        </div>

        <!-- Start -->
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
          <div class="form-row">
            <div class="row">
              <div class="form-group col-6">
                <label>First Name</label>
                <Field name="firstName" type="text" class="form-control" v-model="Firstname"
                  :class="{ 'is-invalid': errors.firstName }" />
                <div class="invalid-feedback">{{ errors.firstName }}</div>
              </div>
              <div class="form-group col-6">
                <label>Last Name</label>
                <Field name="lastName" type="text" class="form-control" v-model="Lastname"
                  :class="{ 'is-invalid': errors.lastName }" />
                <div class="invalid-feedback">{{ errors.lastName }}</div>
              </div>
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="form-group col">
              <label>Email</label>
              <Field name="email" type="text" class="form-control" v-model="Email"
                :class="{ 'is-invalid': errors.email }" />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col mt-3">
              <label>Password</label>
              <Field name="password" type="password" class="form-control" v-model="Password"
                :class="{ 'is-invalid': errors.password }" />
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="form-group col mt-3">
              <label>Confirm Password</label>
              <Field name="confirmPassword" type="password" class="form-control" v-model="Confirmpassword"
                :class="{ 'is-invalid': errors.confirmPassword }" />
              <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
            </div>
          </div>
          <div class="form-group form-check mt-3">
            <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
            <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input"
              :class="{ 'is-invalid': errors.acceptTerms }" />
            <label for="acceptTerms" class="form-check-label">
              By accepting your agree to Yantraka.AI's
              <a href="#">Terms of Use</a> &
              <a href="#">Privacy Policy</a></label>
          </div>
          <div class="form-group">
            <div class="d-grid gap-2">
              <button class="button mt-5" type="submit" @click="onSubmit">
                Sign Up
              </button>
            </div>
          </div>
        </Form>
        <!-- end -->

        <div class="row mt-5">
          <div class="col-12">
            <div class="text-center fs-16 fw-400">
              Already a user? &nbsp; <a href="#" @click="login">SignIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "validationPage",
  setup() {
    const auth0 = useAuth0();

    return {
      login() {
        auth0.loginWithRedirect();
      },
    };
  },
  components: {
    Form,
    Field,
  },
  data() {
    const schema = Yup.object().shape({
      title: Yup.string().required("Title is required"),
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last name is required"),
      dob: Yup.string()
        .required("Date of Birth is required")
        .matches(
          /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
          "Date of Birth must be a valid date in the format YYYY-MM-DD"
        ),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      acceptTerms: Yup.string().required("Accept Ts & Cs is required"),
    });

    return {
      schema,
      Firstname: "",
      Lastname: "",
      Email: "",
      Password: "",
      Confirmpassword: "",
    };
  },
  methods: {
    onSubmit() {
      const adduser = {
        firstname: this.Firstname,
        lastname: this.Lastname,
        email: this.Email,
        password: this.Password,
        confirmpassword: this.Confirmpassword,
      };

      //console.log('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));

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

or-color {
  color: #a7afba;
  font-weight: 400;
  font-size: 14px;
}

a:link,
a:visited {
  text-decoration: none;
  color: #6b38fd;
}

.or-color {
  display: flex;
  flex-direction: row;
}

.or-color:before,
.or-color:after {
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

.terms {
  text-decoration: none;
  color: #000;
}
</style>
