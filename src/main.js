import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from './plugins/router'
import * as firebase from './plugins/firebase'

Vue.config.productionTip = false;
new Vue({
  el: "#app",
  vuetify,
  router,
  firebase,
  render: (h) => h(App),
});
