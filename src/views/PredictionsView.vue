<template>
  <div class="pre">
    <Navbar></Navbar>
    <PredictionCard
      v-for="product in Products"
      :key="product.asset"
      :product="product"

    />
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
