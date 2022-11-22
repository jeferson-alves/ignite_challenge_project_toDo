import styles from "./Header.module.css";

import logo from "../../assets/Logo.svg";
import { Input } from "../Input";
import { Children } from "react";

export function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.img} src={logo} />
      {props.children}
    </div>
  );
}
