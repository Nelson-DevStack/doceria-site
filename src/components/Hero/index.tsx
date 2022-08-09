import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

import Container from '../Ui/Container/Container';
import Heading from '../Ui/Heading';
import Text from '../Ui/Text';
import style from './style.module.css';

const Hero = () => {
  return (
    <section className={style.hero}>
      <Container className={style.container}>
        <div className={style.content}>
          <Heading>
            Experimente os{' '}
            <span style={{ color: '#BF3064' }}>melhores doces</span>
          </Heading>

          <Text>Feito por profissionais e experts da Confeitaria</Text>

          <button className={style.button} type="button">
            <BiChevronRight fontSize="30px" /> Ver produtos
          </button>
        </div>
      </Container>

      <div className={style.heroImage} />
    </section>
  );
};

export default Hero;
