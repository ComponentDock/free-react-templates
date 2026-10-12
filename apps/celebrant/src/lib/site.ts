/**
 * Every word and picture the single page prints. The design's own layout labels are reproduced —
 * they are the words the recreation is required to keep — while the brand, the copy and the
 * photography are the recreation's own.
 */

export const PAGE_TITLE = 'Celebrant — Wedding Ceremony Template'
export const BRAND = 'Celebrant'
export const SKIP_TARGET = '#home'

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
export const COMPONENT_DOCK_LABEL = 'Component Dock'

export const SECTION_IDS = {
  home: 'home',
  services: 'services',
  marriages: 'marriages',
  features: 'features',
  faq: 'faq',
  contact: 'contact',
} as const

export const NAV_ITEMS = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  { label: 'About', href: `#${SECTION_IDS.services}` },
  { label: 'Services', href: `#${SECTION_IDS.services}` },
  { label: 'FAQ', href: `#${SECTION_IDS.faq}` },
  { label: 'Blog', href: `#${SECTION_IDS.faq}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
] as const

/** The row the design paints as live: black with a 2px mint bar under it. */
export const ACTIVE_NAV_LABEL = 'Home'

export const NAV_CTA_LABEL = 'Get Quote'
export const NAV_CTA_HREF = `#${SECTION_IDS.contact}`

export const MENU_TOGGLE_LABEL = 'Menu'
export const MENU_CLOSE_LABEL = 'Close the menu'

export const HERO_LABEL = 'The couple on the bench above the water'
export const HERO_PHOTO = 'https://picsum.photos/seed/celebrant-30/1920/1080'

export const SERVICES_TITLE = 'Our Services'

export interface Service {
  title: string
  body: string
  photo: string
  alt: string
  /** The design alternates its rows: the second and the fourth carry the picture on the right. */
  imageRight: boolean
}

/**
 * The photography is chosen by role and reviewed on a contact sheet before it ships: the hero is a
 * couple seen from behind on a bench above the water, the four rows are a laid table, paper in two
 * hands, a keepsake and a spread board, and the three slides are the pier, the headland and the
 * lake their captions describe.
 */
export const SERVICES: ReadonlyArray<Service> = [
  {
    title: 'Initial Consultation',
    body: 'A first meeting with no diary pressure: what you hope the ceremony will feel like, who is standing where, and the words you already know you want in it.',
    photo: 'https://picsum.photos/seed/celebrant-7/600/600',
    alt: 'Two cups of coffee on a long wooden table in a room full of daylight.',
    imageRight: false,
  },
  {
    title: 'Ceremony Editing',
    body: 'Your own drafts, tightened. Vows, readings and the walk-through are read aloud until every sentence lands in the room the way you meant it.',
    photo: 'https://picsum.photos/seed/celebrant-62/600/600',
    alt: 'Two hands holding a folded paper page above a table.',
    imageRight: true,
  },
  {
    title: 'The Marriage License',
    body: 'The paperwork is handled without drama — the notice, the witnesses, the signing order and the register entry, checked twice before the morning.',
    photo: 'https://picsum.photos/seed/celebrant-43/600/600',
    alt: 'Two hands holding a vintage camera at chest height.',
    imageRight: false,
  },
  {
    title: 'Planning Meeting',
    body: 'A second meeting nearer the day: timings, the rehearsal, the music cues and everyone who needs a copy of the running order.',
    photo: 'https://picsum.photos/seed/celebrant-38/600/600',
    alt: 'Coffee beans spread across a pale wooden board.',
    imageRight: true,
  },
]

export const MARRIAGES_TITLE = 'Couples I Have Joined'

export interface Slide {
  couple: string
  date: string
  story: string
  photo: string
}

/** The design repeats one caption across three photographs; the recreation ships three entries. */
export const SLIDES: ReadonlyArray<Slide> = [
  {
    couple: 'Priya & Tomas',
    date: 'Wedding date: 12 June',
    story: 'Married at the end of the pier as the season closed, with the wheel turning behind them and half the town watching from the boards.',
    photo: 'https://picsum.photos/seed/celebrant-3/1400/900',
  },
  {
    couple: 'Elise & Rowan',
    date: 'Wedding date: 3 August',
    story: 'Married at first light on the headland above the cloud, seven guests on the rock, and the vows read out twice because of the wind.',
    photo: 'https://picsum.photos/seed/celebrant-35/1400/900',
  },
  {
    couple: 'Amara & Niall',
    date: 'Wedding date: 27 September',
    story: 'Married on the shore of the lake below the ridge, the ceremony at noon and the register signed at the water edge.',
    photo: 'https://picsum.photos/seed/celebrant-33/1400/900',
  },
]

/** The slide band advances no faster than this, and not at all under reduced motion. */
export const SLIDE_INTERVAL_MS = 6000

export const FEATURES_LABEL = 'What we help with'

export type FeatureGlyph = 'ring' | 'venue' | 'honeymoon' | 'invitation' | 'tasting' | 'planner'

export interface Feature {
  title: string
  body: string
  glyph: FeatureGlyph
}

export const FEATURES: ReadonlyArray<Feature> = [
  {
    title: 'Wedding Ring',
    body: 'Two rings, one sizing appointment. The band you choose is insured and sleeved before the day so nothing is left loose in a pocket.',
    glyph: 'ring',
  },
  {
    title: 'Wedding Venue',
    body: 'Rooms walked at the hour you will actually marry in, so the light, the sound and the walking distance are known rather than hoped for.',
    glyph: 'venue',
  },
  {
    title: 'Honeymoon',
    body: 'The week after, planned around how tired you will be: one flight out, one long stay, and nothing booked for the first morning.',
    glyph: 'honeymoon',
  },
  {
    title: 'Invitation',
    body: 'Letters and envelopes addressed, posted in one run, with a reply card that lets you count the table settings honestly.',
    glyph: 'invitation',
  },
  {
    title: 'Red Wine Tasting',
    body: 'Two cases chosen with the meal rather than beside it, tasted with the caterer and the numbers written onto the order.',
    glyph: 'tasting',
  },
  {
    title: 'Wedding Planner',
    body: 'The running order held by someone else on the day, so the two of you are guests at your own ceremony from the first note.',
    glyph: 'planner',
  },
]

export const FAQ_TITLE = 'Frequently Asked Questions'

export interface Faq {
  question: string
  answer: string
}

/** The design numbers its rows and repeats two of them; the recreation ships seven distinct ones. */
export const FAQS: ReadonlyArray<Faq> = [
  {
    question: '1. Where can I buy my wedding ring?',
    answer: 'Start with two jewellers who measure you in person rather than from a chart, and ask for the band in the width you will actually wear every day. If you are choosing a stone, ask to see it in daylight before you decide.',
  },
  {
    question: '2. Where can I find the best reception venue?',
    answer: 'Visit three rooms at the same hour your reception will start. Ask the venue what the last five weddings there changed at short notice, and read the noise curfew in the contract before you fall for the room.',
  },
  {
    question: '3. What should I plan for the honeymoon?',
    answer: 'Book one long stay rather than four short ones, and leave the first morning empty. Anything with a fixed departure time in the first two days will feel like work.',
  },
  {
    question: '4. How do the invitation letters work?',
    answer: 'Agree the guest list first, then the wording, then the envelopes. Send them in one run eight to ten weeks ahead, and put a clear reply date on the card so the numbers firm up before the venue needs them.',
  },
  {
    question: '5. What does the planner take care of?',
    answer: 'The running order, the suppliers and the timings — including the parts nobody photographs. On the day the planner holds the schedule so nobody has to ask either of you a question.',
  },
  {
    question: '6. Can we write our own ceremony script?',
    answer: 'Yes, and most couples do. Bring your drafts to the second meeting: vows, readings and the promises are read aloud together and tightened until every sentence works in the room.',
  },
  {
    question: '7. How far ahead should we book the ceremony?',
    answer: 'Twelve to eighteen months for a summer Saturday, and three months is usually enough for a weekday. The license itself has its own notice period, so count back from the date before you settle on a venue.',
  },
]

export const FOOTER_ABOUT_TITLE = 'About Us'
export const FOOTER_ABOUT_BODY =
  'Celebrant is a small officiant practice. We meet you twice before the day, write the ceremony with you and stand at the front while it happens.'

export const FOOTER_LINKS_TITLE = 'Quick Links'
export const FOOTER_LINKS = [
  { label: 'About Us', href: `#${SECTION_IDS.services}` },
  { label: 'Services', href: `#${SECTION_IDS.services}` },
  { label: 'Testimonials', href: `#${SECTION_IDS.marriages}` },
  { label: 'Contact Us', href: `#${SECTION_IDS.contact}` },
] as const

export const NEWSLETTER_TITLE = 'Subscribe Newsletter'
export const NEWSLETTER_FORM_LABEL = 'Subscribe to the Celebrant newsletter'
export const NEWSLETTER_FIELD_LABEL = 'Email address'
export const NEWSLETTER_PLACEHOLDER = 'Enter Email'
export const NEWSLETTER_SEND = 'Send'
export const NEWSLETTER_OK = 'Thank you — your address is on the list.'
export const NEWSLETTER_ERROR = 'Please enter a valid email address.'

export const FOLLOW_TITLE = 'Follow Us'

export interface Social {
  name: string
  label: string
  path: string
}

/**
 * The four brand marks the design draws from its icon font. They are inline SVG here, because
 * `lucide-react` exports no brand glyphs.
 */
export const SOCIALS: ReadonlyArray<Social> = [
  {
    name: 'Facebook',
    label: `${BRAND} on Facebook`,
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Twitter',
    label: `${BRAND} on Twitter`,
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
  {
    name: 'Instagram',
    label: `${BRAND} on Instagram`,
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.165a4 4 0 110-8.001 4 4 0 010 8.001zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z',
  },
  {
    name: 'LinkedIn',
    label: `${BRAND} on LinkedIn`,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
]

export const COPYRIGHT_PREFIX = 'Copyright ©'
export const COPYRIGHT_MIDDLE = 'All rights reserved | This template is made with'
export const COPYRIGHT_BY = 'by'

/** How long the first-paint cover waits before it lifts, in milliseconds. */
export const PRELOADER_DELAY_MS = 200
