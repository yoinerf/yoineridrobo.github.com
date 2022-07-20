import React from 'react';
import { BannerInfo } from "./BannerInfo";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButtom.js";
//import './App.css';
const DefaultTodos=[
  {text:'Comprar Gabinete', completed:true},
  {text:'Comprar brazo', completed:false},
  {text:'Comprar teclado', completed:false},
  {text:'Comprar mause', completed:false},
  {text:'comprar segunda pantalla', completed:false}

];
function App() {
  const [todos, setTodos]=React.useState(DefaultTodos);
  const [searchValue,setSearchValue]=React.useState('');

  const pendiente = todos.filter(todo=>!todo.completed).length;
  const totalTodos=todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }
  else{
    searchedTodos=todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
   <React.Fragment>
      <BannerInfo/>
      <TodoCounter 
      total={totalTodos}
      pendientes={pendiente}
      />    
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>(
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

