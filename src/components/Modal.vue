<template>
  <div class="contact-us">
    <div class="row">
      <div class="col-lg-6 contact-bg">
        <div class="contactus-bg">
          <div class="map-padding">
            <p class="fs-32 fw-700">Contact us</p>
            <div class="d-none d-md-block">
              <img
                tabindex="1"
                alt="Yantraka"
                class="img-fluid"
                src="https://assets-cryptogenie.yantraka.ai/v1/icons_images/yantraka-black.svg"
              />
              <p class="fs-14 fw-400 content-padding">
                Get smarter about understanding crypto assets. Gain an edge over
                other investors.
              </p>
            </div>
            <img
              alt="ContactUs-Map"
              class="img-fluid"
              src="https://assets-cryptogenie.yantraka.ai/v1/icons_images/map.svg"
            />
          </div>
        </div>
      </div>

      <div class="col-lg-6 mt-3">
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <p class="modal-title fs-32 fw-700" id="exampleModalLabel">
                Contact Us
              </p>
            </div>
          </div>
          <div class="col-6 mt-2">
            <div class="mb-3">
              <button
                type="button"
                class="btn-close mt-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors }"
        >
          <div class="form-row pt-1">
            <div class="form-row">
              <div class="row">
                <div class="form-group col-6">
                  <label>First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    class="form-control"
                    v-model="firstName"
                    :class="{ 'is-invalid': errors.firstName }"
                  />
                  <div class="invalid-feedback">{{ errors.firstName }}</div>
                </div>
                <div class="form-group col-6">
                  <label>Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    class="form-control"
                    v-model="lastName"
                    :class="{ 'is-invalid': errors.lastName }"
                  />
                  <div class="invalid-feedback">{{ errors.lastName }}</div>
                </div>
              </div>
            </div>

            <div class="form-row mt-3">
              <div class="form-group col">
                <label>Email</label>
                <Field
                  name="email"
                  type="text"
                  class="form-control"
                  v-model="email"
                  :class="{ 'is-invalid': errors.email }"
                />
                <div class="invalid-feedback">{{ errors.email }}</div>
              </div>
            </div>
            <div class="form-group">
              <label>Address</label>
              <Field
                name="address"
                type="textarea"
                class="form-control"
                v-model="address"
                :class="{ 'is-invalid': errors.address }"
              />
              <div class="invalid-feedback">{{ errors.address }}</div>
            </div>

            <div class="form-row mt-3">
              <div class="form-group col">
                <label>Choose subject</label>
                <Field
                  as="select"
                  name="select"
                  class="form-control"
                  :class="{ 'is-invalid': errors.select }"
                >
                  <option value="Gernal">Gernal</option>
                  <option value="Account Related">Account Related</option>
                  <option value="Enterprise Related">Enterprise Related</option>
                  <option value="Others">Others</option>
                </Field>

                <div class="invalid-feedback">{{ errors.select }}</div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="d-grid gap-2">
              <button class="button mt-5" type="submit" @click="onSubmit">
                Sign Up
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
export default {
  name: "modelView",
  components: {
    Form,
    Field,
  },
  data() {
    const schema = Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      address: Yup.string().required("Address is required"),
      select: Yup.string().required("choose one"),
    });

    return {
      schema,
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      select: "",
    };
  },
  methods: {
    onSubmit() {
      const adduser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        address: this.address,
        select: this.select,
      };

      axios
        .options(
          "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/Stage/v1/contactus",
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
<style scoped>
.contact-bg {
  background-color: #f3f3f3;
}
.form-control {
  border-radius: 0px;
  height: 50px;
}

.btn-close {
  float: right;
  width: 0px;
  height: 5px;
}

.btn-close:focus {
  box-shadow: none;
}
</style>
