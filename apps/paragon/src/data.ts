/* Paragon — all copy, links, and seeded placeholder image URLs in one place.
   Single-page interior-design landing: hero slider, services, projects,
   testimonials, blog and footer. No external assets are copied — every
   image is a deterministic picsum photo/seed and every brand glyph is an
   inline SVG path (see components/BrandIcon.tsx). */

export const BRAND = 'Paragon'

/* The source splits the nav around the centered logo: Home/Project/Services
   on the left, About/Blog/Contact on the right. */
export const NAV_LEFT = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Project', href: '#projects', active: false },
  { label: 'Services', href: '#services', active: false },
] as const

export const NAV_RIGHT = [
  { label: 'About', href: '#about', active: false },
  { label: 'Blog', href: '#blog', active: false },
  { label: 'Contact', href: '#contact', active: false },
] as const

export const HERO_INTERVAL_MS = 5000

interface HeroSlide {
  headline: string
  /* Optional brand-name span rendered in green after the headline. */
  accent?: string
  lead: string
  image: string
  alt: string
}

/* Three full-width hero photos (the source runs an Owl carousel of 3
   interior shots). Picsum ids screened for interior/studio subjects:
   180 = design-studio desk, 48 = warm wooden table, 42 = cafe interior. */
export const HERO_SLIDES: HeroSlide[] = [
  {
    headline: 'Welcome to ',
    accent: 'Paragon.',
    lead: 'A studio for thoughtful interiors — where light, material and proportion come together in spaces made to be lived in.',
    image: 'https://picsum.photos/id/180/1600/900',
    alt: 'Design studio desk with sketches, a camera and a laptop',
  },
  {
    headline: 'Enhance Human Experience',
    lead: 'We design rooms around the way you actually live: calm layouts, natural warmth, and details that make every day feel considered.',
    image: 'https://picsum.photos/id/48/1600/900',
    alt: 'Warm wooden table with a laptop in a softly lit room',
  },
  {
    headline: 'The Best Interior Design',
    lead: 'From first sketch to final styling, our team shapes spaces that are as comfortable as they are beautiful.',
    image: 'https://picsum.photos/id/42/1600/900',
    alt: 'Cafe interior with a long wooden table and window light',
  },
]

export const HERO_CTA = 'Get A Quote'

export const INTRO_HEADING =
  'We Create Building, and Interior Design That Enhance The Human Experience'
export const INTRO_LEAD =
  'From concept to completion, we shape rooms, offices and public spaces with a single goal: environments that feel better to be in. Every project starts with how people move, rest and gather.'
export const INTRO_LINK = 'More About Us'

export const EXPERIENCE_TITLE = 'The Best In Interior Design'
export const EXPERIENCE_LABEL = 'Years of Experience'
export const EXPERIENCE_YEARS = '75'

interface ServiceCard {
  image: string
  caption: string
  title: string
}

export const SERVICES_HEADING = 'Our Featured Services'
export const SERVICES_LEAD =
  'A full range of interior and architectural services — from a single room to a whole building.'
export const SERVICES_LINK = 'Learn More'

export const SERVICES: ServiceCard[] = [
  {
    image: 'https://picsum.photos/seed/paragon-s1/800/600',
    caption: 'Architecture',
    title: 'Sculpting Light and Volume',
  },
  {
    image: 'https://picsum.photos/seed/paragon-s2/800/600',
    caption: 'Gym & Arena',
    title: 'Spaces That Move People',
  },
  {
    image: 'https://picsum.photos/seed/paragon-s3/800/600',
    caption: 'Interior Design',
    title: 'Layered Rooms, Quiet Luxury',
  },
  {
    image: 'https://picsum.photos/seed/paragon-s4/800/600',
    caption: 'Product Design',
    title: 'Objects With Intent',
  },
] as const

export const PROJECTS_HEADING = 'Latest Projects'
export const PROJECTS_LINK = 'View All Projects'
export const PROJECT_CAPTION = 'Interior Design'
export const PROJECT_TITLE = 'The Saddleback Residence'
export const PROJECT_BLURB =
  'A full-home renovation that pairs warm timber with cool stone — open living areas that keep their intimacy.'
export const PROJECT_LINK = 'View This Project'

interface ProjectSlide {
  image: string
  alt: string
}

export const PROJECT_IMAGES: ProjectSlide[] = [
  {
    image: 'https://picsum.photos/seed/paragon-p1/1200/800',
    alt: 'Residence living room with timber and stone',
  },
  {
    image: 'https://picsum.photos/seed/paragon-p2/1200/800',
    alt: 'Residence kitchen with warm wood cabinetry',
  },
  {
    image: 'https://picsum.photos/seed/paragon-p3/1200/800',
    alt: 'Residence bedroom with soft natural light',
  },
]

interface Testimonial {
  quote: string
  author: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The team understood exactly how we wanted to live before we could put it into words. Our home finally feels like us.',
    author: 'James Smith — CEO and Co-Founder',
  },
  {
    quote:
      'Every room was considered down to the last switch and shadow. The process was calm, and the result is extraordinary.',
    author: 'Mike Dorney — CEO and Co-Founder',
  },
  {
    quote:
      'They turned a dated office floor into a space people actually enjoy coming to work in. Incredible attention to detail.',
    author: 'Mike Dorney — CEO and Co-Founder',
  },
]

export const BLOG_HEADING = 'Blog and Updates'
export const BLOG_LEAD =
  'Notes from the studio on materials, light and the craft of making rooms feel right.'
export const BLOG_DATE = 'July 17, 2019'
export const BLOG_LINK = 'Continue Reading'

interface BlogPost {
  image: string
  date: string
  title: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/paragon-b1/600/450',
    date: BLOG_DATE,
    title: 'Designing Calm: The Quiet Kitchen',
  },
  {
    image: 'https://picsum.photos/seed/paragon-b2/600/450',
    date: BLOG_DATE,
    title: 'Light as a Building Material',
  },
  {
    image: 'https://picsum.photos/seed/paragon-b3/600/450',
    date: BLOG_DATE,
    title: 'The Return of Natural Texture',
  },
  {
    image: 'https://picsum.photos/seed/paragon-b4/600/450',
    date: BLOG_DATE,
    title: 'Small Spaces, Big Intentions',
  },
] as const

export const FOOTER_ABOUT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const FOOTER_FEATURES_TITLE = 'Features'
export const FOOTER_FEATURES = [
  'About Us',
  'Testimonials',
  'Terms of Service',
  'Privacy',
  'Contact Us',
] as const
export const NEWSLETTER_TITLE = 'Subscribe to Newsletter'
export const NEWSLETTER_TEXT = 'Subscribe newsletter to get updates'
export const NEWSLETTER_PLACEHOLDER = 'Enter Email'
export const NEWSLETTER_BUTTON = 'Subscribe'
export const FOLLOW_TITLE = 'Follow Us'
export const SOCIAL_LINKS = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'linkedin', label: 'LinkedIn' },
] as const
export const COPYRIGHT = '© 2026 Paragon. All rights reserved.'
export const COMPONENT_DOCK = {
  label: 'More templates at Component Dock',
  href: 'https://www.componentdock.com/',
} as const
