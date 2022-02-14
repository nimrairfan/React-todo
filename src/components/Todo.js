import React, { useState } from 'react'
import banner from '../images/banner.png'
import "../components/todo.css"
import { MdEditCalendar } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";




const Todo = () => {
  const [todo , setTodo] = useState([])
  const [inputValue , setInputValue] = useState("")
  const [indexValue , setIndexValue] = useState("")
  const [editInputValue , setEditInputValue] = useState("")


  const addtodo = () => {
    todo.push(inputValue)
    setTodo([...todo])
    setInputValue("")
  }
  const deleteall = () => {
    setTodo([])
  }
  const edittodo = (e) => {
    setIndexValue(e)
  }
  const deletetodo = (e) => {
    todo.splice(e , 1 )
    setTodo([...todo])
  }
  const updatetodo = () => {
    todo.splice(indexValue, 1, editInputValue)
    setTodo([...todo])
    setIndexValue("")
    setEditInputValue("")
  }


  return (
    <>
      <div className='mainbox'>
        <div className='banner'>
          <img src={banner} alt="" width="100%" />
        </div>
        <div className='w-50 mx-auto maintodo'>
          <input 
          onChange={(e) => setInputValue(e.target.value)}
          
          size="80" className='maininput' type="text" placeholder='Enter your Task' />
          <button className='btn btn-light mx-2' onClick={addtodo}><GrAdd className='editicon' /></button>
          <button className='btn btn-light ' onClick={deleteall}><RiDeleteBin6Line className='editicon' /></button>
        </div>
        <section className='todolist'>
          {todo.map ((value , index , array) => {
            return index === indexValue ? (
              <>
              <input type="text" 
              key={index} placeholder="change you Todo" value={editInputValue} className="mt-3 w-50" onChange={(e) => setEditInputValue(e.target.value)}
              />
              <button className='btn btn-light mx-2' onClick={updatetodo}>
                <GrUpdate className='editicon' />
                </button>

              </>
            ): (
              <div key={index} className="list mt-5 " >
                <li className=' d-inline-block mx-3 ' >{value}</li>
                <button className='btn btn-light ' onClick={(index) => deletetodo(index)}>
                  <RiDeleteBin6Line className='editicon' /></button>
                  <button className='btn btn-light mx-2' onClick={(index) => edittodo(index)}>
                  <MdEditCalendar className='editicon' /></button>

              </div>
            )
            }
            )
            }  
        </section>
      </div>

    </>
  )
}

export default Todo
