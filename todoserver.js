module.exports = () => {
  const data = {todos: []};
  for (let i = 0; i < 30; i++) {
    data.todos.push({id: i.toString(), title: `task${i}`, completed: Math.random() >= 0.5});
  }
  return data;
};
