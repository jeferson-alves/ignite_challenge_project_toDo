import clipboard from "../../assets/Clipboard.svg";

import styles from "./emptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.emptyTaskContainer}>
      <img src={clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
