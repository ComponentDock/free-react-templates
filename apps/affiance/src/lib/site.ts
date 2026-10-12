/**
 * Affiance's copy and data. Everything here is the page's own — the brand, the couple, the venue,
 * the dates, the party, the milestones and the guest messages are all invented for this recreation,
 * while the band headings and the navigation labels are the ones the design sets.
 */

export const PAGE_TITLE = 'Affiance — Wedding Template'
export const SKIP_TARGET = '#home'

export const BRAND = 'Affiance'
export const COUPLE = 'Elias & Rosalind'
export const HERO_TAGLINE = 'Saying Forever'

/** Every id in the page's own navigation, used to guarantee no link is a dead anchor. */
export const SECTION_IDS = {
  home: 'home',
  countdown: 'countdown',
  groomBride: 'groom-bride',
  loveStory: 'lovestory',
  greeting: 'greeting',
  people: 'people',
  whenWhere: 'when-where',
  rsvp: 'rsvp',
  gallery: 'gallery',
} as const

export interface NavLeaf {
  label: string
  href: string
}

export const NAV: NavLeaf[] = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  { label: 'Groom & Bride', href: `#${SECTION_IDS.groomBride}` },
  { label: 'Our Story', href: `#${SECTION_IDS.loveStory}` },
  { label: 'Greetings', href: `#${SECTION_IDS.greeting}` },
  { label: 'Bridesmaid & Groomsmen', href: `#${SECTION_IDS.people}` },
  { label: 'When & Where', href: `#${SECTION_IDS.whenWhere}` },
  { label: 'RSVP', href: `#${SECTION_IDS.rsvp}` },
  { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
]

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
export const COUNTDOWN_SCRIPT = 'Save the Day'

export interface PortraitsRow {
  key: string
  name: string
  blurb: string
  photo: string
  alt: string
  photoSide: 'left' | 'right'
  mark: 'left' | 'right'
}

export const PORTRAITS: PortraitsRow[] = [
  {
    key: 'groom',
    name: 'Elias Ward',
    blurb:
      'He draws maps for a living and still gets lost on the walk home. Ask him about the summer he spent measuring the river and he will talk until the coffee goes cold.',
    photo: 'affiance-30',
    alt: 'A lone figure standing at the shore of a still lake at dawn',
    photoSide: 'right',
    mark: 'right',
  },
  {
    key: 'bride',
    name: 'Rosalind Ito',
    blurb:
      'She keeps every ticket stub from every train they have taken together in a tin by the window. Ask her about the night they met and she will tell you it was raining, which it was.',
    photo: 'affiance-4',
    alt: 'A woman paddling a canoe across a bright turquoise lake',
    photoSide: 'left',
    mark: 'left',
  },
]

export interface Milestone {
  date: string
  title: string
  blurb: string
  photo: string
  alt: string
  reverse: boolean
  mark: 'left' | 'right'
}

export const MILESTONES: Milestone[] = [
  {
    date: 'June 2019',
    title: 'A borrowed umbrella',
    blurb: 'One downpour outside the reading room, one umbrella neither of them owned, and a walk that took twice as long as it should have.',
    photo: 'affiance-11',
    alt: 'A branch of cherry blossom opening against a pale sky',
    reverse: false,
    mark: 'left',
  },
  {
    date: 'October 2020',
    title: 'The long table',
    blurb: 'They cooked for fourteen people in a kitchen built for two and decided, somewhere between the second and third course, that this was the life.',
    photo: 'affiance-33',
    alt: 'Autumn leaves scattered across a woodland floor',
    reverse: true,
    mark: 'right',
  },
  {
    date: 'March 2023',
    title: 'The question, twice',
    blurb: 'She asked first, on a bench above the harbour, and he answered with a second question half a mile later, because neither of them wanted to wait.',
    photo: 'affiance-19',
    alt: 'A wooden dock reaching out into a calm mountain lake',
    reverse: false,
    mark: 'left',
  },
  {
    date: 'May 2028',
    title: 'The last fitting',
    blurb: 'The suits, the dress, the list of names and the small argument about seating that will be told as a funny story for the next forty years.',
    photo: 'affiance-59',
    alt: 'The pale vaulted arches of an empty cathedral',
    reverse: true,
    mark: 'right',
  },
]

