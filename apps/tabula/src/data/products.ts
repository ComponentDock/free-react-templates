export interface ProductRow {
  id: string
  n: number
  name: string
  price: string
  quantity: string
  total: string
  detail: string
}

/** Canonical demo rows — row number, product, price, quantity, total. */
export const products: ProductRow[] = [
  {
    id: '1',
    n: 1,
    name: 'Laptop Technology AS2020',
    price: '$200.00',
    quantity: '2',
    total: '$400.00',
    detail:
      'A dependable everyday laptop with a crisp 15-inch display, all-day battery life, and enough headroom for work, streaming, and light creative tasks alike.',
  },
  {
    id: '2',
    n: 2,
    name: 'Laptop Technology AS2020',
    price: '$200.00',
    quantity: '2',
    total: '$400.00',
    detail:
      'Slim aluminum chassis pairs with a fast solid-state drive so projects open in seconds, wherever the day takes you.',
  },
  {
    id: '3',
    n: 3,
    name: 'Laptop Technology AS2020',
    price: '$200.00',
    quantity: '2',
    total: '$400.00',
    detail:
      'Tuned ergonomics keep long sessions comfortable, while the backlit keyboard glows softly for late-night work.',
  },
  {
    id: '4',
    n: 4,
    name: 'Laptop Technology AS2020',
    price: '$200.00',
    quantity: '2',
    total: '$400.00',
    detail:
      'Built for teams, with enterprise-ready security features and remote management tools that scale as you grow.',
  },
]
