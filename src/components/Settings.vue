<template>
  <Navbar />
  <div class="container">
    <p class="fs-32 fw-700">Settings</p>
    <ul class="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Upgrade Plan
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Activity History
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-account"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Account Details
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active mt-3"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div class="row mt-2">
          <div class="col-lg-8">
            <div class="card mb-4 border-0">
              <div class="card-body p-0">
                <div
                  class="condition"
                  v-for="itm in users"
                  :key="itm.firstname"
                >
                  <div class="profile" v-if="show">
                    <div class="row">
                      <div class="col-sm-2">
                        <p class="mb-0">Name:</p>
                      </div>
                      <div class="col-sm-10">
                        <div
                          class="d-flex justify-content-between ng-star-inserted"
                        >
                          <p class="text-muted mb-0 fw-700">
                            {{ itm.firstname }} {{ itm.lastname }}
                          </p>
                          <button
                            alt="Info"
                            class="btn btn-small btn-edit u-pointer"
                          >
                            <i
                              aria-hidden="true"
                              class="fa fa-pencil fa-1x"
                              width="28"
                              @click="show = !show"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="profile-sub" v-else>
                    <div class="row">
                      <div class="col-sm-2">
                        <p class="mb-0">Name:</p>
                      </div>
                      <div class="col-sm-10">
                        <div class="ng-star-inserted">
                          <form
                            novalidate=""
                            class="ng-touched ng-pristine ng-valid"
                          >
                            <div class="row">
                              <div class="form-group col-md-6">
                                <input
                                  type="text"
                                  placeholder="Firstname"
                                  formcontrolname="firstname"
                                  class="form-control ng-touched ng-pristine ng-valid"
                                  v-model="itm.firstname"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <input
                                  type="text"
                                  placeholder="Lastname"
                                  formcontrolname="lastname"
                                  class="form-control lastName-margin ng-touched ng-pristine ng-valid"
                                  v-model="itm.lastname"
                                />
                              </div>
                              <div
                                class="form-group col-md-12 d-flex justify-content-end mt-2"
                              >
                                <button
                                  type="button"
                                  class="fs-16 btn btn-lg btn-outline-dark"
                                  @click="show = !show"
                                >
                                  Cancel
                                </button>
                                &nbsp;&nbsp;
                                <button
                                  class="main-btn fs-16"
                                  @click="updateUser()"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div class="row">
                    <div class="col-sm-2">
                      <p class="mb-0">Email:</p>
                    </div>
                    <div class="col-sm-10">
                      <div class="d-flex justify-content-between">
                        <span class="text-muted mb-0 fw-700">{{
                          itm.email
                        }}</span>
                        <span
                          type=""
                          data-bs-toggle="modal"
                          data-bs-target="#popupchangePwd"
                          class="main-colr fs-18 fw-700 u-pointer ng-star-inserted"
                        >
                          Change Password
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <Planes />
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        <div
          id="pills-history"
          role="tabpanel"
          aria-labelledby="pills-history-tab"
          class="tab-pane fade fs-14 active show"
          style="overflow: auto; max-height: 60vh"
        >
          <ol class="list-group list-group-numbered">
            <li
              class="list-group-item d-flex justify-content-between align-items-start ng-star-inserted"
            >
              <div
                class="ms-2 me-auto"
                v-for="item in cutomerHistory"
                :key="item.date"
              >
                <div class="fw-bold">{{ item.date }}</div>
                <div class="fw-bold">{{ item.event }}</div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-account"
        role="tabpanel"
        aria-labelledby
      >
        <div
          id="pills-account"
          role="tabpanel"
          aria-labelledby="pills-account-tab"
          class="tab-pane fade fs-14 active show"
        >
          <div class="row ng-star-inserted">
            <div class="col-lg-8">
              <div class="card mb-4 border-0">
                <div
                  class="card-body p-0"
                  v-for="itm in users"
                  :key="itm.firstname"
                >
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Your Plan:</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0 fw-700">
                        {{ itm.user_plan_type }}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Payment Method:</p>
                    </div>
                    <div class="col-sm-9">
                      <button
                        type="button"
                        class="fs-14 fw-400 santoshi main-btn"
                      >
                        View or Manage Payment Method
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Change Password -->
      <div
        class="modal fade"
        id="popupchangePwd"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="row p-3">
              <div class="modal-header">
                <h2 class="modal-title fw-700" id="exampleModalToggleLabel">
                  Change Password
                </h2>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="form-row pt-1">
                  <div class="form-group col mt-5">
                    <Field
                      name="password"
                      type="password"
                      class="form-control"
                      :class="{ 'is-invalid': errors.password }"
                      v-model="Password"
                      placeholder="Password"
                    />
                    <div class="invalid-feedback">{{ errors.password }}</div>
                  </div>
                  <div class="form-group col mt-5 mb-3">
                    <Field
                      name="confirmPassword"
                      type="password"
                      class="form-control"
                      :class="{ 'is-invalid': errors.confirmPassword }"
                      v-model="Confirmpassword"
                      placeholder="ConfirmPassword"
                    />
                    <div class="invalid-feedback">
                      {{ errors.confirmPassword }}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 d-flex justify-content-end mt-3">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      class="btn btn-lg btn-outline-dark fs-16 fw-700 me-2"
                    >
                      Back
                    </button>
                    <div>
                      <button
                        type="button"
                        class="btn btn-lg main-btn fs-16 fw-700"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        @click="changepwd"
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <!-- Model successful model -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="successful">
                <h2>New Password Changed Successfully</h2>
                <a href="/"
                  ><button
                    type="button"
                    class="btn btn-lg main-btn fs-16 fw-700"
                    data-bs-dismiss="modal"
                  >
                    Got It
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer mt-5">
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import axios from "axios";
import Planes from "./Planes.vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

