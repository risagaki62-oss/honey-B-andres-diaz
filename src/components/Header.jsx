import { useCart } from '../context/CartContext';

export default function Header() {
  const { count, dispatch } = useCart();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <span className="logo">
          Honey<em>'B</em>
        </span>

        <nav className="nav-links">
          <a href="#productos">Productos</a>
          <a href="#aromas">Aromas</a>
          <a href="#como-se-usa">Cómo se usa</a>
        </nav>

        <button
          className="cart-button"
          onClick={() => dispatch({ type: 'OPEN' })}
          aria-label="Abrir carrito"
        >
          <CartIcon />
          {count > 0 && <span className="cart-badge">{count}</span>}
        </button>
      </div>
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 4h2l.4 2M7 14h10l3-8H6.4M7 14L5.4 6M7 14l-1.5 3h11" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
