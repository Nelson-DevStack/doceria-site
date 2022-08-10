import { motion } from 'framer-motion';
import React from 'react';

import cookingImg from '../../assets/cooking.jpg';
import kitchenImg from '../../assets/kitchen.jpg';
import { MainColor } from '../Ui/Colors';
import Container from '../Ui/Container/Container';
import Heading from '../Ui/Heading';
import Text from '../Ui/Text';
import style from './style.module.css';

const AboutSection = () => {
  return (
    <div className={style.section} id="sobre">
      <Container>
        <div className={style.contentWrapper}>
          <motion.span
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeOut', duration: 0.8 }}
          >
            <Heading>Quem somos?</Heading>
          </motion.span>
          <motion.div
            className={style.imagesWrapper}
            initial={{ x: -150 }}
            whileInView={{ x: 0, transitionDuration: '300ms' }}
            viewport={{ once: true }}
          >
            <img src={kitchenImg} alt="Cozinha" className={style.firstImg} />
            <img
              src={cookingImg}
              alt="Preparo da comida"
              className={style.secondImg}
            />
          </motion.div>

          <motion.div
            className={style.textWrapper}
            initial={{ opacity: 0, transitionDuration: '500ms' }}
            whileInView={{ opacity: 1, transitionDuration: '500ms' }}
            viewport={{ once: true }}
          >
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
              <span style={{ color: MainColor }}> Arte da Confeitaria</span>.
            </Text>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
