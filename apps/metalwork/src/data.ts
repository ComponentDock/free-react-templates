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
    // Dark industrial machinery photo (picsum id 495) — picsum has no
    // welding photography, so dark moody scenes stand in for the reference's
    // dark workshop heroes.
    image: 'https://picsum.photos/id/495/1920/1080',
  },
  {
    headline: 'The Best Level of Excellence in Steel Fabrication',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae fuga, hic quae molestias aperiam deserunt!',
    image: 'https://picsum.photos/id/453/1920/1080',
  },
] as const

export const features = [
  {
    icon: 'presentation',
    title: 'Ducting Design',
    text: 'Custom ducting systems planned and fabricated to keep air moving exactly where your facility needs it.',
  },
  {
    icon: 'hammer',
    title: 'Stacks Design',
    text: 'Industrial stacks engineered for performance, safety, and a long service life in demanding environments.',
  },
  {
    icon: 'box',
    title: 'Tanks Design',
    text: 'Storage and process tanks built to specification, from structural design through final fabrication.',
  },
  {
    icon: 'clipboard',
    title: 'Structural Design',
    text: 'Complete structural engineering for steel buildings, platforms, and heavy equipment.',
  },
] as const

export const services = [
  {
    icon: 'bell',
    title: 'Modern Design',
    text: 'Clean, contemporary layouts that put your products and processes in the best light.',
  },
  {
    icon: 'heart',
    title: 'Built With Passion',
    text: 'Every project receives the same care and craftsmanship, from the first sketch to the final weld.',
  },
  {
    icon: 'zap',
    title: 'Fast Loading',
    text: 'Lightweight pages and optimized assets keep your site responsive on any connection.',
  },
] as const

export const aboutBlocks = [
  {
    title: "Let's Build Together",
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/id/453/900/600',
  },
  {
    title: "We'll handle any intricate custom design",
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/id/60/900/600',
  },
] as const

export const projects = [
  {
    title: 'Ducting Design in Colorado',
    image: 'https://picsum.photos/seed/metalwork-project-1/800/600',
  },
  {
    title: 'Tanks Project In California',
    image: 'https://picsum.photos/seed/metalwork-project-2/800/600',
  },
  {
    title: 'Structural Design in New York',
    image: 'https://picsum.photos/seed/metalwork-project-3/800/600',
  },
  { title: 'Stacks Design', image: 'https://picsum.photos/seed/metalwork-project-4/800/600' },
  { title: 'Intricate Custom', image: 'https://picsum.photos/seed/metalwork-project-5/800/600' },
  { title: 'Banker Design', image: 'https://picsum.photos/seed/metalwork-project-6/800/600' },
] as const

export const testimonials = [
  {
    name: 'John Smith',
    role: 'Component Dock Client',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Joshua Darren',
    role: 'Component Dock Client',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    name: 'John Smith',
    role: 'Component Dock Client',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    name: 'John Smith',
    role: 'Component Dock Client',
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
] as const

export const blogPosts = [
  {
    date: 'Feb 26th, 2018',
    title: 'How to handle any intricate custom design',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/metalwork-blog-1/400/300',
  },
  {
    date: 'Feb 26th, 2018',
    title: 'The importance of structural steel in modern construction',
    excerpt: null,
    image: 'https://picsum.photos/seed/metalwork-blog-2/400/300',
  },
  {
    date: 'Feb 26th, 2018',
    title: 'Five questions to ask before your next fabrication project',
    excerpt: null,
    image: 'https://picsum.photos/seed/metalwork-blog-3/400/300',
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
