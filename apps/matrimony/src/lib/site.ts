/**
 * Matrimony's copy and data. Everything here is the page's own — the brand, the couple, the venue,
 * the dates, the event cards, the story, the registry marks and the footer's filler are all invented
 * for this recreation, while the band headings, the navigation labels and the invitation question
 * are the ones the design sets.
 */

export const PAGE_TITLE = 'Matrimony — Wedding Template'
export const SKIP_TARGET = '#home'

export const BRAND = 'Matrimony'
export const COUPLE_FIRST = 'Amias'
export const COUPLE_SECOND = 'Isolde'
export const HERO_EYEBROW = 'september 26'
export const HERO_TAGLINE = 'are getting married'

/** The venue the map band points at and the footer's address column prints. */
const VENUE_LAT = 54.4863
const VENUE_LON = -0.6133
export const VENUE_ADDRESS = 'The Old Orangery, 14 Lantern Row, Whitby'
export const CONTACT_PHONE = '+44 20 7946 0123'

/** Every id in the page's own navigation, used to guarantee no link is a dead anchor. */
export const SECTION_IDS = {
  home: 'home',
  story: 'story',
  info: 'info',
  countdown: 'countdown',
  gallery: 'gallery',
  gift: 'gift',
  rsvp: 'rsvp',
  registry: 'registry',
  contact: 'contact',
} as const

interface NavLeaf {
  label: string
  href: string
}

interface NavParent {
  label: string
  children: NavLeaf[]
}

export type NavItem = NavLeaf | NavParent

/** True for the one entry that opens a submenu; the tree itself is branch-free to walk. */
export function isNavParent(item: NavItem): item is NavParent {
  return 'children' in item
}

export const NAV: NavItem[] = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  { label: 'About', href: `#${SECTION_IDS.story}` },
  { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
  { label: 'Guestbook', href: `#${SECTION_IDS.rsvp}` },
  {
    label: 'Blog',
    children: [
      { label: 'Blog', href: `#${SECTION_IDS.story}` },
      { label: 'Blog Details', href: `#${SECTION_IDS.registry}` },
      { label: 'Element', href: `#${SECTION_IDS.rsvp}` },
    ],
  },
  { label: 'Contact Us', href: `#${SECTION_IDS.contact}` },
]

export interface CountdownCell {
  key: 'days' | 'hours' | 'minutes' | 'seconds'
  label: string
  /** The source's 3-2-2-3 column run across the strip's twelve columns. */
  span: string
}

export const COUNTDOWN_CELLS: CountdownCell[] = [
  { key: 'days', label: 'Days', span: 'lg:w-1/4' },
  { key: 'hours', label: 'Hours', span: 'lg:w-1/6' },
  { key: 'minutes', label: 'Mins', span: 'lg:w-1/6' },
  { key: 'seconds', label: 'Secs', span: 'lg:w-1/4' },
]

/** The three card glyphs the design paints — read off its own icon set, not guessed from its class
 * names (they are mislabelled there). */
export type CardGlyph = 'ceremony' | 'reception' | 'party'
export type RowIcon = 'date' | 'time' | 'venue' | 'address'

interface EventRow {
  icon: RowIcon
  text: string
}

export interface EventCard {
  key: CardGlyph
  title: string
  rows: EventRow[]
  active: boolean
}

const EVENT_DAY = 'Sunday 26 September 2027'

export const EVENT_CARDS: EventCard[] = [
  {
    key: 'ceremony',
    title: 'The Ceremony',
    rows: [
      { icon: 'date', text: EVENT_DAY },
      { icon: 'time', text: 'Four in the afternoon' },
      { icon: 'venue', text: 'The Old Orangery' },
      { icon: 'address', text: '14 Lantern Row, Whitby' },
    ],
    active: false,
  },
  {
    key: 'reception',
    title: 'The Reception',
    rows: [
      { icon: 'date', text: EVENT_DAY },
      { icon: 'time', text: 'Half past six in the evening' },
      { icon: 'venue', text: 'The Orangery Hall' },
      { icon: 'address', text: '14 Lantern Row, Whitby' },
    ],
    active: true,
  },
  {
    key: 'party',
    title: 'The Party',
    rows: [
      { icon: 'date', text: EVENT_DAY },
      { icon: 'time', text: 'Nine in the evening' },
      { icon: 'venue', text: 'The Boathouse' },
      { icon: 'address', text: '2 Quay Steps, Whitby' },
    ],
    active: false,
  },
]

