import React from "react";
import './TodoSearch.css';

function TodoSearch(){

    const [searchValue,setSearchValue]=React.useState('');

    const onSearchValueChange = (event)=>{
        /*alert(event.target.value);*/
        setSearchValue(event.target.value)
    };

    return[
        <input className="TodoSearch" 
        placeholder="Buscar" 
        value={searchValue}
        onChange={onSearchValueChange}
        />,
        <p>Estas buscando {searchValue} ?</p>
    ];
}

export {TodoSearch};