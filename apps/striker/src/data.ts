export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Matches', href: '#matches' },
  { label: 'Players', href: '#players' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  headline: 'World Cup Event',
  subtext:
    'The finest clubs on the continent meet under the lights. Secure your seat for a summer of goals, glory and unforgettable nights.',
  cta: 'Book Ticket',
  secondary: 'Learn More',
  image: 'https://picsum.photos/seed/striker-hero/1920/1080',
  /* Fixed future target for the live countdown (reference `#date-countdown`). */
  target: '2030-06-15T20:00:00Z',
} as const

export const matchResult = {
  score: '4 - 1',
  home: {
    name: 'LA LEGA',
    result: '(win)',
    tone: 'brand',
    scorers: [
      { name: 'Anja Landry', number: 7 },
      { name: 'Eadie Salinas', number: 12 },
      { name: 'Ashton Allen', number: 10 },
      { name: 'Baxter Metcalfe', number: 5 },
    ],
  },
  away: {
    name: 'JUVENDU',
    result: '(loss)',
    tone: 'dark',
    scorers: [
      { name: 'Macauly Green', number: 3 },
      { name: 'Arham Stark', number: 8 },
      { name: 'Stephan Murillo', number: 9 },
      { name: 'Ned Ritter', number: 5 },
    ],
  },
} as const

export const news = [
  {
    title: 'Late Winner Seals the Derby',
    image: 'https://picsum.photos/seed/striker-1/800/600',
    date: 'May 24, 2020',
    author: {
      name: 'Mellissa Allison',
      avatar: 'https://picsum.photos/seed/striker-avatar-1/100/100',
    },
  },
  {
    title: 'Academy Stars Step Up',
    image: 'https://picsum.photos/seed/striker-2/800/600',
    date: 'May 22, 2020',
    author: {
      name: 'Mellissa Allison',
      avatar: 'https://picsum.photos/seed/striker-avatar-2/100/100',
    },
  },
  {
    title: 'Tactics Board: The High Press',
    image: 'https://picsum.photos/seed/striker-3/800/600',
    date: 'May 20, 2020',
    author: {
      name: 'Mellissa Allison',
      avatar: 'https://picsum.photos/seed/striker-avatar-3/100/100',
    },
  },
] as const

export const nextMatch = {
  home: { name: 'LA LEGA' },
  away: { name: 'JUVENDU' },
  competition: 'Soccer',
  league: 'World Cup League',
  date: 'December 20th, 2020 9:30 AM GMT+0',
  venue: 'New Euro Arena',
  target: '2030-06-15T20:00:00Z',
} as const

export const footballLeague = {
  home: { name: 'LA LEGA' },
  away: { name: 'JUVENDU' },
  competition: 'Soccer',
  league: 'World Cup League',
  date: 'December 20th, 2020 9:30 AM GMT+0',
  venue: 'New Euro Arena',
  standings: [
    { team: 'Football League', p: 22, w: 14, d: 4, l: 4, pts: 46 },
    { team: 'Soccer FC', p: 22, w: 13, d: 5, l: 4, pts: 44 },
    { team: 'Juvendo', p: 22, w: 12, d: 6, l: 4, pts: 42 },
    { team: 'French Football League', p: 22, w: 11, d: 6, l: 5, pts: 39 },
    { team: 'Legia Abante', p: 22, w: 10, d: 6, l: 6, pts: 36 },
    { team: 'Gliwice League', p: 22, w: 9, d: 7, l: 6, pts: 34 },
    { team: 'Cornika', p: 22, w: 8, d: 7, l: 7, pts: 31 },
    { team: 'Gravity Smash', p: 22, w: 7, d: 8, l: 7, pts: 29 },
  ],
} as const

export const videos = [
  {
    title: 'Late Winner Seals the Derby',
    thumb: 'https://picsum.photos/seed/striker-video-1/640/360',
  },
  {
    title: 'Academy Stars Step Up',
    thumb: 'https://picsum.photos/seed/striker-video-2/640/360',
  },
  {
    title: 'Tactics Board: The High Press',
    thumb: 'https://picsum.photos/seed/striker-video-3/640/360',
  },
  {
    title: 'Top Saves of the Season',
    thumb: 'https://picsum.photos/seed/striker-video-4/640/360',
  },
  {
    title: 'Fans Back the Boys',
    thumb: 'https://picsum.photos/seed/striker-video-5/640/360',
  },
  {
    title: 'Training Ground Diary',
    thumb: 'https://picsum.photos/seed/striker-video-6/640/360',
  },
] as const

export const blogPosts = [
  {
    title: 'Romelu to Stay at Madrid?',
    image: 'https://picsum.photos/seed/striker-blog-1/800/600',
    date: 'May 20, 2020',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  },
  {
    title: 'Summer Transfer Window Preview',
    image: 'https://picsum.photos/seed/striker-blog-2/800/600',
    date: 'May 18, 2020',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
] as const

export const footerColumns = [
  { title: 'News', links: ['All Club News', 'Media Center', 'Video', 'RSS'] },
  {
    title: 'Tickets',
    links: ['Online Ticket', 'Payment and Prices', 'Contact & Booking', 'Tickets Coupon'],
  },
  {
    title: 'Matches',
    links: ['Standings', 'World Cup', 'La Lega', 'Hyper Cup', 'World League'],
  },
] as const

export const socials = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Youtube', name: 'youtube' },
] as const