export interface Greeting {
  name: string
  role: string
  blurb: string
  photo: string
  alt: string
}

export const GREETINGS: Greeting[] = [
  {
    name: 'Delphine Marchetti',
    role: 'Maid of honour',
    blurb: 'I have watched these two build a whole life out of small Sundays, and I have never seen either of them happier than the morning they told us.',
    photo: 'affiance-46',
    alt: 'A person sitting by the water below a misted skyline',
  },
  {
    name: 'Otto Bramwell',
    role: 'Best man',
    blurb: 'Ten years of friendship, one borrowed umbrella, and a groom who still cannot tie a tie without help. My speech writes itself.',
    photo: 'affiance-51',
    alt: 'Someone with a bicycle outside a sunlit colonial doorway',
  },
  {
    name: 'Priya Raghunathan',
    role: 'Cousin of the bride',
    blurb: 'Every family gathering has had a seat saved for Elias since the year he fixed the boiler. We are delighted to make it official.',
    photo: 'affiance-41',
    alt: 'A bicycle leaning against a yellow-washed doorway',
  },
  {
    name: 'Sam Okafor',
    role: 'Childhood friend',
    blurb: 'We met at nine, argued about football until we were nineteen, and I have never been prouder than to stand beside him now.',
    photo: 'affiance-60',
    alt: 'A walker on a path through tall pines',
  },
  {
    name: 'Ingrid Solheim',
    role: 'Sister of the groom',
    blurb: 'I have known him longer than anyone here, and Rosalind is the first person who has ever made him arrive somewhere early.',
    photo: 'affiance-53',
    alt: 'A figure standing in a shaft of light against a stone wall',
  },
]

export interface Attendant {
  name: string
  role: string
  photo: string
  alt: string
}

export const ATTENDANTS: Attendant[] = [
  { name: 'Casper Nilsen', role: 'Groomsman', photo: 'affiance-54', alt: 'A figure under a star-filled night sky' },
  { name: 'Amos Farrow', role: 'Groomsman', photo: 'affiance-52', alt: 'A crowd crossing a great hall in golden light' },
  { name: 'Ruben Castellanos', role: 'Groomsman', photo: 'affiance-22', alt: 'A musician playing an electric guitar in a shop doorway' },
  { name: 'Dov Ashworth', role: 'Groomsman', photo: 'affiance-13', alt: 'Silhouettes at a long table in a dark cafe' },
  { name: 'Nell Cavanagh', role: 'Bridesmaid', photo: 'affiance-37', alt: 'Tiny figures on the crest of an orange dune' },
  { name: 'Sable Okafor', role: 'Bridesmaid', photo: 'affiance-44', alt: 'A car raising dust across a golden plain' },
  { name: 'June Marchetti', role: 'Bridesmaid', photo: 'affiance-36', alt: 'Tall golden grass bending in a field' },
  { name: 'Ida Bramwell', role: 'Bridesmaid', photo: 'affiance-48', alt: 'A sunlit river winding through a wooded valley' },
]

export type EventGlyph = 'church' | 'cake'

export interface EventPlace {
  title: string
  glyph: EventGlyph
  date: string
  time: string
  address: string[]
  phone: string
  map: string
}

export const EVENT_PLACES: EventPlace[] = [
  {
    title: 'The Ceremony',
    glyph: 'church',
    date: 'Saturday, 17 June 2028',
    time: '03:00 pm - 05:00 pm',
    address: ['The Old Meeting House', '42 Alder Row, Brightwater, Vermont'],
    phone: '+1 (802) 555 0134',
    map: 'https://www.openstreetmap.org/?mlat=44.4759&mlon=-73.2121#map=15/44.4759/-73.2121',
  },
  {
    title: 'The Reception',
    glyph: 'cake',
    date: 'Saturday, 17 June 2028',
    time: '07:00 pm - 12:00 am',
    address: ['The Orchard Barn', '9 Little Pines Road, Brightwater, Vermont'],
    phone: '+1 (802) 555 0134',
    map: 'https://www.openstreetmap.org/?mlat=44.4686&mlon=-73.1976#map=15/44.4686/-73.1976',
  },
]

