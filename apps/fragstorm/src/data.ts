/* Fragstorm — gaming magazine content.
   Brand palette: dark red #c20000 on near-black #080808 base
   (design tokens from the source template's stylesheet;
   copy paraphrased to gaming-appropriate content of the same kinds). */

export const BRAND = 'Fragstorm'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Platform', href: '#updates', children: ['PlayStation', 'Windows', 'Mobile', 'Xbox'] },
  { label: 'Pages', href: '#latest' },
  { label: 'Reviews', href: '#latest' },
  { label: 'Windows', href: '#updates' },
  { label: 'Videos', href: '#videos' },
] as const

export const SOCIAL_LINKS = [
  { icon: 'facebook' as const, label: 'Facebook' },
  { icon: 'twitter' as const, label: 'Twitter' },
  { icon: 'youtube' as const, label: 'YouTube' },
  { icon: 'instagram' as const, label: 'Instagram' },
  { icon: 'mail' as const, label: 'Email' },
] as const

export const HERO_ARTICLE = {
  tag: 'PlayStation',
  headline: 'Downwell and Space Hulk: Tactics Are Coming to Xbox Game Pass for PC',
  author: 'Marcin Jankowski',
  date: 'Aug 01, 2019',
  image: 'https://picsum.photos/seed/fragstorm-hero/800/500',
}

export const TRENDING_POSTS = [
  {
    title: 'Jalopy developer is making a game where you build stuff...',
    date: 'Aug 01, 2019',
    comments: 12,
    image: 'https://picsum.photos/seed/fragstorm-trend1/200/150',
  },
  {
    title: "Valve updates Steam's new Interactive Recommender...",
    date: 'Aug 01, 2019',
    comments: 8,
    image: 'https://picsum.photos/seed/fragstorm-trend2/200/150',
  },
  {
    title: 'Capcom asks fans to test new Resident Evil game...',
    date: 'Aug 01, 2019',
    comments: 24,
    image: 'https://picsum.photos/seed/fragstorm-trend3/200/150',
  },
] as const

export const LATEST_REVIEWS = [
  {
    title: 'Monster Hunter World',
    score: 87,
    image: 'https://picsum.photos/seed/fragstorm-lp1/400/300',
  },
  {
    title: 'Red Dead Redemption 2',
    score: 92,
    image: 'https://picsum.photos/seed/fragstorm-lp2/400/300',
  },
  {
    title: 'Forza Horizon 4',
    score: 89,
    image: 'https://picsum.photos/seed/fragstorm-lp3/400/300',
  },
  { title: 'Battlefield V', score: 78, image: 'https://picsum.photos/seed/fragstorm-lp4/400/300' },
  {
    title: "Assassin's Creed Odyssey",
    score: 85,
    image: 'https://picsum.photos/seed/fragstorm-lp5/400/300',
  },
] as const

export const UPDATE_TABS = ['PlayStation', 'Windows', 'Mobile', 'Xbox'] as const

export const UPDATE_NEWS: Record<
  string,
  Array<{ title: string; date: string; comments: number; image: string }>
> = {
  PlayStation: [
    {
      title: 'A Monster Prom poster got hijacked for a Papa Roach concert...',
      date: 'Aug 01, 2019',
      comments: 12,
      image: 'https://picsum.photos/seed/fragstorm-up1/300/200',
    },
    {
      title: 'A new Borderlands 3 trailer introduces Moze and her...',
      date: 'Aug 01, 2019',
      comments: 8,
      image: 'https://picsum.photos/seed/fragstorm-up2/300/200',
    },
    {
      title: "Teamfight Tactics is in chaos after today's patch...",
      date: 'Aug 01, 2019',
      comments: 15,
      image: 'https://picsum.photos/seed/fragstorm-up3/300/200',
    },
  ],
  Windows: [
    {
      title: 'Steam Summer Sale deals include massive discounts...',
      date: 'Aug 01, 2019',
      comments: 10,
      image: 'https://picsum.photos/seed/fragstorm-uw1/300/200',
    },
    {
      title: 'Epic Games Store adds three new free titles this week...',
      date: 'Aug 01, 2019',
      comments: 7,
      image: 'https://picsum.photos/seed/fragstorm-uw2/300/200',
    },
    {
      title: 'New gaming monitor tech promises 240Hz at 4K...',
      date: 'Aug 01, 2019',
      comments: 5,
      image: 'https://picsum.photos/seed/fragstorm-uw3/300/200',
    },
  ],
  Mobile: [
    {
      title: 'PUBG Mobile Season 8 brings new map and weapons...',
      date: 'Aug 01, 2019',
      comments: 20,
      image: 'https://picsum.photos/seed/fragstorm-um1/300/200',
    },
    {
      title: 'Call of Duty Mobile launch date confirmed...',
      date: 'Aug 01, 2019',
      comments: 18,
      image: 'https://picsum.photos/seed/fragstorm-um2/300/200',
    },
    {
      title: 'Apple Arcade launches with 100+ exclusive titles...',
      date: 'Aug 01, 2019',
      comments: 9,
      image: 'https://picsum.photos/seed/fragstorm-um3/300/200',
    },
  ],
  Xbox: [
    {
      title: 'Xbox Game Pass adds 10 new titles this month...',
      date: 'Aug 01, 2019',
      comments: 14,
      image: 'https://picsum.photos/seed/fragstorm-ux1/300/200',
    },
    {
      title: 'Halo Infinite multiplayer details revealed...',
      date: 'Aug 01, 2019',
      comments: 25,
      image: 'https://picsum.photos/seed/fragstorm-ux2/300/200',
    },
    {
      title: 'Forza Motorsport 8 spotted in rating database...',
      date: 'Aug 01, 2019',
      comments: 11,
      image: 'https://picsum.photos/seed/fragstorm-ux3/300/200',
    },
  ],
}

export const VIDEO_GUIDES = [
  {
    title: 'How to Build the Perfect Gaming Setup',
    author: 'GamePro',
    date: 'Aug 01, 2019',
    comments: 12,
    image: 'https://picsum.photos/seed/fragstorm-vg1/400/250',
  },
  {
    title: 'Top 10 Tips for Battle Royale Winners',
    author: 'ProGamer',
    date: 'Aug 01, 2019',
    comments: 24,
    image: 'https://picsum.photos/seed/fragstorm-vg2/400/250',
  },
  {
    title: 'Best Settings for Competitive FPS Gaming',
    author: 'TechZone',
    date: 'Aug 01, 2019',
    comments: 8,
    image: 'https://picsum.photos/seed/fragstorm-vg3/400/250',
  },
] as const

export const INSTAGRAM_POSTS = [
  'https://picsum.photos/seed/fragstorm-ig1/300/300',
  'https://picsum.photos/seed/fragstorm-ig2/300/300',
  'https://picsum.photos/seed/fragstorm-ig3/300/300',
  'https://picsum.photos/seed/fragstorm-ig4/300/300',
] as const

export const FOOTER_COLUMNS = [
  { title: 'Fragstorm', links: ['About Us', 'Editorial Team', 'Contact Us', 'Advertise'] },
  { title: 'Categories', links: ['PlayStation', 'Xbox', 'PC Gaming', 'Mobile'] },
  { title: 'Helpful Links', links: ['Games', 'Reviews', 'News', 'Videos'] },
  { title: 'Community', links: ['Forums', 'Discord', 'Newsletter', 'RSS Feed'] },
] as const
