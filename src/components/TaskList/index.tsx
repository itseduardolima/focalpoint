import React, { useState, useEffect } from "react";
import { Task } from "@/types/task";
import styles from "./List.module.scss";
import { TrashIcon } from "../../../public/assets/icons/TrashIcon";
import "@/styles/checkbox.css";
import { Button } from "../Button";
import Modal from "../Modal";
import { initialTasks } from "@/mock/taskData";
import { Input } from "../Input";

const isBrowser = typeof window !== "undefined";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    if (isBrowser) {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      } else {
        setTasks(initialTasks);
      }
    }
  }, []);

  useEffect(() => {
    if (isBrowser && tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: tasks.length + 1,
        title: newTaskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setAddModalOpen(false);
    }
  };

  const handleDeleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
      setDeleteModalOpen(false);
    }
  };

  const openDeleteModal = (task: Task) => {
    setTaskToDelete(task);
    setDeleteModalOpen(true);
  };

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
                <button
                  className={styles.deleteButton}
                  onClick={() => openDeleteModal(task)}
                >
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
                <button
                  className={styles.deleteButton}
                  onClick={() => openDeleteModal(task)}
                >
                  <TrashIcon />
                </button>
              </li>
            ))}
        </ul>
      </div>
      <Button
        label="Adicionar nova tarefa"
        variant="primary"
        onClick={() => setAddModalOpen(true)}
      />
      <Modal
        isOpen={isAddModalOpen}
        title="Nova tarefa"
        content={
          <>
            <Input
              label="Título"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Digite"
            />
            <div className={styles.modalActions}>
              <Button
                label="Cancelar"
                variant="cancel"
                onClick={() => setAddModalOpen(false)}
              />

              <Button
                label="Adicionar"
                variant="primary"
                onClick={handleAddTask}
              />
            </div>
          </>
        }
        onClose={() => setAddModalOpen(false)}
      />

      <Modal
        isOpen={isDeleteModalOpen}
        title="Deletar tarefa"
        content={
          <>
            <p className={styles.descriptionModal}>
              Tem certeza que você deseja deletar essa tarefa?
            </p>
            <div className={styles.modalActions}>
              <Button
                label="Cancelar"
                variant="cancel"
                onClick={() => setDeleteModalOpen(false)}
              />
              <Button
                label="Deletar"
                variant="delete"
                onClick={handleDeleteTask}
              />
            </div>
          </>
        }
        onClose={() => setDeleteModalOpen(false)}
      />
    </>
  );
};

export default TaskList;
