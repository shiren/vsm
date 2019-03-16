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
    },
    totalCount(state, getters) {
      return getters.todoCount + getters.doneTodoCount;
    }
  },
  mutations: {
    addTodo(state, title) {
      state.todos.push({
        title: title,
        completed: false,
        id: Date.now().toString()
      });
    },
    deleteTodo(state, id) {
      const todo = state.todos.find(todo => todo.id == id);
      const index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    }
  }
});
