/**
 * Reverie's copy and data. Every string here belongs to this recreation — the brand, the service
 * blurbs, the gallery captions, the blog posts, the vendor wordmarks and the footer's filler are
 * invented for the page, while the band headings, the navigation labels, the field kinds and the
 * contact lines are the ones the design sets.
 *
 * The palette the design was drawn in (sage #6b705d, the grey-green button #a3a698, the request
 * card's olive #5e6350, the rose-tinted shadows and the dark olive footer #3b3e33) lives in
 * `index.css`; this module carries only words, numbers and seeds.
 */

export const PAGE_TITLE = 'Reverie — Wedding Planning and Events'
export const SKIP_TARGET = '#home'
export const SKIP_LABEL = 'Skip to content'
export const MAIN_ID = 'main'

export const BRAND = 'Reverie'
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
export const COMPONENT_DOCK_LABEL = 'Component Dock'

/* Navigation ----------------------------------------------------------------------------------- */

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
  services: 'services',
  portfolio: 'portfolio',
  request: 'request',
  news: 'news',
  contact: 'contact',
} as const

/**
 * The design's six-item row. Its three inner-page rows (About, Team, Blog Details) resolve to the
 * bands this one-pager actually ships, so the panel holds no dead anchor.
 */
export const NAV: NavItem[] = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  { label: 'Services', href: `#${SECTION_IDS.services}` },
  { label: 'Portfolio', href: `#${SECTION_IDS.portfolio}` },
  {
    label: 'Pages',
    children: [
      { label: 'About', href: `#${SECTION_IDS.portfolio}` },
      { label: 'Team', href: `#${SECTION_IDS.services}` },
      { label: 'Blog Details', href: `#${SECTION_IDS.news}` },
    ],
  },
  { label: 'News', href: `#${SECTION_IDS.news}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
]

export const CURRENT_NAV_LABEL = 'Home'
export const MENU_OPEN_LABEL = 'Open the menu'
export const MENU_CLOSE_LABEL = 'Close the menu'

/* Search overlay ------------------------------------------------------------------------------ */

export const SEARCH_OPEN_LABEL = 'Open the search'
export const SEARCH_CLOSE_LABEL = 'Close the search'
export const SEARCH_TITLE = 'Search'
export const SEARCH_PLACEHOLDER = 'Search here'
export const SEARCH_FORM_LABEL = 'Site search'
export const SEARCH_INPUT_ID = 'reverie-search'

/* Social marks -------------------------------------------------------------------------------- */

export type SocialMark = 'facebook' | 'twitter' | 'instagram' | 'dribbble'

export interface SocialItem {
  mark: SocialMark
  label: string
  href: string
}

/**
 * The four marks the design draws from its icon font. They resolve inside the page (the footer is
 * the band that carries them all), so the only outbound link on the page stays the house credit.
 */
export const SOCIALS: ReadonlyArray<SocialItem> = [
  { mark: 'facebook', label: `${BRAND} on Facebook`, href: `#${SECTION_IDS.contact}` },
  { mark: 'twitter', label: `${BRAND} on Twitter`, href: `#${SECTION_IDS.contact}` },
  { mark: 'instagram', label: `${BRAND} on Instagram`, href: `#${SECTION_IDS.contact}` },
  { mark: 'dribbble', label: `${BRAND} on Dribbble`, href: `#${SECTION_IDS.contact}` },
]

/* Hero ---------------------------------------------------------------------------------------- */

export const HERO_EYEBROW = 'Welcome to Reverie'
export const HERO_TITLE = 'Plan the perfect wedding'
export const HERO_LEAD =
  'One page from the first idea to the last dance: the photographs, the florist, the table, the band and the week afterwards, arranged by people who do this every weekend.'
export const HERO_PHOTO = 'https://picsum.photos/seed/reverie-7/1920/1080'

/* Services ------------------------------------------------------------------------------------ */

export const SERVICES_TITLE = 'Our services'
export const SERVICES_LEAD = 'Everything the day needs, kept in one place and one pair of hands.'

export type ServiceIcon = 'camera' | 'makeup' | 'catering' | 'music' | 'cake' | 'honeymoon'

export interface Service {
  icon: ServiceIcon
  title: string
  body: string
}

