/**
 * Every destination and every line of copy the Cherish page renders, plus the models its blocks are
 * built from: the header's labels, the day's running order, the album's frames, the reply card's two
 * selects, the three venue cards and the partner cards that sit either side of the portrait.
 */

export const SITE_NAME = 'Cherish'

export const PAGE_TITLE = 'Cherish — Wedding Day Template'

/** The wordmark the header and the footer both carry, beside the monogram. */
export const BRAND = 'Cherish'

export const BRAND_SUBLINE = 'Ada & Wren'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

export const FOOTER_NOTE = 'Every seat saved by hand.'

export const FOOTER_CREDIT_PREFIX = 'More templates at'

/** Where the skip link lands: the block the page opens on. */
export const SKIP_TARGET = '#today'

/** The top of the page, which the header's monogram and the footer walk back to. */
export const TOP_TARGET = '#top'

/** The reply block the hero's button and the "Hold My Seat" label both point at. */
export const SEAT_TARGET = '#seat'

export const MENU_ID = 'cherish-menu'

export const MENU_TOGGLE_LABEL = 'Open the menu'

export const SEARCH_TOGGLE_LABEL = 'Open the search'

export const SEARCH_SHEET_LABEL = 'Search'

export const SEARCH_SHEET_TITLE = 'Search the page'

export const SEARCH_CLOSE_LABEL = 'Close the search'

export const SEARCH_PLACEHOLDER = 'Look for a name, a place or a time'

export const MORE_LABEL = 'More'

/** A deterministic placeholder for one picture of the page. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/cherish-${seed}/${width}/${height}`
}

export interface NavItemModel {
  label: string
  href: string
  /** The block already open: carried as `aria-current` and underlined in the gold. */
  current?: boolean
}

/** The header's own row of labels. The last item opens the dropdown below. */
export const NAV_ITEMS: NavItemModel[] = [
  { label: 'Today', href: SKIP_TARGET, current: true },
  { label: 'Our Tale', href: '#tale' },
  { label: 'The Album', href: '#portraits' },
  { label: 'The Order', href: '#schedule' },
]

const MORE_ROOT: NavItemModel = { label: 'Mark It Down', href: '#countdown' }

/** Where the "More" label itself lands, which is the first row of the panel under it. */
export const MORE_ROOT_HREF = MORE_ROOT.href

/** The labels the "More" disclosure holds, each one a real destination further down the page. */
export const MORE_ITEMS: NavItemModel[] = [
  MORE_ROOT,
  { label: 'Hold My Seat', href: SEAT_TARGET },
  { label: 'Where To Find Us', href: '#where' },
  { label: 'Back To The Top', href: TOP_TARGET },
]

/** Every label the header shows, top row first and the dropdown under it — what the mobile
 * disclosure carries so that no label is lost when the row is folded away. */
export const MENU_LINKS: NavItemModel[] = [...NAV_ITEMS, ...MORE_ITEMS]

/** Every in-page destination the header declares, in the order it shows them. */
export function navDestinations(): string[] {
  return MENU_LINKS.map((item) => item.href)
}

export type SocialKind = 'facebook' | 'twitter' | 'instagram' | 'linkedin'

export interface SocialModel {
  kind: SocialKind
  label: string
  href: string
}

