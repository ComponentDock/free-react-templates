// Domily — real-estate marketplace one-pager content.
// Brand palette: gold #FEC82F, navy-ink #040F2E, navy #122C77 (see index.css).
// Placeholder photos are picsum.photos (verified subjects: modern
// architecture 1076/1081, canalside 164, coastal homes 1055, fjord view
// 1015, green hillside 1039, portraits 64/823/996/1027/980).

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Blog', href: '#', children: ['Blog', 'Blog Details', 'Elements'] },
  { label: 'Contact', href: '#contact' },
] as const

export const CALL_US = 'Call Us: 10 (23) 252 3583'

export const HERO = {
  kicker: 'Browse the Top',
  accent: 'Modern Modular',
  end: 'Homes',
  subtext:
    'Domily is a modular home marketplace that helps you find, compare, and purchase a prefab modular home.',
  cta: 'Browse Home Now',
  promo: 'View Promo Video',
  image: 'https://picsum.photos/id/1076/1920/1080',
  imageAlt: 'Modern modular home development',
} as const

export const PROPERTIES = {
  label: 'Properties',
  heading: 'Display Latest & Featured Properties',
  subtitle:
    'A hand-picked selection of the latest modular homes, from compact apartments to lakefront getaways.',
  items: [
    {
      image: 'https://picsum.photos/id/1081/600/420',
      imageAlt: 'Appartment building exterior',
      price: '6728',
      title: 'Appartment',
      blurb:
        'A sunlit two-bedroom appartment in a low-rise development with shared courtyard gardens.',
      specs: [
        { icon: 'bed', label: '2 Bedroom' },
        { icon: 'bath', label: '2 Bathroom' },
        { icon: 'building', label: '1050 Sq Ft' },
      ],
    },
    {
      image: 'https://picsum.photos/id/164/600/420',
      imageAlt: 'Office space along the canal',
      price: '8610',
      title: 'Office',
      blurb:
        'A canalside office suite with floor-to-ceiling windows and a private reception lobby.',
      specs: [
        { icon: 'bed', label: '2 Bedroom' },
        { icon: 'bath', label: '2 Bathroom' },
        { icon: 'building', label: '1800 Sq Ft' },
      ],
    },
    {
      image: 'https://picsum.photos/id/1055/600/420',
      imageAlt: 'Classic coastal home',
      price: '7490',
      title: 'Classic home',
      blurb: 'A classic timber-frame home in a quiet coastal village with a wrap-around porch.',
      specs: [
        { icon: 'bed', label: '3 Bedroom' },
        { icon: 'bath', label: '2 Bathroom' },
        { icon: 'building', label: '1400 Sq Ft' },
      ],
    },
    {
      image: 'https://picsum.photos/id/1015/600/420',
      imageAlt: 'Lakefront home with water view',
      price: '9230',
      title: 'Lakefront',
      blurb:
        'A modern lakefront retreat with a glass facade overlooking the water and the cliffs beyond.',
      specs: [
        { icon: 'bed', label: '4 Bedroom' },
        { icon: 'bath', label: '3 Bathroom' },
        { icon: 'building', label: '2200 Sq Ft' },
      ],
    },
  ],
} as const

export const ABOUT = {
  label: 'About Us',
  heading:
    'From more than 25 years we have provided real estate services with honesty, trust and transparency',
  paragraphs: [
    'Domily started as a family-run brokerage in a single storefront and grew into a full-service property marketplace. Every listing we publish is walked, measured and photographed by our own team before it reaches you.',
    'We pair first-time buyers with patient advisors, help empty-nesters right-size, and manage every handover down to the last key. Our 25-year track record rests on the same promise: straight answers and no pressure.',
  ],
  cta: 'Learn More',
  image: 'https://picsum.photos/id/1039/800/900',
  imageAlt: 'Green hillside neighbourhood near the development',
} as const

export const WHY_CHOOSE = {
  label: 'Why Choose Us',
  heading: 'Our property includes all the little details that makes your life a lot better',
  items: [
    {
      icon: 'calendar',
      title: 'Flexible lease lengths and start dates',
      blurb:
        'Move in on your schedule. Choose a 6, 12 or 18-month lease and pick the start date that works for you.',
    },
    {
      icon: 'truck',
      title: 'Need to move? You can transfer homes',
      blurb:
        'Relocating? Transfer your lease to another Domily home in the network without breaking your contract.',
    },
    {
      icon: 'users',
      title: "Roommate moving out? We'll help you find a new one",
      blurb: 'We match you with vetted co-tenants so an empty room never becomes an unpaid one.',
    },
    {
      icon: 'home',
      title: 'Build a house profile',
      blurb:
        'Save your searches, set alerts for new listings, and let our agents shortlist homes that fit your life.',
    },
  ],
  cta: 'Browse Propertise',
} as const

export const TESTIMONIALS = {
  heading: 'Customer say about us',
  slides: [
    {
      quote:
        'They walked us through every step of buying our first modular home — comparisons, financing, even the moving day. We never once felt rushed or pushed.',
      name: 'Sharon Needles',
      role: 'Creative Director at Lumen Studio',
      avatar: 'https://picsum.photos/id/64/160/160',
    },
    {
      quote:
        'When my transfer came through, Domily moved our lease to a new home in a week. The team handled everything; we only packed the boxes.',
      name: 'Mara Reid',
      role: 'Project Manager at Nimbus',
      avatar: 'https://picsum.photos/id/1027/160/160',
    },
  ],
  image: 'https://picsum.photos/id/1055/800/900',
  imageAlt: 'Classic homes along the coastal lane',
} as const

export const AGENTS = {
  heading: 'Our Agents',
  subtitle:
    'Our advisors know the build quality, the lots and the resale numbers on every home we list.',
  items: [
    {
      name: 'Bella Hart',
      role: 'Real Estate Agent',
      avatar: 'https://picsum.photos/id/64/300/300',
    },
    {
      name: 'Amelia Crane',
      role: 'Real Estate Agent',
      avatar: 'https://picsum.photos/id/823/300/300',
    },
    {
      name: 'Priya Nasser',
      role: 'Real Estate Agent',
      avatar: 'https://picsum.photos/id/996/300/300',
    },
    {
      name: 'Sofia Reyes',
      role: 'Real Estate Agent',
      avatar: 'https://picsum.photos/id/1027/300/300',
    },
    {
      name: 'Lena Kovac',
      role: 'Real Estate Agent',
      avatar: 'https://picsum.photos/id/980/300/300',
    },
  ],
} as const

export const NEWSLETTER = {
  heading: 'Subscribe Newsletter',
  subtitle:
    'Monthly market briefs, new-build openings and early access to off-market lots. No spam, unsubscribe any time.',
  placeholder: 'Enter your email',
  button: 'Subscribe',
  image: 'https://picsum.photos/id/1076/900/520',
  imageAlt: 'Modern development at dusk',
} as const

export const FOOTER = {
  blurb:
    'Domily is a modular home marketplace connecting buyers with honest agents and quality prefab homes across the country.',
  columns: {
    navigation: ['Home', 'About', 'Services', 'Blog', 'Contact'],
    services: ['Drone Mapping', 'Real State', 'Commercial', 'Construction'],
    support: ['Drone Mapping', 'Real State', 'Commercial', 'Construction'],
  },
  contact: {
    address: '54/A, Millory, Kings Road, NYC',
    email: 'contact@domily.com',
    phone: '10 (87) 738-3940',
  },
} as const
