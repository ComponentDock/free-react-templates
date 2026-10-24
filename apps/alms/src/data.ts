export const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'How It Works', href: '#about' },
  { label: 'Donate', href: '#fundraisers' },
  { label: 'Gallery', href: '#stories' },
  { label: 'Blog', href: '#news' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export type FeatureIcon = 'Lightbulb' | 'HandCoins' | 'Users'

export const features: { icon: FeatureIcon; title: string; description: string }[] = [
  {
    icon: 'Lightbulb',
    title: 'Our Mission',
    description:
      'We partner with local leaders to fund clean water, schooling and shelter where the need is greatest.',
  },
  {
    icon: 'HandCoins',
    title: 'Make Donations',
    description:
      'Every gift is tracked to a named program, so you can see the families your generosity reaches.',
  },
  {
    icon: 'Users',
    title: 'We Need Volunteers',
    description:
      'Join a field team or help from home — a few hours a month keeps our programs running.',
  },
]

export const fundraisers = [
  {
    title: 'Clean Water for Urban Schools',
    image: 'https://picsum.photos/seed/alms-fund1/600/400',
    blurb:
      'Filters, storage tanks and hygiene training for twelve schools in the river districts.',
    raised: 12000,
    goal: 30000,
  },
  {
    title: 'Shelter Kits for Displaced Families',
    image: 'https://picsum.photos/seed/alms-fund2/600/400',
    blurb:
      'Tarpaulins, blankets and cooking sets delivered within 72 hours of a displacement alert.',
    raised: 12000,
    goal: 30000,
  },
  {
    title: 'Classrooms for Rural Children',
    image: 'https://picsum.photos/seed/alms-fund3/600/400',
    blurb:
      'Desks, books and a teacher stipend for three villages without a permanent school.',
    raised: 12000,
    goal: 30000,
  },
  {
    title: 'Food Parcels for Refugee Camps',
    image: 'https://picsum.photos/seed/alms-fund4/600/400',
    blurb:
      'A month of staples for a family of five, sourced from growers near each camp.',
    raised: 12000,
    goal: 30000,
  },
  {
    title: 'Volunteer Training Weeks',
    image: 'https://picsum.photos/seed/alms-fund5/600/400',
    blurb:
      'First aid, safeguarding and logistics training for the volunteers who run our programs.',
    raised: 12000,
    goal: 30000,
  },
  {
    title: 'Winter Warmth for Orphanages',
    image: 'https://picsum.photos/seed/alms-fund6/600/400',
    blurb:
      'Coats, boots and heating fuel for the highland orphanages through the cold season.',
    raised: 12000,
    goal: 30000,
  },
]

export const donations = [
  {
    name: 'Jorge Smith',
    avatar: 'https://picsum.photos/seed/alms-donor1/180/180',
    time: 'Donated Just now',
    amount: '$252',
    cause: 'Clean Water for Urban Schools',
  },
  {
    name: 'Christine Charles',
    avatar: 'https://picsum.photos/seed/alms-donor2/180/180',
    time: 'Donated 1 hour ago',
    amount: '$400',
    cause: 'Classrooms for Rural Children',
  },
  {
    name: 'Albert Sluyter',
    avatar: 'https://picsum.photos/seed/alms-donor3/180/180',
    time: 'Donated 4 hours ago',
    amount: '$1,200',
    cause: 'Shelter Kits for Displaced Families',
  },
  {
    name: 'Andrew Holloway',
    avatar: 'https://picsum.photos/seed/alms-donor4/180/180',
    time: 'Donated 9 hours ago',
    amount: '$100',
    cause: 'Clean Water for Urban Schools',
  },
]

export const posts = [
  {
    title: 'Be A Volunteer Today',
    image: 'https://picsum.photos/seed/alms-post1/600/400',
    date: 'July 26, 2026',
    excerpt: 'A morning with the water team in the river districts, and what a first shift looks like.',
  },
  {
    title: 'You May Save The Life of A Child',
    image: 'https://picsum.photos/seed/alms-post2/600/400',
    date: 'July 26, 2026',
    excerpt: 'How a monthly gift of twelve dollars keeps a school clinic stocked with medicine.',
  },
  {
    title: 'Children That Need Care',
    image: 'https://picsum.photos/seed/alms-post3/600/400',
    date: 'July 26, 2026',
    excerpt: 'Three siblings, one foster family, and the case workers who made the match.',
  },
]

export const recentPosts = [
  {
    title: 'Clean Water for Urban Schools',
    image: 'https://picsum.photos/seed/alms-recent1/160/160',
    date: 'July 29, 2026',
    author: 'Admin',
  },
  {
    title: 'Life Is Short So Be Kind',
    image: 'https://picsum.photos/seed/alms-recent2/160/160',
    date: 'July 29, 2026',
    author: 'Admin',
  },
  {
    title: 'Unfortunate Children Need Your Love',
    image: 'https://picsum.photos/seed/alms-recent3/160/160',
    date: 'July 29, 2026',
    author: 'Admin',
  },
]

export const contact = {
  address: '203 Market Street, Mountain View, California, USA',
  phone: '+2 392 3929 210',
  email: 'hello@alms.org',
}
