// import * as React from "react";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import TodoList from "../../components/TodoList";
import { toggleTodo } from "../../store/actions"

const getVisibleTodos = (todos:any[]=[],filter:any) =>{
    switch(filter){
        case "SHOW_COMPLETED":
            return todos.filter(t=>t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t=>!t.completed);   
        case "SHOW_ALL":
        default:
            return todos;
    }
}

const  mapStateToProps = (state:any) =>{
    return{
        todos: getVisibleTodos(state.todos,state.visibilityFilter)
    }
}
const mapDispatchToProps = (dispatch:Dispatch) =>{
    return{
        onTodoClick: (id:any) =>{
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;