import React from "react";
import { Segment, Menu, Image, Icon, Button } from "semantic-ui-react";
import Logo from "../Logo";
import languagesImg from "../../assets/icons/languages_black.png";
import Subject from "./Subject";
import Languages from "./Languages";
import styles from "./Header.module.css";

export default function () {
  return (
    <Segment className={styles.headerContainer}>
      <Menu attached="top" inverted secondary className={styles.headerMenu}>
        <div>
          <Menu.Item name="home" exact className={styles.menuItem}>
            <Logo />
          </Menu.Item>
          <Menu.Item name="languages" exact className={styles.menuItem}>
            <Image src={languagesImg} alt="languages" />
            <Languages />
          </Menu.Item>
        </div>
        <div>
          <Menu.Item name="subjects" exact className={styles.menuItem}>
            <Subject />
          </Menu.Item>
          <Menu.Item name="Специалисты" exact className={styles.menuItem}>
            Специалисты
          </Menu.Item>
          <Menu.Item name="События" exact className={styles.menuItem}>
            События
          </Menu.Item>
        </div>
        <div>
          <Menu.Item name="Войти" exact className={styles.menuItem}>
            Войти
          </Menu.Item>
          <Menu.Item name="subjects" exact className={styles.menuItem}>
            <Button basic color="teal">
              Стать специалистом
            </Button>
          </Menu.Item>
        </div>
      </Menu>
    </Segment>
  );
}
