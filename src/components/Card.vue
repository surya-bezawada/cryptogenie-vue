<template>
  <div class="row d-flex">
    <div class="col-2">
      <div class="card">
        <div class="card-body">
          <div class="timestamp"></div>
          <div class="line"></div>
          <div class="trends text-center">
            <img class="img-fluid" src="../assets/Vector92.svg" alt="Ranging" />
          </div>
          <p
            class="fs-14 fw-700 pt-2 text-center"
            style="margin-bottom: 0.75rem"
          >
            {{ previou.trend }}
          </p>
          <p class="text-color fw-700 fs-14 text-center">297.4000 USDT</p>
          <div class="action result">
            <!-- <img class="img-fluid p-0" src="../assets/Minus.svg" alt="" /> -->
            <b class="fs-14 fw-700">{{ previou.result }}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card-item",
  props: ["previou"],
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
