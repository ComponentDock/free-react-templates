/**
 * Every destination and every line of copy the Gangway page renders, plus the one
 * navigation model the bar and the drawer are both built from: the page keeps a
 * single list of rows, a single list of sections and a single list of the
 * destinations that hang off them — never a second copy for the other breakpoint.
 */

export const SITE_NAME = 'Gangway'

export const PAGE_TITLE = 'Gangway — Centred Menu With Two CTAs Template'

export const FOOTER_NOTE = 'Two ways aboard and a drawer for the rest of the harbour.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The band's single photographic surface (deterministic placeholder seed). */
export const HERO_PHOTO = 'https://picsum.photos/seed/gangway-hero/1920/1080'

/** A deterministic placeholder for one picture inside a section. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/gangway-${seed}/${width}/${height}`
}

/** The desktop list's id, and what the wide row's own region answers to. */
export const NAV_ID = 'gangway-nav'

/** The drawer panel's id. */
export const DRAWER_ID = 'gangway-drawer'

/** The veil that dims the page behind the drawer. */
export const VEIL_ID = 'gangway-veil'

/** The hamburger's id, so the panel it opens can be labelled by it. */
export const MENU_TOGGLE_ID = 'gangway-menu-toggle'

/** The drawer's own close control, so focus has somewhere to land when it opens. */
export const DRAWER_CLOSE_ID = 'gangway-drawer-close'

/** The label the hamburger carries for assistive tech. */
export const MENU_LABEL = 'Open the site menu'

/** The label the drawer's close control carries for assistive tech. */
export const DRAWER_CLOSE_LABEL = 'Close the site menu'

/** The label one round disclosure arrow carries, in its two states. */
export const submenuLabel = (label: string, expanded: boolean): string =>
  `${expanded ? 'Hide' : 'Show'} the ${label} submenu`

/**
 * How far a target is kept clear of the floating bar when it is scrolled to, in
 * px — the bar's 48px offset plus its own height, with room to spare.
 */
export const HEADER_OFFSET = 112

export interface NavLink {
  label: string
  href: string
  /** The current destination: carried as `aria-current` and drawn in full white. */
  current?: boolean
  /** A row the drawer adds to the bar's list: it never shows on the wide row. */
  drawerOnly?: boolean
  /** A leading mark, where the row is one of the pair of calls to action. */
  icon?: 'plus' | 'lock'
}

/** A row that owns a submenu — a real destination in its own right, plus children. */
export interface NavBranch {
  label: string
  href: string
  items: NavLink[]
}

export type NavItem = NavLink | NavBranch

/** Rows that own children are branches; everything else is a plain link. */
export function isBranch(item: NavItem): item is NavBranch {
  return 'items' in item
}

/** A stable, hyphenated id fragment for a row — used for its submenu's id. */
export function rowSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * The eight rows the bar renders, in the design's order: a current opening row, an
 * about-kind row, two rows that own submenus, a log-kind row and a contact row —
 * then the two action rows the drawer adds, which are hidden from 992px up because
 * from there the pair of calls to action carries them instead.
 */
export const NAV: NavItem[] = [
  { label: 'Deck', href: '#deck', current: true },
  { label: 'Crew', href: '#crew' },
  {
    label: 'Billets',
    href: '#billets',
    items: [
      { label: 'Billet detail', href: '#billet-detail' },
      { label: 'Post a billet', href: '#post-billet' },
    ],
  },
  {
    label: 'Harbour',
    href: '#harbour',
    items: [
      { label: 'Chandlery', href: '#chandlery' },
      { label: 'Chandlery detail', href: '#chandlery-detail' },
      { label: 'Log entry', href: '#log-entry' },
      { label: 'The yard', href: '#yard' },
      { label: 'Yard detail', href: '#yard-detail' },
      { label: 'Crew voices', href: '#crew-voices' },
      { label: 'Questions we get asked', href: '#questions' },
      { label: 'Dry dock', href: '#dry-dock' },
    ],
  },
  { label: "Ship's log", href: '#ships-log' },
  { label: 'Berth', href: '#berth' },
  { label: 'Publish a billet', href: '#post-billet', icon: 'plus', drawerOnly: true },
  { label: 'Sign aboard', href: '#aboard', icon: 'lock', drawerOnly: true },
]

