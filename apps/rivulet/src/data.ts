/**
 * Rivulet data — recreated from the ColorLib "Droppler" preview DOM
 * (https://preview.colorlib.com/theme/droppler/): same content kinds
 * (uppercase date, category links, big uppercase quote-titles, serif
 * excerpts, named testimonial quotes), titles kept close to the original
 * placeholder copy. All imagery uses seeded picsum placeholders.
 */

export const siteName = 'Rivulet'

export const navItems = ['Home', 'About', 'About 2', 'About 3', 'Gallery', 'Contact'] as const

export const heroTitle = 'DESIGNER. PHOTOGRAPHER. BLOGGER.'

export const heroQuote =
  'Never forget that once upon a time, in an unguarded moment you recognized yourself as a friend.'

export const scrollLabel = 'Scroll down'

export interface Post {
  seed: string
  date: string
  categories: string
  title: string
  excerpt: string
  hasVideo: boolean
}

export const posts: readonly Post[] = [
  {
    seed: 'rivulet-post-1',
    date: 'November 19, 2017',
    categories: 'Photography / 5 Comments',
    title: "Start by doing what's necessary then do what's possible",
    excerpt: 'The harder you work for something, the greater you will feel when you achieve it.',
    hasVideo: false,
  },
  {
    seed: 'rivulet-post-2',
    date: 'November 19, 2017',
    categories: 'Video / 2 Comments',
    title: 'Positive anything is better than negative nothing',
    excerpt: 'Dream big and dare to fail. It is not the mountain we conquer, but ourselves.',
    hasVideo: true,
  },
  {
    seed: 'rivulet-post-3',
    date: 'November 19, 2017',
    categories: 'Design / 8 Comments',
    title: 'Trust in dreams for in them is hidden the gate to eternity',
    excerpt:
      'It always seems impossible until it is done. Keep your face always toward the sunshine.',
    hasVideo: false,
  },
  {
    seed: 'rivulet-post-4',
    date: 'November 19, 2017',
    categories: 'Video / 3 Comments',
    title: 'If you can design one thing you can design everything',
    excerpt: 'Design is intelligence made visible. Simplicity is the ultimate sophistication.',
    hasVideo: true,
  },
  {
    seed: 'rivulet-post-5',
    date: 'November 19, 2017',
    categories: 'Books / 6 Comments',
    title: 'A camel is a horse designed by a committee',
    excerpt:
      'Creativity is intelligence having fun. The details are not the details, they make the design.',
    hasVideo: false,
  },
]

export const readMoreLabel = 'READ MORE'
export const watchVideoLabel = 'WATCH VIDEO'

export interface Testimonial {
  quote: string
  author: string
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      'Most companies are looking to "wow" with their products, when in reality what they should be looking for is an emotional connection with their customers.',
    author: 'CHRISTIAN LINDHOLM',
  },
  {
    quote:
      'Be fluid. Treat each project differently. Be water, man. The best style is no style. Because styles can be figured out, but being fluid takes real talent.',
    author: 'JAY-Z',
  },
  {
    quote:
      "I don't start with a design objective, I start with a communication objective. I feel my project is successful if it communicates what it is supposed to communicate.",
    author: 'MIKE DAVISON',
  },
]

export const testimonialsLabel = 'Testimonials'

export const footerSocials = ['twitter', 'linkedin', 'dribbble', 'instagram'] as const

export const socialLabels: Record<string, string> = {
  twitter: 'Twitter',
  linkedin: 'Linkedin',
  dribbble: 'Dribbble',
  instagram: 'Instagram',
}

export const madeWithText = 'All rights reserved | This template is made with'

export function imgUrl(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}
