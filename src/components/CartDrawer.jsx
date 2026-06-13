import { useCart } from '../context/CartContext';
import { formatoPrecio } from '../data/catalog';

export default function CartDrawer() {
  const { items, open, total, dispatch } = useCart();

  return (
    <>
      <div
        className={`drawer-overlay ${open ? 'is-open' : ''}`}
        onClick={() => dispatch({ type: 'CLOSE' })}
      />
      <aside className={`cart-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer-header">
          <h3>Tu carrito</h3>
          <button className="drawer-close" onClick={() => dispatch({ type: 'CLOSE' })} aria-label="Cerrar carrito">
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <p className="drawer-empty">
            Aún no has agregado nada. Elige tu formato y aroma favorito en la sección de productos.
          </p>
        ) : (
          <ul className="drawer-items">
            {items.map((item) => (
              <li className="drawer-item" key={item.key}>
                <div className="drawer-item-info">
                  <span className="drawer-item-name">{item.nombre}</span>
                  <span className="drawer-item-size">{item.gramos}</span>
                </div>
                <div className="drawer-item-qty">
                  <button onClick={() => dispatch({ type: 'DECREMENT', key: item.key })} aria-label="Quitar uno">
                    −
                  </button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => dispatch({ type: 'INCREMENT', key: item.key })} aria-label="Agregar uno">
                    +
                  </button>
                </div>
                <span className="drawer-item-price">{formatoPrecio(item.precio * item.cantidad)}</span>
                <button className="drawer-item-remove" onClick={() => dispatch({ type: 'REMOVE', key: item.key })} aria-label="Eliminar producto">
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="drawer-footer">
          <div className="drawer-subtotal">
            <span>Subtotal</span>
            <span>{formatoPrecio(total)}</span>
          </div>
          <button className="btn btn-primary drawer-checkout" disabled={items.length === 0}>
            Finalizar compra
          </button>
        </div>
      </aside>
    </>
  );
}
