<template>
  <div class="row pt-3">
    <div class="col-12 d-flex gap-1">
      <h4>Last 30 days</h4>
      <div class="correction">
        <p class="fs-14">
          correct Predictions: {{ pie.correct_predictions }} /
          {{ pie.predicted_rows }}
        </p>
        <!-- <img src="../assets/Line1.svg" alt="" class="percent" /> -->
      </div>
      <div class="accuracy d-flex gap-1 me-2">
        <div class="col-6">
          <p class="fs-14 fw-700 d-flex gap-1">
            Accuracy<a href="#" style="font-size: 18px" data-toggle="popover" title="Popover Header"
              data-content="Some content inside the popover">
              <i class="fa fa-info-circle"></i></a>
          </p>
          <p class="percent fs-16 fw-700">
            {{ (pie.accuracy * 100).toFixed(2) }}%
          </p>
        </div>
        <div class="col-6">
          <!-- <pie-chart
            id="users-chart"
            :data="chartData1"
            :donut="true"
            :library="{ cutoutPercentage: pie.accuracy * 100 }"
            :colors="['#000', '#666']"
          ></pie-chart> -->
        </div>
      </div>
      <div class="vr"></div>
      <div class="accuracy d-flex gap-1">
        <div class="col-6">
          <p class="fs-14 fw-700 d-flex gap-1">
            F1Score<a style="font-size: 18px; background-color: aliceblue;" href="#" data-toggle="tooltip"
              data-placement="middle"
              title="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design."><i
                class="fa fa-info-circle"></i></a>
          </p>
          <p class="percent fs-16 fw-700">
            {{ (pie.f1_score * 100).toFixed(2) }}%
          </p>
        </div>
        <div class="col-6">
          <img src="../assets/F1score.svg" alt="" />
        </div>
      </div>
      <div class="vr"></div>
      <div class="accuracy d-flex gap-1">
        <div class="col-6">
          <p class="fs-14 fw-700 d-flex gap-1">
            Precision<a style="font-size: 18px">
              <i class="fa fa-info-circle"></i></a>
          </p>
          <p class="percent fs-16 fw-700">
            {{ (pie.precision * 100).toFixed(2) }}%
          </p>
        </div>
        <div class="col-6">
          <img src="../assets/precision.svg" alt="" />
        </div>
      </div>
      <div class="vr"></div>
      <div class="accuracy d-flex gap-1">
        <div class="col-6">
          <p class="fs-14 fw-700 d-flex gap-1">
            Recall<a style="font-size: 18px; color: #000;">
              <i class="fa fa-info-circle"></i></a>
          </p>
          <p class="percent fs-16 fw-700">
            {{ (pie.recall * 100).toFixed(2) }}%
          </p>
        </div>
        <div class="col-6">
          <img src="../assets/Recall.svg" alt="" />
        </div>
      </div>
      <div class="vr"></div>
      <div class="accuracy d-flex gap-1">
        <div class="col-6">
          <p class="fs-14 fw-700 d-flex gap-1">
            Prediction Capacity<a style="font-size: 18px">
              <i class="fa fa-info-circle"></i></a>
          </p>
          <p class="percent fs-16 fw-700">
            {{ pie.prediction_capacity }}
          </p>
        </div>
        <div class="col-6">
          <img src="../assets/capacity.svg" alt="" />
        </div>
      </div>
      <div class="vr"></div>
      <div class="accuracy d-flex gap-1">
        <div class="col-6">
          <p class="fs-14 fw-700 d-flex gap-1">
            Tradable Capacity<a style="font-size: 18px">
              <i class="fa fa-info-circle"></i></a>
          </p>
          <p class="percent fs-16 fw-700">
            {{ pie.tradable_capacity }}
          </p>
        </div>
        <div class="col-6">
          <img src="../assets/capacity.svg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!--  -->
</template>
<script>

export default {
  name: "contactVue",
  props: ["pie"],



  
};
</script>
<style scoped>
.users-chart {
  width: 20px !important;
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

.canvas {
  display: none !important;
}
</style>
