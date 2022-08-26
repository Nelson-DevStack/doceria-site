import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { Link } from 'react-scroll';

import cakeIcon from '../../assets/cake-icon.svg';
import Container from '../Ui/Container/Container';
import styles from './style.module.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBrandName, setShowBrandName] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
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
            <Link
              href="/"
              to="home"
              spy
              smooth
              duration={500}
              offset={-100}
              onClick={() => setShowNavbar(false)}
            >
              <img
                src={cakeIcon}
                className={styles.brandImage}
                alt="Brand Logo"
              />
            </Link>
            <Link
              to="home"
              spy
              smooth
              duration={500}
              offset={-100}
              className={styles.brand}
              onClick={() => setShowNavbar(false)}
              style={{
                transition: '300ms',
                opacity: !showBrandName && !showNavbar ? '0' : '1',
              }}
            >
              Doceria
            </Link>
          </nav>

          <nav
            className={` ${
              !showNavbar ? styles.hiddenNavLinks : styles.navLinks
            } ${styles.navLinks}`}
          >
            <ul>
              <li>
                <Link
                  to="home"
                  activeClass={styles.active}
                  spy
                  smooth
                  duration={500}
                  offset={-100}
                  onClick={() => setShowNavbar(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="doces"
                  activeClass={styles.active}
                  spy
                  smooth
                  duration={500}
                  offset={-60}
                  onClick={() => setShowNavbar(false)}
                >
                  Doces
                </Link>
              </li>
              <li>
                <Link
                  to="sobre"
                  activeClass={styles.active}
                  spy
                  smooth
                  duration={500}
                  offset={-50}
                  onClick={() => setShowNavbar(false)}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="contato"
                  activeClass={styles.active}
                  spy
                  smooth
                  duration={500}
                  offset={90}
                  onClick={() => setShowNavbar(false)}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  activeClass={styles.active}
                  spy
                  smooth
                  duration={500}
                  offset={-90}
                  onClick={() => setShowNavbar(false)}
                >
                  Reviews
                </Link>
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
