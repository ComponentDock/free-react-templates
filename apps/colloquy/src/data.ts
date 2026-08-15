export const siteName = 'Colloquy'
export const tagline = 'August 25, 2018 - Miami Marina Bay'
export const skipLabel = 'Skip to content'

export const navItems = [
  { label: 'Home', href: '#home-section' },
  { label: 'About Us', href: '#about-section' },
  { label: 'Speakers', href: '#speakers-section' },
  { label: 'Events', href: '#events-section' },
  { label: 'News', href: '#news-section' },
  { label: 'Contact', href: '#contact-section' },
] as const

export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchLabel = 'Search'
export const buyTicketsLabel = 'Buy Tickets Now!'

export const heroImage = 'https://picsum.photos/id/453/1600/900'
export const hero = {
  date: 'August 25, 2018',
  title: '2018 Public Policy Conference',
  location: 'Miami Marina Bay, FL',
  blurb:
    'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  buttons: [
    { label: 'Buy Tickets Now!', href: '#pricing-section' },
    { label: 'Find out more', href: '#about-section' },
  ],
}

export const introCards = [
  {
    title: 'Conference Program',
    subtitle: 'Donec quis metus ac arcu luctus accumsan.',
    image: 'https://picsum.photos/seed/colloquy-intro1/640/420',
  },
  {
    title: 'Supersessions',
    subtitle: 'Donec quis metus ac arcu luctus accumsan.',
    image: 'https://picsum.photos/seed/colloquy-band3/640/420',
  },
  {
    title: 'The Speakers',
    subtitle: 'Donec quis metus ac arcu luctus accumsan.',
    image: 'https://picsum.photos/seed/colloquy-intro5/640/420',
  },
  {
    title: 'Explore Sessions',
    subtitle: 'Donec quis metus ac arcu luctus accumsan.',
    image: 'https://picsum.photos/seed/colloquy-intro6/640/420',
  },
  {
    title: 'Directory',
    subtitle: 'Donec quis metus ac arcu luctus accumsan.',
    image: 'https://picsum.photos/id/672/640/420',
  },
  {
    title: 'Speakers Schedule',
    subtitle: 'Donec quis metus ac arcu luctus accumsan.',
    image: 'https://picsum.photos/seed/colloquy-hero7/640/420',
  },
]

export const pricingTitle = 'Choose a plan'
export const planFeatures = [
  '3 Conference Tickets',
  'Vip Table Drinks',
  'Special PASS',
  'VIP Dinner',
]
export const pricingPlans = [
  { name: 'Beginner', price: 'Free', recommended: false },
  { name: 'recommended', price: '$29 90', recommended: true },
  { name: 'Professional', price: '$59 90', recommended: false },
] as const
export const pricingInfoLabel = 'Plan information'
export const orderPlanLabel = 'Order plan'

export const calendarDays = [
  {
    label: '22 APRIL EVENTS CALENDAR',
    events: [
      { time: '14:00', venue: 'Auditorium', title: 'Business 101' },
      { time: '15:00', venue: 'Auditorium', title: 'About technology' },
      { time: '17:00', venue: 'Auditorium', title: 'Conference calls' },
      { time: '20:00', venue: 'Auditorium', title: 'Drinks and dinner' },
    ],
  },
  {
    label: '23 APRIL EVENTS CALENDAR',
    events: [
      { time: '14:00', venue: 'Auditorium', title: 'Business 101' },
      { time: '15:00', venue: 'Auditorium', title: 'About technology' },
      { time: '17:00', venue: 'Auditorium', title: 'Conference calls' },
      { time: '20:00', venue: 'Auditorium', title: 'Drinks and dinner' },
    ],
  },
]
export const calendarHours = '08 AM - 04 PM'
export const calendarSpeaker = 'Speaker: Daniel Hill'

export const ctaTitle = 'Get your tickets now!'
export const ctaButtonLabel = 'Find out more'
export const pricingImage = 'https://picsum.photos/id/623/1600/700'
export const ctaImage = 'https://picsum.photos/seed/colloquy-band6/1600/700'

export const footerAbout =
  'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
export const footerColumns = [
  {
    title: '',
    links: ['About Us', 'Services', 'Speakers', 'Event Dates', 'Information', 'Calendar'],
  },
  {
    title: '',
    links: ['Logistics', 'Our Partners', 'Testimonials', 'Price Plans', 'News', 'Contact'],
  },
]
export const footerSocialTitle = 'Follow us on Social Media'
export const footerExtraLinks = ['Contact us', 'Sitemap', 'Privacy']
export const componentDockUrl = 'https://www.componentdock.com/'
export const componentDockName = 'Component Dock'
