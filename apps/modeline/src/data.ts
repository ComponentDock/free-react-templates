/** Every piece of copy and imagery the page renders, in one place. */

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About the Brand', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Shop', href: '#shop' },
  { label: 'News', href: '#newsletter' },
  { label: 'Contact', href: '#contact' },
] as const

export type SlideKey = 'editorial' | 'campaign'

export const slides: Record<SlideKey, { headline: string; image: string; alt: string }> = {
  editorial: {
    headline: 'Fashionista',
    image: 'https://picsum.photos/seed/modeline-1/1920/974?grayscale',
    alt: 'Monochrome editorial portrait in a pale studio',
  },
  campaign: {
    headline: 'Fashionista',
    image: 'https://picsum.photos/seed/modeline-2/1920/974?grayscale',
    alt: 'Monochrome campaign frame with soft window light',
  },
}

export const socials = [
  { name: 'Pinterest', mark: 'P' },
  { name: 'Facebook', mark: 'F' },
  { name: 'Twitter', mark: 'T' },
  { name: 'Dribbble', mark: 'D' },
  { name: 'Behance', mark: 'B' },
] as const

export const quote = {
  text: '“Style is the answer to everything — it outlives the season it was cut for.”',
  attribution: '— Marisol Vane, creative director',
}

/** The mosaic's measured map: one deliberate gap, one 2x2 hero tile. */
export interface MosaicTile {
  id: string
  label: string
  seed?: string
  /** `color` is the single warm plate, `navy` the wordmark plate. */
  tone: 'mono' | 'color' | 'navy' | 'gap'
  wide?: boolean
}

export const mosaic: MosaicTile[] = [
  { id: 'look-01', label: 'Backstage, Milan', seed: 'modeline-3', tone: 'mono' },
  { id: 'gap', label: '', tone: 'gap' },
  { id: 'look-02', label: 'First light', seed: 'modeline-4', tone: 'mono' },
  { id: 'look-03', label: 'The long coat', seed: 'modeline-5', tone: 'mono', wide: true },
  { id: 'look-04', label: 'Studio blue', seed: 'modeline-6', tone: 'mono' },
  { id: 'look-05', label: 'Pressed linen', seed: 'modeline-7', tone: 'mono' },
  { id: 'look-06', label: 'Nine to five', seed: 'modeline-8', tone: 'mono' },
  { id: 'look-07', label: 'Golden hour', seed: 'modeline-9', tone: 'color' },
  { id: 'look-08', label: 'Soft focus', seed: 'modeline-10', tone: 'mono' },
  { id: 'look-09', label: 'Off duty', seed: 'modeline-11', tone: 'mono' },
  { id: 'look-10', label: 'Modeline, studio', tone: 'navy' },
  { id: 'look-11', label: 'Second take', seed: 'modeline-12', tone: 'mono' },
]

export const aboutStatement = {
  heading: 'Fashions fade, style is eternal',
  paragraphs: [
    'We build looks that outlive the season — quiet tailoring, honest fabric and a line that reads from across the room. Every story we tell starts with the garment and ends with the person wearing it.',
    'The studio keeps its circle small on purpose: a pattern cutter, a knitwear atelier and a photographer who has shot every look we have published. It is slower, and it is the only way we know to keep a wardrobe honest.',
  ],
  signature: 'Modeline',
}

export const aboutSplit = {
  heading: 'The joy of dressing is an art',
  paragraphs: [
    'Our studio works season to season with a small circle of makers: pattern cutters, a knitwear atelier and a photographer who has shot every look we have published since the first collection.',
    'Nothing leaves the rail until it holds up in daylight. That is the whole method — cut it well, photograph it honestly, keep it in the wardrobe for years rather than weeks.',
  ],
}

export const products = [
  { id: 'black-coat', name: 'Black Coat', price: '$340', seed: 'modeline-20' },
  { id: 'black-dress', name: 'Black Dress', price: '$280', seed: 'modeline-21' },
  { id: 'white-shirt', name: 'White Shirt', price: '$120', seed: 'modeline-22' },
  { id: 'trousers', name: 'Trousers', price: '$210', seed: 'modeline-23' },
] as const

export const newsletter = {
  heading: 'The lookbook, twice a season',
  placeholder: 'Your E-mail',
  button: 'Subscribe',
}

export const contactDetails = [
  { label: 'Address:', value: '23 Mercer Street, New York' },
  { label: 'Phone:', value: '+1 212 555 0123' },
  { label: 'Mail:', value: 'studio@modeline.com' },
]
