import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createAuth0 } from "@auth0/auth0-vue";


const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-a2dq1p7e.us.auth0.com",
    client_id: "eewwONFG7gBLghah6N1gJpJ1uAIFeUKc",
    redirect_uri: window.location.origin,
  })
);

app.use(router);

app.mount("#app");
