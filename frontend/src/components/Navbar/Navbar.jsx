import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.abc}>
        <Link to="/" className={styles.link}>
          SpaceX
        </Link>
        <Link to="/" className={styles.link}>
          Capusle
        </Link>
        <Link to="/" className={styles.link}>
          Login
        </Link>
      </div>
    </div>
  );
};
