export default {
  getTodos() {
    return fetch('http://localhost:3000/todos').then(response => response.json());
  }
};
