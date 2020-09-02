import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import styles from "./Header.module.css";

interface Option {
  title: string;
}

export default function () {
  const [options] = useState<Option[]>([
    {
      title: "Стоматология",
    },
  ]);

  const [isActiveSubjects, setIsActiveSubjects] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <Dropdown
      text="Тематика"
      item
      open={isActiveSubjects}
      options={options}
      onMouseEnter={() => setIsActiveSubjects(true)}
      onMouseLeave={() => setIsActiveSubjects(false)}
      className={styles.dropDownText}
    ></Dropdown>
  );
}
