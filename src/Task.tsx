import React,{FC,MouseEvent} from 'react';
import { ITask } from './interface';

interface Props{ 
    task:ITask;
    index : number;
    deleteTask : (id:number) => void
    // deleteTask : (taskNameToDelete:string)  => void
}

export const Task =    ({task,deleteTask,index}:Props) => {
    console.log(task);
  
    
  return (
    <div className="task">
       <div className="content">
           <span>{task.taskName} </span>
           <span>{task.deadline} </span>
       </div>
       {/* <button onClick = { () => deleteTask(task.taskName) }>X</button> */}
       <button onClick = { () => deleteTask(index) }>X</button>
    </div>
  );
}


