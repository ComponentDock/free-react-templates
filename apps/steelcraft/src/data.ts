export interface NavItem {
  label: string
  href: string
}

export type ServiceIcon = 'factory' | 'building' | 'wrench' | 'flask'

export const brand = {
  name: 'Steelcraft',
}

export const topBar = {
  phone: '+10 (78) 675-9064',
  email: 'technology@steelcraft.io',
  hours: 'Sun - Fri (10AM - 7PM)',
  quote: 'Get Free Quote',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  heading: 'Best technology and awesome service we offer',
  paragraph: 'Ullamcorper fringi tortor consec adipis elit sed do eiusmod tempor.',
  cta: 'Check Our Services',
  href: '#services',
  image: 'https://picsum.photos/id/1076/1600/900',
}

export const services = {
  eyebrow: 'Services',
  heading: 'A height level service provider that recommended to any companies',
  items: [
    { title: 'Power and Energy', icon: 'factory' as const },
    { title: 'Gas & Oil', icon: 'building' as const },
    { title: 'Construction', icon: 'wrench' as const },
    { title: 'Chemical Research', icon: 'flask' as const },
  ],
}

export const brands = ['NORDMETAL', 'VOLTAIR', 'FERROPLUS', 'HYDROMAX', 'TITANFORGE', 'STEELMARK']

export const about = {
  eyebrow: 'Why Choose Us',
  heading: 'We Are Largest Independent Manufacturing Company',
  paragraph:
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
  counters: [
    { value: '450', suffix: '+', label: 'Successfully completed projects' },
    { value: '860', suffix: '+', label: 'Highly specialised employees' },
  ],
  cta: 'Learn More',
  href: '#services',
  video: {
    image: 'https://picsum.photos/id/1081/720/600',
    embed: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    label: 'Play company video',
  },
}

export const testimonials = {
  heading: 'Testimonial',
  subtitle: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.',
  items: [
    {
      quote:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; the team delivered our plant upgrade ahead of schedule.',
      name: 'Robart Brown',
      role: 'Plant Director',
    },
    {
      quote:
        'From the first site survey to final commissioning, every milestone was met with precision and clear communication.',
      name: 'Ellen Marsh',
      role: 'Operations Lead',
    },
    {
      quote:
        'The fabrication quality and on-site discipline exceeded what we have seen from any previous contractor.',
      name: 'Derek Okafor',
      role: 'Site Engineer',
    },
  ],
}

export const cta = {
  heading: 'Any help needed?',
  paragraph: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.',
  cta: 'Contact Us',
  href: '#contact',
}

export const footer = {
  blurb: 'Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum.',
  phone: '10 (87) 738-3940',
  email: 'hello@steelcraft.io',
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
  servicesLinks: [
    { label: 'Drone Mapping', href: '#services' },
    { label: 'Real State', href: '#services' },
    { label: 'Commercial', href: '#services' },
    { label: 'Construction', href: '#services' },
  ],
  newsletter: {
    heading: 'Subscribe newsletter',
    prompt: 'Subscribe our newsletter to get updates about our services and offers.',
  },
}
