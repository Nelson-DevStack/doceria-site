import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-scroll';

import { MainColor } from '../Ui/Colors';
import Container from '../Ui/Container/Container';
import Heading from '../Ui/Heading';
import Text from '../Ui/Text';
import style from './style.module.css';

const Hero = () => {
  return (
    <section className={style.hero} id="home">
      <Container className={style.container}>
        <div className={style.content}>
          <Heading>
            Experimente os{' '}
            <span style={{ color: MainColor }}>melhores doces</span>
          </Heading>

          <Text>Feito por profissionais e experts da Confeitaria</Text>

          <Link className={style.button} spy smooth duration={500} to="doces">
            <BiChevronRight fontSize="30px" /> Ver produtos
          </Link>
        </div>
      </Container>

      <div className={style.heroImage} />
    </section>
  );
};

export default Hero;
