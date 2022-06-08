import React, {useState} from "react";
import AddTask from "./AddTask/AddTask";
import { nanoid } from "nanoid";
import styles from "./taskApp.module.css";
import {Tasks} from "./Tasks"

import { TaskHeader } from "./TaskHeader";

export const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [tasks, setTasks] = useState([]);
 
  const getTask = (task) => {
    const data = {
      title: task,
      status: false,
      id: nanoid(5),
    };
    setTasks([...tasks, data]);
  };

  const handleToggle = (id) => {
    setTasks(tasks.map((e) => (e.id === id ? { ...e, status: !e.status } : e)));
    
  };

  const handleDel = (id) =>{
     setTasks(tasks.filter((task) => task.id !== id));
  }




  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <TaskHeader  tasks = {tasks}/>
      <AddTask getTask={getTask}/>
      <hr />
      <div>
          {tasks.map((e) => {
            return <Tasks key={e.id} task={e} handleToggle={handleToggle} handleDel={handleDel} />;
          })}
        </div>
      
    </div>
  );
};

// export default TaskApp;
