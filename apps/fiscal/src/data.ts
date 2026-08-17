// Fiscal — page content model. Brand palette: primary #0099e5,
// gradient #4facfe → #00f2fe, ink #212529, muted #6c757d, surface #f8f9fa,
// footer #efefef. Fonts: Work Sans (headings) + Roboto (body).

export const BRAND = 'Fiscal'

export const PHONE_DISPLAY = '123-489-9381'
export const VIDEO_URL = 'https://www.youtube.com/watch?v=mwtbEGNABWU&t=12s'

interface NavChild {
  label: string
  href: string
  children?: NavChild[]
}

export interface NavLink {
  label: string
  href: string
  active?: boolean
  children?: NavChild[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section', active: true },
  {
    label: 'Solutions',
    href: '#solutions-section',
    children: [
      { label: 'Menu One', href: '#solutions-section' },
      { label: 'Menu Two', href: '#solutions-section' },
      {
        label: 'Dropdown',
        href: '#solutions-section',
        children: [
          { label: 'Sub Menu One', href: '#solutions-section' },
          { label: 'Sub Menu Two', href: '#solutions-section' },
          { label: 'Sub Menu Three', href: '#solutions-section' },
        ],
      },
    ],
  },
  { label: 'Services', href: '#services-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Contact Us', href: '#contact-section' },
]

export const HERO = {
  headline: 'We Help Grow Your Business',
  subtext:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  ctaLabel: 'Contact us',
  watchLabel: 'Watch the video',
  image: 'https://picsum.photos/seed/fiscal-hero/600/650',
}

export type FeatureIcon = 'trending-up' | 'shield-check' | 'piggy-bank'

export interface Feature {
  icon: FeatureIcon
  heading: string
  text: string
}

export const FEATURES: Feature[] = [
  {
    icon: 'trending-up',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'shield-check',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'piggy-bank',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export type ServiceIcon =
  'trending-up' | 'shield-check' | 'piggy-bank' | 'target' | 'users' | 'briefcase'

export interface Service {
  icon: ServiceIcon
  heading: string
  text: string
}

export const SERVICES: Service[] = [
  {
    icon: 'trending-up',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'shield-check',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'piggy-bank',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'target',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'users',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'briefcase',
    heading: 'On Time Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export const CTA = {
  heading: 'Wanna Talk To Us?',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  buttonLabel: 'Contact us',
  image: 'https://picsum.photos/seed/fiscal-cta/1600/700',
}

export interface PortfolioSlide {
  image: string
  title: string
  text: string
}

export const PORTFOLIO_SLIDES: PortfolioSlide[] = Array.from({ length: 5 }, (_, index) => ({
  image: `https://picsum.photos/seed/fiscal-portfolio-${index + 1}/600/420`,
  title: 'Behind the word mountains',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
}))

export interface Testimonial {
  image: string
  quote: string
  author: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    image: 'https://picsum.photos/seed/fiscal-testimonial-1/600/600',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'John Campbell',
    role: 'CEO & Co-founder',
  },
  {
    image: 'https://picsum.photos/seed/fiscal-testimonial-2/600/600',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'John Campbell',
    role: 'CEO & Co-founder',
  },
  {
    image: 'https://picsum.photos/seed/fiscal-testimonial-3/600/600',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'John Campbell',
    role: 'CEO & Co-founder',
  },
]

export interface NewsPost {
  image: string
  date: string
  title: string
  excerpt: string
}

export const NEWS_POSTS: NewsPost[] = [
  {
    image: 'https://picsum.photos/seed/fiscal-news-1/600/400',
    date: 'Jan 20, 2021',
    title: 'Behind the word mountains',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/fiscal-news-2/600/400',
    date: 'Jan 20, 2021',
    title: 'Behind the word mountains',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/fiscal-news-3/600/400',
    date: 'Jan 20, 2021',
    title: 'Behind the word mountains',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export const ADDRESS = '43 Raymouth Rd. Baltemoer, London 3910'

export const CONTACT_PHONES = ['+1 (123) 456-7890', '+1 (123) 456-7890']

export const CONTACT_EMAIL = 'info@mydomain.com'

export const SOURCE_LINKS = [
  'About us',
  'Services',
  'Vision',
  'Mission',
  'Terms',
  'Privacy',
  'Partners',
  'Business',
  'Careers',
  'Blog',
  'FAQ',
  'Creative',
]

export const FOOTER_LINKS = ['Our Vision', 'About us', 'Contact us']

export type SocialKey = 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'pinterest' | 'dribbble'

export const SOCIALS: SocialKey[] = [
  'instagram',
  'twitter',
  'facebook',
  'linkedin',
  'pinterest',
  'dribbble',
]
