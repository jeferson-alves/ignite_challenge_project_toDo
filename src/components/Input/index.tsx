import { useState } from "react";

import plus from "../../assets/plus.svg";
import styles from "./Input.module.css";

interface InputProps {
  onSend: () => void;
}

export function Input({ onSend }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = () => {
    setInputValue(event.target.value);
  };

  const handleOnClick = (value: string) => {
    onSend(value);
    setInputValue("");
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button
        className={styles.button}
        onClick={() => handleOnClick(inputValue)}
      >
        Enviar
        <img src={plus} />
      </button>
    </div>
  );
}
