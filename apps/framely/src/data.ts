export interface Slide {
  title: string
  image: string
}

export const slides: readonly Slide[] = [
  { title: 'Nature', image: 'https://picsum.photos/seed/framely-1/960/640' },
  { title: 'Red Heartbeat', image: 'https://picsum.photos/seed/framely-2/960/640' },
  { title: 'Blue Dreem', image: 'https://picsum.photos/seed/framely-3/960/640' },
  { title: 'Christian Church', image: 'https://picsum.photos/seed/framely-4/960/640' },
  { title: 'Red Darkness', image: 'https://picsum.photos/seed/framely-5/960/640' },
  { title: 'Beauty with Brain', image: 'https://picsum.photos/seed/framely-6/960/640' },
  { title: 'Remarkable', image: 'https://picsum.photos/seed/framely-7/960/640' },
] as const

export interface NavLink {
  label: string
  href: string
  active?: boolean
  children?: readonly string[]
}

export const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog', children: ['Blog Single'] },
  { label: 'Contact', href: '#contact' },
]

export type SocialName = 'facebook' | 'twitter' | 'instagram'

export const socialLinks: readonly { name: SocialName; label: string; href: string }[] = [
  { name: 'facebook', label: 'Facebook', href: '#facebook' },
  { name: 'twitter', label: 'Twitter', href: '#twitter' },
  { name: 'instagram', label: 'Instagram', href: '#instagram' },
]
