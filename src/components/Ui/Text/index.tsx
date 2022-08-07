import React from 'react';

import style from './style.module.css';

type TextProps = {
  children: string | React.ReactNode | JSX.Element;
};

const Text = ({ children }: TextProps) => {
  return <p className={style.text}>{children}</p>;
};

export default Text;
