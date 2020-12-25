import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);
/* eslint-disable */
export default new Vuex.Store({
  state: {
    templatesData: [],
  },
  mutations: {
    setTemplatesData(state, payload) {
      state.templatesData = payload;
    },
  },
  actions: {
    getTemplatesFromDB({ commit }) {
      firebase
        .database()
        .ref("templates/")
        .on("value", (snap) => {
            console.log(snap.val())
          commit("setTemplatesData", snap.val());
        });
    },
  },
  getters: {
    templatesData: (state) => state.templatesData,
  },
});
