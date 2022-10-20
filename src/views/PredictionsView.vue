<template>
  <div class="pre">
    <Navbar></Navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <p class="fs-24 fw-700">Trend Predictions</p>
          <a href="" class="fs-18 fw-700" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap">How it works?</a>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" style="max-width: 60%" role="document">
              <div class="modal-content">
                <div class="modal-header ">
                  <h5 class="modal-title fs-32 fw-700" id="exampleModalLabel">How it Works</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body justify-content-between">
                  <img src="../assets/how_it_work_popup.svg" alt="">
                </div>
              </div>
            </div>
          </div>


        </div>
        <div class="col-6 d-flex justify-content-end">
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

    <!-- disclaimer -->
    <section class="page-top">
      <div class="container mt-5 mb-4">
        <div class="border border-2 border-dark disclaimer">
          <div class="disclaimer-sub">
            <span class="fw-700 fs-14">Disclaimer</span>
          </div>
          <div class="row p-3">
            <div class="col-lg-1 d-flex align-content-center flex-wrap justify-content-center">
              <img src="../assets/Alert.svg" class="flex-shrink-0" alt="Disclaimer" width="72px" height="64px" />
            </div>
            <div class="col-lg-11">
              <p class="fw-700 fs-14">
                This Site and the content there in is for information purposes only
                and is not intended to and does not provide tax, legal, insurance or
                investment advice, and nothing on the Site should be construed as an
                offer to sell, a solicitation of an offer to buy, or a
                recommendation for any security by Yantraka or any third party. You
                should consult an attorney or tax professional regarding your
                specific legal or tax situation. In no event shall Yantraka be
                liable for any damages, costs, expenses, legal fees, or losses
                (including lost income or lost profit and opportunity costs) in
                connection with any use of the Site and the content therein. A
                reference to a particular investment or security, a rating or any
                observation concerning an investment that is part of the Site is not
                a recommendation to buy, sell or hold such investment or security,
                does not address the suitability of an investment or security and
                should not be relied on as investment advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- disclaimer -->

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
        // this.Products.forEach((x) => {
        //   x.isVisible = false;
        // });
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

.disclaimer {
  position: relative;
}

.disclaimer-sub {
  width: 120px;
  height: 32px;
  transform: skew(-35deg);
  background: #51d9b6;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 4%;
  top: -12%;
  position: absolute;
}

.disclaimer-sub span {
  display: flex;
  align-items: center;
  text-align: center;
  color: #000;
  transform: skewX(30deg);
}


@media screen and (max-width: 1440px) {
  .disclaimer-sub {
    top: -12%;
  }
}

@media screen and (max-width: 1024px) {
  .disclaimer-sub {
    top: -10%;
  }
}

@media screen and (max-width: 768px) {
  .disclaimer-sub {
    top: -20px;
    left: 42%;
  }
}

@media screen and (max-width: 425px) {
  .disclaimer-sub {
    top: -20px;
    left: 36%;
  }
}

@media screen and (max-width: 375px) {
  .disclaimer-sub {
    top: -20px;
    left: 32%;
  }
}

@keyframes customNew {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.modal-header{
  background: #f7f8f9;
 
}
</style>
