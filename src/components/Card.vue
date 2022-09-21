<template>
  <div class="row">
    <div class="col-2">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-row justify-content-center">
            <p class="timestamp text-center">
              {{ dateFormate(previou.from_timestamp) }}
            </p>
            <span>-</span>
            <p class="timestamp text-center">
              {{ dateFormate(previou.to_timestamp) }}
            </p>
          </div>

          <div class="line"></div>
          <div class="trends text-center">
            <img
              class="img-fluid"
              :src="trendStat(previou.trend)"
              alt="Ranging"
            />
          </div>
          <p
            class="fs-14 fw-700 pt-2 text-center"
            style="margin-bottom: 0.75rem"
          >
            {{ previou.trend }}
          </p>
          <p class="text-color fw-700 fs-14 text-center">
            {{ previou.reference_price }}
          </p>
          <div class="action result">
            <img
              class="img-fluid p-0 me-1"
              :src="resultState(previou.result)"
              alt=""
            />
            <b class="fs-16 fw-700">{{ previou.result }}</b>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-2">
      <div class="card-7">
        <Card2 :key="current" :current="current" />
      </div>
    </div> -->
  </div>
</template>
<script>
import up from "../assets/Vector91.svg";
import ranging from "../assets/Vector92.svg";
import uncertain from "../assets/uncertain.svg";
import down from "../assets/Vector93.svg";
import correct from "../assets/correct.svg";
import missed from "../assets/missed.svg";
//import Card2 from "./card2.vue";

export default {
  name: "card-item",
  props: [ "previou","current"],
  data() {
    return {
      playloads: [],
    };
  },
  methods: {
    dateFormate(todate) {
      const date = new Intl.DateTimeFormat("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(new Date(todate));
      console.log(date);
      return date;
    },
    trendStat: (trendName) => {
      let trend = {
        up: up,
        down: down,
        ranging: ranging,
        uncertain: uncertain,
      }[trendName];
      return trend;
    },
    resultState: (resultState) => {
      let result = {
        correct: correct,
        missed: missed,
        uncertain: uncertain,
      }[resultState];
      return result;
    },
  },
  //components: { Card2 },
};
</script>
<style scoped>
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
  width: 12rem !important;
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
