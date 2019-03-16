import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
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
    },
    getIndexByTodoId(state) {
      return id => {
        const todo = state.todos.find(todo => todo.id === id);
        return state.todos.indexOf(todo);
      };
    }
  },
  mutations: {
    addTodo(state, todo) {
      if (!todo.id) {
        todo.id = Date.now().toString();
      }

      state.todos.push(todo);
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
    updateTodoTitle(state, {index, title}) {
      state.todos[index].title = title;
    }
  },
  actions: {
    deleteTodo({getters, commit}, id) {
      commit('deleteTodo', getters.getIndexByTodoId(id));
    },
    updateTodoTitle({getters, commit}, {id, title}) {
      commit('updateTodoTitle', {
        index: getters.getIndexByTodoId(id),
        title
      });
    },
    fetchTodos({commit}) {
      api.getTodos().then(data => {
        data.forEach(todo => {
          commit('addTodo', todo);
        });
      });
    }
  }
});
