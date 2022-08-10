/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import secondWave from '../../assets/bluewave.svg';
import contactImage from '../../assets/contact-image.jpg';
import firstWave from '../../assets/wave-blue.svg';
import Container from '../Ui/Container/Container';
import Heading from '../Ui/Heading';
import style from './style.module.css';

const ContactSection = () => {
  return (
    <section className={style.section} id="contato">
      <div className={style.waveWrapper}>
        <img src={firstWave} alt="Onda de decoração" />
      </div>
      <div className={style.content}>
        <Container className={style.container}>
          <div>
            <div className={style.contentHeader}>
              <Heading>Entre em Contato</Heading>
            </div>

            <form className={style.form}>
              <label>
                Seu nome
                <input type="text" />
              </label>
              <label>
                E-mail
                <input type="email" />
              </label>
              <label>
                Mensagem
                <textarea rows={5} />
              </label>

              <button type="button" className={style.btn}>
                Enviar
              </button>
            </form>

            <div className={style.socialMedia}>
              <p>Ou confira nossas Redes:</p>
              <div className={style.iconsWrapper}>
                <div className={`${style.iconWrapper} ${style.instaIcon}`}>
                  <FaInstagram fontSize={26} />
                </div>
                <div className={`${style.iconWrapper} ${style.fbIcon}`}>
                  <FaFacebookF fontSize={20} />
                </div>
                <div className={`${style.iconWrapper} ${style.whatsappIcon}`}>
                  <FaWhatsapp fontSize={26} />
                </div>
              </div>
            </div>
          </div>

          <div className={style.imageWrapper}>
            <img src={contactImage} alt="Confeitando bolo" />
          </div>
        </Container>
      </div>
      <div className={style.lastWaveWrapper}>
        <img src={secondWave} alt="Onda de decoração" />
      </div>
    </section>
  );
};

export default ContactSection;
