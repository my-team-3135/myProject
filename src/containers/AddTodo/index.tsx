import React, { useRef } from "react";
import { connect, DispatchProp } from "react-redux";
import { addTodo } from "../../store/actions";

let AddTodo = ({dispatch}:DispatchProp) =>{
    const inputRef = useRef<any>(null);
    return(
        <div>
            <form onSubmit={(e:React.FormEvent)=>{
                e.preventDefault();
                const val = inputRef.current.value;
                if (!val.trim()) {
                    return
                }
                dispatch(addTodo(val));
                inputRef.current.value = "";
            }}>
                <input ref={inputRef} />
                <button type="submit" >添加todo</button>
            </form>
        </div>
    )
};
export default connect()(AddTodo)