import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null)
  console.log('render');
  console.log(todo);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setTodo(json))
  }, [])
  return (
    <div className="App">
      {todo && todo.title}
      
    </div>
  );
}

export default App;
