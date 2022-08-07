import cookingImg from '../../assets/cooking.jpg';
import kitchenImg from '../../assets/kitchen.jpg';
import Container from '../Ui/Container/Container';
import Heading from '../Ui/Heading';
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              corporis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              corporis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              corporis!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
