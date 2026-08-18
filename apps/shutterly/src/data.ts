// ---- Navigation ---------------------------------------------------------

export type NavLink = { label: string; href: string; dropdown?: string[] }

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolios', href: '#portfolios' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#home', dropdown: ['Blog', 'Blog Details', 'Elements'] },
  { label: 'Contact', href: '#contact' },
]

// ---- Hero slider ----------------------------------------------------------

export type HeroSlide = { id: string; span: string; title: string; image: string }

export const heroSlides: HeroSlide[] = [
  {
    id: 'miami-lake',
    span: 'Nature Beauty',
    title: 'Miami Lake',
    image: 'https://picsum.photos/seed/shutterly-hero-1/1920/950',
  },
  {
    id: 'kayaking',
    span: 'Travel Shot',
    title: 'Kayaking on Lakee',
    image: 'https://picsum.photos/seed/shutterly-hero-2/1920/950',
  },
  {
    id: 'electricity',
    span: 'Action Shot',
    title: 'Electricity',
    image: 'https://picsum.photos/seed/shutterly-hero-3/1920/950',
  },
]

// ---- About ----------------------------------------------------------------

export const aboutHeading = 'I Click Moment, that you love'
export const aboutPhoto = 'https://picsum.photos/seed/shutterly-about/800/1000'
export const experienceYears = '08'
export const experienceLabel = 'Years of Experience'

// ---- Gallery ----------------------------------------------------------------

export type GalleryItem = { id: string; span: string; title: string; image: string }

export const galleryItems: GalleryItem[] = [
  {
    id: 'mountain-still',
    span: 'Nature Beauty',
    title: 'Mountain Still',
    image: 'https://picsum.photos/seed/shutterly-gallery-1/600/565',
  },
  {
    id: 'downtown-nights',
    span: 'City Lights',
    title: 'Downtown Nights',
    image: 'https://picsum.photos/seed/shutterly-gallery-2/600/565',
  },
  {
    id: 'desert-roads',
    span: 'Golden Hour',
    title: 'Desert Roads',
    image: 'https://picsum.photos/seed/shutterly-gallery-3/600/565',
  },
  {
    id: 'morning-mist',
    span: 'Deep Forest',
    title: 'Morning Mist',
    image: 'https://picsum.photos/seed/shutterly-gallery-4/600/565',
  },
  {
    id: 'coastal-lines',
    span: 'Ocean Breeze',
    title: 'Coastal Lines',
    image: 'https://picsum.photos/seed/shutterly-gallery-5/600/565',
  },
  {
    id: 'star-trails',
    span: 'Night Sky',
    title: 'Star Trails',
    image: 'https://picsum.photos/seed/shutterly-gallery-6/600/565',
  },
]

// ---- Services ----------------------------------------------------------------

export type Service = { id: string; meta: string; title: string; blurb: string; image: string }

export const services: Service[] = [
  {
    id: 'event',
    meta: 'Moments worth keeping',
    title: 'Event Photography',
    blurb: 'Concerts, conferences, and celebrations shot with a quiet eye for the decisive moment.',
    image: 'https://picsum.photos/seed/shutterly-service-1/600/400',
  },
  {
    id: 'wedding',
    meta: 'Stories told in frames',
    title: 'Wedding Photography',
    blurb: 'From the first look to the last dance — a complete, timeless record of your day.',
    image: 'https://picsum.photos/seed/shutterly-service-2/600/400',
  },
  {
    id: 'family',
    meta: 'Life, unposed',
    title: 'Family Photography',
    blurb: 'Relaxed sessions that capture the in-between moments your family will treasure.',
    image: 'https://picsum.photos/seed/shutterly-service-3/600/400',
  },
]

// ---- Testimonials --------------------------------------------------------------

export type Testimonial = { id: string; quote: string; name: string; role: string; avatar: string }

export const testimonials: Testimonial[] = [
  {
    id: 'maya',
    quote:
      'Shutterly captured our festival in a way none of us expected — every frame feels alive.',
    name: 'Maya Lindqvist',
    role: 'Event Producer',
    avatar: 'https://picsum.photos/seed/shutterly-founder-1/200/200',
  },
  {
    id: 'daniel',
    quote:
      'The wedding album is stunning. Quiet, honest, and impossibly beautiful from start to end.',
    name: 'Daniel Reyes',
    role: 'Newlywed, Galway',
    avatar: 'https://picsum.photos/seed/shutterly-founder-2/200/200',
  },
  {
    id: 'ava',
    quote:
      'Every session is effortless. The photos make our whole family look the way we feel at our best.',
    name: 'Ava Chen',
    role: 'Mother of Three',
    avatar: 'https://picsum.photos/seed/shutterly-founder-3/200/200',
  },
]

// ---- Pricing ----------------------------------------------------------------

export type Plan = { id: string; badge: string; price: string; features: string[] }

export const plans: Plan[] = [
  {
    id: 'portrait',
    badge: 'Portrait',
    price: '$ 200 USD',
    features: [
      '60-minute studio session',
      'One outfit change',
      '15 edited high-resolution photos',
      'Online private gallery',
      'Delivery within 5 days',
    ],
  },
  {
    id: 'event',
    badge: 'Event',
    price: '$ 400 USD',
    features: [
      'Up to 4 hours on location',
      'Two photographers',
      '150 edited high-resolution photos',
      'Online private gallery',
      'Delivery within 7 days',
    ],
  },
  {
    id: 'wedding',
    badge: 'Wedding',
    price: '$ 650 USD',
    features: [
      'Full-day coverage',
      'Engagement session included',
      '400 edited high-resolution photos',
      'Premium print-ready album',
      'Delivery within 2 weeks',
    ],
  },
]

// ---- Instagram strip ----------------------------------------------------------

export const instagramImages: string[] = [
  'https://picsum.photos/seed/shutterly-insta-1/600/600',
  'https://picsum.photos/seed/shutterly-insta-2/600/600',
  'https://picsum.photos/seed/shutterly-insta-3/600/600',
  'https://picsum.photos/seed/shutterly-insta-4/600/600',
  'https://picsum.photos/seed/shutterly-insta-5/600/600',
  'https://picsum.photos/seed/shutterly-insta-6/600/600',
]

// ---- Footer ----------------------------------------------------------------

export const footerNavigation = ['Home', 'About', 'Services', 'Blog', 'Contact']
export const footerContact = [
  '87/A, Green lane, CA 6732',
  'Real State',
  'info@shutterly.com',
  '+10 236 327 3782',
]
export const componentDockUrl = 'https://www.componentdock.com/'
