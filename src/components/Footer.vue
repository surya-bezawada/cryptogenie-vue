<template>
  <div class="fotter">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <img src="../assets/Logo2.svg" alt="" />
        </div>
        <div class="col-6">
          <ul class="nav justify-content-end">
            <li class="nav-item fw-700px fs-16px">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item fw-700px fs-16px">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Predictions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6">
          <img src="../assets/@Yantraka.svg" alt="" />
        </div>
        <div class="col-6">
          <ul class="nav justify-content-end">
            <li class="nav-item fw-700px fs-16px">
              <a class="nav-link disabled" href="#">Terms of use</a>
            </li>
            <li class="nav-item fw-700px fs-16px">
              <a class="nav-link disabled" href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer-page",
};
</script>
<style scoped>
.container-fluid {
  padding: 2rem;
}
</style>
