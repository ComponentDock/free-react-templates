export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  {
    label: 'Pages',
    href: '#',
    children: [{ label: 'Elements', href: '#elements' }],
  },
  { label: 'Contact', href: '#contact' },
  { label: 'Service', href: '#service' },
  { label: 'Portfolio Details', href: '#portfolio' },
  {
    label: 'Blog',
    href: '#',
    children: [
      { label: 'Blog Home', href: '#blog' },
      { label: 'Blog Single', href: '#blog-single' },
    ],
  },
]

export const hero = {
  bubble: "It's me",
  name: 'Kenedy Jackson',
  roleLead: 'Senior Creative ',
  roleHighlight1: 'Designer',
  roleMiddle: ' and Content ',
  roleHighlight2: 'Developer',
  cta: 'Hire Me',
}

export const brands = ['Forbes', 'dribbble', '99designs', 'AWWWARDS', 'Envato']

export const about = {
  title: 'About Myself',
  paragraphs: [
    'Inappropriate behavior is often laughed off as "boys will be boys," women face higher conduct standards especially in the workplace. That is why it is crucial that, as professionals, our behavior on the job is beyond reproach.',
    'Inappropriate behavior is often laughed off as "boys will be boys," women face higher conduct standards especially in the workplace. That is why it is crucial that our behavior at work is beyond reproach.',
  ],
  buttons: [
    { label: 'More Info', href: '#portfolio' },
    { label: 'Resume', href: '#contact' },
  ],
}

export interface WorkItem {
  title: string
  category: string
  image: string
}

export const workCategories = [
  'All Categories',
  'Branding',
  'Creative Work',
  'Web Design',
  '2D Vinyl Design',
  'Client Project',
]

export const workItems: WorkItem[] = [
  { title: '2D Vinyl Design', category: 'Creative Work', image: 'artisan-1' },
  { title: 'Client Project', category: 'Branding', image: 'artisan-2' },
  { title: '2D Vinyl Design', category: 'Creative Work', image: 'artisan-3' },
  { title: 'Client Project', category: 'Web Design', image: 'artisan-4' },
  { title: '2D Vinyl Design', category: 'Creative Work', image: 'artisan-5' },
  { title: 'Client Project', category: 'Branding', image: 'artisan-6' },
]

export interface Job {
  role: string
  company: string
  date: string
  description: string
}

export const jobs: Job[] = [
  {
    role: 'Senior Creative Design',
    company: 'Old Bird IT, New York',
    date: "Jul '15 to Present",
    description:
      'All users on MySpace will know that there are millions of people out there. Every day besides the millions of people out there, every day.',
  },
  {
    role: 'Senior Visualiser',
    company: 'Old Bird IT, New York',
    date: "Jul '15 to Present",
    description:
      'All users on MySpace will know that there are millions of people out there. Every day besides the millions of people out there, every day.',
  },
  {
    role: 'Product Designer',
    company: 'Framer Studio, London',
    date: "Jun '13 to Jul '15",
    description:
      'All users on MySpace will know that there are millions of people out there. Every day besides the millions of people out there, every day.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Pixel House, Berlin',
    date: "Jan '11 to May '13",
    description:
      'All users on MySpace will know that there are millions of people out there. Every day besides the millions of people out there, every day.',
  },
]

export interface Service {
  title: string
  description: string
  color: 'terracotta' | 'mauve' | 'coral' | 'periwinkle'
}

export const services: Service[] = [
  {
    title: 'Web Design',
    description:
      "If you're looking blank cassettes on the web, you may be very confused at the difference in price.",
    color: 'terracotta',
  },
  {
    title: 'Application Development',
    description:
      "If you're looking blank cassettes on the web, you may be very confused at the difference in price.",
    color: 'mauve',
  },
  {
    title: 'Web Development',
    description:
      "If you're looking blank cassettes on the web, you may be very confused at the difference in price.",
    color: 'coral',
  },
  {
    title: 'UI/UX Design',
    description:
      "If you're looking blank cassettes on the web, you may be very confused at the difference in price.",
    color: 'periwinkle',
  },
]

export interface Testimonial {
  name: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Fanny Spencer',
    quote:
      'As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face and She is the host to your journey.',
  },
  {
    name: 'Martin Cole',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
  },
  {
    name: 'Sarah Mitchell',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly.',
  },
]

export const contact = {
  title: 'Contact Me',
  intro:
    'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.',
  boxes: [
    { label: 'Phone', value: '+44 2365 654 8962' },
    { label: 'Email', value: 'hello@artisandesign.co' },
    { label: 'Website', value: 'artisandesign.co' },
  ],
  cta: 'Hire Me',
}

export const footer = {
  follow: 'Follow Me',
  socials: [
    { name: 'facebook', label: 'Facebook' },
    { name: 'twitter', label: 'Twitter' },
    { name: 'dribbble', label: 'Dribbble' },
    { name: 'behance', label: 'Behance' },
  ],
}
