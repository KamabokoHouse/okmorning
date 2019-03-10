import Vue from "vue";
import Vuex from "vuex";
import CheckList from "./module/CheckList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CheckList
  }
});
