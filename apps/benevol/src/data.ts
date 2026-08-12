import {
  DollarSign,
  Droplets,
  Handshake,
  HeartHandshake,
  PiggyBank,
  Utensils,
  type LucideIcon,
} from 'lucide-react'

/* Benevol site data — copy and placeholder images for the charity
   template. Brand palette: orange #fd5f00 accent, gold #cda558 overlay,
   panels #4e4e4e / #a23131, footer #333333, Anton + Nunito type. */

export const BRAND = 'Benevol'

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Discover', href: '#discover-section' },
  { label: 'Donate', href: '#donate-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export interface HeroSlide {
  image: string
  alt: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: 'https://picsum.photos/seed/benevol-hero-1/1600/900',
    alt: 'A smiling student in a classroom',
  },
  {
    image: 'https://picsum.photos/seed/benevol-hero-2/1600/900',
    alt: 'Volunteers helping a community',
  },
]

export const HERO_HEADLINE_1 = 'Education'
export const HERO_HEADLINE_2 = 'for Brighter Future'

export interface IntroPanel {
  heading: string
  body: string
  bgClass: string
}

export const INTRO_PANELS: IntroPanel[] = [
  {
    heading: 'Rescue An Orphan',
    body: 'Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam.',
    bgClass: 'bg-panel',
  },
  {
    heading: 'Feed The Hungry',
    body: 'Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam.',
    bgClass: 'bg-primary-600',
  },
  {
    heading: 'Free Education',
    body: 'Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam.',
    bgClass: 'bg-maroon',
  },
]

export interface StatCounter {
  value: number
  caption: string
}

export const MISSION_COUNTERS: StatCounter[] = [
  { value: 3293, caption: 'Number of Orphanage' },
  { value: 3298, caption: 'Number of Donations' },
  { value: 1212, caption: 'Number of Volunteers' },
  { value: 392, caption: 'Number of Orphans' },
]

export const MISSION_HEADING = 'Our Mission'

export const MISSION_PARAGRAPH_1 =
  'Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut, praesentium magnam, pariatur quae, necessitatibus.'

export const MISSION_PARAGRAPH_2 =
  'Dolor, eligendi voluptate ducimus itaque esse autem perspiciatis sint! Recusandae dolor aliquid inventore sit.'

export const VIDEO_THUMB = 'https://picsum.photos/seed/benevol-video/600/400'
export const VIDEO_LABEL = 'Play video'

export const DISCOVER_HEADING = 'Discover'

export const DISCOVER_INTRO =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aperiam unde natus voluptates placeat accusamus vel laborum cupiditate. Reiciendis commodi perferendis dignissimos, amet quis.'

export interface DiscoverRow {
  title: string
  body: string
  image: string
  alt: string
  counters: StatCounter[]
  reverse?: boolean
}

export const DISCOVER_ROWS: DiscoverRow[] = [
  {
    title: 'Build Schools in Africa',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo cupiditate vero fugiat sit eius sequi.',
    image: 'https://picsum.photos/seed/benevol-school/600/450',
    alt: 'Children in a new school building',
    counters: [
      { value: 15, caption: 'Schools' },
      { value: 1039, caption: 'Students' },
    ],
  },
  {
    title: 'Feeding Children in Africa',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo cupiditate vero fugiat sit eius sequi.',
    image: 'https://picsum.photos/seed/benevol-feeding/600/450',
    alt: 'Children receiving a warm meal',
    counters: [
      { value: 15, caption: 'Children' },
      { value: 38, caption: 'Orphanage' },
    ],
    reverse: true,
  },
]

export const DONATE_HEADLINE = 'Make A Donation Now! You May Change Lives Forever'
export const DONATE_LABEL = 'Donate Now'

export interface Cause {
  title: string
  body: string
  icon: LucideIcon
}

