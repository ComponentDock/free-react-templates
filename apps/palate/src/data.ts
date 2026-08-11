/** Copy + content data for the Palate restaurant landing (recreation of
    ColorLib "Appetizer"). Kept side-effect free so every entry is
    unit-testable. */

export const BRAND = 'Palate'

export const TOP_BAR_PHONE = '+ 1235 2355 98'
export const TOP_BAR_EMAIL = 'youremail@email.com'
export const TOP_BAR_HOURS = 'Open hours: Monday - Sunday 8:00AM - 9:00PM'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]
export const NAV_CTA_LABEL = 'Book a table'

export interface HeroSlide {
  image: string
  headline: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    // Culinary mise en place still-life (picsum id 292) — "specialties".
    image: 'https://picsum.photos/id/292/1920/1080',
    headline: 'Our Delicious Specialties',
  },
  {
    // Fresh strawberries (picsum id 1080) — morning/breakfast mood.
    image: 'https://picsum.photos/id/1080/1920/1080',
    headline: 'The Best Place to Kick Off Your Day',
  },
  {
    // Latte-art coffee on a wooden counter (picsum id 431) — creamy & hot.
    image: 'https://picsum.photos/id/431/1920/1080',
    headline: 'Creamy Hot and Ready to Serve',
  },
]
export const HERO_BUTTON_PRIMARY = 'Order Now'
export const HERO_BUTTON_OUTLINE = 'View Menu'
export const HERO_SLIDE_INTERVAL_MS = 5000

export const ABOUT_SCRIPT = 'About'
export const ABOUT_TITLE = 'Appetizer Restaurant'
export const ABOUT_PARAGRAPH =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
export const ABOUT_VIDEO_LABEL = 'Play about video'

export interface CounterStat {
  value: number
  label: string
}

export const COUNTER_STATS: CounterStat[] = [
  { value: 18, label: 'Years of Experienced' },
  { value: 15000, label: 'Happy Customers' },
  { value: 100, label: 'Menus' },
  { value: 20, label: 'Staffs' },
]

export const SERVICES_SCRIPT = 'Services'
export const SERVICES_TITLE = 'Catering Services'

export type ServiceIconName = 'cake' | 'meeting' | 'tray'

export interface Service {
  icon: ServiceIconName
  title: string
  blurb: string
}

export const SERVICES: Service[] = [
  {
    icon: 'cake',
    title: 'Birthday Party',
    blurb: 'Celebrate with a custom menu, a dedicated team and a cake that steals the show.',
  },
  {
    icon: 'meeting',
    title: 'Business Meetings',
    blurb: 'Impress your clients with catered lunch breaks and elegant meeting spreads.',
  },
  {
    icon: 'tray',
    title: 'Wedding Party',
    blurb: 'From the ceremony to the last dance — full-service catering for your big day.',
  },
]

export const MENU_SCRIPT = 'Specialties'
export const MENU_TITLE = 'Our Menu'

interface MenuItem {
  seed: string
  name: string
  price: string
  tags: string[]
}

export interface MenuCategory {
  name: string
  items: MenuItem[]
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    name: 'Breakfast',
    items: [
      {
        seed: 'palate-m1',
        name: 'Pancakes with Maple Syrup',
        price: '$29',
        tags: ['Flour', 'Eggs', 'Maple', 'Berries'],
      },
      {
        seed: 'palate-m2',
        name: 'Eggs Benedict Royale',
        price: '$29',
        tags: ['Eggs', 'Bacon', 'Hollandaise', 'Muffin'],
      },
      {
        seed: 'palate-m3',
        name: 'French Toast with Berries',
        price: '$29',
        tags: ['Brioche', 'Milk', 'Sugar', 'Berries'],
      },
    ],
  },
  {
    name: 'Lunch',
    items: [
      {
        seed: 'palate-m4',
        name: 'Grilled Beef with Potatoes',
        price: '$29',
        tags: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'],
      },
      {
        seed: 'palate-m5',
        name: 'Roast Chicken with Herbs',
        price: '$29',
        tags: ['Chicken', 'Herbs', 'Garlic', 'Lemon'],
      },
      {
        seed: 'palate-m6',
        name: 'Seared Salmon with Greens',
        price: '$29',
        tags: ['Fish', 'Greens', 'Olive', 'Lime'],
      },
    ],
  },
  {
    name: 'Dinner',
    items: [
      {
        seed: 'palate-m7',
        name: 'Grilled Crab with Onion',
        price: '$29',
        tags: ['Crab', 'Onion', 'Butter', 'Garlic'],
      },
      {
        seed: 'palate-m8',
        name: 'Filet Mignon au Poivre',
        price: '$29',
        tags: ['Meat', 'Pepper', 'Cream', 'Wine'],
      },
      {
        seed: 'palate-m9',
        name: 'Herb-Roasted Lamb Chops',
        price: '$29',
        tags: ['Lamb', 'Rosemary', 'Potatoes', 'Mint'],
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        seed: 'palate-m10',
        name: 'Chocolate Lava Cake',
        price: '$29',
        tags: ['Chocolate', 'Butter', 'Sugar', 'Cocoa'],
      },
      {
        seed: 'palate-m11',
        name: 'Crème Brûlée',
        price: '$29',
        tags: ['Cream', 'Vanilla', 'Eggs', 'Caramel'],
      },
      {
        seed: 'palate-m12',
        name: 'Tiramisu Classico',
        price: '$29',
        tags: ['Mascarpone', 'Coffee', 'Cocoa', 'Ladyfingers'],
      },
    ],
  },
  {
    name: 'Wine Card',
    items: [
      {
        seed: 'palate-m13',
        name: 'Chardonnay Reserve',
        price: '$29',
        tags: ['Chardonnay', 'Oak', 'Apple', 'Butter'],
      },
      {
        seed: 'palate-m14',
        name: 'Cabernet Sauvignon',
        price: '$29',
        tags: ['Cabernet', 'Berry', 'Oak', 'Spice'],
      },
      {
        seed: 'palate-m15',
        name: 'Rosé de Provence',
        price: '$29',
        tags: ['Grenache', 'Strawberry', 'Citrus', 'Herbs'],
      },
    ],
  },
  {
    name: 'Drinks',
    items: [
      {
        seed: 'palate-m16',
        name: 'Fresh Mint Mojito',
        price: '$29',
        tags: ['Mint', 'Lime', 'Sugar', 'Soda'],
      },
      {
        seed: 'palate-m17',
        name: 'Citrus Spritz',
        price: '$29',
        tags: ['Orange', 'Lemon', 'Soda', 'Ice'],
      },
      {
        seed: 'palate-m18',
        name: 'House Iced Tea',
        price: '$29',
        tags: ['Tea', 'Peach', 'Lemon', 'Ice'],
      },
    ],
  },
]

