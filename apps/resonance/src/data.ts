export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  pill: 'Welcome to our site',
  headline: 'Expert SEO, SEM Services in London',
  subline:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  primaryCta: 'How we work',
  secondaryCta: 'Contact us',
  image: 'https://picsum.photos/seed/resonance-hero/560/560',
  imageAlt: 'Team growing a brand with SEO analytics',
}

export type FeatureIcon = 'analysis' | 'target' | 'backlinks'

export const features = {
  pill: 'Features',
  heading: 'Our Features',
  subline:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  items: [
    {
      icon: 'analysis',
      title: 'Marketing Analysis',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'target',
      title: 'Digital Marketing',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'backlinks',
      title: 'SEO and Backlinks',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ],
} as const

export const about = {
  pill: 'About us',
  heading: 'Why our agency?',
  paragraphs: [
    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  ],
  points: [
    'Behind the word mountains',
    'Bookmarksgrove right at the coast',
    'Semantics, a large language',
  ],
  cta: 'About us',
  image: 'https://picsum.photos/seed/resonance-about/720/520',
  imageAlt: 'Resonance team collaborating at the office',
} as const

export type ServiceIcon = 'design' | 'internet' | 'social' | 'seo' | 'backlinks' | 'trophy'

export const services = {
  pill: 'Services',
  heading: 'Our Services',
  items: [
    {
      icon: 'design',
      title: 'Design Marketing',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'internet',
      title: 'Internet Marketing',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'social',
      title: 'Social Marketing',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'seo',
      title: 'SEO Marketing',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'backlinks',
      title: 'BackLinks Marketing',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'trophy',
      title: 'Design Marketing',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ],
} as const

export const testimonials = {
  pill: 'Testimonials',
  heading: 'Testimonials',
  subline:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  items: [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Carl Anderson',
      role: 'Director at Google',
      avatar: 'https://picsum.photos/seed/resonance-carl/96/96',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Drew Wood',
      role: 'Director at Google',
      avatar: 'https://picsum.photos/seed/resonance-drew/96/96',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Michelle Alisson',
      role: 'Director at Google',
      avatar: 'https://picsum.photos/seed/resonance-michelle/96/96',
    },
  ],
} as const

export const footerInfo = {
  aboutHeading: 'About Resonance',
  aboutText:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  pages: [
    { label: 'Blog', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  contactHeading: 'Contact',
  email: 'info@resonance.agency',
  phone: '+1 222 212 3819',
  address: '43 Raymouth Rd. Baltemoer, London 3910',
} as const
