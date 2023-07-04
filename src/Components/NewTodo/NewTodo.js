import React, { useState } from 'react';

const NewTodo = (props) => {
    const [todoData,setTodoData]=useState([""]);

    const handleInputChange=(event)=>{
        setTodoData(event.target.value)
    }

    const handleSubmitButton=(event)=>{
        event.preventDefault();
        props.newTodo(todoData);
    }
    return (
        <div className=''>
           <form action="" className='mt-5 w-12/12 flex justify-center items-center flex-wrap' onSubmit={handleSubmitButton}>
           <input className='font-bold text-xl border-2 w-full h-10' type="text" value={todoData} placeholder='Enter new data' onChange={handleInputChange}  />
           <input className='font-bold bg-blue-600 text-white p-1 m-1 rounded w-96 h-10 mt-3' type="submit" value="Add Todo" />
           </form>

        </div>
    );
};

export default NewTodo;