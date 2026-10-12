/**
 * Every word and picture the single page prints. The design's own layout words — the navigation
 * labels, the first names of its band headings and the four timeline titles — are reproduced,
 * because they are the words the recreation is required to keep; the brand, the copy, the couple,
 * the venue and the photography are the recreation's own.
 */

export const PAGE_TITLE = 'Aisle — Wedding Day Template'
export const BRAND = 'Aisle'
export const SKIP_TARGET = '#home'

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
export const COMPONENT_DOCK_LABEL = 'Component Dock'

export const SECTION_IDS = {
  home: 'home',
  story: 'story',
  countdown: 'countdown',
  details: 'details',
  ceremony: 'ceremony',
  gallery: 'gallery',
  contact: 'contact',
  rsvp: 'rsvp',
} as const

/** A navigation row: a real in-page anchor, plus — for two of them — the panel that opens under it. */
export interface NavNode {
  label: string
  href: string
  items?: ReadonlyArray<NavNode>
}

export type NavParent = NavNode & { items: ReadonlyArray<NavNode> }

export function hasItems(node: NavNode): node is NavParent {
  return node.items !== undefined
}

export function submenuLabel(label: string, open: boolean): string {
  return `${open ? 'Hide' : 'Show'} ${label} submenu`
}

/**
 * The five destinations. The reference's own menu is three levels deep (its "Our Stories" row opens
 * a panel whose third row opens a second one), and the reference has no in-page anchors at all, so
 * every destination here is the recreation's own and resolves to a real section.
 */
export const NAV_ITEMS: ReadonlyArray<NavNode> = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  {
    label: 'Our Story',
    href: `#${SECTION_IDS.story}`,
    items: [
      { label: 'Featured', href: `#${SECTION_IDS.story}` },
      { label: 'About', href: `#${SECTION_IDS.details}` },
      {
        label: 'Categories',
        href: `#${SECTION_IDS.gallery}`,
        items: [
          { label: 'Featured', href: `#${SECTION_IDS.gallery}` },
          { label: 'About', href: `#${SECTION_IDS.story}` },
          { label: 'Categories', href: `#${SECTION_IDS.countdown}` },
        ],
      },
    ],
  },
  { label: 'The Wedding', href: `#${SECTION_IDS.details}` },
  { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
  { label: 'RSVP', href: `#${SECTION_IDS.rsvp}` },
]

/** The row the design paints as live: the first one. */
export const ACTIVE_NAV_LABEL = 'Home'

export const MENU_ID = 'aisle-menu'
export const MENU_TOGGLE_LABEL = 'Open the menu'
export const MENU_CLOSE_LABEL = 'Close the menu'

/* Hero ---------------------------------------------------------------------------------------- */

export const HERO_LABEL = 'Nora and Ellis — the wedding day'
export const HERO_PHOTO = 'https://picsum.photos/seed/aisle-hero/1920/1080'
export const HERO_PHOTO_ALT = 'Clasped hands resting beside a bouquet of pale roses.'
export const HERO_DATE = '12 September 2027'
export const HERO_SCRIPT = 'The Day Is Set'
export const HERO_NAMES = ['Nora', 'Ellis'] as const
export const HERO_INVITE = 'Two families, one long table, and the whole afternoon to celebrate.'

/* Our story ---------------------------------------------------------------------------------- */

export const STORY_TITLE = 'Our Story'
export const STORY_BODY =
  'We met on a rain-soaked platform, married seven summers later, and have spent every September since trying to make a long table feel like home. This one is the last of the family houses, so the day will be drawn-out, warm and slow: coffee at eleven, vows at three, and dancing until the barn gives up.'

/* Countdown ---------------------------------------------------------------------------------- */

export const COUNTDOWN_TITLE = 'Counting Down'
export const COUNTDOWN_LABEL = 'Time until the wedding'
export const COUNTDOWN_PHOTO = 'https://picsum.photos/seed/aisle-countdown/1600/600'

export interface CountdownCell {
  key: 'days' | 'hours' | 'minutes' | 'seconds'
  word: string
}

export const COUNTDOWN_CELLS: ReadonlyArray<CountdownCell> = [
  { key: 'days', word: 'days' },
  { key: 'hours', word: 'hours' },
  { key: 'minutes', word: 'minutes' },
  { key: 'seconds', word: 'seconds' },
]

