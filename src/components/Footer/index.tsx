import cakeLogo from '../../assets/cake-icon.svg';
import Container from '../Ui/Container/Container';
import style from './style.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.brandWrapper}>
          <a href="/" className={style.brand}>
            <img src={cakeLogo} alt="Logo da Doceria" />
            Doceria
          </a>
        </div>

        <div className={style.footerColumns}>
          <div className={style.footerCol}>
            <h2 className={style.colTitle}>Navegação</h2>

            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Doces</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Reviews</a>
            </li>
          </div>

          <div className={style.footerCol}>
            <h2 className={style.colTitle}>Redes Sociais</h2>

            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Whatsapp</a>
            </li>
            <li>
              <a href="/">Gmail</a>
            </li>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
