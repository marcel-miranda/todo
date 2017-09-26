export default function sortedTodos(todos) {
  return Object.keys(todos).map(key => {
    return {
      key,
      ...todos[key],
    }
  })
    .filter(Boolean)
    .sort((a, b) => a.index > b.index);
}
