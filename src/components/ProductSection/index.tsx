import React from 'react';

import cakeImage from '../../assets/cake-image.jpg';
import donutImage from '../../assets/donuts.jpg';
import greenCupcake from '../../assets/green-pink-cupcake.jpg';
import Container from '../Ui/Container/Container';
import Heading from '../Ui/Heading';
import Text from '../Ui/Text';
import style from './style.module.css';

const ProductSection = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.sectionHeader}>
          <Heading>Nossos Doces</Heading>
        </div>

        <div className={style.productGrid}>
          <div className={style.card}>
            <div className={style.imageWrapper}>
              <img src={donutImage} alt="Donuts Confeitados" />
            </div>
            <div className={style.cardContent}>
              <h1>Donuts</h1>
              <Text>
                Em uma boa sobremesa, não podem faltar os Donuts. Os nossos são
                preparados com as melhores massas e recheios.
              </Text>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.imageWrapper}>
              <img src={cakeImage} alt="Bolo com cobertura de chocolate" />
            </div>
            <div className={style.cardContent}>
              <h1>Bolos</h1>
              <Text>
                Nossos excelenetes bolos se destacam pela qualidade e sabor.
                Fazemos bolos de Casamento, Aniversário e diversos outros tipos.
              </Text>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.imageWrapper}>
              <img src={greenCupcake} alt="Cupcake com cobertura verde" />
            </div>
            <div className={style.cardContent}>
              <h1>Cupcakes</h1>
              <Text>
                Pensou em cupcake? <br />
                Temos os mais diversos sabores de Cupcakes
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
