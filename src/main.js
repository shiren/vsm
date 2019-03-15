import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {}
});

new Vue({
  strict: true,
  store,
  render: h => h(App)
}).$mount('#app');
