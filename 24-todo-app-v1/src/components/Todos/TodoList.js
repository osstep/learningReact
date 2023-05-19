import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  const emptyValue = 'Todo list is empty'
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h1>{emptyValue}</h1>}
      {todos.map((todo, index) => (
        <Todo
          todo={todo}
          deleteTodo={deleteTodo}
          key={index}
          index={index}
        ></Todo>
      ))}
    </div>
  )
}

export default TodoList