/* Wedding details ---------------------------------------------------------------------------- */

export const DETAILS_TITLE = 'The Wedding Day'

export type DetailGlyph = 'ceremony' | 'toast' | 'cake' | 'photography'

export interface Detail {
  title: string
  body: string
  glyph: DetailGlyph
}

/** The reference repeats one lorem sentence in all four cards; the recreation writes four blurbs. */
export const DETAILS: ReadonlyArray<Detail> = [
  {
    title: 'Ceremony',
    body: 'Three in the afternoon, in the orchard, with the chairs set in two loose arcs so nobody sits behind a stranger.',
    glyph: 'ceremony',
  },
  {
    title: 'Toast & Dinner',
    body: 'One long table under the barn lights, the menu kept simple, and the speeches held until the plates are cleared.',
    glyph: 'toast',
  },
  {
    title: 'Wedding Cake',
    body: 'Three tiers of lemon and elderflower, cut at dusk and taken round on trays while the band swaps over.',
    glyph: 'cake',
  },
  {
    title: 'Photography',
    body: 'A quiet hour before the meal for the two of us and the camera, and the rest of the day shot as it happens.',
    glyph: 'photography',
  },
]

/* Ceremony call to action -------------------------------------------------------------------- */

export const CEREMONY_TITLE = 'Ceremony & Celebration'
export const CEREMONY_BODY =
  'The orchard seats sixty. Tell us you are coming and we will hold you a chair, a glass and a place on the long table.'
export const CEREMONY_CTA_LABEL = 'Learn more'
export const CEREMONY_CTA_HREF = `#${SECTION_IDS.gallery}`
export const CEREMONY_PHOTO = 'https://picsum.photos/seed/aisle-ceremony/1600/600'

/* Gallery ------------------------------------------------------------------------------------ */

export const GALLERY_TITLE = 'Our Gallery'

export interface GalleryTile {
  seed: string
  alt: string
}

export const GALLERY_LABEL = 'Open photo'

export const GALLERY_TILES: ReadonlyArray<GalleryTile> = [
  { seed: 'aisle-gallery-1', alt: 'A table laid with pale linen and low bowls of roses.' },
  { seed: 'aisle-gallery-2', alt: 'Two chairs on the orchard grass beside a string of bulbs.' },
  { seed: 'aisle-gallery-3', alt: 'A stack of hand-addressed envelopes tied with twine.' },
  { seed: 'aisle-gallery-4', alt: 'Wildflower posies standing in a row of glass jars.' },
  { seed: 'aisle-gallery-5', alt: 'The barn doors open onto a table set for supper.' },
  { seed: 'aisle-gallery-6', alt: 'A wedding cake on a plain stand under the barn lights.' },
]

export const GALLERY_CTA_LABEL = 'View all gallery'
export const GALLERY_CTA_HREF = `#${SECTION_IDS.contact}`
export const LIGHTBOX_LABEL = 'Photo viewer'
export const LIGHTBOX_CLOSE_LABEL = 'Close the photo viewer'
export const LIGHTBOX_PREV_LABEL = 'Previous photo'
export const LIGHTBOX_NEXT_LABEL = 'Next photo'

/* Contact ------------------------------------------------------------------------------------ */

export const CONTACT_TITLE = 'Join Us'
export const CONTACT_DATE = 'On the 12 September 2027'
export const CONTACT_INVITE = 'We would love to celebrate the day with you.'
export const CONTACT_PHONE = '+1 555 0142'
export const CONTACT_PHONE_HREF = 'tel:+15550142'
export const CONTACT_ADDRESS = 'Ellisfield Barn, 42 Orchard Lane, Hudson Valley, New York'
export const CONTACT_MAP_LABEL = 'Map of the wedding venue'
export const CONTACT_MAP_NOTE = 'Ellisfield Barn · off Route 9, ten minutes past the orchard'

/* Footer ------------------------------------------------------------------------------------- */

export const FOOTER_NEWS_TITLE = 'News in your inbox'
export const FOOTER_NEWS_BODY =
  'Join our list for the running order, the menu and the photographs from the day after.'

