import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo }) {
  const emptyValue = 'Todo list is empty'
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h1>{emptyValue}</h1>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        ></Todo>
      ))}
    </div>
  )
}

export default TodoList
