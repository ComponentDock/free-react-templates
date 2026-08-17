// Sofalist — page content model. Brand palette: pale blue #d4eaf5 (hero
// panel, stats band, footer), amber #cf7500 (primary button only), steel
// #267aa4 (white-button text), link blue #3099cd (footer hover), light
// #f8f9fa bands, ink #000 counters, pastel card pairs rose/sage/gold/tan.
// Font: Poppins (body + headings).

export const BRAND = 'Sofalist'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collection', href: '#collection' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  headline: 'Best Design of Furniture Collections',
  emphasis: 'Furniture Collections',
  text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  ctaLabel: 'Discover',
  image: 'https://picsum.photos/seed/sofalist-1/900/1000',
}

export interface Feature {
  icon: 'deals' | 'quality' | 'design' | 'support'
  title: string
  text: string
  bg: string
  iconColor: string
}

export const FEATURES: Feature[] = [
  {
    icon: 'deals',
    title: 'Amazing Deals',
    text: 'Thoughtful discounts on curated pieces, refreshed every season so your home can grow with you.',
    bg: 'bg-rose',
    iconColor: 'text-rose-icon',
  },
  {
    icon: 'quality',
    title: 'Quality Furniture',
    text: 'Solid woods, honest joins, and finishes built to age gracefully through years of daily use.',
    bg: 'bg-sage',
    iconColor: 'text-sage-icon',
  },
  {
    icon: 'design',
    title: 'Modern Design',
    text: 'Clean lines and soft forms that fit a considered modern home without feeling cold.',
    bg: 'bg-gold',
    iconColor: 'text-gold-icon',
  },
  {
    icon: 'support',
    title: 'Best Support',
    text: 'From first sketch to final delivery, our team answers fast and stands behind every piece.',
    bg: 'bg-tan',
    iconColor: 'text-tan-icon',
  },
]

export const ABOUT_SPLIT = {
  heading: 'Quality Makes the Belief for Customers',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  videoUrl: 'https://www.youtube.com/watch?v=9ZZ7pq331Dc',
  videoLabel: 'Watch Video',
  image: 'https://picsum.photos/seed/sofalist-2/1200/800',
}

export interface GalleryItem {
  caption: string
  image: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { caption: 'Oak Dining Set', image: 'https://picsum.photos/seed/sofalist-3/600/340' },
  { caption: 'Velvet Lounge Chair', image: 'https://picsum.photos/seed/sofalist-4/600/340' },
  { caption: 'Nordic Sideboard', image: 'https://picsum.photos/seed/sofalist-5/600/340' },
  { caption: 'Brass Floor Lamp', image: 'https://picsum.photos/seed/sofalist-6/600/340' },
  { caption: 'Marble Coffee Table', image: 'https://picsum.photos/seed/sofalist-7/600/340' },
  { caption: 'Linen Bed Frame', image: 'https://picsum.photos/seed/sofalist-8/600/340' },
  { caption: 'Rattan Armchair', image: 'https://picsum.photos/seed/sofalist-9/600/340' },
  { caption: 'Walnut Bookshelf', image: 'https://picsum.photos/seed/sofalist-10/600/340' },
]

export const STATS = {
  eyebrow: 'Great Reviews for our services',
  heading: 'Technical Statistics',
  counters: [
    { value: '20', label: 'Year of Experienced' },
    { value: '10200', label: 'Satisfied Customers' },
    { value: '9850', label: 'Project Completed' },
    { value: '20', label: 'Get Awards' },
  ],
}

export interface Testimonial {
  quote: string
  author: string
  position: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The sofa they delivered is even better than the photos — the fabric feels wonderful and the whole process was effortless from quoting to assembly.',
    author: 'Roger Scott',
    position: 'Marketing Manager',
  },
  {
    quote:
      'Our dining room finally feels finished. The team helped us choose pieces that actually fit how we live, and the quality is superb.',
    author: 'Dana Whitfield',
    position: 'Interior Stylist',
  },
  {
    quote:
      'Delivery arrived exactly on schedule and the assembly team was careful and tidy. We will absolutely shop here again.',
    author: 'Priya Nair',
    position: 'Homeowner',
  },
  {
    quote:
      'A calm, personal experience from start to finish. Every question got a fast, straight answer and the craftsmanship shows.',
    author: 'Tomás Herrera',
    position: 'Architect',
  },
]

export interface Step {
  badge: string
  icon: 'quote' | 'production' | 'delivery'
  title: string
  text: string
}

export const STEPS: Step[] = [
  {
    badge: '01',
    icon: 'quote',
    title: 'Get A Free Quote',
    text: 'Tell us about your space and style — we prepare a clear, itemised quote within two working days.',
  },
  {
    badge: '02',
    icon: 'production',
    title: 'Production',
    text: 'Skilled makers craft your pieces with responsibly sourced materials and checked quality at every stage.',
  },
  {
    badge: '03',
    icon: 'delivery',
    title: 'Delivery & Assembly',
    text: 'Our own team delivers, assembles, and removes the packaging — you just enjoy the finished room.',
  },
]

export const HOW_IT_WORKS_CTA = {
  primary: 'Learn More',
  secondary: 'Get A Request',
}

export interface BlogPost {
  title: string
  excerpt: string
  meta: { author: string; date: string; comments: string }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Styling a Cottage Country Living Room',
    excerpt:
      'Warm woods, woven textures, and a relaxed seating plan that make a country living room feel gathered over time.',
    meta: { author: 'Admin', date: 'Jan. 27, 2021', comments: '3 Comments' },
  },
  {
    title: '5 Sustainable Sofa Fabrics to Consider',
    excerpt:
      'From recycled fibres to natural linen, here is how to pick an upholstery that is kind to the planet and your home.',
    meta: { author: 'Admin', date: 'Feb. 02, 2021', comments: '5 Comments' },
  },
  {
    title: 'How to Mix Wood Tones in One Room',
    excerpt:
      'A simple rule of thumb for combining oak, walnut, and rattan without the room feeling messy or mismatched.',
    meta: { author: 'Admin', date: 'Feb. 14, 2021', comments: '2 Comments' },
  },
]

export const FOOTER = {
  about:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  services: ['Living Room Furniture', 'Bedroom Furniture', 'Office Desks', 'Outdoor Pieces'],
  recentPosts: [
    'Styling a Cottage Country Living Room',
    '5 Sustainable Sofa Fabrics to Consider',
    'How to Mix Wood Tones in One Room',
  ],
  contact: {
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+2 392 3929 210',
    email: 'info@sofalist.example',
  },
}

export type SocialKey = 'facebook' | 'instagram' | 'linkedin' | 'youtube'

export const SOCIALS: SocialKey[] = ['facebook', 'instagram', 'linkedin', 'youtube']
