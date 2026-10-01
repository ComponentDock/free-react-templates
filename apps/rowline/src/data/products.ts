export interface CartItem {
  id: string
  name: string
  blurb: string
  unitPrice: number
  quantity: number
  checked: boolean
  thumbSeed: string
}

/** Format an amount as a plain source-style currency string ("$89.98"). */
export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`
}

/** Demo cart dataset (5 rows) for the sample line-item table. */
export const initialItems: CartItem[] = [
  {
    id: '1',
    name: 'Sneakers Shoes 2020 For Men',
    blurb: 'Fugiat voluptates quasi nemo, ipsa perferendis',
    unitPrice: 44.99,
    quantity: 2,
    checked: true,
    thumbSeed: 'rowline-1',
  },
  {
    id: '2',
    name: 'Sneakers Shoes 2020 For Men',
    blurb: 'Fugiat voluptates quasi nemo, ipsa perferendis',
    unitPrice: 30.99,
    quantity: 1,
    checked: false,
    thumbSeed: 'rowline-2',
  },
  {
    id: '3',
    name: 'Sneakers Shoes 2020 For Men',
    blurb: 'Fugiat voluptates quasi nemo, ipsa perferendis',
    unitPrice: 35.5,
    quantity: 1,
    checked: false,
    thumbSeed: 'rowline-3',
  },
  {
    id: '4',
    name: 'Sneakers Shoes 2020 For Men',
    blurb: 'Fugiat voluptates quasi nemo, ipsa perferendis',
    unitPrice: 76.99,
    quantity: 1,
    checked: false,
    thumbSeed: 'rowline-4',
  },
  {
    id: '5',
    name: 'Sneakers Shoes 2020 For Men',
    blurb: 'Fugiat voluptates quasi nemo, ipsa perferendis',
    unitPrice: 40.0,
    quantity: 1,
    checked: false,
    thumbSeed: 'rowline-1',
  },
]