/** The outline-white half of the bar's pair, and the first of its two entries. */
export const CTA_SECONDARY: NavLink = {
  label: 'Post a billet',
  href: '#post-billet',
  icon: 'plus',
}

/** The filled half of the bar's pair — the only solid colour in the whole header. */
export const CTA_PRIMARY: NavLink = {
  label: 'Sign aboard',
  href: '#aboard',
  icon: 'lock',
}

export interface SectionItem {
  title: string
  body: string
  /** A card that is also a picture, where the section is a gallery of things. */
  image?: string
}

export interface FaqEntry {
  question: string
  answer: string
}

export interface GalleryShot {
  alt: string
  src: string
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  placeholder: string
}

export interface FormModel {
  /** Which of the page's two forms this is — the billet board, or the account panel. */
  kind: 'billet' | 'account'
  note: string
  submitLabel: string
  fields: FormField[]
}

export interface Section {
  id: string
  eyebrow: string
  heading: string
  body: string
  /** The section's rows, where it is a list of things. */
  items?: SectionItem[]
  /** The section's pictures, where it is a gallery. */
  images?: GalleryShot[]
  /** The section's questions, where it is an FAQ. */
  faq?: FaqEntry[]
  /** The section's form, where it collects something. */
  form?: FormModel
}

export interface SubPage extends Section {
  /** The declared section this destination hangs off. */
  parent: string
}

/**
 * The nine top-level destinations the menu declares, every one of them materialised
 * so that no row of the bar is a dead link: the opening intro, the crew, the billet
 * board and its detail, the billet form, the harbour the second submenu describes,
 * the log, the contact block and the account panel.
 */
