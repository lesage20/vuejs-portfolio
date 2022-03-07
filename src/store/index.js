import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ug_c: null
  },
  mutations: {
    saveUser(state, value) {
      state.ug_c = value
    },
    resetToken(state) {
      if (state.ug_c != null)  {
        state.ug_c.token = null
      }
    },

  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })]
});
