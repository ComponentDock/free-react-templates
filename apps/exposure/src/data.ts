/** Exposure — one-page photography-portfolio landing copy and imagery.
 *  Section copy keeps the same content kinds as the reference; images are
 *  seeded placeholders (picsum) chosen for subject fit. */

export const brand = {
  name: 'Exposure',
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  {
    label: 'Blog',
    href: '#blog',
    dropdown: ['Blog', 'Blog Details', 'Element'],
  },
  { label: 'Contact', href: '#contact' },
] as const

export type NavLink = (typeof navLinks)[number]

export const hero = {
  eyebrow: 'Creative Photographey',
  heading: 'Photography Make us happy Take a shot.',
  cta: 'Watch Portfolio',
  background: 'https://picsum.photos/seed/exposure-hero/1920/1080',
  portrait: 'https://picsum.photos/seed/exposure-portrait/700/900',
} as const

export const about = {
  title: 'HOW WE MAKE USER EXPERIENCES',
  email: 'hire@exposure.example',
  quote: "You can't use up creativity. The more you use, the more you have in your signifant mind.",
  name: 'SALVADOR DALI',
  role: 'Digital Artisit',
  years: '05',
  yearsLabel: ['YEARS OF', 'DIGITAL EXPERIENCE'],
} as const

export const services = [
  {
    title: 'Creative Photography',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/exposure-service-1/800/600',
  },
  {
    title: 'Wedding Photography',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/exposure-service-2/800/600',
  },
  {
    title: 'Nature Photography',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/exposure-service-3/800/600',
  },
] as const

export const gallery = [
  { title: 'The Last man', image: 'https://picsum.photos/seed/exposure-gallery-1/900/685' },
  { title: 'The Last man', image: 'https://picsum.photos/seed/exposure-gallery-2/900/685' },
  { title: 'The Last man', image: 'https://picsum.photos/seed/exposure-gallery-3/900/685' },
  { title: 'The Last man', image: 'https://picsum.photos/seed/exposure-gallery-4/900/685' },
  { title: 'The Last man', image: 'https://picsum.photos/seed/exposure-gallery-5/900/685' },
  { title: 'The Last man', image: 'https://picsum.photos/seed/exposure-gallery-6/900/685' },
] as const

/** xl column widths of the six mixed-width gallery tiles (source: 5/3/4/5/4/3). */
export const gallerySpans = [
  'xl:col-span-5',
  'xl:col-span-3',
  'xl:col-span-4',
  'xl:col-span-5',
  'xl:col-span-4',
  'xl:col-span-3',
] as const

export const awards = {
  title: 'Take a look at our achivment',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, sem urna laoreet orci.',
  cta: 'Get Start',
  items: [
    { name: 'Behance award', year: 'Prize 2019' },
    { name: 'Behance award', year: 'Prize 2019' },
    { name: 'Behance award', year: 'Prize 2019' },
    { name: 'Behance award', year: 'Prize 2019' },
    { name: 'Behance award', year: 'Prize 2019' },
    { name: 'Behance award', year: 'Prize 2019' },
  ],
} as const

export const testimonial = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, sem urna laoreet orci, eget accumsan odio justo ac nunc.',
  name: 'Jessya Inn',
  role: 'Chif Photographer',
  image: 'https://picsum.photos/seed/exposure-founder/120/120',
} as const

export const blog = {
  title: 'Tourist Blog',
  subtitle: 'Our Recent Photos',
  posts: [
    {
      date: '23 Dec, 2020',
      title: 'Addiction When Gambling Becomes',
      image: 'https://picsum.photos/seed/exposure-blog-1/800/500',
    },
    {
      date: '23 Dec, 2020',
      title: 'Addiction When Gambling Becomes',
      image: 'https://picsum.photos/seed/exposure-blog-2/800/500',
    },
    {
      date: '23 Dec, 2020',
      title: 'Addiction When Gambling Becomes',
      image: 'https://picsum.photos/seed/exposure-blog-3/800/500',
    },
  ],
} as const

export const footer = {
  blurb:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  columns: [
    {
      heading: 'Navigation',
      links: ['Home', 'Events', 'Testimonial', 'Categories', 'Contacts'],
    },
    {
      heading: 'Useful Links',
      links: ['Registration', 'Login', 'Policy', 'Terms & Conditions'],
    },
  ],
  instagram: [
    'https://picsum.photos/seed/exposure-insta-1/300/300',
    'https://picsum.photos/seed/exposure-insta-2/300/300',
    'https://picsum.photos/seed/exposure-insta-3/300/300',
    'https://picsum.photos/seed/exposure-insta-4/300/300',
    'https://picsum.photos/seed/exposure-insta-5/300/300',
    'https://picsum.photos/seed/exposure-insta-6/300/300',
  ],
} as const

export const socials = ['X', 'Facebook', 'Globe', 'Instagram'] as const

export type SocialName = (typeof socials)[number]
