import React, { useState } from "react";
import { Task } from "../../types/task";
import styles from "./List.module.scss";
import { TrashIcon } from "../../../public/assets/icons/TrashIcon";
import "@/styles/checkbox.css";
import { Button } from "../Button";
import { initialTasks } from "@/mock/taskData";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Suas tarefas de hoje</h2>
        <ul className={styles.list}>
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <li key={task.id} className={styles.item}>
                <div className={styles.description}>
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <span>{task.title}</span>
                </div>
                <button className={styles.deleteButton}>
                  <TrashIcon />
                </button>
              </li>
            ))}
        </ul>

        <h2 className={styles.title}>Tarefas finalizadas</h2>
        <ul className={styles.list}>
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <li key={task.id} className={styles.item}>
                <div className={styles.description}>
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <span className={styles.completedItem}>{task.title}</span>
                </div>
                <button className={styles.deleteButton}>
                  <TrashIcon />
                </button>
              </li>
            ))}
        </ul>
      </div>
      <Button label="Adicionar nova tarefa" variant="primary" />
    </>
  );
};

export default TaskList;
