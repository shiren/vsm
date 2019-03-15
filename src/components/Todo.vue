<template>
  <div>
    <input type="checkbox" :checked="completed" />
    <input type="text" v-model="inputValue" />
    <button>삭제</button>
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
  data() {
    return {
      inputValue: this.title
    };
  }
};
</script>
