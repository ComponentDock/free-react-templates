/**
 * Trousseau's copy and data. Every string here is the page's own — the brand, the couple, the
 * venue, the dates, the party's names, the card titles and the registry marks are all invented for
 * this recreation, and the layout's headings are the ones the design sets.
 */

export const PAGE_TITLE = 'Trousseau — Wedding Template'
export const SKIP_TARGET = '#home'

export const BRAND = 'Trousseau'
export const KICKER = 'The Wedding of'
export const COUPLE = 'Alaric & Marisol'

export const STORY_HEADING = 'Cordially Invited'
export const STORY_DATE = 'On the 11th of September, 2027'
export const STORY_NAMES = 'Alaric Fenwick & Marisol Ito'
export const STORY_VENUE = 'Little Pines Chapel, Vermont.'
export const STORY_CTA = 'View Our Story'

export const TIMER_HEADING = 'Until we getting married'
export const TIMER_CLOSING = 'are remaining'

export const JOURNEY_HEADING = 'Our Love Journey'
export const JOURNEY_INTRO =
  'From a letter left in the margin of a shared notebook to a ring on the pier, the four turns that brought us here — and the people who stood beside us at each one.'

export const MOMENTS_HEADING = 'Special Moments Captured'
export const MOMENTS_INTRO =
  'Six frames from the last year of planning: the fittings, the tasting, the long walks between venues and the afternoon the invitations finally went out.'

export const RESERVATION_HEADING = 'Reservation Form'
export const RESERVATION_INTRO =
  'Tell us who is coming and what they would like to eat, and we will hold a place for them at the long table by the orchard.'
export const RESERVATION_CTA = 'Confirm Now'
export const RESERVATION_CONFIRMED =
  'Thank you — your place is reserved. A confirmation is on its way to your inbox.'
export const RESERVATION_INVALID =
  'Please add your name and a valid email address so we can send the confirmation.'

export const ARRANGEMENT_HEADING = 'Arrengement in progress'
export const ARRANGEMENT_INTRO =
  'The running order of the day, from the walk up to the chapel to the last dance under the string lights.'

export const REGISTRY_HEADING = 'Gift Registry'
export const REGISTRY_INTRO =
  'Your company is the gift. Should you wish for something to wrap, these are the five houses holding our list.'

export const FOOTER_CREDIT = 'All rights reserved.'
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
export const COMPONENT_DOCK_LABEL = 'Component Dock'
export const FOOTER_TAGLINE = 'More templates at'

/** Every id in the page's own navigation, used to guarantee no link is a dead anchor. */
export const SECTION_IDS = {
  home: 'home',
  story: 'story',
  countdown: 'countdown',
  journey: 'journey',
  attendants: 'attendants',
  groomsmen: 'groomsmen',
  gallery: 'gallery',
  reservation: 'reservation',
  accomodation: 'accomodation',
  registry: 'registry',
} as const

export interface NavLeaf {
  label: string
  href: string
}

export interface NavGroup extends NavLeaf {
  children: NavLeaf[]
}

export type NavItem = NavLeaf | NavGroup

/** The `Pages` row is the only nested one; the union keeps the recursive render honest. */
export function isGroup(item: NavItem): item is NavGroup {
  return 'children' in item
}

export const NAV: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Accomodation', href: '#accomodation' },
  { label: 'Gallery', href: '#gallery' },
  {
    label: 'Pages',
    href: '#journey',
    children: [
      { label: 'Bridesmaid', href: '#attendants' },
      { label: 'Groomsmen', href: '#groomsmen' },
      { label: 'Elements', href: '#registry' },
    ],
  },
  { label: 'Blog', href: '#journey' },
  { label: 'Contact', href: '#reservation' },
]

export const FOOTER_NAV: NavLeaf[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Accomodation', href: '#accomodation' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pages', href: '#attendants' },
  { label: 'Blog', href: '#journey' },
  { label: 'Contact', href: '#reservation' },
]

export interface JourneyPerson {
  name: string
  role: string
  photo: string
}

export const ATTENDANTS: JourneyPerson[] = [
  { name: 'Wren Alcott', role: 'Maid of honour', photo: 'trousseau-35' },
  { name: 'Delphine Vo', role: 'Bridesmaid', photo: 'trousseau-30' },
  { name: 'Saoirse Bell', role: 'Bridesmaid', photo: 'trousseau-22' },
]

export const GROOMSMEN: JourneyPerson[] = [
  { name: 'Otis Maher', role: 'Best man', photo: 'trousseau-25' },
  { name: 'Cy Shepherd', role: 'Groomsman', photo: 'trousseau-33' },
  { name: 'Emil Duarte', role: 'Groomsman', photo: 'trousseau-14' },
]

