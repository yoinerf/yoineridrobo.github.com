//import logo from './logo.svg';
//import './App.css';

import React from "react";
import { TodoCounter } from "./todoCounter";
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";
import { CreateTodoButton } from "./createTodoButton";
import { TodoSearch } from "./todoSearch";

const todos =[
  {text:'comprar gaginete', completed:false},
  {text:'comprar porta cascos', completed:false},
  {text:'comprar arrocera', completed:false}];



function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo=>(
        <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
