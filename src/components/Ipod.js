import React, { Component } from "react";

import Display from "./Display";
import Wheel from "./Wheel";

import styles from "../css/ipod.module.css";

class Ipod extends Component {
  constructor() {
    super();

    this.state = {
      menuItems: ["Cover Flow", "Music", "Games", "Settings"],

      musicMenuItems: ["All Songs", "Artists", "Albums"],

      activeMenu: 0,

      selectedMenu: "",

      showMenu: true,

      showMusicMenu: false,
    };
  }

  // Move to next menu item
  moveNext = () => {
    if (!this.state.showMenu) {
      return;
    }

    const menuLength = this.state.showMusicMenu
      ? this.state.musicMenuItems.length
      : this.state.menuItems.length;

    this.setState((prevState) => ({
      activeMenu: (prevState.activeMenu + 1) % menuLength,
    }));
  };

  // Move to previous menu item
  movePrevious = () => {
    if (!this.state.showMenu) {
      return;
    }

    const menuLength = this.state.showMusicMenu
      ? this.state.musicMenuItems.length
      : this.state.menuItems.length;

    this.setState((prevState) => ({
      activeMenu:
        prevState.activeMenu === 0 ? menuLength - 1 : prevState.activeMenu - 1,
    }));
  };

  // Open selected menu
  openMenu = () => {
    if (!this.state.showMenu) {
      return;
    }

    // Open Music submenu
    if (
      !this.state.showMusicMenu &&
      this.state.menuItems[this.state.activeMenu] === "Music"
    ) {
      this.setState({
        showMusicMenu: true,
        activeMenu: 0,
      });

      return;
    }

    // Open selected Music submenu screen
    if (this.state.showMusicMenu) {
      this.setState({
        selectedMenu: this.state.musicMenuItems[this.state.activeMenu],
        showMenu: false,
        showMusicMenu: false,
      });

      return;
    }

    // Open main menu screen
    this.setState({
      selectedMenu: this.state.menuItems[this.state.activeMenu],
      showMenu: false,
    });
  };

  // Go back
  goBack = () => {
    // If Music submenu is open, go back to main menu
    if (this.state.showMusicMenu) {
      this.setState({
        showMusicMenu: false,
        activeMenu: 0,
      });

      return;
    }

    // If any screen is open, go back to menu
    if (!this.state.showMenu) {
      this.setState({
        showMenu: true,
      });
    }
  };

  render() {
    return (
      <div className={styles.ipod}>
        <Display
          menuItems={this.state.menuItems}
          musicMenuItems={this.state.musicMenuItems}
          activeMenu={this.state.activeMenu}
          selectedMenu={this.state.selectedMenu}
          showMenu={this.state.showMenu}
          showMusicMenu={this.state.showMusicMenu}
        />

        <Wheel
          moveNext={this.moveNext}
          movePrevious={this.movePrevious}
          openMenu={this.openMenu}
          goBack={this.goBack}
        />
      </div>
    );
  }
}

export default Ipod;
