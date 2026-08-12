/**
 * Machina content model — recreation of the ColorLib "Braxit" industrial
 * template (https://colorlib.com/wp/template/braxit/). All copy is original;
 * photos are picsum-seeded placeholders.
 */
export const BRAND_NAME = 'Machina'

export const TOP_PHONE = '+880 278 367 367'
export const TOP_EMAIL = 'brexitsupport@gmail.com'
export const FREE_QUOTE_LABEL = 'Free Quote'

export const NAV_LINKS = [
  'Home',
  'About',
  'Services',
  'Project',
  'Blog',
  'Pages',
  'Contact',
] as const

/** Desktop-only dropdown under the Pages link (source `ul.nav` dropdown). */
export const PAGES_DROPDOWN = [
  'Blog Details',
  'Element',
  'Project Details',
  'Services Details',
] as const

export const SEARCH_PLACEHOLDER = 'Searching key.....'

export interface HeroSlide {
  headline: ReadonlyArray<{ text: string; accent?: boolean }>
  paragraph: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    headline: [{ text: 'Market leading' }, { text: 'Manufacturer', accent: true }],
    paragraph:
      'The right candidate may exist, but talented people will always want to work with a company that builds the machines the world runs on.',
  },
  {
    headline: [{ text: 'Precision' }, { text: 'Engineering', accent: true }],
    paragraph:
      'From structural steel to full production lines, we design, fabricate, and install heavy equipment for factories that never stop.',
  },
]

export const HERO_IMAGE = 'https://picsum.photos/id/1078/1920/765'
export const HERO_VIDEO_IMAGE = 'https://picsum.photos/id/1078/960/540'
export const SERVICES_BG = 'https://picsum.photos/id/1033/1920/700'
export const HERO_LEARN_MORE_LABEL = 'Learn More'

export const ABOUT_EYEBROW = 'About Us'
export const ABOUT_TITLE = 'We have all your needs, from micro macro'
export const ABOUT_PARAGRAPH =
  'Machina is a full-cycle industrial partner — engineering, fabrication, and installation — trusted by manufacturers on five continents since 2004.'
export const ABOUT_IMAGE = 'https://picsum.photos/seed/machina-about/570/620'

export interface Counter {
  label: string
  value: number
  suffix: string
}

export const COUNTERS: Counter[] = [
  { label: 'Delivery Packages', value: 454, suffix: ' m' },
  { label: 'Countries Covered', value: 127, suffix: '' },
]

export const EXPERIENCE_YEARS = '20'
export const EXPERIENCE_LABEL = 'Years of experience'

export interface GalleryItem {
  title: string
  line: string
  seed: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { title: 'Building Yead', line: 'Steel frame assembly', seed: 'machina-gal-1' },
  { title: 'Meghna Bridge', line: 'Structural steel works', seed: 'machina-gal-2' },
  { title: 'Kalis Vadru', line: 'Industrial plant build', seed: 'machina-gal-3' },
]

export const CATEGORIES_EYEBROW = 'Categories'
export const CATEGORIES_TITLE = 'To increase productivity and cost effectiveness on the market.'

export interface Category {
  title: string
  text: string
  icon: 'badge' | 'shield' | 'award' | 'factory'
}

export const CATEGORIES: Category[] = [
  {
    title: 'Quality',
    text: 'Certified processes and zero-defect handovers on every project we deliver.',
    icon: 'badge',
  },
  {
    title: 'Reliability',
    text: 'Fixed schedules, guaranteed deadlines, and a fleet that never lets you down.',
    icon: 'shield',
  },
  {
    title: 'Experience',
    text: 'Two decades of heavy industry know-how behind every engineering decision.',
    icon: 'award',
  },
  {
    title: 'Manufacturing',
    text: 'In-house fabrication lines for structural steel and precision machinery.',
    icon: 'factory',
  },
]

export interface Service {
  title: string
  text: string
  icon: 'cog' | 'wrench' | 'hammer'
}

export const SERVICES: Service[] = [
  {
    title: 'Mechanical Engineering',
    text: 'Complete machine design, prototyping, and load testing for production equipment.',
    icon: 'cog',
  },
  {
    title: 'Structural Fabrication',
    text: 'Heavy steel fabrication and on-site erection for plants, bridges, and towers.',
    icon: 'wrench',
  },
  {
    title: 'Industrial Maintenance',
    text: 'Preventive maintenance programs that keep your lines running around the clock.',
    icon: 'hammer',
  },
]

export const SERVICES_VIEW_MORE_LABEL = 'View More'

export const CTA_TITLE = 'Up to 40% Off'
export const CTA_TEXT =
  'Book a full production-line overhaul this quarter and save up to 40% on engineering hours — offer valid until the end of the year.'

export const TESTIMONIALS_TITLE = 'Some amazing words from our clients'

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Working in conjunction with humanitarian aid agencies, we set up a mobile plant in six weeks — Machina delivered the line ahead of schedule and under budget.',
    author: 'Micky Mouse',
    role: 'Business Man',
  },
  {
    quote:
      'Their fabrication team rebuilt our conveyor system over a single weekend shutdown. Downtime was zero, and the new line runs 20% faster.',
    author: 'Sarah Connor',
    role: 'Plant Director',
  },
]

export const AVATAR_SEEDS = [
  'machina-av-1',
  'machina-av-2',
  'machina-av-3',
  'machina-av-4',
] as const

export const ENQUIRY_TITLE = 'Need to make an enquiry?'
export const ENQUIRY_TEXT =
  'Send us your drawings or a short brief and our engineers will come back with a feasibility plan and a quote within 48 hours.'

export const FORM_TITLE = 'Drop your message'
export const TOPIC_OPTIONS = ['Topic one', 'Topic Two', 'Topic Three'] as const

export const BLOG_TITLE = 'News & Media center'
export const BLOG_INTRO = 'Project stories, industry insight, and company news from the shop floor.'

export interface BlogPost {
  date: string
  title: string
  excerpt: string
  seed: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    date: '22 Apr 2020',
    title: 'We might track your usage patterns to see',
    excerpt:
      'How telemetry on our installed machines helps us predict wear before it stops a line.',
    seed: 'machina-blog-1',
  },
  {
    date: '22 Apr 2020',
    title: 'The massive stadium screens at the MCG',
    excerpt:
      'Inside the steel structure work that supported the biggest display in the southern hemisphere.',
    seed: 'machina-blog-2',
  },
]

export const MAP_TITLE = 'Find Us'

export const LOGO_CTA_BUTTON_LABEL = 'Learn More'

export const COMPANY_LINKS = ['Why choose us', 'Review', 'Customers', 'Blog', 'Carrier'] as const
export const PRODUCTION_LINKS = ['Technology', 'Products', 'Quality', 'Sales geography'] as const

export const FOOTER_ADDRESS = '789/A green avenue Dhanmondi, Dhaka'
export const FOOTER_PHONE = '+10 783 3674 356'
export const FOOTER_EMAIL = 'company@gmail.com'

export const NEWSLETTER_TEXT = 'Subscribe our newsletter to get updates about our services'
export const NEWSLETTER_PLACEHOLDER = 'Email Address'
export const NEWSLETTER_BUTTON = 'Subscribe'

export const FOOTER_SOCIALS = ['facebook', 'twitter', 'linkedin', 'instagram'] as const

export type SocialName = (typeof FOOTER_SOCIALS)[number]

export const CREDIT_BRAND = 'Colorlib'
