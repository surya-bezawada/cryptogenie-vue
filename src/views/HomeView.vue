<template>
  <Navbar />

  <div class="container-fluid">
    <div class="row mt-5" id="home">
      <div class="col-lg-6 col-md-6">
        <img
          src="../assets/machine.svg"
          class="img-fluid"
          alt=""
          id="machine"
        />
        <p class="main fs-47 fw-700">
          CryptoGenie is a yantra which predicts the directional trend of select
          crypto assets
        </p>
        <p class="sub fs-15 fw-400">
          It uses advanced financial machine learning concepts and techniques to
          create models that generate predictive trends for crypto assets.
        </p>
        <button type="button" class="btn btn-primary">Go to Predictions</button>

        <div class="row pt-5">
          <div class="col-md-4 col-5">
            <p class="fw-700 fs-16 black mb-1">30 minutes</p>
            <p class="fs-16 fs-400">Trend prediction window</p>
          </div>
          <div class="col-md-1 col-sm-1 col-2">
            <div class="line-in-middle"></div>
            <div class="vr"></div>
          </div>

          <div class="col-md-4 col-5">
            <p class="fw-700 fs-16 black mb-1">High prediction metrics</p>
            <p class="fs-16 fs-400">A new level of AI</p>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6">
        <img
          src="../assets/Illustartion.svg"
          class="illustration"
          width="100%"
          alt=""
        />
      </div>
    </div>
    <div class="arrow mb-5">
      <img
        src="../assets/Arrows.svg"
        class="img-fluid img-css pt-5"
        width="100%"
        alt=""
      />
    </div>
  </div>
  <!-- Features -->
  <div class="container mt-5 pt-5">
    <p class="text-center fs-36 fw-700" id="features">Features</p>

    <div class="row">
      <div class="col-lg-6">
        <img src="../assets/Group5.svg" alt="" class="featuers-img" />

        <div class="content pt-5 mb-5">
          <h3 class="fs-24 fw-700">Automated Trend Predictions</h3>
          <p class="features-content fs-16 fw-400">
            Standard machine learning techniques are overly simplistic when
            applied to ﬁnancial domains. We apply sophisticated mathematical and
            statistical techniques to avoid overﬁtting and false positives
            inherent in most ﬁnancial prediction applications. Our empirical
            approach focuses on real world analysis, which are in addition to
            purely theoretical methods.
          </p>
        </div>
        <img src="../assets/Group1.svg" alt="" class="featuers-img" />
        <div class="content pt-5 mb-5">
          <h3 class="fs-24 fw-700">Statistical & Empirical Approach</h3>
          <p class="features-content fs-16 fw-400">
            We provide 24 x 7 trend predictions which are valid for 30 minute
            window. Traders can use this trend information to enter trades with
            confidence. Aside from the current prediction window, one can also
            view the past trend predictions and its metrics.
          </p>
        </div>
        <img src="../assets/Group3.svg" alt="" class="featuers-img" />
        <div class="content pt-5 mb-5">
          <h3 class="fs-24 fw-700">eXplainable AI (XAI)</h3>
          <p class="features-content fs-16 fw-400">
            Most AI/ML predictions are black boxes. One cannot interpret or
            understand the predictions made by the models. Our models have been
            built using interpretable and inclusive features that produce more
            explainable models, while maintaining a high level of prediction
            performance. We achieve this by extracting features that explain the
            underlying model classiﬁcation across our asset universe.
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="../assets/Group6.svg" alt="" class="featuers-img" />
        <div class="content pt-5 mb-5">
          <h3 class="fs-24 fw-700">Advanced Financial Machine Learning</h3>
          <p class="features-content fs-16 fw-400">
            We use cutting edge financial machine learning techniques to
            overcome real-world investment problems. Our fully proven approaches
            to data preparation, use of primary and secondary models, feature
            importance and extraction, advanced backtesting statistics and
            rigorous out of sample veriﬁcation before graduating and
            commissioning our models ensures superior performance.
          </p>
        </div>
        <img src="../assets/Group2.svg" alt="" class="featuers-img" />
        <div class="content pt-5 mb-5">
          <h3 class="fs-24 fw-700">Transparent Historical Charts</h3>
          <p class="features-content fs-16 fw-400">
            We provide historical charts of prediction metrics. For e.g.
            accuracy, f1-score, precision, recall etc among others. These
            historical metrics can then be used to evaluate the efficacy of the
            prediction algorithm over time.
          </p>
        </div>
        <img src="../assets/Group4.png" alt="" class="featuers-img" />
        <div class="content pt-5 mb-5">
          <h3 class="fs-24 fw-700">Applied AI</h3>
          <p class="features-content fs-16 fw-400">
            We have designed, developed and deployed a state of the art
            end-to-end architecture for delivering high quality predictions
            seamlessly and continuously. Our infrastructure takes care of data
            ingest, validation, transformation, feature extraction and
            prediction serving in an automated fashion. Our cloud based
            infrastructure is designed to be secure, scalable and resilient. We
            regularly monitor our models in production for ‘concept drift’, so
            that we can deploy newer and better models as soon as we hit
            performance decay thresholds and decommission the previous models.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <img
          src="../assets/Howitworks.svg"
          class="img-fluid"
          width="100%"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="pricing mt-3">
    <img
      src="../assets/Arrows2.svg"
      class="img-fluid img-css"
      width="100%"
      alt=""
    />
  </div>
  <!-- Pricing -->
  <div class="mainprice p-0">
    <div class="container-fluid">
      <div class="pricing" id="pricing">
        <h1 class="fs-36 fw-700 text-center mt-5">Pricing</h1>
        <div class="planes mt-5 mb-5">
          <Planes />
        </div>
      </div>
    </div>

    <!-- black banner -->
    <div class="container space-gap">
      <div class="group-one group-one-margin">
        <img
          alt="Trade Conﬁdently Using CryptoGenie"
          width="100%"
          height="80%"
          class="img-fluid d-none d-sm-block mt-5"
          src="https://assets-cryptogenie.yantraka.ai/v1/icons_images/Group48505.svg"
        />
        <img
          alt="Black Background"
          width="100%"
          class="img-fluid d-block d-sm-none"
          src="https://assets-cryptogenie.yantraka.ai/v1/icons_images/black.svg"
        />
        <div class="together">
          <div class="together-sub">
            <span class="fw-700 fs-16">Together</span>
          </div>
        </div>
        <div class="group-two">
          <p class="fs-36 trade-text fw-700">
            Trade conﬁdently using CryptoGenie trend predictions. Would you like
            to know more?
          </p>
          <div class="group-two-width">
            <div class="text-center">
              <button
                type="button"
                class="fw-700 fs-16 prediction-btn main-btn invest-btn contact-us"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- black banner -->

    <!--Modal popup  -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="max-width: 70%" role="document">
        <div class="modal-content">
          <div class="modal-body">
         <Modal/>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal popup -->

    <div class="container p-0">
      <div class="row pt-5">
        <div class="col-lg-6">
          <img
            src="../assets/Group48265.svg"
            alt=""
            width="100%"
            class="black-banner img-fluid"
          />
        </div>
        <div class="col-lg-6">
          <p class="fs-36 fw-700">
            Get trend predictions for crypto currencies at 30 min periods.
          </p>
          <p class="fs-16 fw-400">
            This will help you discern the trends per each crypto asset.
          </p>
          <button class="btn mb-3" type="button">Go to predictions</button>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Planes from "@/components/Planes.vue";
