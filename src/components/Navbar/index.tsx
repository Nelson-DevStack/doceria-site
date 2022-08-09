import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

import cakeIcon from '../../assets/cake-icon.svg';
import Container from '../Ui/Container/Container';
import styles from './style.module.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBrandName, setShowBrandName] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      setShowBrandName(true);
    } else {
      setShowBrandName(false);
    }
  });

  return (
    <header className={`${styles.navbar}`}>
      <Container className={styles.container}>
        <nav className={styles.navbarContent}>
          <nav className={styles.brandWrapper}>
            <a href="/">
              <img
                src={cakeIcon}
                className={styles.brandImage}
                alt="Brand Logo"
              />
            </a>
            <a
              href="/"
              className={styles.brand}
              style={{
                transition: '300ms',
                opacity: !showBrandName && !showNavbar ? '0' : '1',
              }}
            >
              Doceria
            </a>
          </nav>

          <nav
            className={` ${
              !showNavbar ? styles.hiddenNavLinks : styles.navLinks
            } ${styles.navLinks}`}
          >
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Doces</a>
              </li>
              <li>
                <a href="/">Sobre</a>
              </li>
              <li>
                <a href="/">Contato</a>
              </li>
              <li>
                <a href="/">Reviews</a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setShowNavbar(!showNavbar)}
          >
            {!showNavbar ? <BiMenuAltRight /> : <BiX />}
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
