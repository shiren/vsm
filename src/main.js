import Vue from 'vue';

// import App from './App.vue';
// import store from './store';

// new Vue({
//   strict: true,
//   store,
//   render: h => h(App)
// }).$mount('#app');

import Vuex from 'vuex';
Vue.use(Vuex);
const counterStore = new Vuex.Store({
  strict: true,
  state: {
    count: 1
  },
  mutations: {
    increment(state, amount) {
      state.count += amount;
    }
  }
});

const Counter = {
  template: '<div>{{count}}</div>',
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};

new Vue({
  strict: true,
  store: counterStore,
  render: h => h(Counter)
}).$mount('#app');

window.cs = counterStore;
