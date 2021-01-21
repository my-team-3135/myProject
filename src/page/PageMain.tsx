import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList  from "../containers/VisibleTodoList";

const PageMain = () =>{
    console.log("pagemain");
    
    return(
        <div className="main-back">
            <AddTodo />
            <VisibleTodoList />
        </div>
    )
}

export default PageMain;