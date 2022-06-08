import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({tasks}) => {
  // sample values to be replaced
  console.log(tasks);

  let totalTask = tasks.length;
  let unCompletedTask = 0;
  
  for(let t=0 ; t<tasks.length ; t++){
    if(tasks[t].status === false){
      unCompletedTask++;
    }
  }


  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <h3>
        You have <b data-testid="header-remaining-task">{unCompletedTask}</b> of{" "}
        <b data-testid="header-total-task">{totalTask}</b> tasks remaining
      </h3>
    </div>
  );
};

export default TaskHeader;
