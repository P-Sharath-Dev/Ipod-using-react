import React, { Component } from "react";

import styles from "../css/wheel.module.css";

class Wheel extends Component {
  constructor() {
    super();

    this.wheelRef = React.createRef();

    this.isRotating = false;
    this.previousAngle = 0;
    this.angleDifference = 0;
  }

  // Calculate angle of pointer with respect to wheel center
  calculateAngle = (event) => {
    const wheel = this.wheelRef.current;

    const wheelRect = wheel.getBoundingClientRect();

    const centerX = wheelRect.left + wheelRect.width / 2;
    const centerY = wheelRect.top + wheelRect.height / 2;

    const x = event.clientX - centerX;
    const y = event.clientY - centerY;

    return Math.atan2(y, x) * (180 / Math.PI);
  };

  handlePointerDown = (event) => {
    this.isRotating = true;

    this.previousAngle = this.calculateAngle(event);
  };

  handlePointerMove = (event) => {
    if (!this.isRotating) return;

    const currentAngle = this.calculateAngle(event);

    // Calculate how much the wheel has rotated
    let difference = currentAngle - this.previousAngle;

    // Handle angle jump from +180 to -180
    if (difference > 180) {
      difference -= 360;
    }

    if (difference < -180) {
      difference += 360;
    }

    this.angleDifference += difference;

    // Rotate clockwise
    if (this.angleDifference >= 35) {
      this.props.moveNext();
      this.angleDifference = 0;
    }

    // Rotate anti-clockwise
    if (this.angleDifference <= -35) {
      this.props.movePrevious();
      this.angleDifference = 0;
    }

    this.previousAngle = currentAngle;
  };

  handlePointerUp = () => {
    this.isRotating = false;
  };

  render() {
    return (
      <div
        ref={this.wheelRef}
        className={styles.wheel}
        onPointerDown={this.handlePointerDown}
        onPointerMove={this.handlePointerMove}
        onPointerUp={this.handlePointerUp}
        onPointerLeave={this.handlePointerUp}
      >
        <div className={styles.menuButton} onClick={this.props.goBack}>
          MENU
        </div>

        <div className={styles.leftButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/12209/12209611.png"
            alt="Previous"
          />
        </div>

        <div className={styles.rightButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4340/4340043.png"
            alt="Next"
          />
        </div>

        <div className={styles.bottomButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9684/9684974.png"
            alt="Play/Pause"
          />
        </div>

        <div
          className={styles.centerButton}
          onClick={this.props.openMenu}
        ></div>
      </div>
    );
  }
}

export default Wheel;
