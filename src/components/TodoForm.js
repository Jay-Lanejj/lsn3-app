import React, { useState } from "react";


function TodoForm() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }
    setTodos([...todos].concat(newTodo))
    setTodo("")
  }
  // console.log();
  function deleteTodo(id){
    const updatedTodos = [ ...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)}
          className="todo-input"
          placeholder="Add a todo"
          value={todo}
        />
        <button type="submit" className="todo-button" >Add Todo</button>
      </form>
      <div className="output">
      {todos.map((todo) => <div key={todo.id}>
                              <div>{todo.text}</div>
                              <button className="del-btn" onClick={()=> deleteTodo(todo.id)}>delete</button>

                            </div>)}
      </div>


    </div>
  );
}
export default TodoForm
