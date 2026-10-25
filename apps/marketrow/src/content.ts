export type FlagKind = 'sale' | 'new' | 'low'

export interface Product {
  id: string
  name: string
  category: string
  score: number
  reviews: string
  price: string
  was?: string
  flag: { kind: FlagKind; label: string }
  photo: string
  alt: string
}

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export const SHOP = {
  eyebrow: 'Autumn edit',
  title: 'Everyday carry',
  chipLabel: 'Bag',
}

export const BAG_LABELS = {
  add: 'Add to bag',
  added: 'Added to bag',
} as const

export const PRODUCTS: Product[] = [
  {
    id: 'headphones',
    name: 'Arc Wireless Headphones',
    category: 'Audio',
    score: 4.6,
    reviews: '218',
    price: '$149',
    was: '$199',
    flag: { kind: 'sale', label: '-25%' },
    photo: 'https://picsum.photos/seed/marketrow-1/600/600',
    alt: 'Black over-ear headphones on a yellow background',
  },
  {
    id: 'watch',
    name: 'Meridian Leather Watch',
    category: 'Accessories',
    score: 4.9,
    reviews: '64',
    price: '$129',
    flag: { kind: 'new', label: 'New' },
    photo: 'https://picsum.photos/seed/marketrow-2/600/600',
    alt: 'Minimal watch with a brown leather strap held in a hand',
  },
  {
    id: 'backpack',
    name: 'Commuter Backpack 22L',
    category: 'Bags',
    score: 4.3,
    reviews: '1,042',
    price: '$84',
    was: '$99',
    flag: { kind: 'sale', label: '-15%' },
    photo: 'https://picsum.photos/seed/marketrow-3/600/600',
    alt: 'Navy backpack standing against a white wall',
  },
  {
    id: 'tote',
    name: 'Canvas Market Tote',
    category: 'Bags',
    score: 4.7,
    reviews: '389',
    price: '$38',
    flag: { kind: 'low', label: 'Only 3 left' },
    photo: 'https://picsum.photos/seed/marketrow-4/600/600',
    alt: 'Natural canvas tote bag hanging on a grey wall',
  },
]
