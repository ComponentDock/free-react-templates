export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fighter', href: '#fighter' },
  { label: 'Team', href: '#team' },
  { label: 'Streams', href: '#streams' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

export const clientLogos = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  name: `Clan ${index + 1}`,
  image: `https://picsum.photos/seed/arena-logo-${index + 1}/160/60`,
}))

export const streams = [
  {
    id: 1,
    title: 'Open War Challenge',
    score: '190 / 189',
    date: '27 june 2020',
    image: 'https://picsum.photos/seed/arena-stream-1/480/300',
  },
  {
    id: 2,
    title: 'Iron Fist League',
    score: '214 / 201',
    date: '02 july 2020',
    image: 'https://picsum.photos/seed/arena-stream-2/480/300',
  },
  {
    id: 3,
    title: 'Midnight Clash',
    score: '168 / 172',
    date: '11 july 2020',
    image: 'https://picsum.photos/seed/arena-stream-3/480/300',
  },
] as const

export const latestWar = {
  title: 'Open War Challenge',
  date: '27 june, 2020',
  score: '190 189',
  image: 'https://picsum.photos/seed/arena-war/1200/520',
}

export const galleryTiles = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  caption: `Fighter ${index + 1} — arena showdown`,
  image: `https://picsum.photos/seed/arena-gallery-${index + 1}/400/300`,
}))

export const countdownTarget = '2026-09-01T00:00:00Z'

export const pricingPlans = [
  {
    name: 'Silver Package',
    price: '$50.00',
    features: ['2GB Bandwidth', 'Two Account', '15GB Storage'],
  },
  {
    name: 'Gold Package',
    price: '$60.00',
    features: ['5GB Bandwidth', 'Five Account', '30GB Storage'],
  },
  {
    name: 'Platinum Package',
    price: '$80.00',
    features: ['10GB Bandwidth', 'Unlimited Account', '60GB Storage'],
  },
] as const

export const footerColumns = [
  {
    title: 'Important Link',
    links: ['WHMCS-bridge', 'Search Domain', 'My Account', 'Shopping Cart', 'Our Shop'],
  },
  {
    title: 'Contact Info',
    links: ['Address: Your arena, demo address.', 'Phone: +8880 44338899', 'Email: info@arena.gg'],
  },
] as const

export const pics = {
  hero: 'https://picsum.photos/seed/arena-hero/640/640',
  about: 'https://picsum.photos/seed/arena-about/640/480',
}
