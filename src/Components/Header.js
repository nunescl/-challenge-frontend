import React from 'react';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { ReactComponent as Exit } from '../Assets/exit.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo onClick={() => window.location.reload()} />
        <p>Olá, Ana</p>
      </div>
      <Link className={styles.exit} to="/" aria-label="Exit">
        <Exit />
      </Link>
    </header>
  );
};

export default Header;
