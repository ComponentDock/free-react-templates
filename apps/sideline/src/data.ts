/* Sideline content — original copy (paraphrased club-style sports content). */

export const heroSlides = [
  {
    image: 'https://picsum.photos/seed/sideline-hero-1/1920/800',
    title: 'Continental Cup Championship',
    blurb: 'The road to the continental final runs through the harbor this season.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-hero-2/1920/800',
    title: 'Derby Week Preview',
    blurb: 'Harbor Hawks and Founders FC renew the oldest rivalry in the league.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-hero-3/1920/800',
    title: 'Academy Signings Confirmed',
    blurb: 'Three homegrown prospects join the first team squad for the autumn run-in.',
  },
]

export const featureCards = [
  {
    image: 'https://picsum.photos/seed/sideline-feature-1/800/1000',
    title: 'Matchday Experience',
    body: 'Gates, chants and ninety minutes under the lights — everything about being there.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-feature-2/800/1000',
    title: 'Youth Academy',
    body: 'From the training pitch to the first team: how our academy shapes future captains.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-feature-3/800/1000',
    title: 'Club Heritage',
    body: 'A century of colors, crests and comebacks told through the club archive.',
  },
]

export const navItems = [
  {
    label: 'Home',
    href: '#home',
    active: true,
    dropdown: {
      items: ['Menu One', 'Menu Two', 'Menu Three'],
      subMenu: ['Menu One', 'Menu Two', 'Menu Three'],
    },
  },
  {
    label: 'News',
    href: '#news',
    dropdown: { items: ['Menu One', 'Menu Two', 'Menu Three'] },
  },
  { label: 'Matches', href: '#matches' },
  { label: 'Team', href: '#team' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const utilityContact = {
  email: 'desk@sideline.example',
  phone: '+1 232 3532 321',
}

export const nextMatch = {
  home: 'Harbor Hawks',
  away: 'Founders FC',
  homeImage: 'https://picsum.photos/seed/sideline-team-1/120/120',
  awayImage: 'https://picsum.photos/seed/sideline-team-2/120/120',
  league: 'Premier League — Round 10',
  score: '3:2',
  date: '10 September',
  time: '7:30 AM',
  kickoff: '2027-09-10T07:30:00',
}

export const matchTabs = [
  {
    id: 'match-1',
    label: 'Match 1',
    rows: [
      {
        home: 'Harbor Hawks',
        homeLeague: 'Premier League',
        score: '3:2',
        away: 'Founders FC',
        awayLeague: 'London',
      },
      {
        home: 'Riveters',
        homeLeague: 'Premier League',
        score: '1:0',
        away: 'Miners',
        awayLeague: 'Manchester',
      },
      {
        home: 'Comets',
        homeLeague: 'Championship',
        score: '2:2',
        away: 'Sentinels',
        awayLeague: 'Madrid',
      },
    ],
  },
  {
    id: 'match-2',
    label: 'Match 2',
    rows: [
      {
        home: 'Pilgrims',
        homeLeague: 'Premier League',
        score: '0:1',
        away: 'Mariners',
        awayLeague: 'South Coast',
      },
      {
        home: 'Rangers',
        homeLeague: 'Premier League',
        score: '4:1',
        away: 'Voyagers',
        awayLeague: 'Oslo',
      },
      {
        home: 'Capitals',
        homeLeague: 'Championship',
        score: '1:1',
        away: 'Lancers',
        awayLeague: 'Rome',
      },
    ],
  },
  {
    id: 'match-3',
    label: 'Match 3',
    rows: [
      {
        home: 'Founders FC',
        homeLeague: 'Premier League',
        score: '2:0',
        away: 'Miners',
        awayLeague: 'Manchester',
      },
      {
        home: 'Harbor Hawks',
        homeLeague: 'Premier League',
        score: '3:1',
        away: 'Comets',
        awayLeague: 'Madrid',
      },
      {
        home: 'Mariners',
        homeLeague: 'Championship',
        score: '0:0',
        away: 'Riveters',
        awayLeague: 'South Coast',
      },
    ],
  },
]

export const highlightCards = [
  {
    image: 'https://picsum.photos/seed/sideline-highlight-1/800/600',
    date: 'June 12th 2026',
    title: 'Continental Cup Championship',
    excerpt: 'Ninety minutes of end-to-end football decided by a stoppage-time header.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-highlight-2/800/600',
    date: 'June 5th 2026',
    title: 'Harbor Derby Highlights',
    excerpt: 'Five goals, two red cards and a winner from the edge of the box.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-highlight-3/800/600',
    date: 'May 29th 2026',
    title: 'Academy Cup Final',
    excerpt: 'The under-21s lift the academy cup after a penalty shootout in the rain.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-highlight-4/800/600',
    date: 'May 22nd 2026',
    title: 'Away Day in Madrid',
    excerpt: 'A famous European night away from home, sealed in the final minute.',
  },
]

export const newsPosts = [
  {
    image: 'https://picsum.photos/seed/sideline-news-1/800/520',
    title: 'Continental Final — Who Will Win?',
    author: 'Alex Moreau',
    date: 'Sep 25, 2026',
    excerpt: 'Both managers talk tactics, rotation and the weight of a continental final.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-news-2/800/520',
    title: 'Transfer Window Roundup',
    author: 'Priya Nair',
    date: 'Sep 22, 2026',
    excerpt: 'Every signing, every exit and what it means for the autumn fixtures.',
  },
  {
    image: 'https://picsum.photos/seed/sideline-news-3/800/520',
    title: 'Supporters Trust Meets the Board',
    author: 'Sam Okafor',
    date: 'Sep 18, 2026',
    excerpt: 'Ticket pricing, safe standing and the new community pitch take centre stage.',
  },
]

export const footerAbout =
  'Sideline is an independent sports desk covering clubs, competitions and the culture around the game — from the tunnel to the terrace.'

export const recentBlog = [
  'Derby Day Preview',
  'Academy Signings Announced',
  'Season Ticket Renewals Open',
]

export const quickMenu = [
  { label: 'Home', href: '#home' },
  { label: 'Matches', href: '#matches' },
  { label: 'News', href: '#news' },
  { label: 'Team', href: '#team' },
  { label: 'About Us', href: '#about' },
  { label: 'Privacy Policy', href: '#contact' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Membership', href: '#contact' },
]
