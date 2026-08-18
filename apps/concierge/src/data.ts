// Concierge content — travel/hotel one-pager.
// Image slots use deterministic picsum placeholders; the hero/about seeds
// (ids 1015, 1055) were verified for subject fit (water/coastal scenes).

export const BRAND = 'Concierge'

export const PHONE = '123-489-9381'

export interface NavLink {
  label: string
  children?: NavLink[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home' },
  {
    label: 'Destination',
    children: [
      { label: 'Menu One' },
      { label: 'Menu Two' },
      {
        label: 'Dropdown',
        children: [
          { label: 'Sub Menu One' },
          { label: 'Sub Menu Two' },
          { label: 'Sub Menu Three' },
        ],
      },
    ],
  },
  { label: 'Services' },
  { label: 'About' },
  { label: 'Contact' },
] as const

export const IMAGES = {
  hero: 'https://picsum.photos/id/1015/1600/900',
  about: 'https://picsum.photos/id/1055/600/700',
  blog: [
    'https://picsum.photos/seed/concierge-blog1/600/400',
    'https://picsum.photos/seed/concierge-blog2/600/400',
    'https://picsum.photos/seed/concierge-blog3/600/400',
    'https://picsum.photos/seed/concierge-blog4/600/400',
    'https://picsum.photos/seed/concierge-blog5/600/400',
  ],
  instagram: [
    'https://picsum.photos/seed/concierge-ig1/600/600',
    'https://picsum.photos/seed/concierge-ig2/600/600',
    'https://picsum.photos/seed/concierge-ig3/600/600',
    'https://picsum.photos/seed/concierge-ig4/600/600',
    'https://picsum.photos/seed/concierge-ig5/600/600',
    'https://picsum.photos/seed/concierge-ig6/600/600',
    'https://picsum.photos/seed/concierge-ig7/600/600',
    'https://picsum.photos/seed/concierge-ig8/600/600',
  ],
} as const

export const HERO = {
  headline: "Once a year go someplace you've never been before.",
  videoLabel: 'See video',
  videoUrl: 'https://www.youtube.com/embed/mwtbEGNABWU',
} as const

export const BOOKING = {
  arrivalLabel: 'Date Arrival',
  departureLabel: 'Date Departure',
  personsLabel: '# of Person',
  persons: ['1', '2', '3', '4', '5+'] as const,
  submitLabel: 'Find now',
} as const

export type ServiceIcon = 'mountain' | 'map' | 'briefcase' | 'palmtree' | 'globe' | 'plane'

export interface ServiceItem {
  title: string
  icon: ServiceIcon
  blurb: string
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Trekking',
    icon: 'mountain',
    blurb:
      'Guided mountain trails through untouched valleys, paced to match your group and your spirit of adventure.',
  },
  {
    title: 'The Map',
    icon: 'map',
    blurb:
      'Hand-drawn route maps and local tips so every detour you take leads somewhere worth remembering.',
  },
  {
    title: 'Suitcase',
    icon: 'briefcase',
    blurb:
      'Packing checklists and luggage support that keep your travel light, organised, and ready for anything.',
  },
  {
    title: 'Island Hoping',
    icon: 'palmtree',
    blurb:
      'Boat transfers between the prettiest islands, with beach days and snorkel stops built into every crossing.',
  },
  {
    title: 'World Round',
    icon: 'globe',
    blurb:
      "Multi-continent itineraries that string the world's great sights into one seamless journey.",
  },
  {
    title: 'Travel with Plane',
    icon: 'plane',
    blurb:
      'Flight planning and airport transfers handled end to end, so the sky is the start of the holiday.',
  },
] as const

export const ABOUT = {
  heading: 'About Concierge',
  paragraph1:
    'Concierge is a boutique travel service built around the idea that a great holiday starts long before you board the plane. We plan routes, book stays, and handle the small details so all you have to do is enjoy the view.',
  paragraph2:
    'From remote mountain lodges to overwater bungalows, our local partners open doors most travellers never find. Tell us the kind of escape you are dreaming of and we will map the rest.',
} as const