export const RESERVATION_SCRIPT = 'Book a table'
export const RESERVATION_TITLE = 'Make Reservation'
export const RESERVATION_SUBMIT = 'Make a Reservation'
export const RESERVATION_PERSON_OPTIONS = ['Person', '1', '2', '3', '4+']
export const RESERVATION_SUCCESS = 'Thank you! Your table has been reserved.'

export interface FieldDefinition {
  id: string
  label: string
  placeholder?: string
  type?: string
  kind: 'input' | 'select'
}

export const RESERVATION_FIELDS: FieldDefinition[] = [
  { id: 'name', label: 'Name', placeholder: 'Your Name', kind: 'input' },
  { id: 'email', label: 'Email', placeholder: 'Your Email', type: 'email', kind: 'input' },
  { id: 'phone', label: 'Phone', placeholder: 'Phone', kind: 'input' },
  { id: 'date', label: 'Date', placeholder: 'Date', type: 'date', kind: 'input' },
  { id: 'time', label: 'Time', placeholder: 'Time', type: 'time', kind: 'input' },
  { id: 'person', label: 'Person', kind: 'select' },
]

export const CHEFS_SCRIPT = 'Chef'
export const CHEFS_TITLE = 'Our Master Chef'

export interface Chef {
  seed: string
  name: string
  position: string
  blurb: string
}

export const CHEFS: Chef[] = [
  {
    seed: 'palate-c1',
    name: 'John Smooth',
    position: 'Restaurant Owner',
    blurb:
      'John brings twenty years of hospitality experience and an eye for detail to every service.',
  },
  {
    seed: 'palate-c2',
    name: 'Rebeca Welson',
    position: 'Head Chef',
    blurb: 'Rebeca leads the kitchen with bold flavours and a passion for seasonal produce.',
  },
  {
    seed: 'palate-c3',
    name: 'Kharl Branyt',
    position: 'Chef',
    blurb: 'Kharl crafts the desserts that guests remember long after the last course.',
  },
  {
    seed: 'palate-c4',
    name: 'Luke Simon',
    position: 'Chef',
    blurb: 'Luke pairs classic technique with a modern twist on comfort food favourites.',
  },
]

export const TESTIMONY_SCRIPT = 'Testimony'
export const TESTIMONY_TITLE = 'Happy Customer'

export interface Testimonial {
  seed: string
  quote: string
  name: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    seed: 'palate-t1',
    quote: 'The tasting menu was flawless from the amuse-bouche to the final petit four.',
    name: 'Jason McClean',
  },
  {
    seed: 'palate-t2',
    quote: 'Warm service, a lovely room and the best seared scallops I have had in years.',
    name: 'Mark Stevenson',
  },
  {
    seed: 'palate-t3',
    quote: 'We hosted our anniversary dinner here and every single course impressed us.',
    name: 'Art Leonard',
  },
  {
    seed: 'palate-t4',
    quote: 'The team handled our business dinner with grace — perfectly timed and delicious.',
    name: 'Rose Henderson',
  },
  {
    seed: 'palate-t5',
    quote: 'A hidden gem. The wine list is thoughtful and the desserts are worth the trip.',
    name: 'Ian Boner',
  },
]
export const TESTIMONY_POSITION = 'Customer'

export const FOOTER_TAGLINE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export interface OpenHoursRow {
  days: string
  hours: string
}

export const OPEN_HOURS: OpenHoursRow[] = [
  { days: 'Monday', hours: '9:00 - 24:00' },
  { days: 'Tuesday', hours: '9:00 - 24:00' },
  { days: 'Wednesday', hours: '9:00 - 24:00' },
  { days: 'Thursday', hours: '9:00 - 24:00' },
  { days: 'Friday', hours: '9:00 - 02:00' },
  { days: 'Saturday', hours: '9:00 - 02:00' },
  { days: 'Sunday', hours: '9:00 - 02:00' },
]

export const NEWSLETTER_TITLE = 'Newsletter'
export const NEWSLETTER_BLURB =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
export const NEWSLETTER_PLACEHOLDER = 'Enter email address'
export const NEWSLETTER_BUTTON = 'Subscribe'
export const NEWSLETTER_SUCCESS = 'Thank you for subscribing!'

export const INSTAGRAM_SEEDS = [
  'palate-i1',
  'palate-i2',
  'palate-i3',
  'palate-i4',
  'palate-i5',
  'palate-i6',
]

export const COPYRIGHT = '© Palate. All rights reserved.'
