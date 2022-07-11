import React from 'react';
import { BannerInfo } from "./BannerInfo";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButtom.js";
//import './App.css';
const todos=[
  {text:'Comprar Gabinete', completed:true},
  {text:'Comprar brazo', completed:false},
  {text:'Comprar teclado', completed:false},
  {text:'Comprar mause', completed:false},
  {text:'comprar segunda pantalla', completed:false}

];
function App() {
  return (
   <React.Fragment>
      <BannerInfo/>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButtom />      
   </React.Fragment>
  );
}

export default App;

