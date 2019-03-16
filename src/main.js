import Vue from 'vue';

import App from './App.vue';
import store from './store';

new Vue({
  strict: true,
  store,
  render: h => h(App)
}).$mount('#app');

// import Vuex from 'vuex';
// Vue.use(Vuex);

// const counterStore = new Vuex.Store({
//   strict: true,
//   state: {
//     count: 1,
//     createdTime: new Date()
//   },
//   getters: {
//     detail: state => {
//       return `createdTime: ${state.createdTime}`;
//     }
//   },
//   mutations: {
//     increment(state, amount) {
//       state.count += amount;
//     }
//   },
//   actions: {
//     increment(context, amount) {
//       console.log(context);
//       context.commit('increment', amount);
//     }
//   }
// });

// const Counter = {
//   template: '<div>{{count}}<p>{{detail}}</p></div>',
//   computed: {
//     count() {
//       return this.$store.state.count;
//     },
//     detail() {
//       return this.$store.getters.detail;
//     }
//   }
// };

// new Vue({
//   strict: true,
//   store: counterStore,
//   render: h => h(Counter)
// }).$mount('#app');

// window.cs = counterStore;