export const SERVICES: ReadonlyArray<Service> = [
  {
    icon: 'camera',
    title: 'Photos & Video',
    body: 'Two photographers and a filmmaker through the ceremony, the table and the dancing, delivered as a book and a film.',
  },
  {
    icon: 'makeup',
    title: 'Wedding Makeup',
    body: 'A trial in the fortnight before, then hair and makeup for the couple and the party on the morning of the day.',
  },
  {
    icon: 'catering',
    title: 'Restaurant',
    body: 'A tasting menu built with the kitchen, plated to the table and matched with the wine the venue keeps back.',
  },
  {
    icon: 'music',
    title: 'Live Music & DJ',
    body: 'A quartet for the ceremony, a band for the first dance and a DJ who stays until the last guest leaves.',
  },
  {
    icon: 'cake',
    title: 'Wedding Cake',
    body: 'Three tiers, one flavour per tier, cut and boxed for everyone who could not be there on the night.',
  },
  {
    icon: 'honeymoon',
    title: 'Honeymoons',
    body: 'Flights, rooms and the quiet week afterwards, planned so that nobody has to think about a transfer. ',
  },
]

/* Features (filter + masonry gallery) ---------------------------------------------------------- */

export const FEATURES_TITLE = 'Our wedding feature'
export const FEATURES_LEAD =
  'Six frames from the seasons we have worked, filter them by the part of the day.'
export const VIEW_MORE_LABEL = 'View more'
export const GALLERY_FILTER_LABEL = 'Filter the gallery'

export const FILTERS = ['All', 'Couple', 'Event', 'Music Live', 'Honeymoon', 'Photography'] as const
export const ALL_FILTER = 'All'

export type Filter = (typeof FILTERS)[number]
type Category = Exclude<Filter, typeof ALL_FILTER>

export type TileSize = 'base' | 'mid' | 'large'

export interface GalleryTile {
  id: string
  category: Category
  label: string
  title: string
  size: TileSize
  photo: string
}

export const GALLERY: ReadonlyArray<GalleryTile> = [
  {
    id: 'first-light',
    category: 'Couple',
    label: 'Ceremonies',
    title: 'Vows at first light',
    size: 'large',
    photo: 'https://picsum.photos/seed/reverie-3/900/1100',
  },
  {
    id: 'snow-pass',
    category: 'Photography',
    label: 'Photography',
    title: 'The pass before the snow',
    size: 'base',
    photo: 'https://picsum.photos/seed/reverie-5/900/700',
  },
  {
    id: 'storm-light',
    category: 'Music Live',
    label: 'Music live',
    title: 'Storm light over the ridge',
    size: 'mid',
    photo: 'https://picsum.photos/seed/reverie-11/900/900',
  },
  {
    id: 'in-the-mist',
    category: 'Couple',
    label: 'Couples',
    title: 'Portraits in the mist',
    size: 'mid',
    photo: 'https://picsum.photos/seed/reverie-17/900/900',
  },
  {
    id: 'on-the-coast',
    category: 'Honeymoon',
    label: 'Honeymoons',
    title: 'Ten days on the coast',
    size: 'base',
    photo: 'https://picsum.photos/seed/reverie-23/900/700',
  },
  {
    id: 'the-flowers',
    category: 'Event',
    label: 'Reception',
    title: 'The flowers arrived',
    size: 'base',
    photo: 'https://picsum.photos/seed/reverie-29/900/700',
  },
]

/** Every tile opens the enquiry band — the one place on the page a visitor can act from. */
export const TILE_TARGET = `#${SECTION_IDS.contact}`

/* Counter band -------------------------------------------------------------------------------- */

export interface Counter {
  icon: 'photos' | 'couples' | 'toasts' | 'cakes'
  value: number
  label: string
}

export const COUNTERS: ReadonlyArray<Counter> = [
  { icon: 'photos', value: 8365, label: 'Photos' },
  { icon: 'couples', value: 568, label: 'Happy Couples' },
  { icon: 'toasts', value: 849, label: 'Toasts' },
  { icon: 'cakes', value: 2574, label: 'Wedding Cakes' },
]

export const COUNTER_PHOTO = 'https://picsum.photos/seed/reverie-13/1600/900'

/* Request card -------------------------------------------------------------------------------- */

export const REQUEST_EYEBROW = "Let's meet"
export const REQUEST_TITLE = 'Make a request'
export const REQUEST_LEAD =
  'Should you have any questions about the day, fill in the form and we will reply within one working day.'

export const REQUEST_TITLE_ID = 'request-title'
export const REQUEST_SUBMIT_LABEL = 'Send a request'
export const REQUEST_FORM_LABEL = 'Wedding enquiry'
export const REQUEST_SUCCESS = 'Thank you — we will reply within one working day.'

export type FieldName = 'name' | 'email' | 'service' | 'guests'

export interface RequestField {
  name: FieldName
  id: string
  label: string
  kind: 'text' | 'email' | 'select'
}

export const REQUEST_FIELDS: ReadonlyArray<RequestField> = [
  { name: 'name', id: 'reverie-name', label: 'Name', kind: 'text' },
  { name: 'email', id: 'reverie-email', label: 'Email', kind: 'email' },
  { name: 'service', id: 'reverie-service', label: 'Services', kind: 'select' },
  { name: 'guests', id: 'reverie-guests', label: 'Guest', kind: 'select' },
]