export default {
  name: "setting-page",
  components: { Navbar, Footer, Planes, Form, Field },

  data() {
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    });

    return {
      schema,
      show: true,
      cutomerHistory: [],
      users: [],
      Password: "",
      Confirmpassword: "",
      firstName: "",
      lastName: "",
    };
  },
  created() {
    this.cusmhistory();
    this.fetchUser();
  },
  methods: {
    openModal() {
      console.log("button clicked");
      this.isModelOpen = !this.isModelOpen;
    },
    cusmhistory() {
      this.cutomerHistory = [];
      let token = localStorage.getItem("id_token");
      axios
        .get(
          "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/cus_history",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data.customer_history);
          this.cutomerHistory = res.data.customer_history;
        })
        .catch((e) => {
          console.log("Error:", e);
        });
    },

    fetchUser() {
      this.users = [];
      let token = localStorage.getItem("id_token");
      axios
        .get(
          "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/fetchuser",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data.users);
          this.users = res.data.users;
        })
        .catch((e) => {
          console.log("Error:", e);
        });
    },
    changepwd() {
      let token = localStorage.getItem("id_token");
      const adduser = {
        password: this.Password,
        confirmpassword: this.Confirmpassword,
      };

      axios
        .patch(
          "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/Stage/v1/change_password",
          adduser,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log("Error : ", e);
        });

      console.log(adduser);
    },

    updateUser() {
      let token = localStorage.getItem("id_token");
      const adduser = {
        firstName: this.firstname,
        lastName: this.lastname,
      };

      axios
        .patch(
          "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/Stage/v1/fetchuser",
          adduser,

          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log("Error : ", e);
        });
    },
  },
};
</script>
<style scopped>
.btn-edit {
  border: none !important;
  padding: 0 !important;
  color: #6237de !important;
}

.main-colr {
  color: #6237de;
}

#pills-home-tab {
  width: 160px;
  background-color: white;
  border: 0;
  color: black;
}

#pills-home-tab:hover {
  color: #6237de;
}

#pills-home-tab::fir {
  color: #6237de;
}

#pills-home-tab:active,
#pills-home-tab:focus {
  color: #6237de;
  border-bottom: 4px solid #6237de;
  border-radius: 0;
}

input {
  border-radius: 0 !important;
  height: 58px;
}

.main-btn {
  background-color: #6237de !important;
  color: #fff !important;
  border: 4px solid #6237de;
  border-radius: 0 !important;
}

.btn-outline-dark {
  color: #212529;
  border-radius: 0 !important;
}

.btn-outline-dark:hover {
  color: #fff !important;
  background-color: #6237de !important;
}

.modal-content {
  border-radius: 0px !important;
}
</style>
