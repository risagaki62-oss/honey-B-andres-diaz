import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import ProductCard from './components/ProductCard';
import { aromas, formatos } from './data/catalog';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />

      <section className="hero">
        <div className="hero-bg" />
        <div className="container">
          <span className="eyebrow">Shampoo sólido con miel</span>
          <h1>
            Cuidado capilar
            <br />
            <em>hecho en Colombia.</em>
          </h1>
          <p className="hero-text">
            Dos formatos, tres aromas. Elige el tuyo y agrégalo al carrito sin salir de la página.
          </p>
          <a href="#productos" className="btn btn-primary">
            Ver productos ↓
          </a>
        </div>
      </section>

      <section className="products-section" id="productos">
        <div className="container">
          <span className="eyebrow">Productos</span>
          <h2>
            Compra Honey'B.
            <br />
            <em>Elige tu presentación.</em>
          </h2>
          <div className="products-grid">
            {formatos.map((f) => (
              <ProductCard key={f.id} formato={f} />
            ))}
          </div>
        </div>
      </section>

      <section className="aromas-section" id="aromas">
        <div className="container">
          <span className="eyebrow">Aromas</span>
          <h2>
            ¿Cuál es
            <br />
            <em>tu aroma?</em>
          </h2>
          <div className="aromas-grid">
            {aromas.map((a) => (
              <div className="aroma-card" key={a.id}>
                <span className="aroma-swatch" style={{ background: a.color }} />
                <h3>{a.nombre}</h3>
                <p>{a.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="howto-section" id="como-se-usa">
        <div className="container">
          <span className="eyebrow">Cómo se usa</span>
          <h2>
            ¿Primera vez con
            <br />
            shampoo sólido? <em>Es facilísimo.</em>
          </h2>
          <div className="howto-steps">
            <Step n="01" title="Humedece" text="Moja tu cabello y la barra bajo el agua." />
            <Step n="02" title="Activa la espuma" text="Frota la barra entre tus manos o sobre el cabello hasta generar espuma cremosa." />
            <Step n="03" title="Masajea y enjuaga" text="Masajea el cuero cabelludo, enjuaga bien y deja que la miel haga su trabajo." />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <span className="logo">
            Honey<em>'B</em>
          </span>
          <p>Hecho en Colombia · Envíos a Colombia y despachos internacionales</p>
        </div>
      </footer>
    </CartProvider>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="step-card">
      <span className="step-num">{n}</span>
      <h3>{title}</h3>
      <span className="gold-line" style={{ margin: '0.8rem auto' }} />
      <p>{text}</p>
    </div>
  );
}

export default App;
