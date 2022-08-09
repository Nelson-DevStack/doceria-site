import React from 'react';

import cookingImg from '../../assets/cooking.jpg';
import kitchenImg from '../../assets/kitchen.jpg';
import Container from '../Ui/Container/Container';
import Heading from '../Ui/Heading';
import Text from '../Ui/Text';
import style from './style.module.css';

const AboutSection = () => {
  return (
    <div className={style.section}>
      <Container>
        <div className={style.contentWrapper}>
          <Heading>Quem somos?</Heading>
          <div className={style.imagesWrapper}>
            <img src={kitchenImg} alt="Cozinha" className={style.firstImg} />
            <img
              src={cookingImg}
              alt="Preparo da comida"
              className={style.secondImg}
            />
          </div>

          <div className={style.textWrapper}>
            <Text>
              Desde 1995, nossa empresa é voltada para a produção de diversos
              tipos de Doces.
            </Text>
            <Text>
              Com mais de 20 anos atuando no mercado de Gastrônomia, nossos
              profissionais são formados e especializados em Confeitaria.
            </Text>
            <Text>
              Não só confeitamos, nós fazemos a{' '}
              <span style={{ color: '#BF3064', textDecoration: 'underline' }}>
                {' '}
                Arte da Confeitaria
              </span>
              .
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