export interface JourneyCard {
  title: string
  blurb: string
  corner: 'left' | 'right'
}

export const JOURNEY_CARDS: JourneyCard[] = [
  {
    title: 'A letter in the margins',
    blurb:
      'We met over a notebook passed down a library table, and spent a whole winter writing in its margins.',
    corner: 'left',
  },
  {
    title: 'Two kitchens, one table',
    blurb:
      'The first Sunday we cooked for eight, the table was too small and nobody minded standing.',
    corner: 'right',
  },
  {
    title: 'The bench we built',
    blurb:
      'One long cold February of sanding and arguing over stains, and a bench that now sits by the door.',
    corner: 'left',
  },
  {
    title: 'The question on the pier',
    blurb:
      'A grey morning, a borrowed coat, and a question asked before either of us had finished our coffee.',
    corner: 'right',
  },
]

export interface Moment {
  photo: string
  caption: string
}

export const MOMENTS: Moment[] = [
  { photo: 'trousseau-4', caption: 'The bridge at the end of Vale Street, on the way to the studio' },
  { photo: 'trousseau-5', caption: 'A first look at the coast, the weekend we chose the venue' },
  { photo: 'trousseau-6', caption: 'The tasting, where we chose the orchard menu' },
  { photo: 'trousseau-7', caption: 'The valley walk we take every autumn' },
  { photo: 'trousseau-26', caption: 'The lane between the chapel and the barn' },
  { photo: 'trousseau-29', caption: 'The train out to the coast, with the invitations in the bag' },
]

export const MEALS = ['Garden menu', 'Coastal menu', 'Orchard menu'] as const
export const GUESTS = ['One guest', 'Two guests', 'Three or more guests'] as const

export type Meal = (typeof MEALS)[number]
export type Guests = (typeof GUESTS)[number]

export const RESERVATION_FIELDS = {
  name: 'Name',
  email: 'Email address',
  meal: 'Meal Preferences',
  guests: 'Number of guests',
} as const

export interface ArrangementItem {
  title: string
  blurb: string
  photo: string
  alt: string
  date: string
  time: string
  address: string
}

export const ARRANGEMENT: ArrangementItem[] = [
  {
    title: 'The walk to the chapel',
    blurb: 'Guests gather at the gate and walk up the pines together, umbrellas in hand.',
    photo: 'trousseau-10',
    alt: 'A path through tall trees leading up towards the chapel',
    date: 'Friday, 11 September 2027',
    time: '15.30',
    address: 'Little Pines Chapel, Vermont.',
  },
  {
    title: 'Lunch in the orchard',
    blurb: 'One long table under the apple trees, with the garden menu served family style.',
    photo: 'trousseau-19',
    alt: 'Golden grass running across an open field',
    date: 'Friday, 11 September 2027',
    time: '17.00',
    address: 'The orchard field, Vermont.',
  },
  {
    title: 'Cake and toasts',
    blurb: 'Three short speeches, one very tall cake, and the courtyard lit by string lights.',
    photo: 'trousseau-8',
    alt: 'A table laid with cups, saucers and a plate of pastries',
    date: 'Friday, 11 September 2027',
    time: '19.30',
    address: 'The barn courtyard, Vermont.',
  },
  {
    title: 'Dancing until late',
    blurb: 'The band starts at nine and the last car leaves when the lights go out.',
    photo: 'trousseau-16',
    alt: 'A city skyline standing against the last of the evening light',
    date: 'Friday, 11 September 2027',
    time: '21.00',
    address: 'The barn, Vermont.',
  },
]

export type MarkShape = 'rings' | 'leaf' | 'kettle' | 'wave' | 'star'

export interface RegistryMark {
  name: string
  shape: MarkShape
}

export const REGISTRY: RegistryMark[] = [
  { name: 'Linden House', shape: 'rings' },
  { name: 'Copper Kettle', shape: 'kettle' },
  { name: 'Fable & Fern', shape: 'leaf' },
  { name: 'North Shore', shape: 'wave' },
  { name: 'Marlow & Co', shape: 'star' },
]

export type SocialName = 'facebook' | 'x' | 'instagram' | 'pinterest'

export interface Social {
  name: SocialName
  label: string
  href: string
}

export const SOCIALS: Social[] = [
  { name: 'facebook', label: 'Trousseau on Facebook', href: 'https://www.facebook.com/' },
  { name: 'x', label: 'Trousseau on X', href: 'https://x.com/' },
  { name: 'instagram', label: 'Trousseau on Instagram', href: 'https://www.instagram.com/' },
  { name: 'pinterest', label: 'Trousseau on Pinterest', href: 'https://www.pinterest.com/' },
]

/** The page's photography is placeholder stock: seeded, deterministic, and never a copied asset. */
export function photo(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}
