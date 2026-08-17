/* Confab — single-page content model for the recreated design-week
   conference landing. Copy is paraphrased demo content (kept same kinds as
   the source: hero headline + date + location + CTAs, stats, speaker cards,
   about, schedule tabs, blog grid, sponsor marks, map, newsletter footer).
   On-page anchors map the single-page recreation's navigation. */

export const BRAND = 'Confab'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Location', href: '#map' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO = {
  cityWord: 'SanDiego',
  trailingWords: 'Design Week',
  date: '12 Aug 2021',
  location: '3968 Carson Street, San Diego, CA 92101',
  ticketLabel: 'Buy Ticket',
  videoTitle: 'SanDiego Design Week 2021 — Official Trailer',
  videoEmbedUrl: 'https://www.youtube.com/embed/up68UAfH0d0',
  slides: [
    {
      image: 'https://picsum.photos/id/180/1920/1080',
      alt: 'Designer workspace with laptop, notebook and camera',
    },
    {
      image: 'https://picsum.photos/id/119/1920/1080',
      alt: 'Minimal monochrome desk setup with laptop and books',
    },
  ],
} as const

export const STATS = [
  { value: '3', label: 'Day Event', caption: 'One weekend, non-stop' },
  { value: '10', label: 'Speakers', caption: 'Design leaders' },
  { value: '23', label: 'Sponsors', caption: 'Brands on board' },
] as const

export const SPEAKERS = [
  {
    name: 'Dex Font',
    role: 'Typography Lead, Pixelforged',
    bio: 'Chasing the perfect letterform since dial-up.',
    avatar: 'https://picsum.photos/id/1027/400/400',
  },
  {
    name: 'Greta Curve',
    role: 'Chief Design Officer, Northwind Studio',
    bio: 'Believes every pixel deserves a reason to exist.',
    avatar: 'https://picsum.photos/id/64/400/400',
  },
  {
    name: 'Sam Serif',
    role: 'Founder, Gridwork Labs',
    bio: 'Sells systems that make interfaces feel inevitable.',
    avatar: 'https://picsum.photos/id/823/400/400',
  },
  {
    name: 'Riley Layer',
    role: 'Design Engineer, Hexaform',
    bio: 'Builds the prototypes other prototypes imitate.',
    avatar: 'https://picsum.photos/id/996/400/400',
  },
] as const

export const ABOUT = {
  heading: 'About Design Week',
  tagline: 'A Citywide Celebration Of Design',
  paragraphs: [
    'Design Week brings the city together for three days of talks, workshops, and studio crawls. From product teams to independent makers, everyone is in the room — comparing notes, breaking assumptions, and pushing the craft forward.',
    'Every session is built around practical takeaways: real case studies, live design reviews, and honest conversations about the work. Bring a sketchbook, bring your toughest problem, and leave with a plan.',
  ],
} as const

export type DayKey = 'day1' | 'day2' | 'day3'

export const SCHEDULE = {
  days: [
    { key: 'day1', label: '17th Aug' },
    { key: 'day2', label: '18th Aug' },
    { key: 'day3', label: '19th Aug' },
  ] as const,
  sessions: {
    day1: [
      {
        time: '8:30 am',
        title: 'Registration And Breakfast',
        speaker: 'Event Team',
      },
      {
        time: '10:00 am',
        title: 'Opening Remarks And Keynote',
        speaker: 'Dex Font',
      },
      {
        time: '12:30 pm',
        title: 'Designing Accessible Interfaces',
        speaker: 'Greta Curve',
      },
      {
        time: '3:00 pm',
        title: 'Design Systems That Scale',
        speaker: 'Sam Serif',
      },
    ],
    day2: [
      {
        time: '9:00 am',
        title: 'Motion In Product Design',
        speaker: 'Riley Layer',
      },
      {
        time: '11:00 am',
        title: 'Color Theory For Dark Interfaces',
        speaker: 'Greta Curve',
      },
      {
        time: '2:00 pm',
        title: 'Workshop: Prototyping In Public',
        speaker: 'Riley Layer',
      },
      {
        time: '4:30 pm',
        title: 'Panel: The Future Of The Design Career',
        speaker: 'All Speakers',
      },
    ],
    day3: [
      {
        time: '9:30 am',
        title: 'Type At One Hundred Pixels',
        speaker: 'Dex Font',
      },
      {
        time: '11:30 am',
        title: 'From Wireframe To Shipping',
        speaker: 'Sam Serif',
      },
      {
        time: '2:30 pm',
        title: 'Studio Crawl: Behind The Scenes',
        speaker: 'Event Team',
      },
      {
        time: '5:00 pm',
        title: 'Closing Party And Awards',
        speaker: 'All Speakers',
      },
    ],
  } as const satisfies Record<DayKey, readonly { time: string; title: string; speaker: string }[]>,
} as const

export const BLOG_POSTS = [
  {
    title: 'The Grid System Is Not Dead',
    author: 'Maya Frame',
    excerpt:
      'A well-built grid is the quietest member of the team — and the one that does the most work.',
    image: 'https://picsum.photos/id/0/800/500',
  },
  {
    title: 'Color Theory For Dark Interfaces',
    author: 'Owen Darkly',
    excerpt:
      'Dark surfaces flip every assumption about contrast, hierarchy, and mood. Here is what changes.',
    image: 'https://picsum.photos/id/48/800/500',
  },
  {
    title: 'Typography At 100 Pixels',
    author: 'Iris Wilder',
    excerpt:
      'Oversized display type is a room’s loudest voice. Use it with intention and it commands respect.',
    image: 'https://picsum.photos/id/1/800/500',
  },
] as const

export const SPONSORS = [
  'Vertex',
  'Pixelforged',
  'Northwind',
  'Gridwork',
  'Hexaform',
  'Studio Nine',
] as const

export const FOOTER = {
  blurb:
    'Confab is the design week for everyone who builds for screens — three days of talks, workshops, and studio crawls in the city.',
  newsletterHeading: 'Subscribe Newsletter',
  newsletterLabel: 'Email address',
  newsletterPlaceholder: 'Enter your email',
  subscribeLabel: 'Subscribe',
  newsletterSuccess: 'You are subscribed — see you at the next session.',
  newsletterError: 'Please enter a valid email address.',
  contactEmail: 'hello@confab.demo',
  contactPhone: '10 (85) 980 3673',
  credit: 'All rights reserved. More templates at',
} as const