import Modal from "@/components/Modal.vue";
//import { useAuth0 } from "@auth0/auth0-vue";
export default {
  name: "HomeView-page",
  components: {
    Navbar,
    Footer,
    Planes,
    Modal
},
};
</script>

<style scoped>
.container-fluid {
  padding: 0 2rem;
}

.img-css {
  position: absolute;
  width: 100%;
  left: 0px;
}

.vr {
  position: absolute;
  width: 0.99px;
  height: 53.46px;
  background: #000000;
}

.btn,
.btn:visited {
  padding: 16px 24px;
  background-color: #6237de;
  border-radius: 0;
  color: #fff;
  border: none;
}

.btn:hover,
.btn:focus {
  border: none;
  background-color: #6237de;
  color: #fff;
}

.fs-36 {
  font-size: 36px;
}
.mainprice {
  background-color: #f0f0f0;
}
.group-one {
  position: relative;
}
.group-two {
  position: absolute;
  top: 0px;
  left: 0px;
  color: #fff;
  width: 46%;
  justify-content: flex-start;
  align-items: self-start;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 5%;
}
.together-sub {
  width: 120px;
  height: 32px;
  transform: skew(-35deg);
  background: #51d9b8;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -3%;
  left: 7%;
  position: absolute;
}

.together-sub span {
  display: flex;
  align-items: center;
  text-align: center;
  color: #000;
  transform: skew(30deg);
}

.invest-btn {
  width: 240px !important;
  height: 56px !important;
}
.prediction-btn {
  width: 177px;
  height: 56px;
}
</style>