export interface BlogPost {
  title: string
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  { title: 'A Weekend Guide To The Hidden Coast', image: IMAGES.blog[0] },
  { title: 'What To Pack For A Tropical Escape', image: IMAGES.blog[1] },
  { title: 'Five Stays With Unforgettable Sunrise Views', image: IMAGES.blog[2] },
  { title: 'Slow Travel: Why Less Is More Inland', image: IMAGES.blog[3] },
  { title: 'Island Hopping On A Budget', image: IMAGES.blog[4] },
] as const

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is it free?',
    answer:
      'Yes — the Concierge template is completely free to download and use for personal or commercial projects. No hidden fees and no premium unlock required.',
  },
  {
    question: 'How to install this template?',
    answer:
      'Clone the repository, install the dependencies with npm, and run the dev server to start customising. A production build is one command away.',
  },
  {
    question: 'Where can i get help?',
    answer:
      'Open an issue in the repository or reach out through the contact details in the footer — the maintainers are happy to help with setup and customisation questions.',
  },
] as const

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The Concierge team planned every transfer and every table reservation. We simply followed the itinerary and had the best two weeks of our lives.',
    name: 'Liam Carter',
    role: 'Product Designer',
  },
  {
    quote:
      'From the mountain lodge to the beach house, every stay was exactly as promised. The local guides were phenomenal and genuinely loved what they do.',
    name: 'Sofia Marino',
    role: 'Travel Blogger',
  },
  {
    quote:
      'I have booked with bigger agencies for years, but nobody paid attention to detail like this. It felt like travelling with a friend who knows everywhere.',
    name: 'Daniel Osei',
    role: 'Photographer',
  },
  {
    quote:
      'They rearranged our entire route in one afternoon when a ferry was cancelled. Calm, quick, and no extra chaos — priceless on a family holiday.',
    name: 'Emma Lindqvist',
    role: 'Primary Teacher',
  },
  {
    quote:
      'The island-hopping package was worth every penny. Small boats, quiet beaches, and zero tourist traps thanks to their local partners.',
    name: 'Noah Fernandez',
    role: 'Chef',
  },
  {
    quote:
      'Our honeymoon was seamless from start to finish. Thoughtful touches at every hotel and a bottle of something local waiting each arrival.',
    name: 'Ava Thompson',
    role: 'Nurse',
  },
  {
    quote:
      'The route maps and dining tips were spot on. We wandered where other tourists did not, and that is exactly what we asked for.',
    name: 'Ethan Blake',
    role: 'Architect',
  },
  {
    quote:
      'A last-minute work trip turned into the most relaxing long weekend I have had in years. Everything was handled before I even landed.',
    name: 'Mia Rossi',
    role: 'Startup Founder',
  },
] as const

export const INSTAGRAM = {
  heading: 'Instagram',
  blurb:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. Real holiday moments, straight from our guests.',
} as const

export const FOOTER = {
  widgets: [
    {
      title: 'Home',
      links: ['Home', 'About us', 'Places', 'Services', 'Destination', 'Terms', 'Privacy'],
    },
    {
      title: 'Practice Area',
      links: ['Travel', 'Popular places', 'Destination', 'Tour', 'Family Vacation'],
    },
    {
      title: 'Services',
      links: ['Tour', 'Swimming', 'Kayak', 'Surfing'],
    },
  ],
  contact: {
    title: 'Contact',
    address: '43 Raymouth Rd. Baltemoer, London 3910',
    phones: ['+1(123)-456-7890', '+1(123)-456-7891'],
    email: 'info@concierge.example',
  },
  connectTitle: 'Connect',
  copyright: '© 2026 Concierge — All rights reserved',
  dockLink: {
    href: 'https://www.componentdock.com/',
    label: 'More templates at Component Dock',
  },
} as const
