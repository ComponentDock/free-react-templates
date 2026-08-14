export const filters = [
  'All',
  'Art',
  'Graphic design',
  'Hand pens',
  'Offices',
  'Packaging',
  'Shopping',
] as const

export type Filter = (typeof filters)[number]

export interface PortfolioItem {
  id: string
  title: string
  category: Exclude<Filter, 'All'>
  src: string
  alt: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'art-1',
    title: 'Canvas No. 7',
    category: 'Art',
    src: 'https://picsum.photos/seed/gallery-1/600/800',
    alt: 'Abstract canvas artwork in bold colors',
  },
  {
    id: 'art-2',
    title: 'Brushstrokes',
    category: 'Art',
    src: 'https://picsum.photos/seed/gallery-2/600/450',
    alt: 'Close-up of textured brushstrokes',
  },
  {
    id: 'graphic-1',
    title: 'Poster Series',
    category: 'Graphic design',
    src: 'https://picsum.photos/seed/gallery-3/600/700',
    alt: 'Colorful poster series design',
  },
  {
    id: 'graphic-2',
    title: 'Brand Marks',
    category: 'Graphic design',
    src: 'https://picsum.photos/seed/gallery-4/600/500',
    alt: 'Set of minimalist brand marks',
  },
  {
    id: 'hand-1',
    title: 'Ink Studies',
    category: 'Hand pens',
    src: 'https://picsum.photos/seed/gallery-5/600/850',
    alt: 'Ink pen drawing studies',
  },
  {
    id: 'hand-2',
    title: 'Line Work',
    category: 'Hand pens',
    src: 'https://picsum.photos/seed/gallery-6/600/480',
    alt: 'Fine line pen illustration',
  },
  {
    id: 'office-1',
    title: 'Loft Workspace',
    category: 'Offices',
    src: 'https://picsum.photos/seed/gallery-7/600/720',
    alt: 'Bright loft workspace interior',
  },
  {
    id: 'office-2',
    title: 'Corner Desk',
    category: 'Offices',
    src: 'https://picsum.photos/seed/gallery-8/600/430',
    alt: 'Minimal corner desk setup',
  },
  {
    id: 'pack-1',
    title: 'Craft Boxes',
    category: 'Packaging',
    src: 'https://picsum.photos/seed/gallery-9/600/780',
    alt: 'Craft paper packaging boxes',
  },
  {
    id: 'pack-2',
    title: 'Bottle Label',
    category: 'Packaging',
    src: 'https://picsum.photos/seed/gallery-10/600/520',
    alt: 'Elegant bottle label design',
  },
  {
    id: 'shop-1',
    title: 'Sneaker Drop',
    category: 'Shopping',
    src: 'https://picsum.photos/seed/gallery-11/600/690',
    alt: 'Sneakers floating over a blurred street',
  },
  {
    id: 'shop-2',
    title: 'Retail Lookbook',
    category: 'Shopping',
    src: 'https://picsum.photos/seed/gallery-12/600/460',
    alt: 'Retail lookbook photography',
  },
]
