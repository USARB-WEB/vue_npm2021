import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: []
  },
  mutations: {
    addToCart(state, product) {
      state.cartProducts.push(product);
    }
  },
  getters: {
    getProducts: (state) => {
      return state.cartProducts;
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit("addToCart", product);
    }
  },
  modules: {}
});
