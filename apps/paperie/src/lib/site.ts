/**
 * Paperie's copy and data. Every string here is the page's own — the brand, the couple, the date,
 * the venue, the schedule, the captions and the footer's columns are all invented for this
 * recreation; the layout's headings are the ones the design sets.
 */

export const PAGE_TITLE = 'Paperie — Wedding Template'
export const SKIP_TARGET = '#home'

export const BRAND = 'Paperie'
export const DOT = '.'

export const COUPLE = 'Nadia & Wren'
export const HERO_DATE = 'Jun 21 2027'
export const HERO_TAGLINE = 'The vows are set'
export const SLIDE_PAUSE = 'Pause the slideshow'
export const SLIDE_PLAY = 'Play the slideshow'

/** The two photographs the hero cross-fades between. */
export const HERO_SLIDES = ['paperie-7', 'paperie-14']

interface NavLeaf {
  label: string
  href: string
}

export interface NavGroup {
  label: string
  children: NavLeaf[]
}

export type NavItem = NavLeaf | NavGroup

/** The row's one disclosure: its label opens a panel instead of a band. */
export function isGroup(item: NavItem): item is NavGroup {
  return 'children' in item
}

/** Every band the page can be sent to, so no link on the page is a dead anchor. */
export const SECTION_IDS = {
  home: 'home',
  story: 'story',
  schedule: 'schedule',
  gallery: 'gallery',
  gift: 'gift',
  guestBook: 'guest-book',
  location: 'location',
  partners: 'partners',
  contact: 'contact',
}

