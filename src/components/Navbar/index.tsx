import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

import cakeIcon from '../../assets/cake-icon.svg';
import Container from '../Ui/Container/Container';
import styles from './style.module.css';

const Navbar = () => {
  return (
    <header className={`${styles.navbar}`}>
      <Container className={styles.container}>
        <nav className={styles.navbarContent}>
          <a href="/">
            <img src={cakeIcon} className={styles.brand} alt="Brand Logo" />
          </a>

          <button type="button" className={styles.menuBtn}>
            <BiMenuAltRight />
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
