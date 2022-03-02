import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ug_c: null
  },
  mutations: {
    saveUG_C(state, value) {
      state.ug_c = value
    },
    resetUG_C(state) {
      state.ug_c = null
    },

  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })]
});
