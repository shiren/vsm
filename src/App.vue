<template>
  <div>
    <h1>TODO LIST</h1>
    <input type="text" v-model="newTodoTitle" /><button @click="addTodo">추가</button>
    <todolist :todos="todos"></todolist>
  </div>
</template>
<script>
import Todolist from '@/components/Todolist';

export default {
  name: 'App',
  components: {
    Todolist
  },
  data() {
    return {
      todos: [
        {
          id: 'ID1',
          title: 'AAA',
          completed: false
        },
        {
          id: 'ID2',
          title: 'BBB',
          completed: true
        }
      ],
      newTodoTitle: ''
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    addTodo() {
      console.log(this.newTodoTitle);
    }
  }
};
</script>
