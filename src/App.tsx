import React,{FC, ChangeEvent,useState,MouseEvent} from 'react';
import "./App.css"
import {ITask} from './interface'
import { Task } from './Task'

const App:FC = () => {

  const [task,setTask] = useState<string>('')
  const [deadline,setDeadline] = useState<number>(0)
  const [todoList,setTodoList] = useState<ITask[]>([])

  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => { 
  if(event.target.name === 'task'){ 
    setTask(event.target.value)
  }else{ 
    setDeadline(Number(event.target.value))
  }
  }
  const addTask = ():void => { 
    const newTask = {taskName:task,deadline:deadline}
   console.log(newTask);
    setTodoList([...todoList,newTask])
    console.log(todoList);
    setTask('')
    setDeadline(0)
  } 
  const deleteTask = (id:number) => {
    console.log(id)
    setTodoList(todoList.filter((task,index )=> index != id))
    }
  // const deleteTask = (taskNameToDelete:string) => {
  //   console.log(taskNameToDelete)
  //   setTodoList(todoList.filter(task => task.taskName != taskNameToDelete))
  //   }
  
  return (
    <div className="App">
       <div className="header">
          <div className="inputContainer">
             <input
              type="text" 
              placeholder = "Task..."
              name = "task"
              value = {task}
              onChange = {handleChange}
              />
             <input 
             type="number" 
             placeholder = "Deadline (in Days)... "
             value = {deadline}
             name = "deadline"
             onChange = {handleChange}
             />
          </div>
          <button onClick = {addTask} >Add Task</button>
       </div>
       <div className="todoList">
         { 
           todoList.map((task:ITask,index:number) =>( 
             <Task 
             key={index}
             task = {task}
             index = {index}
            deleteTask = {deleteTask}
             />
           ))
         }
       </div>
    </div>
  );
}

export default App;
