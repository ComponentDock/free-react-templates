/* Summit — conference & event landing page content.
   Brand palette: pink #df42b1 → indigo #505add gradient on deep navy
   #151853/#111343 surfaces (design tokens from the source template's
   stylesheet; copy is paraphrased to conference-appropriate content of the
   same kinds). */

export const BRAND = 'Summit'

/* Shared pill-button styling (46px tall, radius 23px, gradient fill;
   hover inverts to white with the navy-deep text). */
export const PILL =
  'inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-brand-gradient px-[25px] text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-none hover:bg-white hover:text-navy-deep hover:shadow-[0_2px_40px_8px_rgba(15,15,15,0.15)]'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Pages', href: '#pages' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const PAGES_DROPDOWN = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Blog', href: '#blog' },
  { label: 'Single Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_SLIDES = [
  {
    image: 'https://picsum.photos/seed/summit-hero1/1920/1080',
    align: 'end' as const,
    headline: 'Science Conference',
    venue: 'Shangri-La Hotel, Bangkok, Bangkok, Thailand',
    eyebrow: undefined,
    meta: undefined,
    buttons: [{ label: 'More Information', href: '#about' }],
  },
  {
    image: 'https://picsum.photos/seed/summit-hero2/1920/1080',
    align: 'center' as const,
    headline: 'OSHA Compliance',
    venue: undefined,
    eyebrow: 'The Event Consistently',
    meta: { date: 'January 14, 2032', author: 'Laura Green' },
    buttons: [
      { label: 'View More', href: '#about' },
      { label: 'Get Tickets', href: '#tickets' },
    ],
  },
] as const

/* Countdown target: the event opens January 14, 2032. */
export const EVENT_DATE = new Date(2032, 0, 14, 9, 0, 0)

export const SPEAKERS = [
  { name: 'Daniel Wells', role: 'Ceo & Founder' },
  { name: 'Sara Mitchell', role: 'Keynote Speaker' },
  { name: 'James Carter', role: 'Workshop Host' },
  { name: 'Emma Robertson', role: 'Panel Moderator' },
  { name: 'Liam Turner', role: 'Tech Lead' },
  { name: 'Olivia Bennett', role: 'Community Manager' },
] as const

export const SCHEDULE_DAYS = [
  {
    label: 'Monday',
    date: 'January 14, 2032',
    sessions: [
      {
        title: 'Opening Keynote: The Future of Work',
        speaker: 'Gary Armstrong',
        role: 'Ceo of Summit',
        time: '09:00 - 10:30',
        place: 'Mountain Resort, Phoenix, USA',
      },
      {
        title: 'Scaling Teams With Distributed Leadership',
        speaker: 'Hannah Cole',
        role: 'Head of People',
        time: '11:00 - 12:30',
        place: 'Mountain Resort, Phoenix, USA',
      },
      {
        title: 'Design Systems in Production',
        speaker: 'Marcus Feld',
        role: 'Design Director',
        time: '14:00 - 15:30',
        place: 'Mountain Resort, Phoenix, USA',
      },
      {
        title: 'Networking Reception',
        speaker: 'Summit Staff',
        role: 'Organizers',
        time: '18:00 - 20:00',
        place: 'Skyline Lounge, Phoenix, USA',
      },
    ],
  },
  {
    label: 'Tuesday',
    date: 'January 15, 2032',
    sessions: [
      {
        title: 'Machine Learning for Product Teams',
        speaker: 'Aisha Rahman',
        role: 'ML Engineer',
        time: '09:00 - 10:30',
        place: 'Mountain Resort, Phoenix, USA',
      },
      {
        title: 'Workshop: Rapid Prototyping With React',
        speaker: 'Tom Becker',
        role: 'Frontend Architect',
        time: '11:00 - 13:00',
        place: 'Workshop Hall B',
      },
      {
        title: 'Panel: The Road to Conference 2032',
        speaker: 'Laura Green',
        role: 'Program Chair',
        time: '14:30 - 16:00',
        place: 'Mountain Resort, Phoenix, USA',
      },
      {
        title: 'Lightning Talks',
        speaker: 'Various Speakers',
        role: 'Community',
        time: '16:30 - 18:00',
        place: 'Main Stage',
      },
    ],
  },
  {
    label: 'Wednesday',
    date: 'January 16, 2032',
    sessions: [
      {
        title: 'Building Resilient Cloud Architectures',
        speaker: 'Nina Kovacs',
        role: 'Cloud Architect',
        time: '09:00 - 10:30',
        place: 'Mountain Resort, Phoenix, USA',
      },
      {
        title: 'Workshop: Accessibility Audits',
        speaker: 'Sam Ortiz',
        role: 'Accessibility Lead',
        time: '11:00 - 13:00',
        place: 'Workshop Hall A',
      },
      {
        title: 'Closing Keynote: What Comes Next',
        speaker: 'Daniel Wells',
        role: 'Ceo & Founder',
        time: '14:00 - 15:30',
        place: 'Main Stage',
      },
      {
        title: 'Farewell Dinner',
        speaker: 'Summit Staff',
        role: 'Organizers',
        time: '19:00 - 22:00',
        place: 'Skyline Lounge, Phoenix, USA',
      },
    ],
  },
] as const

