import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { EmptyTask } from "./components/EmptyTask/EmptyTask";

import styles from "./App.module.css";

interface TasksProps {
  id: string;
  isComplete: boolean;
  content: string;
}

export function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const countTasksCompleted = (tasks: TasksProps[]) => {
    return tasks.reduce((acc, cur) => {
      if (cur.isComplete === true) {
        acc++;
      }
      return acc;
    }, 0);
  };

  const handleSubmit = (value: string) => {
    if (value.trim().length === 0) {
      return null;
    }

    const newTask = {
      id: uuidv4(),
      content: value,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleComplete = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return { ...task };
      }
    });
    setTasks(newTasks);
  };

  return (
    <div className={styles.appContainer}>
      <Header>
        <Input onSend={handleSubmit} />
      </Header>
      <div className={styles.appContent}>
        <div className={styles.contentInfo}>
          <div className={styles.taskCreated}>
            Tarefas criadas
            <div className={styles.counter}>{tasks.length}</div>
          </div>
          <div className={styles.taskCompleted}>
            Concluídas
            <div className={styles.counterCompleted}>
              {tasks.length === 0
                ? "0"
                : `${countTasksCompleted(tasks)} de ${tasks.length}`}
            </div>
          </div>
        </div>
        {tasks.length === 0 ? (
          <EmptyTask />
        ) : (
          tasks.map((item) => (
            <Task
              key={item.id}
              id={item.id}
              isComplete={item.isComplete}
              content={item.content}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
}
