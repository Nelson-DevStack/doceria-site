import React from 'react';

import styles from './style.module.css';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ className, children }: ContainerProps) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

Container.defaultProps = {
  className: ' ',
};

export default Container;
