export const siteName = 'Wainscot'

// --- Top utility bar ---
export const phoneDisplay = '012-6532-568-9746'
export const phoneLabel = 'Call us'
export const quoteLabel = 'GET FREE QUOTE'

export type BrandIconName = 'facebook' | 'twitter' | 'dribbble' | 'behance'

export interface SocialLink {
  label: string
  href: string
  icon: BrandIconName
}

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' },
  { label: 'Dribbble', href: 'https://dribbble.com/', icon: 'dribbble' },
  { label: 'Behance', href: 'https://www.behance.net/', icon: 'behance' },
]

// --- Navbar ---
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const skipLabel = 'Skip to content'

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'HOME', href: '#home-section' },
  { label: 'PORTFOLIO', href: '#projects-section' },
  { label: 'ABOUT', href: '#offer-section' },
  { label: 'BLOG', href: '#blog-section' },
  { label: 'PAGES', href: '#news-section' },
  { label: 'CONTACT', href: '#contact-section' },
]

// --- Hero ---
export const heroTitleLine1 = 'Creativity'
export const heroTitleLine2 = 'Beyond'
export const heroTitleLine3 = 'Life'
export const heroCta = 'Hire Us Now!'
export const heroImage = 'https://picsum.photos/id/180/1920/1080'
export const heroAlt = 'Warm wooden desk styled as a modern interior with linen and craft details'

// --- Latest news ---
export const newsTitle = 'Latest News from all categories'
export const newsSubtext =
  'Fresh stories from the studio — sourcing, joinery, and the craft of building calmer rooms.'

export interface NewsCard {
  title: string
  text: string
  image: string
  alt: string
}

export const newsCards: NewsCard[] = [
  {
    title: 'Sourcing Oak That Ages Gracefully',
    text: 'A good idea is to think of your room as a living thing. It stores light, memories, and programs of daily life — choose timber that carries them well.',
    image: 'https://picsum.photos/seed/wainscot-news-1/600/400',
    alt: 'Oak timber planks stacked in the workshop',
  },
  {
    title: 'Why Wired Furniture Is Going Away',
    text: 'Hidden charging channels and wireless power mean the sideboard no longer needs a tangle of cables. Your rooms can finally stay quiet.',
    image: 'https://picsum.photos/seed/wainscot-news-2/600/400',
    alt: 'Minimal sideboard with a lamp and a book',
  },
  {
    title: 'Life Advice While Looking At A Window',
    text: 'Place the reading chair where the light lands first. The view is not decoration — it is the room’s slowest, most reliable piece of furniture.',
    image: 'https://picsum.photos/seed/wainscot-news-3/600/400',
    alt: 'Reading chair beside a tall window',
  },
]

// --- Offer area (stats + partner blurb) ---
export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '1.5K', label: 'Happy Clients' },
  { value: '10', label: 'Years of Experience' },
  { value: '250', label: 'Professionals' },
  { value: '369', label: 'On Going Job' },
]

export const offerTitle = 'We can be your digital Problems Solution Partner'
export const offerText =
  'Sloppy corners are often laughed off as “just how it is,” yet the rooms we remember hold higher standards. That is why every piece we ship is finished beyond reproach — from the first sketch to the last coat of oil.'
export const offerBtnLabel = 'What we Offer'
export const quoteBtnLabel = 'Get a free Quote'

// --- Completed projects ---
export const projectsTitle = 'Our Recent Completed Projects'
export const projectsSubtext =
  'A selection of interiors and furniture systems delivered this season — each one measured, made, and installed by our own hands.'

export const projectFilters = [
  'All Categories',
  'Branding',
  'Image Manipulation',
  'Creative Work',
  'Web Design',
  'Print Material',
] as const

export interface Project {
  title: string
  image: string
  alt: string
}

