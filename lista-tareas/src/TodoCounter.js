import React from "react";
import './TodoCounter.css';
function TodoCounter(){
    return(
        <div>
            <h1 className="Banner">
                <span class="title-word-1">YES,</span>
                <br/><span class="title-word-2">YOU</span>
                <br/><span class="title-word-3">CAN.</span>
            </h1>
            <div>
                <h1 className="TodoCounter">
                    <spam className="texto">Tienes </spam>
                    <spam className="numero">5 </spam>
                    <spam className="texto">tareas por completar.</spam> 
                </h1>
            </div>
        </div>
    )
}

export {TodoCounter};