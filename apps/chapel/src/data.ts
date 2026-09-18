export const siteName = 'Chapel'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Event', href: '#events' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const topBar = {
  upcomingLabel: 'Upcoming Event:',
  countdown: { days: 10, hours: 8, mins: 40, secs: 56 },
  readmoreLabel: 'readmore',
  accountLabel: 'My account',
} as const

export const hero = {
  heading: "Living in God's Amazing Grace!",
  paragraph:
    'For God did not send his Son into the world to condemn the world, but to save the world through him.',
  ctaLabel: 'join with us',
  image: 'https://picsum.photos/seed/chapel-hero/1920/1280',
} as const

export const eventSpotlight = {
  day: 20,
  month: 'may',
  title: 'Sponsor a Child',
  time: '8:00 Am — 10:00 Am',
  location: 'Central District, Riga, LV-1050, Latvia',
  countdown: { days: 10, hours: 8, mins: 40, secs: 56 },
  ctaLabel: 'Read more',
} as const

export const about = {
  heading: "Let's Make the World Better Together",
  paragraphs: [
    'For God did not send his Son into the world to condemn the world, but to save the world through him.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.',
  ],
  ctaLabel: 'join with us',
  image: 'https://picsum.photos/seed/chapel-about/800/600',
  imageAlt: 'Community gathering in a sunlit hall',
} as const

export const services = [
  {
    title: 'Our Values',
    icon: 'flame' as const,
    description:
      'Excepteur sint occaecat cupidatat non, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.',
    readmoreLabel: 'Readmore',
  },
  {
    title: 'Our Vision',
    icon: 'eye' as const,
    description:
      'Excepteur sint occaecat cupidatat non, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.',
    readmoreLabel: 'Readmore',
  },
  {
    title: 'Our Mission',
    icon: 'heart' as const,
    description:
      'Excepteur sint occaecat cupidatat non, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.',
    readmoreLabel: 'Readmore',
  },
] as const

export const sermon = {
  kicker: "Experience God's Presence",
  heading: 'Sermon Today',
  title: 'Lord Is Sufficient For All Of Our Needs',
  info: [
    { label: 'Sermon From:', value: 'Vincent John' },
    { label: 'Categories:', value: 'God, Pray' },
    { label: '', value: 'On Monday 23 DEC, 2018' },
  ],
  paragraphs: [
    'For God did not send his Son into the world to condemn the world, but to save the world through him.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.',
  ],
  image: 'https://picsum.photos/seed/chapel-sermon/1200/800',
} as const

export const events = [
  {
    day: 20,
    month: 'may',
    title: 'Give To Help Each Child Grow Up Healthy',
    author: 'Vincent John',
    date: 'Monday, 08:00 Am',
    location: 'Central District, Riga, LV-1050, Latvia',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    ctaLabel: 'Read more',
    image: 'https://picsum.photos/seed/chapel-event1/800/500',
  },
  {
    day: 16,
    month: 'oct',
    title: 'Your Support Helps Kids Survive & Thrive',
    author: 'Vincent John',
    date: 'Monday, 08:00 Am',
    location: 'Central District, Riga, LV-1050, Latvia',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    ctaLabel: 'Read more',
    image: 'https://picsum.photos/seed/chapel-event2/800/500',
  },
] as const

export const blog = [
  {
    date: 'On Monday 13 May, 2018',
    title: 'How To Support Children In Need Around The World',
    author: 'Sofia Joelsson',
    category: 'Sermon & Pray',
    image: 'https://picsum.photos/seed/chapel-blog1/600/400',
  },
  {
    date: 'On Monday 13 May, 2018',
    title: 'Growing Together In Faith And Community',
    author: 'Sofia Joelsson',
    category: 'Sermon & Pray',
    image: 'https://picsum.photos/seed/chapel-blog2/600/400',
  },
  {
    date: 'On Monday 13 May, 2018',
    title: 'Why We Give Back To Children',
    author: 'Sofia Joelsson',
    category: 'Sermon & Pray',
    image: 'https://picsum.photos/seed/chapel-blog3/600/400',
  },
] as const

export const newsletter = {
  heading: 'Subscribe And Tell Us Real Story About Your Journey',
  placeholder: 'Enter your email',
  ctaLabel: 'subscribe',
} as const

export const contact = {
  heading: 'Contact Us',
  city: 'New York, USA',
  address: '207 Park Avenue New York, NY 90210',
  emailLabel: 'Email:',
  email: 'info@chapel.com',
  phoneLabel: 'Phone:',
  phone: '+1 (409) 987–4567',
} as const

export const footer = {
  componentDockLabel: 'Component Dock',
  componentDockHref: 'https://www.componentdock.com/',
} as const

export const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'facebook' as const },
  { label: 'Twitter', href: '#', icon: 'twitter' as const },
  { label: 'Google', href: '#', icon: 'google' as const },
  { label: 'Instagram', href: '#', icon: 'instagram' as const },
]
