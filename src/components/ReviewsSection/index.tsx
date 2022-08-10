import React from 'react';

import face1 from '../../assets/face1.jpg';
import face2 from '../../assets/face2.jpg';
import face3 from '../../assets/face3.jpg';
import Container from '../Ui/Container/Container';
import Heading from '../Ui/Heading';
import Text from '../Ui/Text';
import style from './style.module.css';

const ReviewsSection = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.secTitle} id="reviews">
          <Heading>Não fique de fora, experimente</Heading>
        </div>

        <div className={style.cardGrid}>
          <div className={style.card}>
            <div className={style.faceIcon}>
              <img src={face2} alt="face" />
            </div>
            <div className={style.cardHeader}>
              <h1>Damião Catela</h1>
              <span>Degustador</span>
            </div>

            <Text>
              Essa é uma das melhores docerias da cidade, estão de Parabéns.
            </Text>
          </div>

          <div className={style.card}>
            <div className={style.faceIcon}>
              <img src={face1} alt="face" />
            </div>
            <div className={style.cardHeader}>
              <h1>Victória Monsato</h1>
              <span>Chef de Cozinha</span>
            </div>

            <Text>
              Nunca havia provado doces tão bons antes. A qualidade é muito boa.
            </Text>
          </div>

          <div className={style.card}>
            <div className={style.faceIcon}>
              <img src={face3} alt="face" />
            </div>
            <div className={style.cardHeader}>
              <h1>Chris Simão</h1>
              <span>Cliente</span>
            </div>

            <Text>Os doces são excelentes e o antendimento foi nota 10!</Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