export const NEWSLETTER_FORM_LABEL = 'Join the Aisle newsletter'
export const NEWSLETTER_FIELD_LABEL = 'Email address'
export const NEWSLETTER_PLACEHOLDER = 'Your email'
export const NEWSLETTER_SUBMIT_LABEL = 'Subscribe'
export const NEWSLETTER_OK = 'Thank you — your address is on the list.'
export const NEWSLETTER_ERROR = 'Please enter a valid email address.'

export const FOOTER_LINKS: ReadonlyArray<NavNode> = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  { label: 'Our Story', href: `#${SECTION_IDS.story}` },
  { label: 'The Wedding', href: `#${SECTION_IDS.details}` },
  { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
]

export interface Social {
  name: string
  label: string
  path: string
}

/**
 * The five marks the reference draws from its icon font. They are inline SVG here, because
 * `lucide-react` exports no brand glyphs.
 */
export const SOCIALS: ReadonlyArray<Social> = [
  {
    name: 'Heart',
    label: `Save ${BRAND} to your favourites`,
    path: 'M12 21s-7.5-4.6-9.5-8.6A5.4 5.4 0 0 1 12 6.2a5.4 5.4 0 0 1 9.5 6.2C19.5 16.4 12 21 12 21Z',
  },
  {
    name: 'Twitter',
    label: `${BRAND} on Twitter`,
    path: 'M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72c-.95.56-2 .96-3.13 1.18a4.92 4.92 0 0 0-8.38 4.48C7.69 8.1 4.07 6.13 1.64 3.16a4.82 4.82 0 0 0-.67 2.48c0 1.71.87 3.21 2.19 4.1a4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.83 5 5 0 0 1-2.21.08 4.94 4.94 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1c-.39 0-.78-.02-1.17-.06a13.99 13.99 0 0 0 7.56 2.2c9.05 0 14-7.49 14-13.98l-.02-.63a9.94 9.94 0 0 0 2.41-2.55Z',
  },
  {
    name: 'Instagram',
    label: `${BRAND} on Instagram`,
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.8.25 2.23.42.56.21.96.48 1.38.9.42.41.68.81.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38 3.74 3.74 0 0 1-1.38.9c-.43.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.64 3.64 0 0 1-.9-1.38c-.16-.43-.36-1.06-.42-2.23-.05-1.27-.06-1.65-.06-4.85s.01-3.58.06-4.85c.06-1.17.26-1.8.42-2.23.21-.57.48-.97.9-1.38.41-.42.81-.69 1.38-.9.43-.17 1.06-.36 2.23-.42 1.27-.06 1.65-.07 4.85-.07Zm0 5.18a4.66 4.66 0 1 0 0 9.32 4.66 4.66 0 0 0 0-9.32Zm0 7.69a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06Zm5.93-7.87a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0Z',
  },
  {
    name: 'Pinterest',
    label: `${BRAND} on Pinterest`,
    path: 'M12 0a12 12 0 0 0-4.37 23.17c-.1-.96-.2-2.43.04-3.48.22-.95 1.42-6 1.42-6s-.36-.73-.36-1.8c0-1.69.98-2.95 2.2-2.95 1.03 0 1.53.78 1.53 1.71 0 1.04-.66 2.6-1 4.04-.29 1.21.6 2.2 1.8 2.2 2.15 0 3.8-2.27 3.8-5.55 0-2.9-2.08-4.93-5.06-4.93-3.45 0-5.47 2.58-5.47 5.25 0 1.04.4 2.16.9 2.77.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.41.16-1.5-.7-2.44-2.9-2.44-4.66 0-3.8 2.76-7.28 7.96-7.28 4.18 0 7.42 2.98 7.42 6.95 0 4.15-2.62 7.49-6.25 7.49-1.22 0-2.37-.63-2.76-1.38l-.75 2.86c-.27 1.05-1 2.36-1.5 3.16A12 12 0 1 0 12 0Z',
  },
  {
    name: 'Tripadvisor',
    label: `${BRAND} on Tripadvisor`,
    path: 'M12 4.5c-3.7 0-7 1.3-9.4 3.4H6a7 7 0 0 1 10 0h3.4C17 5.8 15.7 4.5 12 4.5Zm-4.5 5.6a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm9 0a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm-9 2.6a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Zm9 0a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Z',
  },
]

export const COPYRIGHT_PREFIX = 'Copyright ©'
export const COPYRIGHT_MIDDLE = 'All rights reserved | This template is made with'
export const COPYRIGHT_BY = 'by'
