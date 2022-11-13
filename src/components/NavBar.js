import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";
import styles from "./NavBar.module.css";
import ImagenLogo from "../logo.png";

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.containerlogo} key={78954}>
        <Link to="/" className={styles.linkLogo}>
          <img className={styles.logo} src={ImagenLogo} alt="logo" />
        </Link>
      </div>
      <h1 className={`${styles.navHeader} ${styles.title}`} key={1}>
        Welcome!
      </h1>
      <div className={`${styles.navHeader} ${styles.searchTitle}`} key={4}>
        <Search />
      </div>
    </nav>
  );
}
