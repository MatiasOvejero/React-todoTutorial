import React from "react";
import "./App.css";


function ToDoForm({addTodo}){
  const [value,setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type = "text"
        class = "input"
        value = {value}
        onChange = {e => setValue(e.target.value)}
      />
    </form>
  )
}

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos (newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <ToDoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;