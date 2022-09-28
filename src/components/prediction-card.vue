<template>
  <div class="container-fluid">
    <div class="card-predicitons mt-3">
      <div class="row">
        <div class="col-6 d-flex gap-2">
          
          <img
            :src="getAssetInfo(product.base_asset)[0].baseAssetImg"
            alt="baseimg"
            class="w-50"
          />
          <!-- <p>{{ product.asset.slice(0, 3) }}</p> -->
          <h3>{{ getAssetInfo(product.base_asset)[0].baseAssetName }}</h3>
          <img
            :src="getAssetInfo(product.base_asset)[0].quoteAssetImg"
            alt="quoteimg"
            class="w-50"
          />
          <h3>{{ getAssetInfo(product.base_asset)[0].quoteAssetName }}</h3>

          <button class="btn-bit" type="submit">{{ product.asset }}</button>
        </div>
        <div class="col-6 d-flex gap-2 justify-content-end">
          <div class="row">
            <div class="col-4">
              <img
                class="timer w-50"
                src="https://assets-cryptogenie.yantraka.ai/v1/icons_images/timer_gif_maker.gif"
              />
            </div>
            <div class="col-8">
              <b>Next Prediction</b>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-12 d-flex gap-1">
          <h4>Last 30 days</h4>
          <div class="correction">
            <p class="fs-14">
              correct Predictions: {{ product.metrics.correct_predictions }} /
              {{ product.metrics.predicted_rows }}
            </p>
            <!-- <img src="../assets/Line1.svg" alt="" class="percent" /> -->
          </div>
          <div class="accuracy d-flex gap-1 me-2">
            <div class="col-6">
              <p class="fs-14 fw-700">Accuracy</p>
              <p class="percent fs-16 fw-700">
                {{ product.metrics.accuracy.toFixed(2) }}
              </p>
            </div>
            <div class="col-6">
              <img src="../assets/Accuracy.svg" alt="" />
            </div>
          </div>
          <div class="vr"></div>
          <div class="accuracy d-flex gap-1">
            <div class="col-6">
              <p class="fs-14 fw-700">F1Score</p>
              <p class="percent fs-16 fw-700">
                {{ product.metrics.f1_score.toFixed(2) }}
              </p>
            </div>
            <div class="col-6">
              <img src="../assets/F1score.svg" alt="" />
            </div>
          </div>
          <div class="vr"></div>
          <div class="accuracy d-flex gap-1">
            <div class="col-6">
              <p class="fs-14 fw-700">Precision</p>
              <p class="percent fs-16 fw-700">
                {{ product.metrics.precision.toFixed(2) }}
              </p>
            </div>
            <div class="col-6">
              <img src="../assets/precision.svg" alt="" />
            </div>
          </div>
          <div class="vr"></div>
          <div class="accuracy d-flex gap-1">
            <div class="col-6">
              <p class="fs-14 fw-700">Recall</p>
              <p class="percent fs-16 fw-700">
                {{ product.metrics.recall.toFixed(2) }}
              </p>
            </div>
            <div class="col-6">
              <img src="../assets/Recall.svg" alt="" />
            </div>
          </div>
          <div class="vr"></div>
          <div class="accuracy d-flex gap-1">
            <div class="col-6">
              <p class="fs-14 fw-700">Prediction Capacity</p>
              <p class="percent fs-16 fw-700">
                {{ product.metrics.prediction_capacity }}
              </p>
            </div>
            <div class="col-6">
              <img src="../assets/capacity.svg" alt="" />
            </div>
          </div>
          <div class="vr"></div>
          <div class="accuracy d-flex gap-1">
            <div class="col-6">
              <p class="fs-14 fw-700">Tradable Capacity</p>
              <p class="percent fs-16 fw-700">
                {{ product.metrics.tradable_capacity }}
              </p>
            </div>
            <div class="col-6">
              <img src="../assets/capacity.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="prediction-card pt-2 d-flex justify-content-between">
        <Card2 :latest="product.current" />
        <Card
          v-for="previou in product.previous"
          :key="previou.result"
          :previou="previou"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Card2 from "./card2.vue";
import Bitcoin from "../assets/g16.svg";
import Ethereum from "../assets/eth.svg";
import Tether from "../assets/usdt.svg";
import Binance from "../assets/bnb.svg";
import Polkadot from "../assets/dot.svg";
import Cardano from "../assets/ada.svg";
import ATOM from "../assets/atom.svg";
import USDCoin from "../assets/usdc.svg";

