import Vue from 'vue';
import Vuex from 'vuex';

// import App from './App.vue';
// import store from './store';

// new Vue({
//   strict: true,
//   store,
//   render: h => h(App)
// }).$mount('#app');

Vue.use(Vuex);

const counterStore = new Vuex.Store({
  strict: true,
  state: {
    count: 1
  },
  getters: {
    describe: state => {
      return `current count: ${state.count}`;
    }
  }
});

const Counter = {
  template: '<div>{{describe}}</div>',
  computed: {
    describe() {
      return this.$store.getters.describe;
    }
  }
};

new Vue({
  strict: true,
  store: counterStore,
  render: h => h(Counter)
}).$mount('#app');

window.cs = counterStore;
