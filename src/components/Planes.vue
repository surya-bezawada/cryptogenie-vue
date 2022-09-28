<template>
    <div class="container-fluid">

 
    <div class="d-flex justify-content-center mb-3">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill"
                data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly"
                aria-selected="true">
                Monthly
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-yearly-tab" data-bs-toggle="pill" data-bs-target="#pills-yearly"
                type="button" role="tab" aria-controls="pills-yearly" aria-selected="false">
                Annual
              </button>
            </li>
          </ul>
        </div>
        <div class="tab-content" id="pills-plans-tabContent">
          <div class="tab-pane fade show active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
            <div class="row">
              <!-- basic-->
              <div class="col-xs-12 col-md-6 col-xl-3 d-flex align-item-stretch">
                <div class="card card-text w-100">
                  <div class="card-body d-flex align-item-start flex-column">
                    <div class="text-center pt-3 px-3">
                      <p class="card-border"></p>
                      <p class="fs-28  fw-700">Free</p>
                      <p class="fs-14 fw-700">Sign Up Required</p>
                    </div>
                    <div class="parallelogram py-3">
                      <div class="parallelogram-sub">
                        <span class="fs-16 fw-bold">Basic</span>
                      </div>
                    </div>
                    <div class="p-3 plan-desc">
                      <div class="fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400"> BTCUSDT & ETHUSDT</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Current Trend Predictions</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Charts & Prediction Metrics
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center btn-center mt-auto pb-3 px-3">
                      <button type="button" class="fs-16 fw-700 card-btn change-plan main-btn">
                        Go to Predictions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!--individual-->
              <div class="col-xs-12 col-md-6 col-xl-3 d-flex align-item-stretch">
                <div class="card card-text w-100">
                  <div class="card-body d-flex align-item-start flex-column">
                    <div class="text-center pt-3 px-3">
                      <p class="card-border"></p>
                      <p class="fs-28 fw-700">
                        $ 10 /<span class="fs-14 fw-400">per month</span>
                      </p>
                      <p>Yearly : $ 108 (10% discount)</p>
                    </div>
                    <div class="parallelogram py-3">
                      <div class="parallelogram-sub">
                        <span class="fs-16 fw-bold">Individual</span>
                      </div>
                    </div>
                    <div class="p-3 plan-desc">
                      <div class="fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            10 Crypto Asset Pairs</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Current Trend Predictions</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">Charts & Prediction Metrics
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center btn-center mt-auto pb-3 px-3">
                      <button type="button" class="fs-16 fw-700 card-btn change-plan main-btn">
                        Change plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- professional-->
              <div class="col-xs-12 col-md-6 col-xl-3 d-flex align-item-stretch">
                <div class="card card-text w-100">
                  <div class="card-body d-flex align-item-start flex-column">
                    <div class="text-center pt-3 px-3">
                      <p class="card-border"></p>
                      <p class="fs-28 fw-bold">
                        $ 60 /<span class="fw-bold fs-14">per month</span>
                      </p>
                      <p>Yearly : $ 576 (20% discount)</p>
                    </div>
                    <div class="parallelogram py-3">
                      <div class="parallelogram-sub">
                        <span class="fs-16 fw-bold">Professional </span>
                      </div>
                    </div>
                    <div class="p-3 plan-desc">
                      <div class="fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            10 Crypto Asset Pairs</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Current Trend Predictions
                          </span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Charts & Prediction Metrics
                          </span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Bet Sizing, Average True Range
                          </span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Prediction & Tradable Capacity metrics
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center btn-center mt-auto pb-3 px-3">
                      <button type="button" class="fs-16 fw-700 card-btn change-plan main-btn">
                        Change Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- enterprise-->
              <div class="col-xs-12 col-md-6 col-xl-3 d-flex align-item-stretch">
                <div class="card card-text w-100">
                  <div class="card-body d-flex align-item-start flex-column">
                    <div class="text-center pt-3 px-3">
                      <p class="card-border"></p>
                      <p class="fs-36 fw-700 main_div">Contact Us</p>
                    </div>
                    <div class="parallelogram py-3">
                      <div class="parallelogram-sub">
                        <span class="fs-16 fw-bold">Enterprise</span>
                      </div>
                    </div>
                    <div class="p-3 plan-desc">
                      <div class="fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">API access</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">Example Trading bot templates</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">More asset pairs. </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center btn-center mt-auto pb-3 px-3">
                      <button type="button" class="fs-16 fw-700 card-btn change-plan main-btn">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
            <div class="row">
              <!-- basic-->
              <div class="col-xs-12 col-md-6 col-xl-3 d-flex align-item-stretch">
                <div class="card card-text w-100">
                  <div class="card-body d-flex align-item-start flex-column">
                    <div class="text-center pt-3 px-3">
                      <p class="card-border"></p>
                      <p class="fs-28 fw-bold">Free</p>
                      <p>Sign Up Required</p>
                    </div>
                    <div class="parallelogram py-3">
                      <div class="parallelogram-sub">
                        <span class="fs-16 fw-bold">Basic</span>
                      </div>
                    </div>
                    <div class="p-3 plan-desc">
                      <div class="fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400"> BTCUSDT & ETHUSDT</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Current Trend Predictions</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Charts & Prediction Metrics
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center btn-center mt-auto pb-3 px-3">
                      <button type="button" class="fs-16 fw-700 card-btn change-plan main-btn">
                        Go to Predictions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!--individual-->
              <div class="col-xs-12 col-md-6 col-xl-3 d-flex align-item-stretch">
                <div class="card card-text w-100">
                  <div class="card-body d-flex align-item-start flex-column">
                    <div class="text-center pt-3 px-3">
                      <p class="card-border"></p>
                      <p class="fs-28 fw-bold">
                        $ 108 /<span class="fs-14 fw-bold">per year</span>
                      </p>
                      <p>Monthly : $ 10 (10% discount)</p>
                    </div>
                    <div class="parallelogram py-3">
                      <div class="parallelogram-sub">
                        <span class="fs-16 fw-bold">Individual</span>
                      </div>
                    </div>
                    <div class="p-3 plan-desc">
                      <div class="fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            10 Crypto Asset Pairs</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Current Trend Predictions</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">Charts & Prediction Metrics
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center btn-center mt-auto pb-3 px-3">
                      <button type="button" class="fs-16 fw-700 card-btn change-plan main-btn">
                        Change plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- professional-->
              <div class="col-xs-12 col-md-6 col-xl-3 d-flex align-item-stretch">
                <div class="card card-text w-100">
                  <div class="card-body d-flex align-item-start flex-column">
                    <div class="text-center pt-3 px-3">
                      <p class="card-border"></p>
                      <p class="fs-28 fw-bold">
                        $ 576 /<span class="fw-bold fs-14">per year</span>
                      </p>
                      <p>Monthly : $ 60 (20% discount)</p>
                    </div>
                    <div class="parallelogram py-3">
                      <div class="parallelogram-sub">
                        <span class="fs-16 fw-bold">Professional </span>
                      </div>
                    </div>
                    <div class="p-3 plan-desc">
                      <div class="fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            10 Crypto Asset Pairs</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Current Trend Predictions
                          </span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Charts & Prediction Metrics
                          </span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Bet Sizing, Average True Range
                          </span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">
                            Prediction & Tradable Capacity metrics
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center btn-center mt-auto pb-3 px-3">
                      <button type="button" class="fs-16 fw-700 card-btn change-plan main-btn">
                        Change Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- enterprise-->
              <div class="col-xs-12 col-md-6 col-xl-3 d-flex align-item-stretch">
                <div class="card card-text w-100">
                  <div class="card-body d-flex align-item-start flex-column">
                    <div class="text-center pt-3 px-3">
                      <p class="card-border"></p>
                      <p class="fs-28 fw-bold main_div">Contact Us</p>
                    </div>
                    <div class="parallelogram py-3">
                      <div class="parallelogram-sub">
                        <span class="fs-16 fw-bold">Enterprise</span>
                      </div>
                    </div>
                    <div class="p-3 plan-desc">
                      <div class="fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">API access</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">Example Trading bot templates</span>
                        </div>
                      </div>
                      <div class="pt-2 fs-16 row">
                        <div class="col">
                          <img src="../assets/black-right.svg" class="img-fluid" alt="Cirle Right" />
                        </div>
                        <div class="col-10 p-0">
                          <span class="fs-16 fw-400">More asset pairs. </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center btn-center mt-auto pb-3 px-3">
                      <button type="button" class="fs-16 fw-700 card-btn change-plan main-btn">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'planes-item'
    }

