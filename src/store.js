import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 'ID1',
        title: 'AAA',
        completed: false
      },
      {
        id: 'ID2',
        title: 'BBB',
        completed: false
      }
    ]
  },
  getters: {
    todoCount(state) {
      return state.todos.filter(todo => !todo.completed).length;
    },
    doneTodoCount(state) {
      return state.todos.filter(todo => todo.completed).length;
    }
  }
});
