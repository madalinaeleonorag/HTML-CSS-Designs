import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from './plugins/router'
import store from './plugins/store'
import * as firebase from './plugins/firebase'

Vue.config.productionTip = false;
new Vue({
  el: "#app",
  vuetify,
  router,
  store,
  firebase,
  render: (h) => h(App),
});
