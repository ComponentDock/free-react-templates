export const phone = '+10 (78) 564 4568'
export const email = 'hello@meliora.org'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Causes', href: '#causes' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export interface HeroSlide {
  src: string
  alt: string
  overlay: 'left' | 'right'
  kicker: string
  headline: string
  copy: string
}

export const heroSlides: HeroSlide[] = [
  {
    src: 'https://picsum.photos/id/1027/1600/900',
    alt: 'A young woman looking thoughtfully off-camera',
    overlay: 'left',
    kicker: 'Non Profit Organization',
    headline: 'Support a cause you care about',
    copy: 'Every gift, however small, changes a life. Join thousands of supporters bringing food, medicine and hope to communities that need it most.',
  },
  {
    src: 'https://picsum.photos/id/64/1600/900',
    alt: 'A woman smiling in a sunny field holding dandelions',
    overlay: 'right',
    kicker: 'Non Profit Organization',
    headline: 'Together we can change lives',
    copy: 'From clean water to classrooms, your support reaches the people who need it most. See where your kindness goes.',
  },
  {
    src: 'https://picsum.photos/id/996/1600/900',
    alt: 'A woman in a thoughtful pose against a bright sky',
    overlay: 'left',
    kicker: 'Non Profit Organization',
    headline: 'Every act of kindness counts',
    copy: 'Join our volunteers and donors around the world and help us build a future where no one is left behind.',
  },
]

export interface Cause {
  image: string
  tag: string
  title: string
  copy: string
  goal: number
  raised: number
}

export const causes: Cause[] = [
  {
    image: 'https://picsum.photos/seed/meliora-cause1/600/400',
    tag: 'Elder Care',
    title: 'Help senior citizens',
    copy: 'Hot meals, home visits and companionship for seniors living alone in our community.',
    goal: 67845,
    raised: 48845,
  },
  {
    image: 'https://picsum.photos/seed/meliora-cause2/600/400',
    tag: 'Environment',
    title: 'Help the ecosystems',
    copy: 'Reforestation and clean-up drives that restore natural habitats for wildlife and people.',
    goal: 52300,
    raised: 31200,
  },
  {
    image: 'https://picsum.photos/seed/meliora-cause3/600/400',
    tag: 'Health',
    title: 'Clean water for villages',
    copy: 'Wells and water filters that give entire villages safe drinking water for years.',
    goal: 89000,
    raised: 61400,
  },
  {
    image: 'https://picsum.photos/seed/meliora-cause4/600/400',
    tag: 'Education',
    title: 'School kits for children',
    copy: 'Backpacks, books and uniforms that keep children in school and out of poverty.',
    goal: 41000,
    raised: 27500,
  },
]

export const aboutImage = {
  src: 'https://picsum.photos/id/823/640/520',
  alt: 'A volunteer holding a camera in a forest',
}

export interface Counter {
  value: string
  label: string
}

export const counters: Counter[] = [
  { value: '35+', label: 'Active Cases' },
  { value: '12m', label: 'People Joined' },
  { value: '200m', label: 'Cases every Year' },
  { value: '1200', label: 'People get help from us' },
]

export interface Service {
  icon: 'food' | 'health' | 'education' | 'shelter' | 'protection' | 'community'
  title: string
  copy: string
}

export const services: Service[] = [
  {
    icon: 'food',
    title: 'Pure Food & Water',
    copy: 'Nutritious meals and clean drinking water for families facing hunger.',
  },
  {
    icon: 'health',
    title: 'Health & Medicine',
    copy: 'Clinics, vaccinations and essential medicine for underserved communities.',
  },
  {
    icon: 'education',
    title: 'Education',
    copy: 'Schools, scholarships and learning materials that open doors to the future.',
  },
  {
    icon: 'shelter',
    title: 'Shelter & Housing',
    copy: 'Safe homes and emergency housing for families after crisis and disaster.',
  },
  {
    icon: 'protection',
    title: 'Child Protection',
    copy: 'Safeguarding programs that keep children safe, healthy and in school.',
  },
  {
    icon: 'community',
    title: 'Community Support',
    copy: 'Job training and micro-grants that help communities stand on their own.',
  },
]

export const emergencyImage = {
  src: 'https://picsum.photos/id/338/1600/700',
  alt: 'A person in a hooded jacket looking out at a grey shoreline',
}

export const counterBgImage = {
  src: 'https://picsum.photos/id/453/1600/500',
  alt: 'A band performing on a dark stage',
}

export const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const footerServices = ['Fundraising', 'Volunteers', 'Donations', 'Events'] as const
