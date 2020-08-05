import Vue from "vue";
import VueDarkMode from "vuedarkmode";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueDarkMode, {
  theme: "dark",
});