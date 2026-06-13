export const aromas = [
  {
    id: 'lino',
    nombre: 'Lino Blanco',
    descripcion: 'Limpio, suave, algodonado.',
    color: '#EFE7D8',
  },
  {
    id: 'cafe',
    nombre: 'Flor de Café',
    descripcion: 'Cálido, tostado, envolvente.',
    color: '#B6824C',
  },
  {
    id: 'andino',
    nombre: 'Bosque Andino',
    descripcion: 'Verde, fresco, herbal.',
    color: '#7E9A6B',
  },
];

export const formatos = [
  {
    id: 'diario',
    nombre: 'Formato Diario',
    gramos: '70g',
    sub: 'El más popular — uso regular',
    precio: 34000,
    descripcion:
      'Ideal para el día a día: rinde muchísimo y deja el cabello limpio, suave y con brillo natural.',
    specs: [
      ['Duración', '35–58 lavadas aprox.'],
      ['Equivale a', '≈ 2–3 botellas aprox.'],
      ['Empaque', 'Cartón 100% reciclable'],
    ],
    badge: 'Uso regular',
  },
  {
    id: 'premium',
    nombre: 'Formato Premium',
    gramos: '20g',
    sub: 'Hospitalidad & viaje',
    precio: 14000,
    descripcion:
      'Amenidad premium para hotelería de lujo, glamping y experiencias exclusivas.',
    specs: [
      ['Duración', '10–16 lavadas aprox.'],
      ['Equivale a', '≈ 0.5–1 botella aprox.'],
      ['Empaque', 'Cartón 100% reciclable'],
    ],
    badge: 'Hospitalidad',
  },
];

export const ingredientes = [
  'Miel de abejas',
  'Romero',
  'Cúrcuma',
  'Manteca de karité',
  'Aceite de coco',
];

export function formatoPrecio(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor);
}