export const TICKETS = [
  {
    plan: '1 Day Pass',
    price: 59,
    priceNote: 'per person',
    active: false,
    features: [
      'Single Day Access',
      'Coffee Breaks',
      'Lunch Included',
      'Workshop Access',
      'Networking Dinner',
    ],
  },
  {
    plan: 'Full Pass',
    price: 99,
    priceNote: 'per person',
    active: true,
    features: [
      'All Days Access',
      'Coffee Breaks',
      'Lunch Included',
      'Workshop Access',
      'Networking Dinner',
    ],
  },
  {
    plan: 'Group Pass',
    price: 199,
    priceNote: 'for 3 people',
    active: false,
    features: [
      'All Days Access (x3)',
      'Coffee Breaks',
      'Lunch Included',
      'Workshop Access',
      'VIP Networking Event',
    ],
  },
] as const

export const SPONSORS = [
  'Northwind',
  'Vertex Labs',
  'Bluepeak',
  'Atlas Group',
  'Ironclad',
  'Meridian',
  'Solstice',
  'Apex Systems',
] as const

export const TESTIMONIALS = [
  {
    quote:
      'The Summit was the most inspiring conference I have attended this year — the sessions were practical and the speakers world-class.',
    name: 'Maria Hernandez',
    role: 'UX Manager',
  },
  {
    quote:
      'From the schedule to the networking dinners, everything ran flawlessly. I left with a dozen new ideas and contacts.',
    name: 'Jacqueline Myers',
    role: 'Product Director',
  },
  {
    quote:
      'A masterclass in event organization. The workshop track alone was worth the ticket price many times over.',
    name: 'David Okafor',
    role: 'Engineering Lead',
  },
] as const

export const NEWS = [
  {
    title: 'Five Lessons From This Year\u2019s Keynote Stage',
    date: 'January 14, 2032',
    author: 'Laura Green',
    excerpt:
      'Our speakers shared hard-won advice on leadership, remote culture, and shipping products people love. Here is what stood out from the main stage.',
  },
  {
    title: 'How to Get the Most Out of Workshop Sessions',
    date: 'January 13, 2032',
    author: 'Mark Stevens',
    excerpt:
      'Workshops are where the real learning happens. A practical guide to arriving prepared, asking better questions, and leaving with working code.',
  },
  {
    title: 'Announcing the 2032 Speaker Lineup',
    date: 'January 12, 2032',
    author: 'Emma Doyle',
    excerpt:
      'Sixteen speakers, four tracks, one unforgettable week. Meet the people who will take the stage at this year\u2019s Summit in Phoenix.',
  },
] as const

export const CONTACT_INFO = [
  { icon: 'map' as const, label: 'Address', value: '184 Main Collins Street' },
  { icon: 'phone' as const, label: 'Phone', value: '(226) 446 9371' },
  { icon: 'mail' as const, label: 'Email', value: 'hello@summitconf.com' },
  { icon: 'globe' as const, label: 'Website', value: 'www.summitconf.com' },
] as const

export const WORKSHOP_LINKS = [
  'OSHA Compliance',
  'Microsoft Excel Basics',
  'Forum Speaker Series',
  'Tedx Moscow Conference',
] as const

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/summit-gallery1/100/100',
  'https://picsum.photos/seed/summit-gallery2/100/100',
  'https://picsum.photos/seed/summit-gallery3/100/100',
  'https://picsum.photos/seed/summit-gallery4/100/100',
  'https://picsum.photos/seed/summit-gallery5/100/100',
  'https://picsum.photos/seed/summit-gallery6/100/100',
] as const

export const FOOTER_SOCIALS = [
  { network: 'facebook', label: 'Summit on Facebook' },
  { network: 'twitter', label: 'Summit on Twitter' },
  { network: 'instagram', label: 'Summit on Instagram' },
  { network: 'linkedin', label: 'Summit on LinkedIn' },
] as const
