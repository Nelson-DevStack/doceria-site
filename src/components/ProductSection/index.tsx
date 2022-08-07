import style from './style.module.css';

const ProductSection = () => {
  return (
    <section className={style.section}>
      <div>
        <h1>Nossos Doces</h1>
      </div>

      <div>
        <div>
          <h1>Donuts</h1>
        </div>
        <div>
          <h1>Bolos</h1>
        </div>
        <div>
          <h1>Cupcakes</h1>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
