import React from "react";
import Todo from "../Todo";

interface IProps{
    todos: TodoItem[],
    onTodoClick: (param:any)=>void
}

interface TodoItem{
    id: string
    text: string
    completed: boolean
}

const TodoList = ({todos,onTodoClick}:IProps) =>(
    <ul>
        {
            todos.map((todo:TodoItem)=><Todo key={todo.id} {...todo} onclick={()=>onTodoClick(todo.id)} />)
        }
    </ul>
);
export default TodoList;