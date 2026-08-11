/**
 * Bistro content — recreation of the ColorLib "Allfood" restaurant template
 * (https://colorlib.com/wp/template/allfood/). Copy paraphrased from the
 * source preview but keeps the same content kinds. All imagery is seeded
 * picsum placeholders — never copied from the original.
 */

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

/** Blog nav dropdown (source: Blog ▾ [Blog Details, Element]). */
export const BLOG_MENU = {
  label: 'Blog',
  href: '#blog',
  children: [
    { label: 'Blog Details', href: '#blog' },
    { label: 'Element', href: '#menu' },
  ],
} as const

export const HERO_SLIDES = [
  {
    kicker: 'Discover Your Taste',
    title: 'Good food brings a great smile',
    paragraph:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    cta: { label: 'Reservation', href: '#booking' },
  },
  {
    kicker: 'Fresh Ingredients Daily',
    title: 'Taste the warmth of homemade cooking',
    paragraph:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    cta: { label: 'Reservation', href: '#booking' },
  },
] as const

export const ABOUT_CAPTIONS = [
  { icon: 'leaf', caption: 'Quality ingredients sourced fresh every morning' },
  { icon: 'chef', caption: 'Recipes crafted by our award-winning chefs' },
  { icon: 'users', caption: 'A warm, family-friendly place to gather' },
] as const

export const GALLERY_TILES = [
  { title: 'Grilled Salmon Bowl', seed: 'bistro-dish-1', tall: true },
  { title: 'Truffle Pasta', seed: 'bistro-dish-2', tall: false },
  { title: 'Seasonal Salad', seed: 'bistro-dish-3', tall: false },
  { title: 'Wood-Fired Pizza', seed: 'bistro-dish-4', tall: true },
  { title: 'Berry Cheesecake', seed: 'bistro-dish-5', tall: false },
  { title: 'Herb Roast Chicken', seed: 'bistro-dish-6', tall: false },
  { title: 'Seafood Platter', seed: 'bistro-dish-7', tall: true },
  { title: 'Fresh Oysters', seed: 'bistro-dish-8', tall: false },
  { title: 'Chocolate Fondant', seed: 'bistro-dish-9', tall: false },
  { title: 'Beef Bourguignon', seed: 'bistro-dish-10', tall: true },
] as const

export const SERVICES = [
  {
    icon: 'chef',
    title: 'Best Chef',
    paragraph:
      'Our head chefs bring years of craft to every plate, turning simple ingredients into memorable meals.',
  },
  {
    icon: 'flame',
    title: 'Quality Food',
    paragraph:
      'We source the finest local produce and cook it to order, so every dish arrives fresh and full of flavor.',
  },
  {
    icon: 'utensils',
    title: 'Perfect Cook',
    paragraph:
      'From slow roasts to delicate pastries, our kitchen masters every technique with patience and care.',
  },
] as const

export const BLOG_POSTS = [
  {
    seed: 'bistro-blog-1',
    date: '23 Dec, 2020',
    title: 'Addiction when food plate becomes your best friend',
  },
  {
    seed: 'bistro-blog-2',
    date: '18 Dec, 2020',
    title: 'Life tastes better with a little garlic and butter',
  },
  {
    seed: 'bistro-blog-3',
    date: '11 Dec, 2020',
    title: 'The secret to a perfect Sunday roast dinner',
  },
] as const

export const FOOTER_NAV_LINKS = ['Home', 'Events', 'Testimonial', 'Categories', 'Contacts'] as const

export const USEFUL_LINKS = ['Registration', 'Login', 'Policy', 'Terms & Conditions'] as const

export const INSTAGRAM_SEEDS = [
  'bistro-instagram-1',
  'bistro-instagram-2',
  'bistro-instagram-3',
  'bistro-instagram-4',
  'bistro-instagram-5',
  'bistro-instagram-6',
] as const

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#facebook' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'LinkedIn', href: '#linkedin' },
] as const