export default {
  name: "prediction-item",
  props: ["product"],
  components: { Card, Card2 },
  data() {
    return {
      payload: [],
    };
  },

  methods: {
    getAssetInfo(assetName) {
      let asset = [
        {
          assetName: "BTC",
          baseAssetName: "Bitcoin",
          baseAssetImg: Bitcoin,
          quoteAssetName: "Tether",
          quoteAssetImg: Tether,
        },
        {
          assetName: "ETH",
          baseAssetName: "Ethereum",
          baseAssetImg: Ethereum,
          quoteAssetName: "Tether",
          quoteAssetImg: Tether,
        },
        {
          assetName: "BNB",
          baseAssetName: "Binance",
          baseAssetImg: Binance,
          quoteAssetName: "Tether",
          quoteAssetImg: Tether,
        },
        {
          assetName: "DOT",
          baseAssetName: "Polkadot",
          baseAssetImg: Polkadot,
          quoteAssetName: "Tether",
          quoteAssetImg: Tether,
        },
        {
          assetName: "ADA",
          baseAssetName: "Cardano",
          baseAssetImg: Cardano,
          quoteAssetName: "Tether",
          quoteAssetImg: Tether,
        },
        {
          assetName: "ATOM",
          baseAssetName: "ATOM",
          baseAssetImg: ATOM,
          quoteAssetName: "Tether",
          quoteAssetImg: Tether,
        },
        {
          assetName: "BTC",
          baseAssetName: "Bitcoin",
          baseAssetImg: Bitcoin,
          quoteAssetName: "USD Coin",
          quoteAssetImg: USDCoin,
        },
        {
          assetName: "ETH",
          baseAssetName: "Ethereum",
          baseAssetImg: Ethereum,
          quoteAssetName: "USD Coin",
          quoteAssetImg: USDCoin,
        },
        {
          assetName: "BNB",
          baseAssetName: "Binance",
          baseAssetImg: Binance,
          quoteAssetName: "USD Coin",
          quoteAssetImg: USDCoin,
        },
        {
          assetName: "ADA",
          baseAssetName: "Cardano",
          baseAssetImg: Cardano,
          quoteAssetName: "USD Coin",
          quoteAssetImg: USDCoin,
        },
      ];
      // console.log(asset.filter((x) => x.assetName === assetName));
      return asset.filter((x) => x.assetName === assetName);
    },

    // let: sortedData = [...this.product.previous].reverse(),

    // const :assetInfo = getAssetInfo(this.product.asset),

    // const :currentTrend = trendStat(this.product.current.trend),
  },
};
</script>
<style scoped>
.w-50 {
  width: 50px !important;
}

a {
  color: black;
  text-decoration: none;
}

.border_line {
  border: 4px solid #000;
}

#button {
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  border: 1px solid #e3e7ed;
  padding: 7px;
}

.btn-bit {
  border: none;
  color: #6237de;
  background-color: white;
  font-weight: 700;
  padding: 8px, 16px, 8px, 16px;
  padding-left: 10px;
}

.btn-bit:hover {
  border: 1px solid #6237de;
}

.card-predicitons {
  background-color: #e3e7ed;
  padding: 25px;
}

.prediction-card {
  flex-direction: row-reverse;
}

.fs-14 {
  font-size: 14px;
}

.fw-700 {
  font-weight: 700;
}

.fs-16 {
  font-size: 16px;
}

.percent {
  color: #6237de;
}

.vr {
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  height: 24px;
  display: flex;
  align-items: center;
  margin-right: 5px;
}

.percent {
  line-height: 0px;
}

.fs-12 {
  font-size: 12px;
}

.fw-400 {
  font-weight: 400;
}

.line {
  font-size: 12px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding-bottom: 1rem;
}

.text-color {
  color: #a7afba;
}

.action {
  background-color: #eef1f4;
  align-items: center;
  height: 40px;
  display: flex;
  justify-content: 3px !important;
  justify-content: center;
}

.card {
  border-radius: 0px !important;
}

.flex-shrink-0 {
  position: absolute;
  top: -20px;
  left: 8px;
}

.border {
  position: relative;
}

.alert {
  left: 10px;
}
</style>