export const SECTIONS: Section[] = [
  {
    id: 'deck',
    eyebrow: 'Deck',
    heading: 'Two ways aboard, one drawer for the rest',
    body: 'The first frame is the bar alone: a wordmark at the left edge, one centred list of destinations and a pair of calls to action at the right, floating on a full-height photograph. Everything below this line exists because one of those rows points at it.',
    items: [
      {
        title: 'Boarding',
        body: 'Two entry points sit at the right end of the bar: publish a billet, or sign aboard with an existing account.',
      },
      {
        title: 'The list',
        body: 'Six destinations sit in the centre of the bar, two of them opening a submenu of the pages behind them.',
      },
      {
        title: 'The drawer',
        body: 'Below 1200px the same six rows — plus both boarding calls — move into a panel that slides in from the right.',
      },
    ],
  },
  {
    id: 'crew',
    eyebrow: 'Crew',
    heading: 'The people who hold the harbour together',
    body: 'Fourteen of us share the office above the chandlery: three dispatchers, two riggers, a sailmaker and the crew that keeps the yard moving.',
    items: [
      { title: 'Dispatch', body: 'Three people on the radio from dawn, matching crews to the billets that suit them.' },
      { title: 'The yard', body: 'Two riggers and a sailmaker who will take a hull on for a season or for a single tide.' },
    ],
  },
  {
    id: 'billets',
    eyebrow: 'Billets',
    heading: 'Openings on the board this week',
    body: 'Every billet below is live: the vessel is in the harbour, the contract is written and the start date is agreed. Pick one to read what the day actually looks like.',
    items: [
      {
        title: 'Deckhand — Novara',
        body: 'Six weeks, day sails only, based alongside the north quay. No ticket required.',
        image: shot('billet-1', 800, 600),
      },
      {
        title: 'Rigger — Selkie',
        body: 'A full refit in the yard, three days a week, own tools an advantage.',
        image: shot('billet-2', 800, 600),
      },
      {
        title: 'Watchkeeper — Greyholm',
        body: 'Overnight passages between the harbour and the islands, roster published a month ahead.',
        image: shot('billet-3', 800, 600),
      },
    ],
  },
  {
    id: 'billet-detail',
    eyebrow: 'Billet',
    heading: 'What a day on the Novara looks like',
    body: 'Boarded at 07:30, alongside by 08:00, home before the light goes. The detail of the billet is written up below, exactly as the skipper posted it.',
    items: [
      { title: 'Hours', body: 'Four days on, three off, with the tide deciding the start rather than the clock.' },
      { title: 'Duties', body: 'Lines, fenders, the log and a share of the galley — nothing that needs a ticket.' },
      { title: 'Pay', body: 'Day rate agreed before boarding, paid the following Friday without fail.' },
    ],
  },
  {
    id: 'post-billet',
    eyebrow: 'Post',
    heading: 'Put a billet on the board',
    body: 'Tell us the vessel, the dates and what the work is; the board is read every morning and a live billet is confirmed the same week.',
    items: [
      { title: 'By post', body: 'The board, North Quay Office, Berth 4 — open from 08:00.' },
      { title: 'By radio', body: 'Channel 14 from the harbour office, answered while the office is manned.' },
    ],
    form: {
      kind: 'billet',
      note: 'Nothing is published until the vessel and the dates have been confirmed with the office.',
      submitLabel: 'Post the billet',
      fields: [
        { name: 'vessel', label: 'Vessel', type: 'text', placeholder: 'Novara' },
        { name: 'dates', label: 'Dates', type: 'text', placeholder: 'Six weeks from the next spring tide' },
        { name: 'duties', label: 'What the billet is', type: 'textarea', placeholder: 'Lines, fenders, the log…' },
      ],
    },
  },
  {
    id: 'harbour',
    eyebrow: 'Harbour',
    heading: 'Everything the second submenu describes',
    body: 'The chandlery, the yard, the log and the pictures all live in one place — the harbour itself. The rows below are the same destinations the submenu lists, written out at length.',
  },
  {
    id: 'ships-log',
    eyebrow: "Ship's log",
    heading: 'Notes from the last few weeks',
    body: 'Tide tables, new billets and the odd repair, written up whenever the office is quiet.',
    items: [
      {
        title: 'A week of spring tides',
        body: 'What the harbour looked like at its lowest — and why the yard emptied for two days.',
        image: shot('log-1', 800, 600),
      },
      {
        title: 'The Novara returns',
        body: 'Three seasons away and back alongside the same quay, with a new mainsheet.',
        image: shot('log-2', 800, 600),
      },
      {
        title: 'Rope, and where it comes from',
        body: 'One afternoon with the sailmaker, tracing a coil back to the strand.',
        image: shot('log-3', 800, 600),
      },
    ],
  },
  {
    id: 'berth',
    eyebrow: 'Berth',
    heading: 'Where to find the office',
    body: 'The office sits at the root of the north quay, above the chandlery. Walk in, radio in, or write — all three are read by the same three people.',
    items: [
      { title: 'Address', body: 'North Quay Office, Berth 4, the harbour.' },
      { title: 'Write', body: 'office@gangway.example — answered within a day.' },
      { title: 'Radio', body: 'Channel 14, from 07:00 until the last boat is alongside.' },
    ],
  },
  {
    id: 'aboard',
    eyebrow: 'Aboard',
    heading: 'Sign aboard',
    body: 'An account holds your boarding history, the billets you have posted and the crews you have worked with.',
    form: {
      kind: 'account',
      note: 'Only crews with a confirmed billet are given a password; anyone can open an account to follow the board.',
      submitLabel: 'Sign aboard',
      fields: [
        { name: 'email', label: 'Email', type: 'email', placeholder: 'you@gangway.example' },
        { name: 'name', label: 'Name', type: 'text', placeholder: 'How the office should address you' },
      ],
    },
  },
]

/**
 * The eight destinations the second submenu carries, each materialised inside the
 * harbour section they belong to, so every row of that surface lands on real
 * content rather than a page that does not exist.
 */
