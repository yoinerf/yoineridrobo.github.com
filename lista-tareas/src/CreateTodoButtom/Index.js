import React from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){
    const onClickButton = (msg)=>{
    alert(msg);
}
    return(
        <button className="CreateTodoButton" type="submit"
        onClick={()=>onClickButton("gracias")}
        >+</button>
    );
}

export { CreateTodoButtom};