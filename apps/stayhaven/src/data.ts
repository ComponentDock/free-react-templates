/* Site content — mirrored from the original design's copy (kind + tone kept,
   wording lightly paraphrased where noted). Images are deterministic
   picsum-seeded placeholders; no source assets are copied. */

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Menus', href: '#menus' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_IMAGE = 'https://picsum.photos/id/64/1920/1080'

export const GUEST_OPTIONS = ['1', '2', '3', '4+'] as const

export const ABOUT_IMAGE = 'https://picsum.photos/seed/stayhaven-about/640/480'

export const TEAM_MEMBERS = [
  {
    name: 'Will Smith',
    role: 'President',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia, there live the blind texts.',
    image: 'https://picsum.photos/seed/stayhaven-team-1/480/480',
  },
  {
    name: 'Claire Williams',
    role: 'Business Manager',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/stayhaven-team-2/480/480',
  },
  {
    name: 'Jane Johnson',
    role: 'Marketing Director',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/stayhaven-team-3/480/480',
  },
] as const

export const ROOMS = [
  {
    name: 'Single Room',
    price: '$90',
    unit: '/ per night',
    image: 'https://picsum.photos/seed/stayhaven-room-1/640/480',
  },
  {
    name: 'Family Room',
    price: '$120',
    unit: '/ per night',
    image: 'https://picsum.photos/seed/stayhaven-room-2/640/480',
  },
  {
    name: 'Presidential Room',
    price: '$250',
    unit: '/ per night',
    image: 'https://picsum.photos/seed/stayhaven-room-3/640/480',
  },
] as const

export const PHOTOS = [
  { caption: 'Grand Lobby', image: 'https://picsum.photos/seed/stayhaven-photo-1/640/480' },
  { caption: 'Deluxe Suite', image: 'https://picsum.photos/seed/stayhaven-photo-2/640/480' },
  { caption: 'Ocean View', image: 'https://picsum.photos/seed/stayhaven-photo-3/640/480' },
  { caption: 'Pool Deck', image: 'https://picsum.photos/seed/stayhaven-photo-4/640/480' },
  { caption: 'Fine Dining', image: 'https://picsum.photos/seed/stayhaven-photo-5/640/480' },
  { caption: 'Spa & Sauna', image: 'https://picsum.photos/seed/stayhaven-photo-6/640/480' },
  { caption: 'Garden Patio', image: 'https://picsum.photos/seed/stayhaven-photo-7/640/480' },
] as const

export const MENU_IMAGE = 'https://picsum.photos/seed/stayhaven-menu/1920/1080'

export const MENU_TABS = [
  {
    id: 'food',
    label: 'Food',
    items: [
      {
        name: 'Murgh Tikka Masala',
        price: '$20.00',
        description: 'Grilled chicken simmered in a spiced tomato-cream gravy.',
      },
      {
        name: 'Fish Moilee',
        price: '$35.00',
        description: 'Coconut-milk fish stew with curry leaves and ginger.',
      },
      {
        name: 'Safed Gosht',
        price: '$18.00',
        description: 'Tender lamb cooked in a mild white almond sauce.',
      },
      {
        name: 'French Toast Combo',
        price: '$12.00',
        description: 'Brioche toast with maple butter and fresh berries.',
      },
      {
        name: 'Vegie Omelet',
        price: '$9.00',
        description: 'Farm eggs folded with peppers, spinach and herbs.',
      },
      {
        name: 'Chorizo & Egg Omelet',
        price: '$11.00',
        description: 'Smoky chorizo with melted cheese and scallions.',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Banana Split',
        price: '$8.00',
        description: 'Three scoops, warm chocolate, whipped cream and nuts.',
      },
      {
        name: 'Sticky Toffee Pudding',
        price: '$10.00',
        description: 'Date sponge with toffee sauce and vanilla cream.',
      },
      { name: 'Pecan', price: '$9.00', description: 'Buttery pecan tart with a shortbread crust.' },
      {
        name: 'Apple Strudel',
        price: '$9.00',
        description: 'Flaky pastry, cinnamon apples and raisins.',
      },
      {
        name: 'Pancakes',
        price: '$7.00',
        description: 'Fluffy stack with honey butter and seasonal fruit.',
      },
      {
        name: 'Ice Cream Sundae',
        price: '$8.00',
        description: 'Vanilla and chocolate scoops with hot fudge.',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      {
        name: 'Spring Water',
        price: '$3.00',
        description: 'Chilled still mineral water from mountain springs.',
      },
      {
        name: 'Coke, Diet Coke, Coke Zero',
        price: '$4.00',
        description: 'Classic sodas served over ice with lemon.',
      },
      { name: 'Orange Fanta', price: '$4.00', description: 'Bright citrus fizz served ice cold.' },
      {
        name: 'Lemonade, Lemon Squash',
        price: '$5.00',
        description: 'Freshly squeezed lemon with mint and sugar.',
      },
      {
        name: 'Sparkling Mineral Water',
        price: '$4.00',
        description: 'Lightly carbonated mineral water with lime.',
      },
      {
        name: 'Lemon, Lime & Bitters',
        price: '$6.00',
        description: 'Zesty citrus mixer with aromatic bitters.',
      },
    ],
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    author: 'Jean Smith',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life one day however a small line of blind text by the name of Lorem Ipsum.',
    author: 'John Doe',
  },
] as const

export const EVENTS = [
  {
    date: 'February 26, 2018',
    title: 'Travel Hacks to Make Your Flight More Comfortable',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    image: 'https://picsum.photos/seed/stayhaven-event-1/640/480',
  },
  {
    date: 'February 26, 2018',
    title: '5 Job Types That Allow You to Earn As You Travel',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/stayhaven-event-2/640/480',
  },
  {
    date: 'February 26, 2018',
    title: '30 Great Ideas on Gifts for Travelers',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/stayhaven-event-3/640/480',
  },
] as const

export const CONTACT_INFO = [
  {
    label: 'Address',
    value: '98 West 21th Street, Suite 721 New York NY 10016',
    icon: 'map-pin',
  },
  {
    label: 'Phone',
    value: '(+1) 234 4567 8910',
    icon: 'phone',
  },
  {
    label: 'Email',
    value: 'info@stayhaven.example',
    icon: 'mail',
  },
] as const

export const CTA_IMAGE = 'https://picsum.photos/seed/stayhaven-cta/1920/1080'

export const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: ['About Us', 'Terms & Conditions', 'Privacy Policy', 'Rooms'],
  },
  {
    title: 'Explore',
    links: ['The Rooms & Suites', 'About Us', 'Contact Us', 'Restaurant'],
  },
] as const

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Vimeo', href: '#' },
  { label: 'Tripadvisor', href: '#' },
] as const
