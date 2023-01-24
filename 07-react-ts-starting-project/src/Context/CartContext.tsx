import { createContext ,useState} from "react";
import {Item} from "../constant"

type Contextobj={
    items:Item[],
    addTodo:(text:string)=>void
    removeTodo:(id:number)=>void
}
export const CartContext=createContext<Contextobj>
    ({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:number)=>{}
})

const CartContextProvider:React.FC=({children})=>{
    const [todos,setTodos]=useState<Item[]>([])
  const todoHandler=(text:string)=>{
    let newItem={
      text,
      id:Date.now()
    }

    setTodos([...todos,newItem])
}
const removeTodoHandler=(id:number)=>{
setTodos(prev=>prev.filter(ele=>ele.id!==id))
}
const Contextvalue:Contextobj={items:todos,
                     addTodo:todoHandler,
                     removeTodo:removeTodoHandler
}
    return (
        <CartContext.Provider value={Contextvalue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider