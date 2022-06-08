import React, { useState } from "react";
import styles from "./tasks.module.css";
import { FiX } from 'react-icons/fi';


const Tasks = ({ task, handleToggle, handleDel }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [count, setCount] = useState(1);


  console.log(task.title);
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>

          <div className={styles.task}>
            <button className={task.status ? styles.checked : styles.unchecked} onClick={() => {
              handleToggle(task.id);
            }}></button>
            <p className={task.status ? styles.complt : styles.text}>{task.title}</p>
          </div>

          <div style={{ display: "flex" }}>
            <button
              className={styles.addMin}
              onClick={() => {
                if (count === 0) {
                  return;
                }
                setCount(count - 1);
              }}
            >
              -
            </button>
            <p className={styles.counter}>{count}</p>
            <button
              className={styles.addMin}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <button
            className={styles.addMin}
            onClick={() => {
              handleDel(task.id);
            }}
          >
            <FiX/>
          </button>
          </div>
        </div>
      </ul>
      {/* <div data-testid="tasks-empty" className={styles.empty}>
        Show when No Tasks are present
      </div> */}
    </>
  );
};

export default Tasks;
