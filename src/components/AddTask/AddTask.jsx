import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({getTask}) => {
  // NOTE: do not delete `data-testid` key value pair

  const [text, setText] = useState("");

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        placeholder="Add todo..."
        className={styles.inputForm}
        onChange={(el) => {
          setText(el.target.value);
        }}
      />
      <button data-testid="add-task-button" className={styles.addBtn} onClick={()=>{
        getTask(text);
      }}>
        <b>+</b>
      </button>

    </div>
  );
};

export default AddTask;
