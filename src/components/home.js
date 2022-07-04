import React, {useState, useEffect} from 'react';
import DisplayTransaction from './TodoForm';
import AddItem from './addItem'
import './addItem.css'
import TodoForm from './TodoForm';
  
    
    
function Home (){

    const [todo, setTodo] = useState ([]);
    // const TodoForm = (todo)=>{
    //     setTodo((task)=>[...task, {
    //         todo:todo,
    //     }])
    // }
    
    return (
        <div className='form-style'>
            <h1 className='headings'><u><i>To-Do List</i></u></h1>
            
                {/* <input type="email" className='input-line' placeholder="Enter your email" />
                <button className='todo-btn'>add</button> */}
                <TodoForm/>
              
        </div>

    );
}

export default Home;