export const RSVP_SUBHEADING = 'Invitation'
export const RSVP_TITLE = 'Will You Attend?'
export const RSVP_SUBMIT = 'I am attending'
export const RSVP_CONFIRMED = 'Thank you — your reply is with us. We will save you a seat.'
export const RSVP_INVALID = 'Please add your name and a valid email address so we can hold your place.'

export const RSVP_FIELDS = {
  name: 'Name',
  email: 'Your email',
  guest: 'Guest',
  message: 'Message',
} as const

export const GUEST_OPTIONS = ['Guest', '1', '2', '3', '4', '5'] as const

export interface GalleryTile {
  photo: string
  alt: string
}

export const GALLERY: GalleryTile[] = [
  { photo: 'affiance-6', alt: 'A pink sunset over a wet beach' },
  { photo: 'affiance-12', alt: 'Clouds lit from below over a dark ridge' },
  { photo: 'affiance-18', alt: 'A pale sea of cloud filling a valley at dawn' },
  { photo: 'affiance-24', alt: 'Palms along an empty sunlit beach' },
  { photo: 'affiance-43', alt: 'A turquoise wave curling over itself' },
  { photo: 'affiance-15', alt: 'A pebbled shoreline below a stand of pines' },
  { photo: 'affiance-35', alt: 'Railway tracks running straight through a forest' },
  { photo: 'affiance-42', alt: 'Moss covering the trunk of an old tree' },
]

export const FOOTER_BLURB = 'Two people, one long table, and everyone we love in a field in Vermont.'
export const FOOTER_CREDIT = 'All rights reserved.'
export const FOOTER_TAGLINE = 'More templates at'
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
export const COMPONENT_DOCK_LABEL = 'Component Dock'

export interface FooterColumn {
  title: string
  items: NavLeaf[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Links',
    items: [
      { label: 'Home', href: `#${SECTION_IDS.home}` },
      { label: 'Groom & Bride', href: `#${SECTION_IDS.groomBride}` },
      { label: 'Story', href: `#${SECTION_IDS.loveStory}` },
      { label: 'Greetings', href: `#${SECTION_IDS.greeting}` },
      { label: 'People', href: `#${SECTION_IDS.people}` },
      { label: 'Where & When', href: `#${SECTION_IDS.whenWhere}` },
      { label: 'RSVP', href: `#${SECTION_IDS.rsvp}` },
      { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
    ],
  },
  {
    title: 'Services',
    items: [
      { label: 'The Organizer', href: `#${SECTION_IDS.rsvp}` },
      { label: 'The Venue', href: `#${SECTION_IDS.whenWhere}` },
      { label: 'The Ceremony', href: `#${SECTION_IDS.whenWhere}` },
      { label: 'Where To Stay', href: `#${SECTION_IDS.people}` },
    ],
  },
]

export const CONTACT_TITLE = 'Any Questions?'
export const CONTACT_ADDRESS = ['18 Alder Row', 'Brightwater, Vermont 05753']
export const CONTACT_PHONE = '+1 (802) 555 0134'
export const CONTACT_EMAIL = 'hello@affiance.example'

export type SocialName = 'facebook' | 'x' | 'instagram' | 'pinterest'

export interface Social {
  name: SocialName
  label: string
  href: string
}

export const SOCIALS: Social[] = [
  { name: 'facebook', label: 'Affiance on Facebook', href: 'https://www.facebook.com/' },
  { name: 'x', label: 'Affiance on X', href: 'https://x.com/' },
  { name: 'instagram', label: 'Affiance on Instagram', href: 'https://www.instagram.com/' },
  { name: 'pinterest', label: 'Affiance on Pinterest', href: 'https://www.pinterest.com/' },
]

/** The page's photography is placeholder stock: seeded, deterministic, and never a copied asset. */
export function photo(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}