export const CARD_LINK = 'Check out the map'
export const CARD_CTA = 'Get started'

/* Band headings and their subtext ------------------------------------------------------------- */

export const STORY_TITLE = 'Our Love Story'
export const STORY_SUBTEXT =
  'Two people, one very small kitchen, and a promise made over a pot of coffee that went cold.'

export const STORY_PANEL_TITLE = 'The Proposal'
export const STORY_PANEL_PARAGRAPHS = [
  'It happened on the stairs of the flat we had just painted, badly, on a Sunday nobody had planned anything for.',
  'There was no orchestra and no script. There was one question, asked twice because the first time it came out as a whisper.',
]

export const INFO_TITLE = 'Wedding Info'
export const INFO_SUBTEXT =
  'Three parts of one long day — the vows, the table, and everything that happens after the band starts.'

const GALLERY_CAPTIONS = ['image 01', 'image 02', 'image 03', 'image 04'] as const

export const GIFT_TITLE = 'Share The Day'
export const GIFT_SUBTEXT =
  'Your company is the only present we are asking for — everything else is a bonus.'
export const GIFT_CTA = 'Reserve your seat'

export const RSVP_TITLE = 'Are you attending?'
export const RSVP_FIELDS = {
  name: 'Your name',
  email: 'Your email',
  guest: 'Guests',
  message: 'A note for the couple',
} as const
export const GUEST_OPTIONS = ['1 Guest', '2 Guests', '3 Guests', '4 Guests'] as const
export const RSVP_SUBMIT = 'Confirm now'
export const RSVP_CONFIRMED = 'Thank you — your reply is with us. We cannot wait to see you.'
export const RSVP_NAME_ERROR = 'Please tell us your name.'
export const RSVP_EMAIL_ERROR = 'Please check your email address.'

export const REGISTRY_TITLE = 'Registry Gift'
export const REGISTRY_SUBTEXT =
  'Six shops that will look after you, should you insist on bringing something.'

export interface RegistryMark {
  name: string
  /** The mark's own glyph, drawn inline — the design's brand logos are never copied. */
  path: string
}

export const REGISTRY_MARKS: RegistryMark[] = [
  {
    name: 'Meridian',
    path: 'M6 26 24 4l18 22-18 8zM24 12 13 26h22z',
  },
  {
    name: 'Aster',
    path: 'M24 4v40M4 24h40M10 10l28 28M38 10 10 38',
  },
  {
    name: 'Lantern',
    path: 'M16 18h16l4 12-12 14-12-14zM24 4v8M14 8h20',
  },
  {
    name: 'Cove',
    path: 'M6 30c8-10 28-10 36 0-8 8-28 8-36 0zM24 8v10',
  },
  {
    name: 'Nord',
    path: 'M10 40V8l28 32V8',
  },
  {
    name: 'Quay',
    path: 'M24 6c10 0 18 8 18 18s-8 18-18 18M24 6v36M14 20h20',
  },
]

export interface FooterColumn {
  title: string
  items: NavLeaf[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Wedding Info',
    items: [
      { label: 'Finding the venue', href: `#${SECTION_IDS.contact}` },
      { label: 'What to wear', href: `#${SECTION_IDS.info}` },
      { label: 'Gifts and registry', href: `#${SECTION_IDS.registry}` },
      { label: 'Getting there', href: `#${SECTION_IDS.contact}` },
    ],
  },
  {
    title: 'About Us',
    items: [
      { label: 'Our story', href: `#${SECTION_IDS.story}` },
      { label: 'The proposal', href: `#${SECTION_IDS.story}` },
      { label: 'The party', href: `#${SECTION_IDS.info}` },
      { label: 'Photo gallery', href: `#${SECTION_IDS.gallery}` },
    ],
  },
]

export const LOCATION_TITLE = 'Location'
export const FOOTER_BLURB =
  'A page for the long day, the small hours and everyone who stayed until the band packed up.'
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
export const COMPONENT_DOCK_LABEL = 'Component Dock'
export const FOOTER_CREDIT = 'Wedding template by'

/** The social row the footer carries, each mark drawn inline (no brand-icon dependency). */
type SocialName = 'facebook' | 'x' | 'instagram' | 'pinterest'

interface Social {
  name: SocialName
  label: string
  href: string
  path: string
}

