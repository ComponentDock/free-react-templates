export const brandName = 'Zine'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const toggleDarkLabel = 'Toggle dark mode'

export const navLinks = ['Home', 'About', 'Contact'] as const

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Hero slider post ────────────────────────────────────────────────── */

export interface HeroSlide {
  seed: string
  alt: string
}

export const heroSlides: HeroSlide[] = [
  { seed: 'zine-hero-1', alt: 'A creative studio workspace' },
  { seed: 'zine-hero-2', alt: 'Design sketches on a desk' },
  { seed: 'zine-hero-3', alt: 'A moodboard pinned on a wall' },
]

export const heroCategory = 'Design'
export const heroTitle =
  'We are design & digital studio based in New York. This is our showcase of crafted awesomeness.'

/* ── Blog posts ──────────────────────────────────────────────────────── */

type PostVariant = 'text' | 'image-left' | 'image-right'

export interface ZinePost {
  title: string
  category: string
  variant: PostVariant
  seed?: string
}

export const posts: ZinePost[] = [
  {
    title:
      'Gathered by gravity bits of moving fluff Flatland venture hearts of the stars Hypatia birth cosmic ocean! Flatland are creatures of the cosmos Orion\u2019s sword two ghostly white figures',
    category: 'Handmade',
    variant: 'text',
  },
  {
    title: 'What was most significant about the office chairs',
    category: 'Interior',
    variant: 'image-left',
    seed: 'zine-p3',
  },
  {
    title: 'The sky is the limit only for those who aren\u2019t afraid to fly',
    category: 'Packaging',
    variant: 'image-right',
    seed: 'zine-p4',
  },
  {
    title:
      'To go places and do things that have never been done before, that\u2019s what living is all about',
    category: 'Handmade',
    variant: 'image-left',
    seed: 'zine-p5',
  },
  {
    title:
      'It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn\u2019t feel like a giant. I felt very, very small.',
    category: 'Handmade',
    variant: 'text',
  },
  {
    title: 'I believe every human has a finite number of heartbeats',
    category: 'Lifestyle',
    variant: 'image-right',
    seed: 'zine-p7',
  },
]

/* ── Load more + footer ──────────────────────────────────────────────── */

export const loadMoreLabel = 'Load more articles'

export const footerSocials = ['Twitter', 'Linkedin', 'Dribbble', 'Instagram'] as const

export const colorlibLabel = 'Colorlib'
export const creditPrefix = 'All rights reserved | This template is made with'
export const creditBrand = 'Colorlib'