export const SUB_PAGES: SubPage[] = [
  {
    id: 'chandlery',
    parent: 'harbour',
    eyebrow: 'Chandlery',
    heading: 'What the shop keeps on the shelf',
    body: 'Everything a billet needs, from a shackle to a whole suit of sails, priced on the board by the door.',
    items: [
      { title: 'Rope and line', body: 'Spliced or plain, by the metre, in three weights.' },
      { title: 'Hardware', body: 'Shackles, blocks, cleats and the small brass that always goes missing.' },
      { title: 'Clothing', body: 'Oilskins, boots and gloves that stay dry past the first squall.' },
    ],
  },
  {
    id: 'chandlery-detail',
    parent: 'harbour',
    eyebrow: 'Chandlery detail',
    heading: 'The rope counter, in full',
    body: 'A counter the length of the shop, a splicing bench at one end and a scale the sailmaker trusts.',
    items: [
      { title: 'Cut to length', body: 'Measured twice, heat-sealed at both ends, bagged and labelled for the boat.' },
      { title: 'Spliced while you wait', body: 'An eye splice takes twenty minutes and costs the price of the tea.' },
    ],
  },
  {
    id: 'log-entry',
    parent: 'harbour',
    eyebrow: 'Log entry',
    heading: 'One entry from the harbour log',
    body: 'Written up the evening the Greyholm came back with a torn mainsheet and a story about the weather.',
    items: [
      { title: 'What happened', body: 'A squall off the point, one rope gone and no one hurt — the log records it in four lines.' },
      { title: 'What changed', body: 'The yard now stocks a heavier mainsheet, and every hire boat carries a spare.' },
    ],
  },
  {
    id: 'yard',
    parent: 'harbour',
    eyebrow: 'The yard',
    heading: 'Hulls in the yard this season',
    body: 'Six vessels on the hard, from a twelve-foot dinghy to a forty-foot ketch, each with a board on its transom.',
    items: [
      { title: 'Selkie', body: 'Refit of the whole topside, three days a week.', image: shot('yard-1', 800, 600) },
      { title: 'Greyholm', body: 'New mainsheet and a repair to the foredeck.', image: shot('yard-2', 800, 600) },
      { title: 'Novara', body: 'Anti-fouling, anodes and a fresh coat on the waterline.', image: shot('yard-3', 800, 600) },
    ],
  },
  {
    id: 'yard-detail',
    parent: 'harbour',
    eyebrow: 'Yard detail',
    heading: 'How a hull is taken on',
    body: 'The yard works to a single sheet: what is done, in what order and who signs it off when the boat goes back in.',
    items: [
      { title: 'Survey first', body: 'Nothing is quoted until the hull has been sounded and the keel bolts checked.' },
      { title: 'One sheet, one owner', body: 'Every job on the sheet has a name against it, including the one that writes the invoice.' },
    ],
  },
  {
    id: 'crew-voices',
    parent: 'harbour',
    eyebrow: 'Crew voices',
    heading: 'What the crews say about the harbour',
    body: 'Written on the board in the office, in the crews own words, after a season or a single tide.',
    items: [
      { title: '“Straight onto the boat”', body: 'A watchkeeper who took a billet on the Greyholm within a day of asking.' },
      { title: '“The yard keeps its word”', body: 'A skipper who has had the same hull refitted here for nine years.' },
      { title: '“Nothing is hidden in the price”', body: 'A deckhand on the day rate, the hours and the tea.' },
    ],
  },
  {
    id: 'questions',
    parent: 'harbour',
    eyebrow: 'Questions',
    heading: 'Questions we get asked',
    body: 'The same four arrive every week; the office answers them on the board and here.',
    faq: [
      {
        question: 'Do I need a ticket to take a billet?',
        answer: 'Not for the day sails. Anything overnight asks for a watchkeeping certificate.',
      },
      {
        question: 'How soon is a billet confirmed?',
        answer: 'The board is read every morning, and a live billet is confirmed the same week.',
      },
      {
        question: 'Can a vessel outside the harbour post a billet?',
        answer: 'Yes, as long as the office can reach the skipper by radio or by post.',
      },
    ],
  },
  {
    id: 'dry-dock',
    parent: 'harbour',
    eyebrow: 'Dry dock',
    heading: 'The harbour in pictures',
    body: 'Four frames from the last season, taken from the office window and from the head of the quay.',
    images: [
      { alt: 'Masts along the north quay at first light', src: shot('dock-1', 900, 700) },
      { alt: 'A hull on the hard with a board on its transom', src: shot('dock-2', 900, 700) },
      { alt: 'Coils of rope on the chandlery counter', src: shot('dock-3', 900, 700) },
      { alt: 'The harbour office above the shop at dusk', src: shot('dock-4', 900, 700) },
    ],
  },
]
