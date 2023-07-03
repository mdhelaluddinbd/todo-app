import React, { useState } from 'react';

const NewTodo = (props) => {
    const [todoData,setTodoData]=useState("");

    const handleInputChange=(event)=>{
        setTodoData(event.target.value)
    }

    const handleSubmitButton=(event)=>{
        event.preventDefault();
        props.newTodo(todoData);
    }
    return (
        <div>
           <form action="" className='mt-5' onSubmit={handleSubmitButton}>
           <input className='font-bold text-xl border-2' type="text" value={todoData} placeholder='Enter new data' onChange={handleInputChange}  />
           <input className='font-bold bg-blue-600 text-white p-1 m-1 rounded w-48' type="submit" value="Add Todo" />
           </form>

        </div>
    );
};

export default NewTodo;