export const projects: Project[] = [
  {
    title: 'Oak Shelf System',
    image: 'https://picsum.photos/seed/wainscot-project-1/600/450',
    alt: 'Oak shelf system on a white wall',
  },
  {
    title: 'Linen Lounge Suite',
    image: 'https://picsum.photos/seed/wainscot-project-2/600/450',
    alt: 'Linen lounge suite in a bright room',
  },
  {
    title: 'Gallery Wall Console',
    image: 'https://picsum.photos/seed/wainscot-project-3/600/450',
    alt: 'Console table styled as a gallery wall',
  },
  {
    title: 'Embossed Oak Panelling',
    image: 'https://picsum.photos/seed/wainscot-project-4/600/450',
    alt: 'Embossed oak wall panelling detail',
  },
  {
    title: 'Round Dining Set',
    image: 'https://picsum.photos/seed/wainscot-project-5/600/450',
    alt: 'Round wooden dining table and chairs',
  },
  {
    title: 'Studio Lighting Plan',
    image: 'https://picsum.photos/seed/wainscot-project-6/600/450',
    alt: 'Warm studio lighting over a reading nook',
  },
]

// --- Testimonials ---
export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Wainscot reworked our showroom end to end. The shelving, the light, the joinery — every detail feels considered, and our customers say the space finally sounds like our brand.',
    name: 'Mark Alviro Wiens',
    role: 'Director at Maison Studio',
  },
  {
    quote:
      'They took a tired apartment and made it feel twice its size. The cabinetry alone is worth the project; the calm it brought to our mornings is the real gift.',
    name: 'Lina Harrington',
    role: 'Interior Lead at Haven Homes',
  },
]

// --- Blog ---
export const blogTitle = 'Latest From Our Blog'
export const blogSubtext =
  'Notes from the workshop on materials, finishes, and the small rituals of a well-made home.'

export interface BlogPost {
  date: string
  title: string
  excerpt: string
  likes: string
  comments: string
  image: string
  alt: string
}

export const blogPosts: BlogPost[] = [
  {
    date: '10 Jan 2026',
    title: 'Seasoning Oak the Patient Way',
    excerpt: 'Kiln-dried is quick; air-dried is quiet. Here is why we wait for the slower wood.',
    likes: '15 Likes',
    comments: '02 Comments',
    image: 'https://picsum.photos/seed/wainscot-blog-1/600/400',
    alt: 'Oak boards stacked to air-dry',
  },
  {
    date: '10 Jan 2026',
    title: 'The Secret of a Well-Made Drawer',
    excerpt:
      'Dovetails, soft-close slides, and the millimeter that separates fine from fine enough.',
    likes: '15 Likes',
    comments: '02 Comments',
    image: 'https://picsum.photos/seed/wainscot-blog-2/600/400',
    alt: 'Close-up of a hand-cut dovetail joint',
  },
  {
    date: '10 Jan 2026',
    title: 'How to Check a Finish Before It Ships',
    excerpt: 'Light at an angle, a clean thumb, and ten seconds of patience — the whole test.',
    likes: '15 Likes',
    comments: '02 Comments',
    image: 'https://picsum.photos/seed/wainscot-blog-3/600/400',
    alt: 'Hand checking a lacquered table edge',
  },
  {
    date: '10 Jan 2026',
    title: 'When Decluttering Becomes A Problem',
    excerpt: 'Storage is not about owning less — it is about giving every object a seat.',
    likes: '15 Likes',
    comments: '02 Comments',
    image: 'https://picsum.photos/seed/wainscot-blog-4/600/400',
    alt: 'Neatly organised storage cabinet',
  },
]

// --- Footer ---
export const footerProductsTitle = 'Top Products'
export const footerProducts = [
  'Managed Website',
  'Manage Reputation',
  'Power Tools',
  'Marketing Service',
]

export const newsletterTitle = 'Newsletter'
export const newsletterText = 'You can trust us. we only send promo offers, not a single spam.'
export const newsletterLabel = 'Your Email Address'
export const newsletterPlaceholder = 'Your Email Address'
export const subscribeLabel = 'Subscribe'
export const newsletterSuccess = 'Thanks for subscribing!'
export const newsletterError = 'Please enter a valid email address.'

export const instagramTitle = 'Instragram Feed'
export const instagramHandle = '@wainscot.studio'

export interface InstagramPhoto {
  src: string
  alt: string
}

export const instagramPhotos: InstagramPhoto[] = Array.from({ length: 8 }, (_, index) => ({
  src: `https://picsum.photos/seed/wainscot-ig-${index + 1}/200/200`,
  alt: `Studio photo ${index + 1}`,
}))

export const copyrightPrefix = 'All rights reserved | This template is made with'
export const componentDockLabel = 'Component Dock'
export const componentDockUrl = 'https://www.componentdock.com/'
