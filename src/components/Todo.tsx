import React, { useState } from 'react'
interface ITodo{
    title : string;
    description: string;
}
export default function Todo() {
    const [todo, setTodo] = useState<ITodo>({} as ITodo)
    const [todoList, setTodoList] = useState<ITodo[]>([])
    function submitHandler(){
        setTodoList([...todoList, todo])
        setTodo({
            title: '',
            description: ''
        })
    }
    function handleList(title: string){
        const newTodo = todoList.filter(t=>t.title !== title)
        setTodoList(newTodo)
    }
    return (
        <div>
            <div className="inputSection">
                <input 
                    type="text" name="title" placeholder="title here"
                    value= {todo.title}
                    onChange={(e)=>setTodo({...todo, title:e.target.value})}
                />
                <input 
                    type="text" name="description" placeholder="description here"
                    value= {todo.description}
                    onChange={(e)=>setTodo({...todo, description:e.target.value})}
                />
                <button onClick={submitHandler}>submit</button>
            </div>
            <div className="outputSection">
                {
                    todoList.map((item, index)=>{
                        return(
                            <div key={index}>
                                <b>Title</b> {item.title} <br/>
                                <b>Description</b> {item.description}<br/>
                                <button onClick={()=>handleList(item.title)}>remove</button><br/><br/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