export const NAV: NavItem[] = [
  { label: 'Our Story', href: `#${SECTION_IDS.story}` },
  { label: 'Location', href: `#${SECTION_IDS.location}` },
  { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
  { label: 'Guest Book', href: `#${SECTION_IDS.guestBook}` },
  {
    label: 'Pages',
    children: [
      { label: 'Blog', href: `#${SECTION_IDS.gallery}` },
      { label: 'Blog Details', href: `#${SECTION_IDS.story}` },
      { label: 'Element', href: `#${SECTION_IDS.schedule}` },
    ],
  },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
]

export const MENU_LABEL = 'Menu'

/* Our Story ----------------------------------------------------------------------------------- */

export const STORY_HEADING = 'Our Story'
export const STORY_PHOTO = 'paperie-13'
export const STORY_PARAGRAPHS = [
  'We met over a mislaid umbrella on a wet Tuesday, and spent the next four summers walking the same lane between the orchard and the river. What began as borrowed books and long letters became a small flat, a scruffy dog and a standing Sunday breakfast.',
  'This autumn we are gathering the people who made those years worth telling — the neighbours who fed us, the friends who drove us home, and the two families who somehow never met until now.',
]

/* Schedule ------------------------------------------------------------------------------------ */

export interface Service {
  title: string
  date: string
  time: string
  address: string
  photo: string
  alt: string
}

export const SERVICES: Service[] = [
  {
    title: 'Morning Vows',
    date: 'June 21, 2027',
    time: '11:00AM-12:30PM',
    address: 'The Alder House, 12 Larch Walk, Hudson, NY',
    photo: 'paperie-22',
    alt: 'The hall with its red doors standing open',
  },
  {
    title: 'The Long Table',
    date: 'June 21, 2027',
    time: '2:00PM-5:30PM',
    address: 'The Orchard Barn, 12 Larch Walk, Hudson, NY',
    photo: 'paperie-18',
    alt: 'Meadow grass catching the last of the light',
  },
  {
    title: 'Last Dance',
    date: 'June 21, 2027',
    time: '8:00PM-1:00AM',
    address: 'The Orchard Barn, 12 Larch Walk, Hudson, NY',
    photo: 'paperie-20',
    alt: 'The car waiting to take the last of them home',
  },
]

/* Our Memories -------------------------------------------------------------------------------- */

export const MEMORIES_HEADING = 'Our Memories'

export interface Memory {
  photo: string
  caption: string
}

export const MEMORIES: Memory[] = [
  { photo: 'paperie-9', caption: 'A walk in the pine shade' },
  { photo: 'paperie-12', caption: 'The blossom by the studio door' },
  { photo: 'paperie-24', caption: 'The night the sky lit up' },
  { photo: 'paperie-27', caption: 'She walked the lane in the yellow coat' },
  { photo: 'paperie-8', caption: 'The wood in the rain' },
  { photo: 'paperie-19', caption: 'The road out of the valley' },
]

/* The Best Gift ------------------------------------------------------------------------------- */

export const GIFT_HEADING = 'The Best Gift'
export const GIFT_PHOTO = 'paperie-15'
export const GIFT_COPY = 'is your company at the long table'
export const GIFT_CTA = 'R.S.V.P'

/* Guest book ---------------------------------------------------------------------------------- */

export const RSVP_HEADING = 'Are you attending?'
export const RSVP_FIELDS = {
  name: 'Your name',
  email: 'Your email',
  guests: 'Guests',
  message: 'A note for us',
}
export const RSVP_PLACEHOLDERS = {
  name: 'Nadia Ellery',
  email: 'you@example.com',
  message: 'Anything we should know before the day.',
}
export const GUEST_COUNTS = ['Two of us', 'Three of us', 'Four of us', 'More than four'] as const
export const RSVP_CTA = 'Send the reply'
export const RSVP_CONFIRMED = 'Thank you — your reply is with us. A note is on its way to your inbox.'
export const RSVP_INVALID = 'Please add your name and a valid email address so we can write back.'

/* Location ------------------------------------------------------------------------------------ */

export const MAP_TITLE = 'Map of the orchard barn and its lane'
export const MAP_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-73.8090%2C42.2380%2C-73.7690%2C42.2620&layer=mapnik'
export const MAP_CAPTION = 'The Orchard Barn, 12 Larch Walk, Hudson, NY'

/* Our Lovely Partners ------------------------------------------------------------------------- */

export const PARTNERS_HEADING = 'Our Lovely Partners'

export type MarkShape = 'rings' | 'leaf' | 'kettle' | 'wave' | 'star'

export interface Partner {
  name: string
  shape: MarkShape
}

export const PARTNERS: Partner[] = [
  { name: 'Linden House', shape: 'rings' },
  { name: 'Copper Kettle', shape: 'kettle' },
  { name: 'Fable & Fern', shape: 'leaf' },
  { name: 'North Shore', shape: 'wave' },
  { name: 'Marlow & Co', shape: 'star' },
]

/* Foot of the page ---------------------------------------------------------------------------- */

export const FOOTER_BLURB =
  'A small stationer and event house in the Hudson valley, sending out invitations for people who write letters back.'
export const FOOTER_EMAIL = 'studio@paperie.events'
export const FOOTER_PHONE = '+(1) 518 555 0134'
export const FOOTER_ADDRESS = '9 Orchard Lane, Hudson, NY'

export const INSTAGRAM_HEADING = 'Instagram'
export const INSTAGRAM: Memory[] = [
  { photo: 'paperie-2', caption: 'The chapel on the ridge, the morning we looked at it' },
  { photo: 'paperie-5', caption: 'The pass we crossed in June' },
  { photo: 'paperie-26', caption: 'Snow still holding on the ridge' },
  { photo: 'paperie-23', caption: 'The sky the night the proofs arrived' },
  { photo: 'paperie-28', caption: 'The shore where the envelopes were signed' },
  { photo: 'paperie-10', caption: 'The red lace we nearly chose' },
]

export interface FooterColumn {
  heading: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'WEDDING PLANNER FAQS',
    links: [
      'How do I reply?',
      'Where do we stay?',
      'Is there parking?',
      'What should I wear?',
      'Can I bring a guest?',
      'Who do I ask?',
    ],
  },
  {
    heading: 'ABOUT US',
    links: [
      'The stationer',
      'Our studio',
      'The orchard',
      'Press',
      'Careers',
      'Contact',
    ],
  },
]

export const FOOTER_CREDIT = 'All rights reserved.'
export const FOOTER_TAGLINE = 'More templates at'
export const COMPONENT_DOCK_LABEL = 'Component Dock'
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/* Helpers ------------------------------------------------------------------------------------- */

/** The page's photography is placeholder stock: seeded, deterministic, and never a copied asset. */
export function photo(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}
