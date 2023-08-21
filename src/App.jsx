import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  
  const [ toDoList, setToDoList] = useState([
    { id: Math.random(), task : "Build a To-Do App"},
    { id: Math.random(), task : "Buy Christmas Decorations"},
    { id: Math.random(), task : "Water plants"}
  ])

  const addNewTask = (e) => {
    if (e.key === 'Enter') {
      let newTask = e.target.value;
      setToDoList(prevState => {
        return [...prevState, {id: Math.random(), task : newTask}]})
        ;
      e.target.value = ""
    }
  };
  
  const deleteTask = (id) => {
    console.log(id);
    // const targetTask = e.target.parentElement.previousElementSibling.innerText;
    // const targetTask = id;
    setToDoList(toDoList.filter((t) => t.id !== id))
    // const ujvaltozo = [...toDoList]
    // ujvaltozo.splice(id, 1)
    // setToDoList(ujvaltozo)
  }
  
  return (
    <div className="Box">
      {toDoList.map((todo) => {
        return <Todo key={todo.id} data={todo} onDelete={() => deleteTask(todo.id)}></Todo>})}
      <Input kiscica={addNewTask}></Input>
    </div>
  )
}

export default App
