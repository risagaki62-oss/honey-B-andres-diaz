import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { aromas, ingredientes, formatoPrecio } from '../data/catalog';

export default function ProductCard({ formato }) {
  const [aromaId, setAromaId] = useState(aromas[0].id);
  const { dispatch, flash } = useCart();

  const aroma = aromas.find((a) => a.id === aromaId);
  const key = `${formato.id}-${aromaId}`;
  const justAdded = flash === key;

  function agregar() {
    dispatch({
      type: 'ADD',
      item: {
        key,
        nombre: `${formato.nombre} · ${aroma.nombre}`,
        gramos: formato.gramos,
        precio: formato.precio,
      },
    });
    setTimeout(() => dispatch({ type: 'CLEAR_FLASH' }), 900);
  }

  return (
    <article className="product-card">
      <div className="product-badge">{formato.badge}</div>
      <div className="product-size">{formato.gramos}</div>
      <h3>{formato.nombre}</h3>
      <p className="product-sub">{formato.sub}</p>
      <span className="gold-line" />
      <p>{formato.descripcion}</p>

      <div className="product-specs">
        {formato.specs.map(([label, value]) => (
          <div className="spec-row" key={label}>
            <span className="spec-label">{label}</span>
            <span className="spec-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="product-ingredients">
        <h4>Ingredientes destacados</h4>
        <div className="ingredient-tags">
          {ingredientes.map((ing) => (
            <span className="ingredient-tag" key={ing}>
              {ing}
            </span>
          ))}
        </div>
      </div>

      <div className="aroma-picker">
        <h4>Elige tu aroma</h4>
        <div className="aroma-options">
          {aromas.map((a) => (
            <button
              key={a.id}
              className={`aroma-dot ${aromaId === a.id ? 'is-active' : ''}`}
              style={{ '--dot-color': a.color }}
              onClick={() => setAromaId(a.id)}
              aria-pressed={aromaId === a.id}
              aria-label={a.nombre}
              title={a.nombre}
            />
          ))}
        </div>
        <p className="aroma-name">{aroma.nombre}</p>
      </div>

      <div className="product-footer">
        <span className="product-price">{formatoPrecio(formato.precio)}</span>
        <button className={`btn btn-primary ${justAdded ? 'is-added' : ''}`} onClick={agregar}>
          {justAdded ? 'Agregado ✓' : 'Agregar al carrito →'}
        </button>
      </div>
    </article>
  );
}
