/* Anipulse — anime streaming content.
   Brand palette: red #e53637 on dark navy #0b0c2a base
   (design tokens from the source template's stylesheet;
   copy paraphrased to anime-appropriate content of the same kinds). */

export const BRAND = 'Anipulse'

export const NAV_LINKS = [
  { label: 'Homepage', href: '#home' },
  { label: 'Categories', href: '#trending' },
  { label: 'Our Blog', href: '#popular' },
  { label: 'Contacts', href: '#footer' },
] as const

export interface HeroSlide {
  readonly category: string
  readonly title: string
  readonly description: string
  readonly image: string
}

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    category: 'Adventure',
    title: 'Sword Art Online: Alicization',
    description:
      'Kirito awakens in a mysterious virtual world with no memory of how he got there. He must navigate the Underworld and fight to protect his friends.',
    image: 'https://picsum.photos/seed/anipulse-hero1/1400/700',
  },
  {
    category: 'Fantasy',
    title: 'Re:Zero − Starting Life in Another World',
    description:
      'Subaru Natsuki is transported to a fantasy world where he gains the ability to reverse death by returning to a previous point in time.',
    image: 'https://picsum.photos/seed/anipulse-hero2/1400/700',
  },
  {
    category: 'Sci-Fi',
    title: 'Steins;Gate',
    description:
      'A group of friends discovers they can send messages to the past, altering the course of history in unpredictable ways.',
    image: 'https://picsum.photos/seed/anipulse-hero3/1400/700',
  },
] as const

export interface AnimeShow {
  readonly title: string
  readonly episodes: string
  readonly comments: number
  readonly views: number
  readonly genres: readonly string[]
  readonly image: string
}

export const TRENDING_SHOWS: readonly AnimeShow[] = [
  {
    title: 'Attack on Titan',
    episodes: '18 / 18',
    comments: 142,
    views: 12400,
    genres: ['Action', 'Fantasy'],
    image: 'https://picsum.photos/seed/anipulse-tr1/400/325',
  },
  {
    title: 'Demon Slayer',
    episodes: '12 / 12',
    comments: 98,
    views: 9800,
    genres: ['Action', 'Supernatural'],
    image: 'https://picsum.photos/seed/anipulse-tr2/400/325',
  },
  {
    title: 'My Hero Academia',
    episodes: '24 / 24',
    comments: 76,
    views: 8500,
    genres: ['Action', 'Comedy'],
    image: 'https://picsum.photos/seed/anipulse-tr3/400/325',
  },
  {
    title: 'Jujutsu Kaisen',
    episodes: '16 / 16',
    comments: 115,
    views: 11200,
    genres: ['Action', 'Supernatural'],
    image: 'https://picsum.photos/seed/anipulse-tr4/400/325',
  },
] as const

export const POPULAR_SHOWS: readonly AnimeShow[] = [
  {
    title: 'Fullmetal Alchemist: Brotherhood',
    episodes: '18 / 18',
    comments: 89,
    views: 15600,
    genres: ['Action', 'Adventure'],
    image: 'https://picsum.photos/seed/anipulse-p1/400/325',
  },
  {
    title: 'Death Note',
    episodes: '12 / 12',
    comments: 134,
    views: 14200,
    genres: ['Mystery', 'Thriller'],
    image: 'https://picsum.photos/seed/anipulse-p2/400/325',
  },
  {
    title: 'One Punch Man',
    episodes: '18 / 18',
    comments: 67,
    views: 10800,
    genres: ['Action', 'Comedy'],
    image: 'https://picsum.photos/seed/anipulse-p3/400/325',
  },
  {
    title: 'Hunter x Hunter',
    episodes: '24 / 24',
    comments: 92,
    views: 13400,
    genres: ['Adventure', 'Fantasy'],
    image: 'https://picsum.photos/seed/anipulse-p4/400/325',
  },
] as const

export const RECENT_SHOWS: readonly AnimeShow[] = [
  {
    title: 'Spy x Family',
    episodes: '12 / 12',
    comments: 156,
    views: 8900,
    genres: ['Comedy', 'Action'],
    image: 'https://picsum.photos/seed/anipulse-r1/400/325',
  },
  {
    title: 'Chainsaw Man',
    episodes: '8 / 8',
    comments: 203,
    views: 11500,
    genres: ['Action', 'Horror'],
    image: 'https://picsum.photos/seed/anipulse-r2/400/325',
  },
  {
    title: 'Mob Psycho 100',
    episodes: '16 / 16',
    comments: 78,
    views: 7200,
    genres: ['Action', 'Comedy'],
    image: 'https://picsum.photos/seed/anipulse-r3/400/325',
  },
  {
    title: 'Vinland Saga',
    episodes: '12 / 12',
    comments: 112,
    views: 9400,
    genres: ['Action', 'Drama'],
    image: 'https://picsum.photos/seed/anipulse-r4/400/325',
  },
] as const

