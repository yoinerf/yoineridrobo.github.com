import React from 'react';
import { BannerInfo } from "../BannerInfo/Index.js";
import { TodoCounter } from "../TodoCounter/Index.js";
import { TodoSearch } from "../TodoSearch/Index.js";
import { TodoList } from "../TodoList/Index.js";
import { TodoItem } from "../TodoItem/Index.js";
import { CreateTodoButtom } from "../CreateTodoButtom/Index.js";

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

  const completeTodo =(text)=>{
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  }

  const deleteTodo =(text)=>{
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
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
        completed={todo.completed}
        onComplete={()=>completeTodo(todo.text)}
        onDelete={()=>deleteTodo(todo.text)}
        />
        ))}
      </TodoList>
      
      <CreateTodoButtom />      
   </React.Fragment>
  );
}

export default App;

