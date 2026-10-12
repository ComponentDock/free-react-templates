/**
 * Nuptials' copy and data. Everything here belongs to this recreation — the couple, the venue, the
 * date, the notes, the gallery captions and the footer's filler are invented for the page, while
 * the band headings, the navigation labels and the field kinds are the ones the design sets.
 */

export const PAGE_TITLE = 'Nuptials — Wedding Template'
export const SKIP_TARGET = '#home'

export const BRAND = 'Nuptials'

/** The hero headline: the two names over the line the design prints beneath them. */
export const COUPLE = 'Elias & Wren'
export const HERO_TAGLINE = 'are Getting Married'
export const HERO_EYEBROW = '12 June 2027 · Whitby'
export const HERO_CTA = 'Reserve your seat'

export const CONTACT_PHONE = '+44 20 7946 0188'
export const CONTACT_EMAIL = 'rsvp@nuptials.example'

/* Photography — seeded placeholders in the design's roles (hero, the two portraits, the six gallery
   frames, the reservation backdrop). No asset of the original design is copied. */
export const HERO_PHOTO = 'https://picsum.photos/seed/nuptials-7/1920/1080'
export const RESERVATION_PHOTO = 'https://picsum.photos/seed/nuptials-13/1600/900'

/** Every id the page's own navigation points at, so no link is a dead anchor. */
export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  date: 'date',
  gallery: 'gallery',
  countdown: 'countdown',
  info: 'info',
  reservation: 'reservation',
} as const

export interface NavItem {
  label: string
  href: string
}

export const NAV: NavItem[] = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  { label: 'About us', href: `#${SECTION_IDS.about}` },
  { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
  { label: 'Wedding info', href: `#${SECTION_IDS.info}` },
  { label: 'Reservations', href: `#${SECTION_IDS.reservation}` },
]

export const MENU_ID = 'collapsibleNavbar'
export const MENU_OPEN_LABEL = 'Open the menu'
export const MENU_CLOSE_LABEL = 'Close the menu'
export const THEME_LABEL = 'Toggle dark mode'

/* About ---------------------------------------------------------------------------------------- */

export interface AboutSlide {
  key: 'bride' | 'groom'
  lead: string
  /** The design sets its heading at weight 100 and lifts the last word to 600. */
  emphasis: string
  paragraphs: string[]
  src: string
  alt: string
}

export const SLIDE_PREV = 'Previous slide'
export const SLIDE_NEXT = 'Next slide'

export const ABOUT_SLIDES: AboutSlide[] = [
  {
    key: 'bride',
    lead: 'About the Sweet',
    emphasis: 'Bride',
    paragraphs: [
      'Wren grew up ten minutes from the water and still measures a good day by how much of it was spent outside. She will be the one handing out the schedule nobody asked for.',
      'She asked for one thing from the day: that the ceremony start late enough for the light to go gold behind the headland.',
    ],
    src: 'https://picsum.photos/seed/nuptials-43/900/1100',
    alt: 'A portrait of the bride in the last of the afternoon light',
  },
  {
    key: 'groom',
    lead: 'About the Handsome',
    emphasis: 'Groom',
    paragraphs: [
      'Elias arrived in Whitby for a weekend eight summers ago and never quite left. He makes the coffee, keeps the records, and cries at every film with a dog in it.',
      'His contribution to the planning has been the music, the wine and one long argument about the seating chart that he lost.',
    ],
    src: 'https://picsum.photos/seed/nuptials-29/900/1100',
    alt: 'The groom standing at the water at dusk',
  },
]

/* Date strip ----------------------------------------------------------------------------------- */

export const DATE_TEXT = 'Wedding Day : 12 June 2027 at 19.00 pm'
export const DATE_NOTE = 'The doors open at half past six — come early and take the path down to the water.'

/* Gallery ------------------------------------------------------------------------------------- */

export const GALLERY_TITLE = 'Our Pre Wedding Photo Gallery'
export const GALLERY_LEAD =
  'Six frames from the months before the day: the long walks, the fittings, and the light that kept arriving on schedule.'
export const GALLERY_PREV = 'Previous photo'
export const GALLERY_NEXT = 'Next photo'

export interface GalleryTile {
  src: string
  alt: string
}

export const GALLERY: GalleryTile[] = [
  {
    src: 'https://picsum.photos/seed/nuptials-1/1200/900',
    alt: 'A tree-lined road in the afternoon sun',
  },
  {
    src: 'https://picsum.photos/seed/nuptials-15/1200/900',
    alt: 'The garden swings waiting for the youngest guests',
  },
  {
    src: 'https://picsum.photos/seed/nuptials-3/1200/900',
    alt: 'Snow still lying on the ridge above the valley',
  },
  {
    src: 'https://picsum.photos/seed/nuptials-10/1200/900',
    alt: 'A quiet lane of ochre walls near the venue',
  },
  {
    src: 'https://picsum.photos/seed/nuptials-17/1200/900',
    alt: 'Boats moored along the canal at the end of the day',
  },
  {
    src: 'https://picsum.photos/seed/nuptials-5/1200/900',
    alt: 'The headland and its cottages above the water',
  },
]

/* Countdown ----------------------------------------------------------------------------------- */