export const LIVE_ACTION_SHOWS: readonly AnimeShow[] = [
  {
    title: 'Alice in Borderland',
    episodes: '8 / 8',
    comments: 87,
    views: 6800,
    genres: ['Thriller', 'Sci-Fi'],
    image: 'https://picsum.photos/seed/anipulse-l1/400/325',
  },
  {
    title: 'One Piece',
    episodes: '18 / 18',
    comments: 195,
    views: 13200,
    genres: ['Adventure', 'Fantasy'],
    image: 'https://picsum.photos/seed/anipulse-l2/400/325',
  },
  {
    title: 'Yu Yu Hakusho',
    episodes: '12 / 12',
    comments: 64,
    views: 5400,
    genres: ['Action', 'Supernatural'],
    image: 'https://picsum.photos/seed/anipulse-l3/400/325',
  },
  {
    title: 'Rurouni Kenshin',
    episodes: '16 / 16',
    comments: 71,
    views: 6100,
    genres: ['Action', 'Historical'],
    image: 'https://picsum.photos/seed/anipulse-l4/400/325',
  },
] as const

export const SIDEBAR_SHOWS: readonly {
  readonly title: string
  readonly episodes: string
  readonly comments: number
  readonly views: number
  readonly image: string
}[] = [
  {
    title: 'Attack on Titan',
    episodes: '18 / 18',
    comments: 142,
    views: 12400,
    image: 'https://picsum.photos/seed/anipulse-s1/120/80',
  },
  {
    title: 'Demon Slayer',
    episodes: '12 / 12',
    comments: 98,
    views: 9800,
    image: 'https://picsum.photos/seed/anipulse-s2/120/80',
  },
  {
    title: 'Death Note',
    episodes: '12 / 12',
    comments: 134,
    views: 14200,
    image: 'https://picsum.photos/seed/anipulse-s3/120/80',
  },
  {
    title: 'One Punch Man',
    episodes: '18 / 18',
    comments: 67,
    views: 10800,
    image: 'https://picsum.photos/seed/anipulse-s4/120/80',
  },
  {
    title: 'Fullmetal Alchemist',
    episodes: '18 / 18',
    comments: 89,
    views: 15600,
    image: 'https://picsum.photos/seed/anipulse-s5/120/80',
  },
] as const

export const SIDEBAR_WEEKLY: typeof SIDEBAR_SHOWS = [
  {
    title: 'Spy x Family',
    episodes: '12 / 12',
    comments: 156,
    views: 8900,
    image: 'https://picsum.photos/seed/anipulse-sw1/120/80',
  },
  {
    title: 'Chainsaw Man',
    episodes: '8 / 8',
    comments: 203,
    views: 11500,
    image: 'https://picsum.photos/seed/anipulse-sw2/120/80',
  },
  {
    title: 'Jujutsu Kaisen',
    episodes: '16 / 16',
    comments: 115,
    views: 11200,
    image: 'https://picsum.photos/seed/anipulse-sw3/120/80',
  },
  {
    title: 'Mob Psycho 100',
    episodes: '16 / 16',
    comments: 78,
    views: 7200,
    image: 'https://picsum.photos/seed/anipulse-sw4/120/80',
  },
  {
    title: 'Vinland Saga',
    episodes: '12 / 12',
    comments: 112,
    views: 9400,
    image: 'https://picsum.photos/seed/anipulse-sw5/120/80',
  },
] as const

export const SIDEBAR_MONTHLY: typeof SIDEBAR_SHOWS = [
  {
    title: 'Hunter x Hunter',
    episodes: '24 / 24',
    comments: 92,
    views: 13400,
    image: 'https://picsum.photos/seed/anipulse-sm1/120/80',
  },
  {
    title: 'My Hero Academia',
    episodes: '24 / 24',
    comments: 76,
    views: 8500,
    image: 'https://picsum.photos/seed/anipulse-sm2/120/80',
  },
  {
    title: 'One Piece',
    episodes: '18 / 18',
    comments: 195,
    views: 13200,
    image: 'https://picsum.photos/seed/anipulse-sm3/120/80',
  },
  {
    title: 'Rurouni Kenshin',
    episodes: '16 / 16',
    comments: 71,
    views: 6100,
    image: 'https://picsum.photos/seed/anipulse-sm4/120/80',
  },
  {
    title: 'Alice in Borderland',
    episodes: '8 / 8',
    comments: 87,
    views: 6800,
    image: 'https://picsum.photos/seed/anipulse-sm5/120/80',
  },
] as const

export const SIDEBAR_YEARLY: typeof SIDEBAR_SHOWS = [
  {
    title: 'Attack on Titan',
    episodes: '18 / 18',
    comments: 142,
    views: 12400,
    image: 'https://picsum.photos/seed/anipulse-sy1/120/80',
  },
  {
    title: 'Demon Slayer',
    episodes: '12 / 12',
    comments: 98,
    views: 9800,
    image: 'https://picsum.photos/seed/anipulse-sy2/120/80',
  },
  {
    title: 'Fullmetal Alchemist',
    episodes: '18 / 18',
    comments: 89,
    views: 15600,
    image: 'https://picsum.photos/seed/anipulse-sy3/120/80',
  },
  {
    title: 'One Punch Man',
    episodes: '18 / 18',
    comments: 67,
    views: 10800,
    image: 'https://picsum.photos/seed/anipulse-sy4/120/80',
  },
  {
    title: 'Death Note',
    episodes: '12 / 12',
    comments: 134,
    views: 14200,
    image: 'https://picsum.photos/seed/anipulse-sy5/120/80',
  },
] as const
