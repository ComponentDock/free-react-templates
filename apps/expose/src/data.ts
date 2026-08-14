/* Expose — photography portfolio template. Single-page recreation: fixed
   right sidebar header → masonry photo grid → centered footer credit.
   Brand palette: coral #ef6c57 on black #000, white uppercase text,
   muted meta #cccccc, Quicksand font. */

export const BRAND = 'Expose'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Photos', href: '#' },
  { label: 'Bio', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export type SocialKey = 'facebook' | 'twitter' | 'instagram' | '500px' | 'flickr'

export const SOCIAL_LINKS: { key: SocialKey; label: string; href: string }[] = [
  { key: 'facebook', label: 'Facebook', href: '#' },
  { key: 'twitter', label: 'Twitter', href: '#' },
  { key: 'instagram', label: 'Instagram', href: '#' },
  { key: '500px', label: '500px', href: '#' },
  { key: 'flickr', label: 'Flickr', href: '#' },
]

export interface Photo {
  id: number
  seed: string
  span: 3 | 4 | 6 | 8
  src: string
}

/* Column-span sequence from the original masonry grid (19 items, lg
   spans: 8, 4, 3, 6, 3, 6, 6, 4, 4, 4, 3, 6, 3, 8, 4, 6, 6, 4, 8). */
const SPANS: Photo['span'][] = [8, 4, 3, 6, 3, 6, 6, 4, 4, 4, 3, 6, 3, 8, 4, 6, 6, 4, 8]

export const PHOTOS: Photo[] = SPANS.map((span, index) => {
  const id = index + 1
  const size = span >= 6 ? '900/700' : '800/600'
  return {
    id,
    span,
    seed: `expose-${id}`,
    src: `https://picsum.photos/seed/expose-${id}/${size}`,
  }
})

export const SPAN_CLASS: Record<Photo['span'], string> = {
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  6: 'lg:col-span-6',
  8: 'lg:col-span-8',
}
