import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';

// new Vue({
//   strict: true,
//   store,
//   render: h => h(App)
// }).$mount('#app');


const counterStore = new Vuex.Store({
  strict: true,
  state: {
    count: 1,
    createdTime: new Date()
  },
  getters: {
    detail: state => {
      return `createdTime: ${state.createdTime}`;
    }
  }
});

const Counter = {
  template: '<div>{{count}}<p>{{detail}}</p></div>',
  computed: {
    count() {
      return this.$store.state.count;
    },
    detail() {
      return this.$store.getters.detail;
    }
  }
}

new Vue({
  strict: true,
  store: counterStore,
  render: h => h(Counter)
}).$mount('#app');

window.cs = counterStore;