const SOCIALS: Record<SocialKind, Omit<SocialModel, 'kind'>> = {
  facebook: { label: 'Facebook', href: 'https://www.facebook.com/' },
  twitter: { label: 'Twitter', href: 'https://twitter.com/' },
  instagram: { label: 'Instagram', href: 'https://www.instagram.com/' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
}

/** The three the partner cards carry, in the design's order. */
export const PARTNER_SOCIALS: SocialModel[] = (['facebook', 'twitter', 'linkedin'] as const).map(
  (kind) => ({ kind, ...SOCIALS[kind] }),
)

/** The four the footer carries. */
export const FOOTER_SOCIALS: SocialModel[] = (
  ['facebook', 'twitter', 'instagram', 'linkedin'] as const
).map((kind) => ({ kind, ...SOCIALS[kind] }))

/* ── The hero ─────────────────────────────────────────────────────────────────────────────── */

export const HERO_DATE = 'Saturday, 12 June 2027'

export const HERO_NAMES = 'Ada & Wren'

export const HERO_LEAD =
  'Twelve summers, three cities and one very long walk home. Come and raise a glass with us.'

export const HERO_CTA = 'Save My Seat'

export const HERO_PHOTO = shot('hero', 1920, 1080)

/* ── The story block ──────────────────────────────────────────────────────────────────────── */

export const STORY_EYEBROW = 'Our Beginning'

export const STORY_HEADING = 'How We Got Here'

export const STORY_BODY =
  'A shared desk, a borrowed umbrella and a note left under a coffee cup in 2015. Everything since then has been an argument about which of us tells it better.'

export const STORY_PORTRAIT = shot('portrait', 900, 900)

export interface PartnerModel {
  name: string
  bio: string
}

export const PARTNERS: [PartnerModel, PartnerModel] = [
  {
    name: 'Ada Ferrow',
    bio: 'Keeps every ticket stub, every receipt and every badly-taken photograph, which is why this page exists at all.',
  },
  {
    name: 'Wren Alcott',
    bio: 'Cooks for a living, argues about records for fun, and has already planned the first dance down to the second.',
  },
]

/* ── The countdown ────────────────────────────────────────────────────────────────────────── */

/** The day itself, on the page's own clock — the counters tick against this instant. */
export const COUNTDOWN_TARGET = '2027-06-12T11:00:00'

export const COUNTDOWN_EYEBROW = 'Mark It Down'

export const COUNTDOWN_HEADING = HERO_DATE

export const COUNTDOWN_LEAD = 'The kettle goes on at eleven, so arrive before the kettle.'

export const COUNTDOWN_UNIT_LABELS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const

export const COUNTDOWN_DONE = 'The day has arrived — thank you for being part of it.'

export type CountdownUnit = (typeof COUNTDOWN_UNIT_LABELS)[number]

/* ── The album ────────────────────────────────────────────────────────────────────────────── */

export const ALBUM_EYEBROW = 'The Album'

export const ALBUM_HEADING = 'Eight Frames From The Last Two Years'

export const ALBUM_BAND_PHOTO = shot('band', 1920, 600)

export interface AlbumFrameModel {
  caption: string
  image: string
}

export const ALBUM_FRAMES: AlbumFrameModel[] = [
  'The rented kitchen in Leith',
  'A very cold beach in January',
  'The table we still argue about',
  'Wren, mid-argument, laughing',
  'Ada, mid-argument, not laughing',
  'The walk home from the ferry',
  'One hundred paper cranes',
  'The morning we decided',
].map((caption, index) => ({ caption, image: shot(`frame-${index + 1}`, 900, 900) }))

/* ── The day's running order ──────────────────────────────────────────────────────────────── */

export type EventKind = 'vows' | 'drinks' | 'lunch' | 'portraits' | 'dance' | 'cake'

export interface EventModel {
  kind: EventKind
  time: string
  title: string
  body: string
}

export const SCHEDULE_EYEBROW = 'The Running Order'

export const SCHEDULE_HEADING = 'How The Day Unfolds'

export const SCHEDULE_BODY =
  'Nothing is rushed and nothing is compulsory. Come for the vows, come for the cake, or come for all of it and stay until the lights go out.'

export const SCHEDULE_EVENTS: EventModel[] = [
  {
    kind: 'vows',
    time: '11:00',
    title: 'Vows At The Chapel',
    body: 'Ten minutes of nerves, two rings, and a very short walk down an aisle lined with garden roses.',
  },
  {
    kind: 'drinks',
    time: '12:30',
    title: 'Drinks On The Lawn',
    body: 'Something cold in a glass and something warm from the oven, on the grass behind the chapel.',
  },
  {
    kind: 'lunch',
    time: '14:00',
    title: 'Long Table Lunch',
    body: 'One table, four courses and no seating plan — sit wherever you land and introduce yourself.',
  },
  {
    kind: 'portraits',
    time: '16:30',
    title: 'Portrait Hour',
    body: 'Two hundred photographs of people pretending not to notice a camera. Ours included.',
  },
  {
    kind: 'dance',
    time: '19:00',
    title: 'First Dance',
    body: 'A record, a small floor and the two of us, shortly before everyone else takes it over.',
  },
  {
    kind: 'cake',
    time: '21:30',
    title: 'Cake And Sparklers',
    body: 'Three tiers, far too much cream, and a line of sparklers down the path to send us off.',
  },
]

/* ── The reply card ───────────────────────────────────────────────────────────────────────── */

export const RSVP_EYEBROW = 'Hold My Seat'

export const RSVP_HEADING = 'Will You Be There?'

export const RSVP_NOTE = 'Kindly reply by the first of May so we can set the table.'

export const RSVP_SIDE_EYEBROW = 'One More Thing'

export const RSVP_SIDE_HEADING = 'Tell Us Something We Should Know'

export const RSVP_SIDE_BODY =
  'Anything at all — a song that has to be played, a food you cannot eat, or the fact that you are bringing a very small person who will not sit still.'

export const RSVP_NAME_LABEL = 'Your Name'

export const RSVP_EMAIL_LABEL = 'Email Address'

export const RSVP_GUEST_LABEL = 'How Many Of You'

export const RSVP_EVENT_LABEL = 'Which Parts'

export const RSVP_SUBMIT = 'Count Me In'

export const RSVP_GUEST_OPTIONS = ['Just Me', 'Two Of Us', 'Bringing The Family'] as const

export const RSVP_EVENT_OPTIONS = ['The Whole Day', 'The Vows Only', 'Evening Dancing'] as const

export const RSVP_NAME_ERROR = 'Add a name so we know who is coming.'

export const RSVP_EMAIL_ERROR = 'Add an address we can reply to.'

export const RSVP_EMAIL_INVALID_ERROR = 'That address does not look right.'

export const RSVP_SUCCESS = 'Your seat is held'

/** The line printed in place of the form once a reply is sent. */
export function replyReceived(email: string): string {
  return `A note is on its way to ${email}.`
}

/* ── The venue cards ──────────────────────────────────────────────────────────────────────── */

export type VenueKind = 'vows' | 'feast' | 'dancing'

export interface VenueModel {
  kind: VenueKind
  title: string
  time: string
  place: string
}

export const VENUE_EYEBROW = 'Where To Find Us'

export const VENUE_HEADING = 'Times And Places'

export const VENUE_LEAD = 'Both addresses are ten minutes apart on the same lane, with parking at the barn.'

export const VENUES: VenueModel[] = [
  { kind: 'vows', title: 'The Vows', time: '11:00 am – 12:15 pm', place: 'Ashfield Chapel, 14 Mill Lane' },
  { kind: 'feast', title: 'The Feast', time: '2:00 pm – 5:30 pm', place: 'The Long Barn, Mill Lane' },
  { kind: 'dancing', title: 'The Dancing', time: '7:00 pm – 11:30 pm', place: 'The Long Barn, Mill Lane' },
]

/** How far a destination is kept clear when it is scrolled to, comfortably past the header. */
export const HEADER_OFFSET = 150
