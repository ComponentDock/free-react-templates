/* Mosaic — digital agency / creative studio landing template.
   Single-page recreation: navbar → gradient hero → featured works +
   about split → services → newsletter band → works → testimonials →
   counter band → blog → cocoa footer.
   Brand palette: pink #ee76ad / peach #efac78 (hero gradient),
   light-blue #78d5ef buttons, azure #29bae4 counter band, cocoa
   #3c312e footer, Work Sans typeface. */

export const BRAND = 'Mosaic'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const

const seed = (name: string, w: number, h: number) => `https://picsum.photos/seed/${name}/${w}/${h}`
const person = (id: number, w: number, h: number) => `https://picsum.photos/id/${id}/${w}/${h}`

export interface WorkTile {
  title: string
  designer: string
  image: string
  tall?: boolean
  wide?: boolean
}

export const FEATURED_WORKS: WorkTile[] = [
  {
    title: 'The Verge',
    designer: 'John Bruce',
    image: seed('mosaic-work-1', 600, 800),
    tall: true,
  },
  { title: 'Racks', designer: 'John Bruce', image: seed('mosaic-work-2', 800, 500), wide: true },
  { title: 'Zendesk', designer: 'John Bruce', image: seed('mosaic-work-3', 600, 500) },
  { title: 'Curator', designer: 'John Bruce', image: seed('mosaic-work-4', 700, 500) },
  { title: 'Tasty', designer: 'John Bruce', image: seed('mosaic-work-5', 800, 600), wide: true },
  { title: 'Voyage', designer: 'John Bruce', image: seed('mosaic-work-6', 600, 500) },
] as const

export const ABOUT_HEADING =
  'UI/UX, visual, Web designer with more than 12 years of experience in designing websites and mobile apps.'

export interface Service {
  icon: 'compass' | 'palette' | 'code2' | 'lifebuoy'
  title: string
  text: string
  chip: 'blush' | 'cream' | 'frost' | 'mint'
  iconColor: 'brand' | 'peach' | 'azure' | 'green'
}

export const SERVICES: Service[] = [
  {
    icon: 'compass',
    title: 'Strategy',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    chip: 'blush',
    iconColor: 'brand',
  },
  {
    icon: 'palette',
    title: 'Design',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    chip: 'cream',
    iconColor: 'peach',
  },
  {
    icon: 'code2',
    title: 'Development',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    chip: 'frost',
    iconColor: 'azure',
  },
  {
    icon: 'lifebuoy',
    title: 'Help & Supports',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    chip: 'mint',
    iconColor: 'green',
  },
] as const

export interface WorkCard {
  title: string
  text: string
  image: string
}

export const WORK_CARDS: WorkCard[] = [
  {
    title: 'Illustration',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: seed('mosaic-workcard-1', 800, 600),
  },
  {
    title: 'Application',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: seed('mosaic-workcard-2', 800, 600),
  },
  {
    title: 'Web Design',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: seed('mosaic-workcard-3', 800, 600),
  },
] as const

export interface Testimonial {
  quote: string
  name: string
  position: string
  photo: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Dennis Green',
    position: 'Marketing Manager',
    photo: person(1027, 200, 200),
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Sarah Winters',
    position: 'Interface Designer',
    photo: person(64, 200, 200),
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Marcus Cole',
    position: 'UI Designer',
    photo: person(823, 200, 200),
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    name: 'Elena Ruiz',
    position: 'Web Developer',
    photo: person(996, 200, 200),
  },
  {
    quote:
      'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    name: 'Tom Bennett',
    position: 'System Analytics',
    photo: person(453, 200, 200),
  },
] as const

export interface CounterStat {
  value: number
  label: string
}

export const COUNTERS: CounterStat[] = [
  { value: 400, label: 'Customers are satisfied with our professional support' },
  { value: 1000, label: 'Amazing preset options to be mixed and combined' },
  { value: 8000, label: 'Average response time on live chat support channel' },
] as const

export interface BlogPost {
  date: string
  author: string
  comments: number
  title: string
  excerpt: string
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    date: 'July 12, 2018',
    author: 'Admin',
    comments: 3,
    title: 'Why great design is invisible to everyone but the user',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: seed('mosaic-blog-1', 800, 500),
  },
  {
    date: 'July 12, 2018',
    author: 'Admin',
    comments: 3,
    title: 'The craft behind a frictionless mobile experience',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: seed('mosaic-blog-2', 800, 500),
  },
  {
    date: 'July 12, 2018',
    author: 'Admin',
    comments: 3,
    title: 'How we turn research into interfaces people love',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: seed('mosaic-blog-3', 800, 500),
  },
] as const

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const

export const FOOTER_CONTACT = {
  address: '198 West 21th Street, Suite 721 New York NY 10016',
  phone: '+1 235 2355 98',
  email: 'info@yoursite.com',
}

export const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: 'facebook', label: 'Facebook', href: '#' },
  { key: 'twitter', label: 'Twitter', href: '#' },
  { key: 'instagram', label: 'Instagram', href: '#' },
] as const

export type SocialKey = 'facebook' | 'twitter' | 'instagram'

export const emailHref = (email: string) => `mailto:${email}`
export const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`
