export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const servicesDropdown = ['Architectural Design', 'Interior', 'Building'] as const

export const heroSlides = [
  {
    headline: 'We Are Industrial Company',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste ipsa excepturi nostrum sequi molestias?',
    // Dark industrial machinery room (picsum id 495) — picsum has no pipes/
    // factory photography, so moody industrial scenes stand in for the
    // reference's workshop hero.
    image: 'https://picsum.photos/id/495/1920/1080',
  },
  {
    headline: 'Create, Enhance and Sustain',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae fuga, hic quae molestias aperiam deserunt!',
    // Black-and-white urban facade with fire escape (picsum id 945).
    image: 'https://picsum.photos/id/945/1920/1080',
  },
] as const

export const features = [
  {
    icon: 'bookmark',
    title: 'Automotive Parts',
    text: 'Precision components and assemblies manufactured to exacting tolerances for the automotive industry.',
  },
  {
    icon: 'heart',
    title: 'Maintenance Services',
    text: 'Planned maintenance and rapid repairs keep your production lines running around the clock.',
  },
  {
    icon: 'leaf',
    title: 'Green Energy',
    text: 'Sustainable engineering solutions that reduce emissions and cut long-term operating costs.',
  },
] as const

export const services = [
  {
    icon: 'leaf',
    title: 'Green Energy',
    text: 'Renewable systems and efficiency upgrades designed to power your operations responsibly.',
  },
  {
    icon: 'bulb',
    title: 'Precision Mechanics',
    text: 'High-tolerance machining and fabrication for the components that matter most.',
  },
  {
    icon: 'alert',
    title: 'Construction Machines',
    text: 'Heavy equipment design, build, and integration for demanding construction sites.',
  },
  {
    icon: 'smile',
    title: 'Reliable and Stable',
    text: 'Dependable structures and systems engineered to perform for decades without fail.',
  },
] as const

export const splitBlock = {
  title: 'Create, Enhance and Sustain',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  ],
  // European canal architecture with a bright facade (picsum id 164).
  image: 'https://picsum.photos/id/164/900/700',
} as const

export const projects = [
  {
    title: 'Ducting Design in Colorado',
    image: 'https://picsum.photos/seed/millwright-project-1/800/600',
  },
  {
    title: 'Tanks Project In California',
    image: 'https://picsum.photos/seed/millwright-project-2/800/600',
  },
  {
    title: 'Structural Design in New York',
    image: 'https://picsum.photos/seed/millwright-project-3/800/600',
  },
  { title: 'Stacks Design', image: 'https://picsum.photos/seed/millwright-project-4/800/600' },
  { title: 'Intricate Custom', image: 'https://picsum.photos/seed/millwright-project-5/800/600' },
  { title: 'Banker Design', image: 'https://picsum.photos/seed/millwright-project-6/800/600' },
] as const

export const testimonials = [
  {
    name: 'John Smith',
    role: 'Companies Client',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Joshua Darren',
    role: 'Companies Client',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    name: 'John Smith',
    role: 'Companies Client',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    name: 'John Smith',
    role: 'Companies Client',
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
] as const

export const blogPosts = [
  {
    date: 'Feb 26th, 2018',
    title: 'Behind the word mountains',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/millwright-blog-1/400/300',
  },
  {
    date: 'Feb 26th, 2018',
    title: 'A small river named Duden',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/millwright-blog-2/400/300',
  },
  {
    date: 'Feb 26th, 2018',
    title: 'Roasted parts of sentences',
    excerpt:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/seed/millwright-blog-3/400/300',
  },
  {
    date: 'Feb 26th, 2018',
    title: 'Far from the countries Vokalia',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/millwright-blog-4/400/300',
  },
] as const

export const quickLinks = ['About', 'Terms of Use', 'Disclaimers', 'Contact'] as const

export const office = {
  address: '34 Street Name, City Name Here, United States',
  phone: '+1 242 4942 290',
  email: 'info@yourdomain.com',
} as const

export const socials = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
] as const
