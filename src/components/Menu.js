import React, { Component } from "react";

import styles from "../css/menu.module.css";

class Menu extends Component {
  render() {
    const { menuItems, activeMenu, title } = this.props;

    return (
      <div className={styles.menu}>
        <div className={styles.menuHeader}>
          <h2>{title}</h2>
        </div>

        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={index === activeMenu ? styles.active : ""}
            >
              {item}

              <span>&gt;</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
