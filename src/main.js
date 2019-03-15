import Vue from 'vue';

import App from './App.vue';
import store from './store';

new Vue({
  strict: true,
  store,
  render: h => h(App)
}).$mount('#app');


// const counterStore = new Vuex.Store({
//   strict: true,
//   state: {
//     count: 1
//   }
// });

// const Counter = {
//   template: '<div>{{ count}}</div>',
//   computed: {
//     count() {
//       return this.$store.state.count;
//     }
//   }
// }

// new Vue({
//   strict: true,
//   store: counterStore,
//   render: h => h(Counter)
// }).$mount('#app');

// window.cs = counterStore;
