import React from 'react';
import useMedia from '../Hooks/useMedia';
import styles from './Footer.module.css';

const Footer = () => {
  const mobile = useMedia('(max-width: 700px)');

  return (
    <footer className={`${mobile ? styles.footerMobile : styles.footer} `}>
      <p>2022 | Usemobile. Todos direitos reservados</p>
    </footer>
  );
};

export default Footer;
