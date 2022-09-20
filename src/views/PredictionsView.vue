<template>
  <div class="pre">

    <Navbar></Navbar>
    <div class="container-fluid">
      <div class="row ">
        <div class="col-6">
          <p class="fs-24 fw-700">Trend Predictions</p>
          <a href="" class="fs-18 fw-700">How it works?</a>
        </div>
        <div class="col-6 d-flex justify-content-end ">
          <div class="btn-group">
            <button class="coin dropdown-toggle fs-24 fw-700" type="button" data-bs-toggle="dropdown"
              data-bs-auto-close="false" aria-expanded="false">
              Filter by Coin
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Menu item</a></li>
              <li><a class="dropdown-item" href="#">Menu item</a></li>
              <li><a class="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <PredictionCard v-for="product in Products" :key="product.asset" :product="product" />

    <Footer></Footer>
  </div>

</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import PredictionCard from "@/components/prediction-card.vue";
import axios from "axios";
export default {
  name: "prediction-page",
  components: { Navbar, Footer, PredictionCard },

  data() {
    return {
      Products: [],
    };
  },
  mounted() {
    const currentTimeStamp = new Date().toISOString().split(".")[0] + "Z";
    axios
      .get(
        `https://rx03iubpad.execute-api.us-east-2.amazonaws.com/Stage/v1/sample_predictions?ts=${currentTimeStamp}`
      )
      .then((res) => {
        console.log("data", res.data.data.payload);
        this.Products = res.data.data.payload;
        console.log(res.data.data)
      });
  },
};
</script>
<style>
.coin {
  border: 1px solid #fff;
  border-radius: 0%;
  height: 50px;



}
</style>
