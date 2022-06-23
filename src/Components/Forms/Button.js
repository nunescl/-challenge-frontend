import React from 'react';
import useMedia from '../../Hooks/useMedia';
import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
  const mobile = useMedia('(max-width: 920px)');

  return (
    <button {...props} className={mobile ? styles.buttonMobile : styles.button}>
      {children}
    </button>
  );
};

export default Button;
