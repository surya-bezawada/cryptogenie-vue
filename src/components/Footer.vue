<template>
  <div class="fotter">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
         <router-link :to="`/`" 
            ><img src="../assets/Logo2.svg" alt="" /></router-link>
          
        </div>
        <div class="col-6">
          <ul class="nav justify-content-end">
            <li class="nav-item fw-700px fs-16px">
              <a class="nav-link" href="/#features">Features</a>
            </li>
            <li class="nav-item fw-700px fs-16px">
              <a class="nav-link" href="/#pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <router-link :to="`/prediction`" class="nav-link"
            >Predictions</router-link
          >
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
          <router-link :to="`/main`" 
            ><img src="../assets/@Yantraka.svg" alt="" /></router-link>
         
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
  width:1440px;
  padding: 2rem;
}
</style>
