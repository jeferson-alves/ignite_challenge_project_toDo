import { Check } from "phosphor-react";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  isCheck?: boolean;
  onClick: () => {};
}

export function Checkbox({ isCheck, onClick }: CheckboxProps) {
  return (
    <div className={isCheck ? styles.boxChecked : styles.box} onClick={onClick}>
      {isCheck ? <Check size={10} weight="bold" color="#f2f2f2" /> : null}
    </div>
  );
}