export const SOCIALS: Social[] = [
  {
    name: 'facebook',
    label: 'Matrimony on Facebook',
    href: 'https://www.componentdock.com/',
    path: 'M13.5 21v-7h2.4l.4-2.9h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.9h2.5V21z',
  },
  {
    name: 'x',
    label: 'Matrimony on X',
    href: 'https://www.componentdock.com/',
    path: 'M17.5 4h2.9l-6.3 7.2L21.5 20h-5.6l-4.4-5.7L6.4 20H3.5l6.7-7.7L3 4h5.7l4 5.3zm-1 14.3h1.6L7.4 5.6H5.7z',
  },
  {
    name: 'instagram',
    label: 'Matrimony on Instagram',
    href: 'https://www.componentdock.com/',
    path: 'M12 7.9a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zm0 6.8a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4zM17.3 7.5a1 1 0 11-2 0 1 1 0 012 0zM12 4.6c2.4 0 2.7 0 3.7.1 1 0 1.5.2 1.9.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3.9.4 1.9 0 1 .1 1.3.1 3.7s0 2.7-.1 3.7c0 1-.2 1.5-.4 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-.9.3-1.9.4-1 0-1.3.1-3.7.1s-2.7 0-3.7-.1c-1 0-1.5-.2-1.9-.4a3.3 3.3 0 01-1.2-.8 3.3 3.3 0 01-.8-1.2c-.2-.4-.3-.9-.4-1.9 0-1-.1-1.3-.1-3.7s0-2.7.1-3.7c0-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2.9-.3 1.9-.4 1 0 1.3-.1 3.7-.1z',
  },
  {
    name: 'pinterest',
    label: 'Matrimony on Pinterest',
    href: 'https://www.componentdock.com/',
    path: 'M12 4a8 8 0 00-2.9 15.5c-.1-.7-.2-1.7 0-2.4l1-4.2s-.3-.5-.3-1.3c0-1.2.7-2.1 1.6-2.1.7 0 1.1.6 1.1 1.2 0 .8-.5 1.9-.7 3-.2.9.4 1.6 1.3 1.6 1.6 0 2.7-2 2.7-4.4 0-1.8-1.3-3.2-3.6-3.2-2.7 0-4.3 2-4.3 4.1 0 .8.3 1.7.7 2.1.1.1.1.2.1.3l-.3 1.1c0 .2-.2.3-.4.2-1.1-.5-1.8-2.2-1.8-3.6 0-2.9 2.1-5.6 6.1-5.6 3.2 0 5.7 2.3 5.7 5.3 0 3.2-2 5.7-4.7 5.7-.9 0-1.8-.5-2.1-1l-.6 2.2c-.2.8-.8 1.9-1.2 2.5A8 8 0 1012 4z',
  },
]

/** Seeded placeholder photography — deterministic per template, never a copied asset. */
function photo(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}

export const HERO_PHOTO = photo('matrimony-34', 1920, 1080)
export const STORY_PHOTO = photo('matrimony-19', 900, 1100)

export interface GalleryTile {
  caption: string
  alt: string
  src: string
  full: string
  /** The source's `col-lg-4 / col-lg-8 / col-lg-8 / col-lg-4` run across the band. */
  span: string
}

export const GALLERY: GalleryTile[] = [
  {
    caption: GALLERY_CAPTIONS[0],
    alt: 'Two hands framing the setting sun',
    src: photo('matrimony-20', 1000, 1400),
    full: photo('matrimony-20', 1600, 1200),
    span: 'lg:w-1/3',
  },
  {
    caption: GALLERY_CAPTIONS[1],
    alt: 'A crowd lit by stage lights at the evening party',
    src: photo('matrimony-27', 1600, 1400),
    full: photo('matrimony-27', 1600, 1200),
    span: 'lg:w-2/3',
  },
  {
    caption: GALLERY_CAPTIONS[2],
    alt: 'One rock standing in still water at first light',
    src: photo('matrimony-38', 1600, 1400),
    full: photo('matrimony-38', 1600, 1200),
    span: 'lg:w-2/3',
  },
  {
    caption: GALLERY_CAPTIONS[3],
    alt: 'Cherry blossom opening against a pale sky',
    src: photo('matrimony-13', 1000, 1400),
    full: photo('matrimony-13', 1600, 1200),
    span: 'lg:w-1/3',
  },
]

/** The keyless map the map band embeds, centred on the venue. */
export const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${VENUE_LON - 0.09}%2C${VENUE_LAT - 0.05}%2C${VENUE_LON + 0.09}%2C${VENUE_LAT + 0.05}&layer=mapnik&marker=${VENUE_LAT}%2C${VENUE_LON}`
export const MAP_LABEL = 'Map of the venue'
