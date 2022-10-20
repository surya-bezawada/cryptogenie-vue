import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createAuth0 } from "@auth0/auth0-vue";
import HighchartsVue from "highcharts-vue";




const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-fwx278xt.us.auth0.com",
    client_id: "cR6oOiZxiNjyw5SZ8blf8F9wHtrOyLj8",
    responseType: "id_token",
    redirect_uri: window.location.origin,
  })
);


app.use(router);
app.use(HighchartsVue);

app.mount("#app");
