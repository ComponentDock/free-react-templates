export const navLinks = ['Home', 'About', 'Blog', 'Contact'] as const

export interface BlogPost {
  seed: string
  author: string
  date: string
  title: string
  tags: string[]
  excerpt: string
  comments: number
}

export const blogPosts: BlogPost[] = [
  {
    seed: 'marginalia-post-1',
    author: 'mara',
    date: 'November 23, 2016',
    title: 'A midday swim for quiet thoughts',
    tags: ['CLEAR', 'NATURE'],
    excerpt:
      'The morning fog had not yet lifted when I slipped into the water; the pool was empty, the city still asleep, and for a moment the silence felt like a place I could live in.',
    comments: 9,
  },
  {
    seed: 'marginalia-post-2',
    author: 'jonas',
    date: 'November 22, 2016',
    title: 'Some of my favorite moments of the year',
    tags: ['MEMORIES', 'OUTDOORS'],
    excerpt:
      'If I keep a list of anything, it is of afternoons: the ones where the light went soft over the ridge and nobody needed to say a word about it.',
    comments: 14,
  },
  {
    seed: 'marginalia-post-3',
    author: 'thea',
    date: 'November 19, 2016',
    title: 'Notes from a long walk in the hills',
    tags: ['HIKING', 'SILENCE'],
    excerpt:
      'I walked until the path ran out and then walked the path the sheep had made, which knew the ridge better than any map I own.',
    comments: 6,
  },
  {
    seed: 'marginalia-post-4',
    author: 'rio',
    date: 'November 14, 2016',
    title: 'Finding light in the low season',
    tags: ['WINTER', 'HOMEBODY'],
    excerpt:
      'The year tapers, and I have learned to taper with it: shorter days, longer tea, a lamp pulled close to the page, and no apology for any of it.',
    comments: 3,
  },
]

export const socialLinks = ['facebook', 'twitter', 'instagram', 'pinterest'] as const

export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  pinterest: 'Pinterest',
}

export const searchPlaceholder = 'Search...'

export const darkStorageKey = 'marginalia:dark'

export const heroImage = {
  src: 'https://picsum.photos/seed/marginalia-hero/1600/900',
  alt: 'Rocky cave mouth overlooking mountains at dusk',
} as const
