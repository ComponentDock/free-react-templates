export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Specialties', href: '#menu' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
] as const

const img = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

export type HeroSlide = {
  title: string
  paragraph: string
  image: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Eat Healthy and Natural Foods',
    paragraph:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: img('hearth-1', 1200, 750),
  },
  {
    title: 'We Love Delicious Foods',
    paragraph:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: img('hearth-2', 1200, 750),
  },
]

export const HERO_THUMBS = [
  { label: 'Australian Organic Beef', src: img('hearth-3', 160, 160) },
  { label: 'Australian Organic Beef', src: img('hearth-4', 160, 160) },
  { label: 'Australian Organic Beef', src: img('hearth-5', 160, 160) },
] as const

export const ABOUT_IMAGE = img('hearth-6', 900, 1400)

export const ABOUT_PARAGRAPHS = [
  'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.',
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
] as const

export const COUNTERS = [
  { value: 30, label: 'Years of Experienced' },
  { value: 100, label: 'Happy Customers' },
  { value: 50, label: 'Finished Projects' },
  { value: 100, label: 'Working Days' },
] as const

export const COUNTER_BG = img('hearth-10', 1920, 500)

type MenuItem = { name: string; price: string; src: string }

export type MenuColumn = { heading: string; items: MenuItem[] }

export const MENU_COLUMNS: MenuColumn[] = [
  {
    heading: 'Breakfast',
    items: [
      { name: 'Fried eggs with ham', price: '$15', src: img('hearth-11', 160, 160) },
      { name: 'Honey pancake with fruits', price: '$12', src: img('hearth-12', 160, 160) },
      { name: 'Bacon and cheese toast', price: '$18', src: img('hearth-13', 160, 160) },
    ],
  },
  {
    heading: 'Lunch',
    items: [
      { name: 'Grilled Beef with potatoes', price: '$29', src: img('hearth-14', 160, 160) },
      { name: 'Grilled Crab with Onion', price: '$35', src: img('hearth-15', 160, 160) },
      { name: 'Italian pizza with basil', price: '$22', src: img('hearth-16', 160, 160) },
    ],
  },
  {
    heading: 'Dinner',
    items: [
      { name: 'Roasted chicken with herbs', price: '$32', src: img('hearth-17', 160, 160) },
      { name: 'Salmon steak with lemon', price: '$38', src: img('hearth-18', 160, 160) },
      { name: 'Pasta with tomato sauce', price: '$24', src: img('hearth-19', 160, 160) },
    ],
  },
  {
    heading: 'Desserts',
    items: [
      { name: 'Chocolate lava cake', price: '$14', src: img('hearth-20', 160, 160) },
      { name: 'Strawberry cheesecake', price: '$16', src: img('hearth-21', 160, 160) },
      { name: 'Tiramisu with espresso', price: '$15', src: img('hearth-22', 160, 160) },
    ],
  },
  {
    heading: 'Wine Card',
    items: [
      { name: 'Merlot Reserve 2019', price: '$45', src: img('hearth-23', 160, 160) },
      { name: 'Chardonnay Gold 2021', price: '$40', src: img('hearth-24', 160, 160) },
      { name: 'Rosé Summer House', price: '$36', src: img('hearth-25', 160, 160) },
    ],
  },
  {
    heading: 'Drinks',
    items: [
      { name: 'Fresh orange juice', price: '$9', src: img('hearth-26', 160, 160) },
      { name: 'Lemon mint cooler', price: '$8', src: img('hearth-27', 160, 160) },
      { name: 'Espresso double shot', price: '$6', src: img('hearth-28', 160, 160) },
    ],
  },
]

export const TESTIMONY_BG = img('hearth-29', 1920, 900)

export type Testimony = { quote: string; name: string; role: string; src: string }

export const TESTIMONIES: Testimony[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Arthur Browner',
    role: 'Customer',
    src: img('hearth-30', 260, 260),
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Arthur Browner',
    role: 'Customer',
    src: img('hearth-31', 260, 260),
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Arthur Browner',
    role: 'Customer',
    src: img('hearth-32', 260, 260),
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Arthur Browner',
    role: 'Customer',
    src: img('hearth-33', 260, 260),
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Arthur Browner',
    role: 'Customer',
    src: img('hearth-34', 260, 260),
  },
]

export type StaffMember = { name: string; role: string; quote: string; src: string }

export const STAFF: StaffMember[] = [
  {
    name: 'John Smooth',
    role: 'CEO, Co Founder',
    quote: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    src: img('hearth-35', 640, 640),
  },
  {
    name: 'Rebeca Welson',
    role: 'Head Chef',
    quote: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    src: img('hearth-36', 640, 640),
  },
  {
    name: 'Kharl Branyt',
    role: 'Chef',
    quote: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    src: img('hearth-37', 640, 640),
  },
  {
    name: 'Luke Simon',
    role: 'Chef',
    quote: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    src: img('hearth-38', 640, 640),
  },
]

export const RESERVATION_IMAGE = img('hearth-39', 900, 1000)

export const OPEN_HOURS = [
  { day: 'Monday', hours: '9:00 - 24:00' },
  { day: 'Tuesday', hours: '9:00 - 24:00' },
  { day: 'Wednesday', hours: '9:00 - 24:00' },
  { day: 'Thursday', hours: '9:00 - 24:00' },
  { day: 'Friday', hours: '9:00 - 02:00' },
  { day: 'Saturday', hours: '9:00 - 02:00' },
  { day: 'Sunday', hours: 'Closed' },
] as const

export const INSTAGRAM_SEEDS = [
  'hearth-40',
  'hearth-41',
  'hearth-42',
  'hearth-43',
  'hearth-44',
  'hearth-45',
] as const

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Google', href: 'https://www.google.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
] as const
