export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

/** Words cycled by the hero typewriter (brand blue in the original). */
export const typewriterWords = ['Digital Agency', 'Portfolio', 'SEO Agency', 'Business']

export const heroParagraph =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

export interface DashboardSlide {
  image: string
  alt: string
}

export const dashboardSlides: DashboardSlide[] = [
  {
    image: 'https://picsum.photos/seed/prime-dashboard-1/640/440',
    alt: 'Analytics dashboard mockup showing line charts',
  },
  {
    image: 'https://picsum.photos/seed/prime-dashboard-2/640/440',
    alt: 'Analytics dashboard mockup showing bar graphs',
  },
  {
    image: 'https://picsum.photos/seed/prime-dashboard-3/640/440',
    alt: 'Analytics dashboard mockup showing a data table',
  },
]

export const gradientStripHeading = 'We Provide High Quality Services'

export type ServiceIconName = 'search' | 'target' | 'chart' | 'pen' | 'code' | 'megaphone'

export interface Service {
  title: string
  icon: ServiceIconName
  blurb: string
  /** Row-2 services render a circular brand-blue icon badge. */
  circular?: boolean
}

export const services: Service[] = [
  {
    title: 'Market Research',
    icon: 'search',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    title: 'Business Strategy',
    icon: 'target',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    title: 'Audience Analytics',
    icon: 'chart',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    title: 'Logo Branding',
    icon: 'pen',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    circular: true,
  },
  {
    title: 'Development',
    icon: 'code',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    circular: true,
  },
  {
    title: 'Online Marketing',
    icon: 'megaphone',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    circular: true,
  },
]

export interface Counter {
  value: number
  label: string
}

export const counters: Counter[] = [
  { value: 6780, label: 'Happy Clients' },
  { value: 4500, label: 'Running Projects' },
  { value: 4200, label: 'Project Completed' },
  { value: 320, label: 'Cups of Coffee' },
]

export const counterBackground = 'https://picsum.photos/seed/prime-counter-bg/1600/600'

export interface Work {
  title: string
  category: string
  image: string
}

export const works: Work[] = [
  {
    title: 'Work 01',
    category: 'Branding',
    image: 'https://picsum.photos/seed/prime-work-1/640/480',
  },
  {
    title: 'Work 02',
    category: 'Branding',
    image: 'https://picsum.photos/seed/prime-work-2/640/480',
  },
  {
    title: 'Work 03',
    category: 'Branding',
    image: 'https://picsum.photos/seed/prime-work-3/640/480',
  },
  {
    title: 'Work 04',
    category: 'Branding',
    image: 'https://picsum.photos/seed/prime-work-4/640/480',
  },
  {
    title: 'Work 05',
    category: 'Branding',
    image: 'https://picsum.photos/seed/prime-work-5/640/480',
  },
  {
    title: 'Work 06',
    category: 'Branding',
    image: 'https://picsum.photos/seed/prime-work-6/640/480',
  },
]

export interface Plan {
  name: string
  price: string
  note: string
  features: { label: string }[]
  highlighted?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    note: '100% free. Forever',
    features: [
      { label: '150 GB Bandwidth' },
      { label: '100 GB Storage' },
      { label: '$1.00 / GB Overages' },
      { label: 'All features' },
    ],
  },
  {
    name: 'Startup',
    price: '$19',
    note: 'All features are included',
    features: [
      { label: '450 GB Bandwidth' },
      { label: '400 GB Storage' },
      { label: '$2.00 / GB Overages' },
      { label: 'All features' },
    ],
  },
  {
    name: 'Premium',
    price: '$49',
    note: 'All features are included',
    features: [
      { label: '250 GB Bandwidth' },
      { label: '200 GB Storage' },
      { label: '$5.00 / GB Overages' },
      { label: 'All features' },
    ],
  },
  {
    name: 'Pro',
    price: '$99',
    note: 'All features are included',
    features: [
      { label: '450 GB Bandwidth' },
      { label: '400 GB Storage' },
      { label: '$20.00 / GB Overages' },
      { label: 'All features' },
    ],
    highlighted: true,
  },
]

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Dennis Green',
    role: 'Marketing Manager',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    author: 'Sarah Kim',
    role: 'Interface Designer',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    author: 'Marco Ruiz',
    role: 'UI Designer',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Lena Fischer',
    role: 'Web Developer',
  },
  {
    quote:
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed.',
    author: 'Omar Haddad',
    role: 'System Analytics',
  },
]

export interface BlogPost {
  title: string
  meta: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    meta: 'August 12, 2018 · Admin · 3',
    image: 'https://picsum.photos/seed/prime-blog-1/600/400',
  },
  {
    title: 'Far far away, behind the word mountains, far from the countries',
    meta: 'August 12, 2018 · Admin · 3',
    image: 'https://picsum.photos/seed/prime-blog-2/600/400',
  },
  {
    title: 'A small river named Duden flows by their place and supplies it',
    meta: 'August 12, 2018 · Admin · 3',
    image: 'https://picsum.photos/seed/prime-blog-3/600/400',
  },
]

export const quickLinks = ['About', 'Features', 'Projects', 'Blog', 'Contact']

export interface RecentPost {
  title: string
  meta: string
}

export const recentPosts: RecentPost[] = [
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    meta: 'Sept 15, 2018 · Admin · 19',
  },
  {
    title: 'Amplifying your blockchain ecosystem',
    meta: 'Sept 15, 2018 · Admin · 19',
  },
]

export const contactInfo = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
}
