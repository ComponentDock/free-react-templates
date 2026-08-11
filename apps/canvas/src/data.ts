/* Canvas — all copy, links, and seeded placeholder image URLs in one place.
   Recreates ColorLib "Approach" (https://colorlib.com/wp/template/approach/).
   No ColorLib assets are copied — every image is a deterministic picsum seed
   and every brand glyph is an inline SVG path (see components/BrandIcon.tsx). */

export const BRAND = 'Canvas'

export const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Portfolio', href: '#portfolio', active: false },
  { label: 'About', href: '#services', active: false },
  { label: 'Services', href: '#services', active: false },
  { label: 'Blog', href: '#blog', active: false },
  { label: 'Contact', href: '#contact', active: false },
] as const

export const HERO_HEADLINE = 'Creativity is a wild mind and a disciplined eye.'
export const HERO_LEAD =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

/* Source embeds https://vimeo.com/191947042 via a fancybox lightbox. */
export const VIMEO_VIDEO_URL = 'https://player.vimeo.com/video/191947042'

export interface PortfolioItem {
  src: string
  alt: string
  /* Tailwind classes (kept here so the mosaic layout is data-driven). */
  span: string
  ratio: string
}

/* Two mosaic rows: 3/6/3 columns, then three equal 4-column cells; a mix of
   portrait and landscape crops echoing the source's B&W/color mix. */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: 'https://picsum.photos/seed/canvas-p1/900/1200',
    alt: 'Studio project — architectural model study',
    span: 'md:col-span-3',
    ratio: 'aspect-[3/4]',
  },
  {
    src: 'https://picsum.photos/seed/canvas-p2/1200/800',
    alt: 'Product shoot — minimal object arrangement',
    span: 'md:col-span-6',
    ratio: 'aspect-[3/2]',
  },
  {
    src: 'https://picsum.photos/seed/canvas-p3/800/800',
    alt: 'Brand identity — stationery grid',
    span: 'md:col-span-3',
    ratio: 'aspect-square',
  },
  {
    src: 'https://picsum.photos/seed/canvas-p4/900/600',
    alt: 'Editorial layout — spread mockup',
    span: 'md:col-span-4',
    ratio: 'aspect-[3/2]',
  },
  {
    src: 'https://picsum.photos/seed/canvas-p5/1200/900',
    alt: 'Exhibition space — installation view',
    span: 'md:col-span-4',
    ratio: 'aspect-[4/3]',
  },
  {
    src: 'https://picsum.photos/seed/canvas-p6/800/800',
    alt: 'Design system — color palette swatches',
    span: 'md:col-span-4',
    ratio: 'aspect-square',
  },
]

export const SERVICES = [
  {
    icon: 'Monitor',
    title: 'Interface Design',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'Compass',
    title: 'Product Design',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    icon: 'Layers',
    title: 'Quality Results',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export const BLOG_HEADING = 'Blog Updates'
export const BLOG_LEAD =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const BLOG_POST_DATE = 'October 18, 2019'
export const BLOG_AUTHOR_NAME = 'John Freeman'
export const BLOG_AUTHOR_ROLE = 'Thinker & Designer'
export const BLOG_AVATAR = 'https://picsum.photos/seed/canvas-a/120/120'
export const POSTS_PER_VIEW = 3
export const CAROUSEL_INTERVAL_MS = 5000

export const BLOG_POSTS = [
  {
    title: 'Google saying pseudo-telephoto is more important',
    image: 'https://picsum.photos/seed/canvas-b1/600/400',
  },
  {
    title: 'Designing for the space between screens',
    image: 'https://picsum.photos/seed/canvas-b2/600/400',
  },
  {
    title: 'The quiet power of editorial restraint',
    image: 'https://picsum.photos/seed/canvas-b3/600/400',
  },
  {
    title: 'Typography as the voice of a brand',
    image: 'https://picsum.photos/seed/canvas-b4/600/400',
  },
  {
    title: 'Motion that respects the message',
    image: 'https://picsum.photos/seed/canvas-b5/600/400',
  },
  {
    title: 'From moodboard to system: a case study',
    image: 'https://picsum.photos/seed/canvas-b6/600/400',
  },
  {
    title: 'Color in context: why swatches lie',
    image: 'https://picsum.photos/seed/canvas-b7/600/400',
  },
  { title: 'Prototyping the unbuildable', image: 'https://picsum.photos/seed/canvas-b8/600/400' },
  { title: 'Grids are opinions, not rules', image: 'https://picsum.photos/seed/canvas-b9/600/400' },
  {
    title: 'Portfolio sites that convert attention',
    image: 'https://picsum.photos/seed/canvas-b10/600/400',
  },
  {
    title: 'The craft of the creative brief',
    image: 'https://picsum.photos/seed/canvas-b11/600/400',
  },
  {
    title: 'Shipping work you are proud of',
    image: 'https://picsum.photos/seed/canvas-b12/600/400',
  },
] as const

export const CLIENTS = ['Google', 'InVision', 'Nike', 'Microsoft'] as const

/* Three plain link columns — the source duplicates columns 2 and 3; the
   duplication is kept for fidelity. */
export const FOOTER_LINK_COLUMNS = [
  ['Contact Us', 'hello@mydomain.com', '+1 829 2293 382', 'Support'],
  ['Home', 'Blog', 'Services', 'About Us'],
  ['Home', 'Blog', 'Services', 'About Us'],
] as const

export const SOCIAL_LINKS = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'linkedin', label: 'LinkedIn' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'skype', label: 'Skype' },
] as const

export const COPYRIGHT = '© Canvas. All rights reserved.'
