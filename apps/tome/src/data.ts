export const brandName = 'Tome'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const navLinks = ['Home', 'Fashion', 'Model', 'Travel', 'About us', 'Contact'] as const

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Hero slider (left split) ─────────────────────────────────────────── */

export interface HeroSlide {
  seed: string
  category: string
  headline: string
}

export const heroSlides: HeroSlide[] = [
  {
    seed: 'tome-hero-1',
    category: 'Fashion',
    headline: 'Popular Lifestyle with Fashion & Modeling',
  },
  {
    seed: 'tome-hero-2',
    category: 'Model',
    headline: 'Canadian Girl make your world go round',
  },
]

export const heroIntervalMs = 5000

export const slideLabel = (n: number): string => `Go to slide ${n}`

/* ── Blog grid (right split) ──────────────────────────────────────────── */

export interface BlogEntry {
  seed: string
  date: string
  author: string
  heading: string
  excerpt: string
}

export const blogEntries: BlogEntry[] = [
  {
    seed: 'tome-b1',
    date: 'July 29, 2026',
    author: 'Admin',
    heading: 'The Art of Layering: A Spring Style Guide',
    excerpt:
      'From sheer trenches to boxy knits, layering is the quiet superpower of a well-dressed wardrobe. Here is how to stack textures without losing your silhouette.',
  },
  {
    seed: 'tome-b2',
    date: 'July 22, 2026',
    author: 'Admin',
    heading: 'Behind the Scenes of a Fashion Editorial',
    excerpt:
      'Studio lights, three cameras and a rack of last-minute alterations — an inside look at how a single cover story comes together in forty-eight hours.',
  },
  {
    seed: 'tome-b3',
    date: 'July 15, 2026',
    author: 'Admin',
    heading: 'Minimalist Wardrobes, Maximum Impact',
    excerpt:
      'Fewer pieces, better cut. A capsule of neutrals and one strong accessory can carry you from morning meetings to evening openings.',
  },
  {
    seed: 'tome-b4',
    date: 'July 8, 2026',
    author: 'Admin',
    heading: 'Runway Trends That Work on the Street',
    excerpt:
      'Not everything on the catwalk translates to pavement. We road-test the season\u2019s biggest looks and keep the ones that actually move.',
  },
  {
    seed: 'tome-b5',
    date: 'July 1, 2026',
    author: 'Admin',
    heading: 'How to Build a Capsule Collection',
    excerpt:
      'Start with the coat, add two pairs of trousers and a sharp white shirt. A practical guide to a wardrobe that dresses itself.',
  },
  {
    seed: 'tome-b6',
    date: 'June 24, 2026',
    author: 'Admin',
    heading: 'The Model\u2019s Morning Routine',
    excerpt:
      'Castings at nine, fittings at noon. Five working models share the small rituals that keep them camera-ready on zero sleep.',
  },
  {
    seed: 'tome-b7',
    date: 'June 17, 2026',
    author: 'Admin',
    heading: 'Color Blocking for Every Season',
    excerpt:
      'Cobalt with cherry, butter with chocolate. The rule is simple: one loud pair, everything else calm, and let the light do the rest.',
  },
  {
    seed: 'tome-b8',
    date: 'June 10, 2026',
    author: 'Admin',
    heading: 'Sustainable Fashion: A Practical Primer',
    excerpt:
      'Deadstock denim, repair caf\u00e9s and rental rails — the low-drama way to shop a little lighter this year without sacrificing style.',
  },
]

/* ── Pagination ───────────────────────────────────────────────────────── */

export const pageCount = 5
export const activePage = 1

export const prevPageLabel = 'Previous page'
export const nextPageLabel = 'Next page'
export const pageLabel = (n: number): string => `Page ${n}`

/* ── Nav panel footer ─────────────────────────────────────────────────── */

export const copyrightPrefix = 'Copyright ©'
export const copyrightLine = 'All rights reserved | This template is made with'
export const copyrightBrand = 'Colorlib'
