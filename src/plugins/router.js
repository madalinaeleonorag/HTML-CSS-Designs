import Vue from "vue";
import Router from "vue-router";
import Homepage from "../components/Homepage";
import Denisa from "../components/profiles/Denisa.vue";
import Madalina from "../components/profiles/Madalina.vue";
import Mugur from "../components/profiles/Mugur.vue";
import Narcisa from "../components/profiles/Narcisa.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    {
        path: "/Denisa",
        name: "Denisa",
        component: Denisa,
      },
      {
        path: "/Narcisa",
        name: "Narcisa",
        component: Narcisa,
      },
      {
        path: "/Madalina",
        name: "Madalina",
        component: Madalina,
      },
      {
        path: "/Mugur",
        name: "Mugur",
        component: Mugur,
      },
  ],
});
