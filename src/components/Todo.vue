<template>
  <div>
    <input type="checkbox" :checked="completed" />
    <input type="text" v-model="inputValue" />
    <button @click="deleteTodo">삭제</button>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props: {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: false,
      default: false
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.title;
      },
      set(value) {
        this.$store.commit('updateTodoTitle', {id: this.id, title: value});
      }
    }
  },
  methods: {
    deleteTodo() {
      this.$store.commit('deleteTodo', this.id);
    }
  }
};
</script>
