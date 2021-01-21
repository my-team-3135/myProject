import React from "react";

export interface IProps{
    onclick: (param: any) => void,
    completed: boolean,
    text: string
}

const Todo = ({onclick,completed,text}:IProps) =>(
    <li 
        onClick={onclick}
        style={{textDecoration: completed ? "line-through" : "none"}}
    >
        {text}
    </li>
)

export default Todo;