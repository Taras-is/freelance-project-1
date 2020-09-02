import React from "react";
import { Image } from "semantic-ui-react";
import logoImg from "../assets/images/logo.png";
import styles from "./Header/Header.module.css";

export default function () {
  return <Image src={logoImg} size="tiny" alt="Logo" className={styles.logo} />;
}