export interface CountdownCell {
  key: 'days' | 'hours' | 'minutes' | 'seconds'
  label: string
}

export const COUNTDOWN_CELLS: CountdownCell[] = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

export const COUNTDOWN_LABEL = 'Countdown to the wedding day'

/* Wedding information ------------------------------------------------------------------------- */

const INFO_TITLE = 'Wedding Information'
const INFO_LEAD =
  'Everything the day asks of you in one place — where to be, when to arrive, and what happens after the band starts.'

export type RowIcon = 'date' | 'time' | 'address'

interface InfoRow {
  label: string
  icon: RowIcon
  text: string
}

export interface InfoCard {
  key: 'information' | 'ceremony' | 'party'
  title: string
  body: string
  rows: InfoRow[]
}

export const INFO_CARDS: InfoCard[] = [
  {
    key: 'information',
    title: INFO_TITLE,
    body: INFO_LEAD,
    rows: [],
  },
  {
    key: 'ceremony',
    title: 'Main Ceremony',
    body: 'Vows in the mill garden, under the yew, with the band waiting at the far end of the lawn.',
    rows: [
      { label: 'Date', icon: 'date', text: 'Saturday 12 June 2027' },
      { label: 'Time', icon: 'time', text: '19.00' },
      { label: 'Address', icon: 'address', text: '56 Lantern Row, Whitby' },
    ],
  },
  {
    key: 'party',
    title: 'Wedding Party',
    body: 'Dinner, speeches and dancing at the boathouse, where the doors stay open onto the water.',
    rows: [
      { label: 'Date', icon: 'date', text: 'Saturday 12 June 2027' },
      { label: 'Time', icon: 'time', text: '21.30' },
      { label: 'Address', icon: 'address', text: '2 Quay Steps, Whitby' },
    ],
  },
]

/* Reservation --------------------------------------------------------------------------------- */

export const RESERVATION_TITLE = 'Reservation Form'
export const RESERVATION_LEAD =
  'Tell us how many chairs to set — pick a meal, a number of guests, and leave a note if there is anything the day should know.'

export interface NiceOption {
  value: string
  label: string
}

export const MEAL_LABEL = 'Meal preferences'
export const MEAL_OPTIONS = [
  { value: '1', label: 'Meal 1' },
  { value: '2', label: 'Meal 2' },
  { value: '3', label: 'Meal 3' },
] as const

export const GUESTS_LABEL = 'Number of guests'
export const GUESTS_OPTIONS = [
  { value: '1', label: '1 Guest' },
  { value: '2', label: '2 Guests' },
  { value: '3', label: '3 Guests' },
] as const

export const RESERVATION_FIELDS = {
  name: 'Your name',
  email: 'Your email',
  message: 'A note for the couple',
} as const

export const FIELD_IDS = {
  name: 'reservation-name',
  email: 'reservation-email',
  message: 'reservation-message',
} as const

export const RESERVATION_SUBMIT = 'Confirm now'
export const RESERVATION_NAME_ERROR = 'Please tell us your name.'
export const RESERVATION_EMAIL_ERROR = 'Please give us an email we can reach you at.'
export const RESERVATION_MESSAGE_ERROR = 'Leave us a line, even a short one.'

/** The line the page answers a complete reservation with — the design's own message slot. */
export function reservationConfirmed(meal: string, guests: string): string {
  return `Thank you — ${meal} and ${guests} are written down. We will see you in June.`
}

/* Footer ------------------------------------------------------------------------------------- */

export const FOOTER_LINKS: NavItem[] = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  { label: 'About us', href: `#${SECTION_IDS.about}` },
  { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
  { label: 'Reservations', href: `#${SECTION_IDS.reservation}` },
]

export const FOOTER_BLURB =
  'A page for one long June evening — the vows, the table, and everyone still standing when the band packs up.'

export const COPYRIGHT_PREFIX = 'Copyright ©'
export const COPYRIGHT_TAIL = 'All rights reserved | This template is made with'
export const COPYRIGHT_BY = 'by'

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
export const COMPONENT_DOCK_LABEL = 'Component Dock'

interface Social {
  name: 'github' | 'x' | 'linkedin'
  label: string
  path: string
}

/** The social row, each mark drawn inline (no brand-icon dependency). */
export const SOCIALS: Social[] = [
  {
    name: 'github',
    label: 'Nuptials on GitHub',
    path: 'M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.9 8.4 6.8 9.8.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.8 1 1.7 1 2.8 0 4-2.4 4.8-4.6 5.1.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.1 10.1 0 0 0 22 12.3C22 6.6 17.5 2 12 2z',
  },
  {
    name: 'x',
    label: 'Nuptials on X',
    path: 'M17.5 4h2.9l-6.3 7.2L21.5 20h-5.6l-4.4-5.7L6.4 20H3.5l6.7-7.7L3 4h5.7l4 5.3zm-1 14.3h1.6L7.4 5.6H5.7z',
  },
  {
    name: 'linkedin',
    label: 'Nuptials on LinkedIn',
    path: 'M6.9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.2 8.5H6.7V21H3.2zM10 8.5h3.4v1.7h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.2 4.2 5.1V21h-3.5v-6.1c0-1.5 0-3.3-2-3.3s-2.4 1.6-2.4 3.2V21H10z',
  },
]
