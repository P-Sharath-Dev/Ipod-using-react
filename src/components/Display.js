import React, { Component } from "react";

import Menu from "./Menu";
import Screen from "./Screen";

import styles from "../css/display.module.css";

class Display extends Component {
  render() {
    const {
      menuItems,
      musicMenuItems,
      activeMenu,
      selectedMenu,
      showMenu,
      showMusicMenu,
    } = this.props;

    return (
      <div className={styles.display}>
        {showMenu && (
          <Menu
            menuItems={showMusicMenu ? musicMenuItems : menuItems}
            activeMenu={activeMenu}
            title={showMusicMenu ? "Music" : "iPod"}
          />
        )}

        <Screen
          activeMenu={
            showMenu
              ? showMusicMenu
                ? musicMenuItems[activeMenu]
                : menuItems[activeMenu]
              : selectedMenu
          }
          showMenu={showMenu}
        />
      </div>
    );
  }
}

export default Display;
