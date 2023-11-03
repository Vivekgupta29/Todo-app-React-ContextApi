import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {

    const {addTodo} = useTodo();
    const [Todo,setTodo] = useState("")

    const handleClick = (e)=>{
        e.preventDefault();
        if(!Todo) return 

        addTodo({todo: Todo, completed:false})
        console.log(Todo)
        setTodo("")
    }

    return (
        <form className="flex" onSubmit={handleClick}>
            <input
            value={Todo}
        
            onChange={(e)=>setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" 
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;