</script>
<style scoped>
    .card-b {
      position: absolute;
      bottom: 10px;
      color: #fff;
      border: 1px solid #6b38fd;
      height: 56px;
      border-radius: 0px;
      background-color: #6b38fd;
      width: 225px;
    }
    
    .card-body {
      padding: 0 !important;
      border:1px solid #e3e7ed;
    }
    .card-body:hover {
     border: 1px solid #6237de;
    }
    
    .plan-desc {
      padding: 1rem 2rem !important;
      min-height: 222px;
    }
    
    @media screen and (max-width: 1440px) {
      .fs-16 {
        font-size: 14px;
      }
    }
    
    .display-hidden {
      visibility: hidden;
    }
    
    .left-space {
      margin-left: 6%;
      margin-bottom: auto;
    }
    
    .main_div {
      min-height: 79px;
    }
    
    .yourPlan-btn {
      border: 1px solid #efebeb !important;
      background-color: transparent;
      cursor: default;
    }
    
    .yourPlan-basic {
      flex-basis: 80%;
      flex-grow: 0;
      flex-shrink: 0;
    }
    
    #pills-tab {
      background-color: #fff;
      padding: 4px;
    }
    
    .nav-item>button {
      width: 128px;
      color: #757883;
      border-radius: 0;
    }
    
    .nav-pills .nav-link.active,
    .nav-pills .show>.nav-link {
      color: #fff;
      background-color: #6b38fd;
    }
    
    .card-border {
      border-bottom: 8px solid #000;
    }
    
    .change-plan {
      width: 100%;
      height: 54px;
    }
    
    .parallelogram {
      display: flex;
      justify-content: center;
    }
    
    .parallelogram-sub {
      width: 120px;
      height: 32px;
      transform: skew(-35deg);
      background: #9ED8CA;
      margin: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .parallelogram-sub span {
      display: flex;
      align-items: center;
      text-align: center;
      color: #000;
      transform: skewX(36deg);
    }
    
    .parallelogram:before,
    .parallelogram:after {
      content: "";
      flex: 1 1;
      border-bottom: 1px solid #e3e7ed;
      margin: auto;
    }
    
    .main_div {
      min-height: 66px;
    }
    
    
    .discount_text {
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      font-size: 12px;
    }
    
    .main-btn {
      background-color: #6237de !important;
      color: #fff !important;
      border: 4px solid #6237de;
      border-radius: 0px;
    }
    
    .main-btn:hover {
      background-color: #6237de;
      color: #fff;
      border: 4px solid #6237de;
      border-radius: 0px;
    }
    .fs-36{
        font-size: 36px;
    }
    .fs-28{
        font-size: 28px;
    }
    .fs-14{
        font-size: 14px;
    }
    .fs-24{
        font-size: 24px;
    }
    .fw-bold{
        font-weight: 700;
    }
    </style>
    