export const CAUSES: Cause[] = [
  {
    title: 'Make Donation',
    body: 'Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.',
    icon: PiggyBank,
  },
  {
    title: 'Medical Health',
    body: 'Praesentium magnam pariatur quae necessitatibus eligendi voluptate ducimus.',
    icon: Droplets,
  },
  {
    title: 'Food for the Poor',
    body: 'Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.',
    icon: Utensils,
  },
  {
    title: 'Help & Love',
    body: 'Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.',
    icon: HeartHandshake,
  },
  {
    title: 'Give To The Needy',
    body: 'Praesentium magnam pariatur quae necessitatibus eligendi voluptate ducimus.',
    icon: DollarSign,
  },
  {
    title: 'Volunteer',
    body: 'Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.',
    icon: Handshake,
  },
]

export interface TeamMember {
  name: string
  role: string
  blurb: string
  image: string
}

export const TEAM_HEADING = 'Our Leadership'

export const TEAM_INTRO =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis, eius, eos consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.'

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jean Smith',
    role: 'Mining Expert',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!',
    image: 'https://picsum.photos/seed/benevol-person-1/130/130',
  },
  {
    name: 'Bob Carry',
    role: 'Project Manager',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quia veritatis, nam quam obcaecati fuga.',
    image: 'https://picsum.photos/seed/benevol-person-2/130/130',
  },
  {
    name: 'Ricky Fisher',
    role: 'Engineer',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quidem, laudantium, illum minus numquam voluptas?',
    image: 'https://picsum.photos/seed/benevol-person-3/130/130',
  },
]

export interface Testimonial {
  quote: string
  name: string
  image: string
}

export const TESTIMONIAL_HEADING = 'Testimonial'

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat quibusdam tempore similique doloremque veritatis et cupiditate, maiores cumque repudiandae explicabo tempora deserunt consequuntur?',
    name: 'Ricky Fisher',
    image: 'https://picsum.photos/seed/benevol-testimonial-1/100/100',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat quibusdam tempore similique doloremque veritatis et cupiditate, maiores cumque repudiandae explicabo tempora deserunt consequuntur?',
    name: 'Ken Davis',
    image: 'https://picsum.photos/seed/benevol-testimonial-2/100/100',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat quibusdam tempore similique doloremque veritatis et cupiditate, maiores cumque repudiandae explicabo tempora deserunt consequuntur?',
    name: 'Mellisa Griffin',
    image: 'https://picsum.photos/seed/benevol-testimonial-3/100/100',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat quibusdam tempore similique doloremque veritatis et cupiditate, maiores cumque repudiandae explicabo tempora deserunt consequuntur?',
    name: 'Robert Steward',
    image: 'https://picsum.photos/seed/benevol-testimonial-4/100/100',
  },
]

export interface BlogPost {
  title: string
  date: string
  author: string
  excerpt: string
  linkLabel: string
  image: string
}

export const BLOG_HEADING = 'Our Blog'

export const BLOG_INTRO =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ab possimus fugiat, autem aliquid, commodi quod voluptatum consectetur.'

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How to Invest In Investing Company',
    date: 'January 18, 2019',
    author: 'James Cooper',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!',
    linkLabel: 'Get Started',
    image: 'https://picsum.photos/seed/benevol-blog-1/600/350',
  },
  {
    title: 'How to Invest In Investing Company',
    date: 'January 18, 2019',
    author: 'James Cooper',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!',
    linkLabel: 'Read More',
    image: 'https://picsum.photos/seed/benevol-blog-2/600/350',
  },
]

export const CONTACT_HEADING = 'Contact Us'

export const FOOTER_ABOUT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const FOOTER_FEATURES = [
  'About Us',
  'Testimonials',
  'Terms of Service',
  'Privacy',
  'Contact Us',
]

export const FOOTER_PARAGRAPH =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, at, dignissimos rerum quia sequi nesciunt illum eum quaerat alias nobis nisi dolorum provident!'

export const FOOTER_SOCIALS = [
  { label: 'Facebook', href: '#home-section' },
  { label: 'Twitter', href: '#home-section' },
  { label: 'Instagram', href: '#home-section' },
  { label: 'LinkedIn', href: '#home-section' },
]
