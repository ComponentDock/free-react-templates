export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Games', href: '#games' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  headline: 'How long can you last?',
  subtext:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  watchLabel: 'Watch Games',
  image: 'https://picsum.photos/seed/kickoff-hero/1600/900',
} as const

export const eventBar = {
  homeTeam: 'Kickoff Warriors',
  awayTeam: 'Mighty Falcons',
  league: 'FIFA Champions League',
  stage: 'Semi-Final',
  buyLabel: 'Buy Tickets',
  /* Fixed future target for the live countdown (reference `#timer`). */
  targetDate: '2028-06-01T00:00:00',
  homeLogo: 'https://picsum.photos/seed/kickoff-home/120/120',
  awayLogo: 'https://picsum.photos/seed/kickoff-away/120/120',
} as const

export const gameReport = {
  subheading: 'Game Report',
  heading: 'Great Win In Final Game',
  divider: 'Tue. Feb 21, 2019; FIFA Champions League',
  teams: [
    { name: 'Kickoff Warrior', score: 3, result: 'win' },
    { name: 'Mighty Falcons', score: 1, result: 'lost' },
  ] as const,
  cta: 'More Details',
  highlightsLabel: 'Watch Highlights',
  image: 'https://picsum.photos/seed/kickoff-victory/800/900',
  homeLogo: 'https://picsum.photos/seed/kickoff-home/120/120',
  awayLogo: 'https://picsum.photos/seed/kickoff-away/120/120',
} as const

export const schedule = {
  subheading: 'Game Schedule',
  games: Array.from({ length: 6 }, (_, index) => ({
    venue: 'Home @ Arena',
    team: 'Kickoff Warrior',
    date: 'April 17, 2018',
    logo: `https://picsum.photos/seed/kickoff-game-${index + 1}/120/120`,
  })),
} as const

export const services = [
  {
    icon: 'users',
    title: 'Senior Team',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'heart',
    title: 'For Kids',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'graduation',
    title: 'Football Schools',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'target',
    title: 'Basic Tactics',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export const team = {
  heading: 'Our Team Squad',
  image: 'https://picsum.photos/seed/kickoff-team-bg/1600/900',
  players: [
    {
      name: 'David Scott',
      position: 'Wide Receiver',
      image: 'https://picsum.photos/seed/kickoff-player-1/400/500',
    },
    {
      name: 'David Scott',
      position: 'Tight End',
      image: 'https://picsum.photos/seed/kickoff-player-2/400/500',
    },
    {
      name: 'David Scott',
      position: 'Defensive',
      image: 'https://picsum.photos/seed/kickoff-player-3/400/500',
    },
    {
      name: 'David Scott',
      position: 'Quarterback',
      image: 'https://picsum.photos/seed/kickoff-player-4/400/500',
    },
    {
      name: 'David Scott',
      position: 'Running Back',
      image: 'https://picsum.photos/seed/kickoff-player-5/400/500',
    },
    {
      name: 'David Scott',
      position: 'Center',
      image: 'https://picsum.photos/seed/kickoff-player-6/400/500',
    },
    {
      name: 'David Scott',
      position: 'Offensive Guard',
      image: 'https://picsum.photos/seed/kickoff-player-7/400/500',
    },
  ] as const,
} as const

export const about = {
  heading: 'About the Kickoff Team',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  ],
  image: 'https://picsum.photos/seed/kickoff-about/800/600',
  counters: [
    { value: 100, label: 'Game Played' },
    { value: 10, label: 'Coaches' },
    { value: 20, label: 'Trophies' },
    { value: 80, label: 'Members' },
  ] as const,
} as const

export const testimonials = {
  subheading: 'Testimonial',
  heading: 'Happy Viewers',
  image: 'https://picsum.photos/seed/kickoff-testimonial-bg/1600/900',
  slides: [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
      name: 'Arthur Browner',
      role: 'Viewer',
      avatar: 'https://picsum.photos/seed/kickoff-fan-1/200/200',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
      name: 'Arthur Browner',
      role: 'Viewer',
      avatar: 'https://picsum.photos/seed/kickoff-fan-2/200/200',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
      name: 'Arthur Browner',
      role: 'Viewer',
      avatar: 'https://picsum.photos/seed/kickoff-fan-3/200/200',
    },
  ] as const,
} as const

export const blog = {
  subheading: 'Blog',
  heading: 'Recent News',
  posts: [
    {
      day: '08',
      month: 'March',
      year: '2019',
      title: 'Why Lead Generation is Key for Business Growth',
      meta: 'Admin, Mar 08 2019',
      image: 'https://picsum.photos/seed/kickoff-blog-1/600/400',
    },
    {
      day: '07',
      month: 'March',
      year: '2019',
      title: 'Why Lead Generation is Key for Business Growth',
      meta: 'Admin, Mar 07 2019',
      image: 'https://picsum.photos/seed/kickoff-blog-2/600/400',
    },
    {
      day: '06',
      month: 'March',
      year: '2019',
      title: 'Why Lead Generation is Key for Business Growth',
      meta: 'Admin, Mar 06 2019',
      image: 'https://picsum.photos/seed/kickoff-blog-3/600/400',
    },
  ] as const,
} as const

export const subscribe = {
  heading: 'Subcribe to our upcoming match',
  placeholder: 'Enter email address',
  button: 'Subscribe',
  success: 'Thanks for subscribing!',
  error: 'Please enter a valid email address',
} as const

export const footer = {
  brand: 'Kickoff',
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
  links: ['Home', 'About', 'Games', 'Blog', 'Contact'],
} as const

export const socials = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
] as const

export const countdownLabels = ['Days', 'Hours', 'Minutes', 'Seconds'] as const
