import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";
import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  isComplete: boolean;
  content: string;
  onDelete: () => void;
  onComplete: () => {};
}

export function Task({
  id,
  content,
  isComplete,
  onDelete,
  onComplete,
}: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <Checkbox isCheck={isComplete} onClick={() => onComplete(id)} />
        <span className={isComplete ? styles.taskCompleted : ""}>
          {content}
        </span>
      </div>
      <DeleteButton onClick={() => onDelete(id)} />
    </div>
  );
}
