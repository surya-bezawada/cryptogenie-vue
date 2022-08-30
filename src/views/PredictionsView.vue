<template>
    <div class="pre">
        <Navbar></Navbar>
        <div class="container-fluid">
      <div class="trends-predictions">
        <div class="row">
          <div class="col-6">
            <p class="fs-32 fw-400">Trend Predictions</p>
            <a href="" class="text-decoration:none">How it works?</a>
          </div>
          <div class="col-6 justify-content-end">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                Right-aligned
              </button>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                <li>
                  <button class="dropdown-item" type="button">Action</button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <div class="card-predicitons mt-3">
        <div class="row">
          <div class="col-6 d-flex gap-2">
            <img src="../assets/g16.svg" alt="" />
            <h3>Bitcoin</h3>
            <img src="../assets/Group.svg" alt="" />
            <h3>Tether</h3>
            <button class="btn-bit" type="submit">BTCUSDT</button>
          </div>
          <div class="col-6 d-flex gap-2 justify-content-end">
            <img src="../assets/Timer.svg" alt="" />
            <h6>Next Prediction</h6>
          </div>
        </div>
        <div class="row pt-3">
          <div class="col-12 d-flex gap-1">
            <h4>Last 30 days</h4>
            <div class="correction">
              <p class="fs-14">Correct predictions:235/477</p>
              <img src="../assets/Line1.svg" alt="" class="percent" />
            </div>
            <div class="accuracy d-flex gap-1">
              <div class="col-6">
                <p class="fs-14 fw-700">Accuracy</p>
                <p class="percent fs-16 fw-700">49.90%</p>
              </div>
              <div class="col-6">
                <img src="../assets/Accuracy.svg" alt="" />
              </div>
            </div>
            <div class="vr"></div>
            <div class="accuracy d-flex gap-1">
              <div class="col-6">
                <p class="fs-14 fw-700">F1Score</p>
                <p class="percent fs-16 fw-700">50.51%</p>
              </div>
              <div class="col-6">
                <img src="../assets/F1score.svg" alt="" />
              </div>
            </div>
            <div class="vr"></div>
            <div class="accuracy d-flex gap-1">
              <div class="col-6">
                <p class="fs-14 fw-700">Precision</p>
                <p class="percent fs-16 fw-700">46.55%</p>
              </div>
              <div class="col-6">
                <img src="../assets/precision.svg" alt="" />
              </div>
            </div>
            <div class="vr"></div>
            <div class="accuracy d-flex gap-2">
              <div class="col-6">
                <p class="fs-14 fw-700">Recall</p>
                <p class="percent fs-16 fw-700">55.86%</p>
              </div>
              <div class="col-6">
                <img src="../assets/Recall.svg" alt="" />
              </div>
            </div>
            <div class="vr"></div>
            <div class="accuracy d-flex gap-1">
              <div class="col-6">
                <p class="fs-14 fw-700">Capacity</p>
                <p class="percent fs-16 fw-700">55.86%</p>
              </div>
              <div class="col-6">
                <img src="../assets/capacity.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="timestamp">
                  <span class="fs-12 fw-400">11:00 AM-11:30 AM</span>
                </div>
                <div class="line"></div>
                <div class="trends text-center">
                  <img
                    class="img-fluid"
                    src="../assets/Vector92.svg"
                    alt="Ranging"
                  />
                </div>
                <p
                  class="fs-14 fw-700 pt-2 text-center"
                  style="margin-bottom: 0.75rem"
                >
                  Ranging
                </p>
                <p class="text-color fw-700 fs-14 text-center">297.4000 USDT</p>
                <div class="action result">
                  <img class="img-fluid p-0" src="../assets/Minus.svg" alt="" />
                  <b class="fs-14 fw-700">No Action</b>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="timestamp">
                  <span class="fs-12 fw-400">11:00 AM-11:30 AM</span>
                </div>
                <div class="line"></div>
                <div class="trends text-center">
                  <img
                    class="img-fluid"
                    src="../assets/Vector92.svg"
                    alt="Ranging"
                  />
                </div>
                <p
                  class="fs-14 fw-700 pt-2 text-center"
                  style="margin-bottom: 0.75rem"
                >
                  Ranging
                </p>
                <p class="text-color fw-700 fs-14 text-center">297.4000 USDT</p>
                <div class="action result">
                  <img class="img-fluid p-0" src="../assets/Minus.svg" alt="" />
                  <b class="fs-14 fw-700">No Action</b>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="timestamp">
                  <span class="fs-12 fw-400">11:00 AM-11:30 AM</span>
                </div>
                <div class="line"></div>
                <div class="trends text-center">
                  <img
                    class="img-fluid"
                    src="../assets/Vector92.svg"
                    alt="Ranging"
                  />
                </div>
                <p
                  class="fs-14 fw-700 pt-2 text-center"
                  style="margin-bottom: 0.75rem"
                >
                  Ranging
                </p>
                <p class="text-color fw-700 fs-14 text-center">297.4000 USDT</p>
                <div class="action result">
                  <img class="img-fluid p-0" src="../assets/Minus.svg" alt="" />
                  <b class="fs-14 fw-700">No Action</b>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="timestamp">
                  <span class="fs-12 fw-400">11:00 AM-11:30 AM</span>
                </div>
                <div class="line"></div>
                <div class="trends text-center">
                  <img
                    class="img-fluid"
                    src="../assets/Vector92.svg"
                    alt="Ranging"
                  />
                </div>
                <p
                  class="fs-14 fw-700 pt-2 text-center"
                  style="margin-bottom: 0.75rem"
                >
                  Ranging
                </p>
                <p class="text-color fw-700 fs-14 text-center">297.4000 USDT</p>
                <div class="action result">
                  <img class="img-fluid p-0" src="../assets/Minus.svg" alt="" />
                  <b class="fs-14 fw-700">No Action</b>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="timestamp">
                  <span class="fs-12 fw-400">11:00 AM-11:30 AM</span>
                </div>
                <div class="line"></div>
                <div class="trends text-center">
                  <img
                    class="img-fluid"
                    src="../assets/Vector92.svg"
                    alt="Ranging"
                  />
                </div>
                <p
                  class="fs-14 fw-700 pt-2 text-center"
                  style="margin-bottom: 0.75rem"
                >
                  Ranging
                </p>
                <p class="text-color fw-700 fs-14 text-center">297.4000 USDT</p>
                <div class="action result">
                  <img class="img-fluid p-0" src="../assets/Minus.svg" alt="" />
                  <b class="fs-14 fw-700">No Action</b>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="timestamp">
                  <span class="fs-12 fw-400">11:00 AM-11:30 AM</span>
                </div>
                <div class="line"></div>
                <div class="trends text-center">
                  <img
                    class="img-fluid"
                    src="../assets/Vector92.svg"
                    alt="Ranging"
                  />
                </div>
                <p
                  class="fs-14 fw-700 pt-2 text-center"
                  style="margin-bottom: 0.75rem"
                >
                  Ranging
                </p>
                <p class="text-color fw-700 fs-14 text-center">297.4000 USDT</p>
                <div class="action result">
                  <img class="img-fluid p-0" src="../assets/Minus.svg" alt="" />
                  <b class="fs-14 fw-700">No Action</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <section class="page-top">
        <div class="container mt-5 mb-4">
          <div class="border border-2 border-dark disclaimer">
            <div class="row p-3">
              <div
                class="col-lg-1 d-flex align-content-center flex-wrap justify-content-center"
              >
                <img
                  alt="Disclaimer"
                  class="flex-shrink-0"
                  src="../assets/Disclaimer.svg"
                />
              </div>
              <div class="col-lg-11 d-flex gap-2 justify-content-left">
                <img src="../assets/Alert.svg" alt="" class="alert" />
                <p class="fw-700 fs-14">
                  This Site and the content there in is for information purposes
                  only and is not intended to and does not provide tax, legal,
                  insurance or investment advice, and nothing on the Site should
                  be construed as an offer to sell, a solicitation of an offer to
                  buy, or a recommendation for any security by Yantraka or any
                  third party. You should consult an attorney or tax professional
                  regarding your specific legal or tax situation. In no event
                  shall Yantraka be liable for any damages, costs, expenses, legal
                  fees, or losses (including lost income or lost profit and
                  opportunity costs) in connection with any use of the Site and
                  the content therein. A reference to a particular investment or
                  security, a rating or any observation concerning an investment
                  that is part of the Site is not a recommendation to buy, sell or
                  hold such investment or security, does not address the
                  suitability of an investment or security and should not be
                  relied on as investment advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>

    </div>
  </template>
  <script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
  export default {
    name: "prediction-page",
    components: { Navbar, Footer },
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
  
  .card-predicitons {
    background-color: #e3e7ed;
    padding: 25px;
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
  