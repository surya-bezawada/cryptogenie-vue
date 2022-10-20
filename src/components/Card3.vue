<template>
  <div class="row">
    <div class="col-lg-3">
      <div class="card individual bg-guest ng-star-inserted">
        <div class="mt-4 mb-3 text-center fw-700">
          <h4>
            To<br />
            Unlock
          </h4>
        </div>
        <div class="text-center d-grid gap2">
          <button
            class="fs-14 fw-700 p-2 btn"
            style="
              background: #6237de;
              border: 1px solid #6237de;
              color: white;
              border-radius: 0px;
            "
            @click="login"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  name: "card3Vue",
  setup() {
    const auth0 = useAuth0();

    return {
      login() {
        auth0.loginWithRedirect();
      },
    };
  },
};
</script>
<style scoped>
.card {
  width: 185px;
  padding: 1rem;
  border-radius: 0;
  border: none;
  min-width: 164px !important;
  height: 230px;
  margin-right: 0.75rem;
}

.bg-guest {
  background: #9ed8ca !important;
}

.individual {
  height: 230px;
  margin-top: 5px;
  box-shadow: -4px -3px #000;
  border: 2px solid #000;
  background-color: #fff;
  margin-right: 0 !important;
}

.fw-700 {
  font-weight: 700;
}

.fs-14 {
  font-size: 14px;
}
</style>
