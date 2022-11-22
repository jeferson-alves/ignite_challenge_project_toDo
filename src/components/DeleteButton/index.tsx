import trash from "../../assets/trash.svg";
import { Trash } from "phosphor-react";

import styles from "./DeleteButton.module.css";

export function DeleteButton({ onClick }) {
  return (
    <div className={styles.deleteContainer} onClick={onClick}>
      {/* <img src={trash} /> */}
      <Trash className={styles.trash} size={19} />
    </div>
  );
}
