export interface HeroSlide {
  title: string
  category: string
  image: string
}

/** Portfolio slides for the hero track. The third slide duplicates the first
 *  so the strip loops seamlessly (owl-carousel style). */
export const heroSlides: HeroSlide[] = [
  {
    title: 'Ice Cold Love',
    category: 'Nature Photography',
    image: 'https://picsum.photos/id/1051/1200/800',
  },
  {
    title: 'Bold Architecture',
    category: 'Cityscape Photography',
    image: 'https://picsum.photos/id/1081/1200/800',
  },
  {
    title: 'Ice Cold Love',
    category: 'Nature Photography',
    image: 'https://picsum.photos/id/1051/1200/800',
  },
]

export interface MenuLink {
  label: string
  href: string
  active?: boolean
}

export const menuLinks: MenuLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About Me', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
  { label: 'Elements', href: '#elements' },
]

export const socialLinks = [
  { name: 'Pinterest', href: 'https://www.pinterest.com/' },
  { name: 'Facebook', href: 'https://www.facebook.com/' },
  { name: 'Twitter', href: 'https://twitter.com/' },
  { name: 'Dribbble', href: 'https://dribbble.com/' },
  { name: 'Behance', href: 'https://www.behance.net/' },
] as const

export const contactInfo = {
  address: '1525 Boring Lane, Los Angeles, CA',
  phone: '+34 56672 9984 22',
  email: 'contactme@myemail.com',
} as const

export const aboutText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada.'

export const portfolioHref = '#portfolio'
