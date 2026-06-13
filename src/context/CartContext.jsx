import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { item } = action;
      const existing = state.items.find((i) => i.key === item.key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === item.key ? { ...i, cantidad: i.cantidad + 1 } : i
          ),
          flash: item.key,
        };
      }
      return { ...state, items: [...state.items, { ...item, cantidad: 1 }], flash: item.key };
    }
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, cantidad: i.cantidad + 1 } : i
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        items: state.items
          .map((i) => (i.key === action.key ? { ...i, cantidad: i.cantidad - 1 } : i))
          .filter((i) => i.cantidad > 0),
      };
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.key !== action.key) };
    case 'OPEN':
      return { ...state, open: true };
    case 'CLOSE':
      return { ...state, open: false };
    case 'CLEAR_FLASH':
      return { ...state, flash: null };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], open: false, flash: null });

  const total = state.items.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  const count = state.items.reduce((sum, i) => sum + i.cantidad, 0);

  const value = { ...state, total, count, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider');
  return ctx;
}
