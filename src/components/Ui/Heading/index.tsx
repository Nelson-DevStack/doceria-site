import React from 'react';

import style from './style.module.css';

type HeadingProps = {
  children: string | React.ReactNode | JSX.Element;
};

const Heading = ({ children }: HeadingProps) => {
  return <h1 className={style.heading}>{children}</h1>;
};

export default Heading;
