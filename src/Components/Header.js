import React from 'react';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { ReactComponent as Exit } from '../Assets/exit.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import useMedia from '../Hooks/useMedia';

const Header = () => {
  const mobile = useMedia('(max-width: 700px)');

  return (
    <header className={`${mobile ? styles.headerMobile : styles.header} `}>
      <div className={`${mobile ? styles.leftMobile : styles.left} `}>
        <Logo onClick={() => window.location.reload()} />
        <p>Olá, Ana</p>
      </div>
      <Link
        className={`${mobile ? styles.exitMobile : styles.exit} `}
        to="/"
        aria-label="Exit"
      >
        <Exit />
        <p></p>
      </Link>
    </header>
  );
};

export default Header;