export const REQUEST_VALUES: Record<FieldName, string> = {
  name: '',
  email: '',
  service: '',
  guests: '',
}

export const SERVICE_OPTIONS: ReadonlyArray<string> = [
  'Photos & Video',
  'Wedding Makeup',
  'Restaurant',
  'Live Music & DJ',
  'Wedding Cake',
  'Honeymoon',
]

export const GUEST_OPTIONS: ReadonlyArray<string> = [
  'Up to 50',
  '50 to 100',
  '100 to 200',
  'More than 200',
]

/** The placeholder row's own label, carried as its value so the field reads as the design's does. */
export const SERVICE_PLACEHOLDER = 'Services'
export const GUEST_PLACEHOLDER = 'Guest'

export const NAME_ERROR = 'Please tell us who is writing'
export const EMAIL_ERROR = 'Please write an email address we can reply to'
export const SERVICE_ERROR = 'Please choose the part of the day you need'
export const GUESTS_ERROR = 'Please choose how many guests are coming'

/* Blog ---------------------------------------------------------------------------------------- */

export const BLOG_TITLE = 'Our blog'
export const BLOG_LEAD =
  'Notes from the seasons: what worked, what we would do again, what we would not.'

export interface Post {
  title: string
  kind: string
  date: string
  comments: string
  photo: string
}

export const POSTS: ReadonlyArray<Post> = [
  {
    title: 'A slow morning in the fog',
    kind: 'Inspiration',
    date: 'Apr 18, 2026',
    comments: '05 Comments',
    photo: 'https://picsum.photos/seed/reverie-31/360/240',
  },
  {
    title: 'The light that lasted all afternoon',
    kind: 'Inspiration',
    date: 'Mar 09, 2026',
    comments: '03 Comments',
    photo: 'https://picsum.photos/seed/reverie-37/360/240',
  },
  {
    title: 'Choosing the last dance, twice',
    kind: 'Inspiration',
    date: 'Jan 27, 2026',
    comments: '07 Comments',
    photo: 'https://picsum.photos/seed/reverie-41/360/240',
  },
]

/* Logo strip ---------------------------------------------------------------------------------- */

export const LOGO_STRIP_LABEL = 'Vendors we work with'

export const VENDORS: ReadonlyArray<string> = [
  'Fern & Flint',
  'Sagegrove',
  'Aster Row',
  'Hollow Lane',
  'Wildwood',
  'Bellhouse',
  'Marlowe & Co.',
  'Thistledown',
  'Juneberry',
  'Copper Kettle',
]

/* Footer -------------------------------------------------------------------------------------- */

export const FOOTER_NEWS_TITLE = 'Newsletter Subscribe'
export const FOOTER_NEWS_BODY = 'Sign up and get 10% off your wedding!'
export const NEWSLETTER_FORM_LABEL = 'Newsletter sign up'
export const NEWSLETTER_FIELD_LABEL = 'Email address'
export const NEWSLETTER_PLACEHOLDER = 'Your email'
export const NEWSLETTER_SUBMIT_LABEL = 'Subscribe'
export const NEWSLETTER_SUCCESS = 'You are on the list — welcome.'
export const NEWSLETTER_ERROR = 'That address does not look right'
export const NEWSLETTER_EMAIL_ID = 'reverie-newsletter-email'
export const NEWSLETTER_STATUS_ID = 'reverie-newsletter-status'
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FooterLine {
  text: string
  /** Present when the line is reachable — the mailbox and the telephone number. */
  href?: string
}

export interface FooterColumn {
  title: string
  lines: ReadonlyArray<FooterLine>
}

export const FOOTER_COLUMNS: ReadonlyArray<FooterColumn> = [
  {
    title: 'Open time',
    lines: [{ text: 'Mon – Fri: 8:00am – 7:00pm' }, { text: 'Closed on weekend' }],
  },
  {
    title: 'Phone & email',
    lines: [
      { text: 'hello@example.com', href: 'mailto:hello@example.com' },
      { text: '+1 (503) 555-0142', href: 'tel:+15035550142' },
    ],
  },
  { title: 'Address', lines: [{ text: '203 Fake St., Portland, OR 97205, USA' }] },
]

export const COPYRIGHT_PREFIX = 'Copyright ©'
export const COPYRIGHT_MIDDLE = 'All rights reserved | This template is made with ♥ by'
export const LEGAL_LINKS: ReadonlyArray<NavLeaf> = [
  { label: 'Terms & Use', href: `#${SECTION_IDS.contact}` },
  { label: 'Privacy Policy', href: `#${SECTION_IDS.contact}` },
]
