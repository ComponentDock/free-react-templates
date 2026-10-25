/** Every string on the page. Invented persona, studios, projects and records. */

export const PERSON = {
  name: 'Nadia Okafor',
  role: 'Frontend developer',
  glyph: '<no />',
  email: 'nadia@example.com',
  location: 'Bristol, UK',
} as const

export const NAV = [
  { label: 'Selected work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Résumé', href: '#/resume' },
] as const

export const HERO = {
  eyebrow: 'NADIA OKAFOR / FRONTEND DEVELOPER',
  lineOne: 'Good interfaces.',
  lineTwo: 'Clear thinking.',
  lineThree: 'Useful code.',
  intro:
    "I build for the person on the other side of the screen. Here's the work, the decisions behind it, and the code you can explore.",
  primary: 'Explore the projects',
  secondary: 'Read my résumé',
  editableFile: 'about-me.json',
  editorFoot: 'Small details. Better experiences.',
  editorEncoding: 'UTF-8',
} as const

export const PROFILE = {
  name: PERSON.name,
  focus: ['frontend development', 'clear interactions', 'maintainable code'],
  currently: 'open to conversations',
} as const

export const HERO_FOOT = [
  { number: '01', label: 'Working demos' },
  { number: '02', label: 'Technical case studies' },
  { number: '03', label: 'Source you can read' },
] as const

export const WORK = {
  eyebrow: 'SELECTED WORK / 2026',
  lineOne: 'From a problem',
  lineTwo: 'to a working thing.',
  lede: 'Two small frontend projects. Each comes with the reasoning, a live demo and a source download.',
} as const

export const ABOUT = {
  eyebrow: 'HOW I APPROACH THE WORK',
  lineOne: 'Understand it.',
  lineTwo: 'Build it.',
  lineThree: 'Make it clearer.',
  paragraphs: [
    "I'm Nadia, a frontend developer interested in tools that help people get something done. I like reducing a complicated flow to a few understandable choices, then checking the details that make it usable.",
    'My work starts with the HTML and the task. I add JavaScript where it helps, keep state predictable, and write down the decisions someone else will need to understand later.',
  ],
  principles: [
    {
      title: 'Make the next step obvious.',
      body: 'A readable label and a useful empty state often matter more than another animation.',
    },
    {
      title: 'Build for more than the happy path.',
      body: 'Try long text, zero results, narrow screens and keyboard-only interaction before calling it finished.',
    },
    {
      title: 'Leave a clear trail.',
      body: 'Document the setup, the trade-offs and what the project does not do yet.',
    },
  ],
} as const

export const TOOLS = {
  eyebrow: 'TOOLS / EXPERIENCE',
  lineOne: 'A practical',
  lineTwo: 'starting point.',
  link: 'Experience and résumé',
  cells: [
    {
      title: 'In the browser',
      body: 'HTML, CSS, JavaScript, responsive layouts, forms and browser APIs.',
    },
    {
      title: 'In the workflow',
      body: 'Git, code review, browser debugging, written decisions and small reproducible tests.',
    },
    {
      title: "What I'm exploring",
      body: 'Component boundaries, state management and clearer documentation for the next person.',
    },
    {
      title: 'What I value',
      body: 'Thoughtful feedback, readable code and teams that explain the "why."',
    },
  ],
} as const

export const CONTACT = {
  eyebrow: 'HAVE SOMETHING IN MIND?',
  lineOne: "Let's build something",
  lineTwo: 'worth using.',
  note: 'Demo contact address. Replace it with your own before publishing.',
} as const

export const FOOTER = {
  brand: 'Devfolio · Thoughtfully built.',
  guide: 'Setup & publishing guide',
  note: 'Portfolio demo: Nadia Okafor and the career history are fictional. Project demos use local sample records.',
} as const

/** The two ways the single dialog opens. */
export type DialogMode = 'case' | 'demo'

export interface DemoRecord {
  readonly id: string
  readonly title: string
  readonly category: string
  readonly meta: string
  readonly notes: readonly string[]
}

export interface CaseSection {
  readonly title: string
  readonly body: string
}

export interface Project {
  readonly id: 'triage' | 'change'
  readonly eyebrow: string
  readonly name: string
  readonly blurb: string
  readonly tags: readonly string[]
  readonly image: string
  readonly well: string
  readonly facts: readonly { readonly label: string; readonly value: string }[]
  readonly sections: readonly CaseSection[]
  readonly flow: readonly string[]
  readonly decision: string
  readonly filterLabel: string
  readonly optionLabel: string
  readonly categoryLabel: string
  readonly metaLabel: string
  readonly recordLabel: string
  readonly records: readonly DemoRecord[]
  readonly emptyState: string
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'triage',
    eyebrow: '01 / INTERNAL TOOL INTERFACE',
    name: 'Triage Desk',
    blurb:
      'Making a long request queue easier to scan. Search, status filters and a link you can send a teammate, without hiding the work behind an account screen.',
    tags: ['JavaScript', 'URL state', 'Progressive enhancement'],
    image: 'https://picsum.photos/seed/devfolio-1/1200/833',
    well: 'bg-[#e4eafa]',
    facts: [
      { label: 'Role', value: 'Design and frontend' },
      { label: 'Stack', value: 'HTML, CSS, JavaScript' },
      { label: 'Data', value: 'Eight sample requests, in memory' },
      { label: 'Status', value: 'Demo — not connected to a tracker' },
    ],
    sections: [
      {
        title: '01 The problem and scope',
        body: 'Requests arrived in one long column, and the only way to find one was to read down it. The scope was a single view: search, one status filter, and a link that reproduces what the other person sees. No accounts, no editing, no tracker integration.',
      },
      {
        title: '02 My contribution',
        body: 'I wrote the markup, styles and interaction, chose the sample data shape, and documented what the demo deliberately leaves out.',
      },
      {
        title: '03 The implementation',
        body: 'The list is rendered once from a plain array. Query and status live in component state; the visible rows are derived from both during render, so there is no second copy of the truth to keep in sync.',
      },
      {
        title: '04 The decision that mattered',
        body: 'One derived view beat two competing copies of state. Filtering on render means the count, the rows and the empty state cannot disagree.',
      },
      {
        title: '05 What the demo demonstrates',
        body: 'Search across titles and notes, a status filter, a live count, an authored empty state, and a clear-filters action that puts the caret back where the work starts.',
      },
      {
        title: '06 Checks and next steps',
        body: 'Checked at 320, 768 and 1440 px, with keyboard only, with zero results and with a very long title. Next: a real data source, saved views, and a URL-synced filter for sharing.',
      },
    ],
    flow: [
      'Request rows',
      'URL query + selected status',
      'Combined predicate',
      'Visible rows + count + empty state',
    ],
    decision: 'One derived view, not two competing copies of state.',
    filterLabel: 'Filter by status',
    optionLabel: 'All statuses',
    categoryLabel: 'Status',
    metaLabel: 'Priority',
    recordLabel: 'All sample requests shown.',
    emptyState: 'No matching requests. Try a different search or clear the filters.',
    records: [
      {
        id: 'REQ-201',
        title: 'Keyboard focus lost after saving a draft',
        category: 'Open',
        meta: 'High',
        notes: ['Focus should return to the saved row, not the top of the list.'],
      },
      {
        id: 'REQ-202',
        title: 'Empty state has no next step',
        category: 'In progress',
        meta: 'Normal',
        notes: ['Add a link back to the unfiltered list.'],
      },
      {
        id: 'REQ-203',
        title: 'Long titles overflow the third column',
        category: 'Open',
        meta: 'Normal',
        notes: ['Wrap onto two lines instead of truncating.'],
      },
      {
        id: 'REQ-204',
        title: 'Status filter resets on reload',
        category: 'Done',
        meta: 'Low',
        notes: ['Status now survives a refresh via the query string.'],
      },
      {
        id: 'REQ-205',
        title: 'Count line reads as a button',
        category: 'Done',
        meta: 'Low',
        notes: ['Dropped the border so it reads as text.'],
      },
      {
        id: 'REQ-206',
        title: 'Search does not look at notes',
        category: 'Open',
        meta: 'High',
        notes: ['The detail line is where the useful words are.'],
      },
      {
        id: 'REQ-207',
        title: 'Clear filters leaves focus behind',
        category: 'In progress',
        meta: 'Normal',
        notes: ['Return focus to the search field after clearing.'],
      },
      {
        id: 'REQ-208',
        title: 'Table headers not exposed to screen readers',
        category: 'Done',
        meta: 'Normal',
        notes: ['Switched to real table semantics with a caption.'],
      },
    ],
  },
  {
    id: 'change',
    eyebrow: '02 / PRODUCT COMMUNICATION',
    name: 'Change Sheet',
    blurb:
      'A changelog built around finding an answer. Filter by change type, search the details and share the view with a teammate.',
    tags: ['Semantic HTML', 'Search', 'Content structure'],
    image: 'https://picsum.photos/seed/devfolio-2/1200/833',
    well: 'bg-[#e6eddf]',
    facts: [
      { label: 'Role', value: 'Frontend and content structure' },
      { label: 'Stack', value: 'Semantic HTML, CSS, JavaScript' },
      { label: 'Data', value: 'Five sample releases, in memory' },
      { label: 'Status', value: 'Demo — no publishing pipeline' },
    ],
    sections: [
      {
        title: '01 The problem and scope',
        body: 'Release notes were accurate and unreadable: one long page, newest first, with no way to answer "when did this change?" The scope was a readable log with a type filter and a text search — authoring stays outside the demo.',
      },
      {
        title: '02 My contribution',
        body: 'I structured the content model, wrote the markup and styles, and built the shared filter used here and on the request queue.',
      },
      {
        title: '03 The implementation',
        body: 'Every release is an article with a heading and a list of notes. One filter function reads the article text, so search finds words in the notes rather than only in the version heading.',
      },
      {
        title: '04 The decision that mattered',
        body: 'Keep the content useful before adding the interaction. The log reads correctly with JavaScript off; the filter only removes rows.',
      },
      {
        title: '05 What the demo demonstrates',
        body: 'A type filter, a search field that reads notes, a count of matching releases, and an empty state that explains how to get back.',
      },
      {
        title: '06 Checks and next steps',
        body: 'Checked with no results, one result, an unknown type and a 320 px viewport. Next: an authoring format, permalinks per release, and a feed.',
      },
    ],
    flow: [
      'Semantic release articles',
      'Text query + change type',
      'Shared filter module',
      'Matching articles + shareable view',
    ],
    decision: 'Keep the content useful before adding the interaction.',
    filterLabel: 'Filter by type',
    optionLabel: 'All types',
    categoryLabel: 'Type',
    metaLabel: 'Date',
    recordLabel: 'All sample releases shown.',
    emptyState: 'No matching releases. Try a different search or clear the filters.',
    records: [
      {
        id: 'v2.0.0',
        title: 'A clearer route to the right answer',
        category: 'Feature',
        meta: '2026-09-24',
        notes: ['Search now reads release notes, not just headings.', 'Filter state can be shared as a link.'],
      },
      {
        id: 'v1.4.2',
        title: 'Small fixes, clearer feedback',
        category: 'Fix',
        meta: '2026-09-12',
        notes: ['The count no longer double-counts a matched note.', 'Empty state names the active filter.'],
      },
      {
        id: 'v1.4.1',
        title: 'Keyboard details that matter',
        category: 'Fix',
        meta: '2026-09-04',
        notes: ['Clearing filters returns focus to search.', 'Escape closes the open release panel.'],
      },
      {
        id: 'v1.4.0',
        title: 'Release history, in one place',
        category: 'Feature',
        meta: '2026-08-27',
        notes: ['Every release links to its own anchor.', 'Dates are printed once, in the same format.'],
      },
      {
        id: 'v1.3.0',
        title: 'A smaller starting point',
        category: 'Maintenance',
        meta: '2026-08-10',
        notes: ['Removed the unused icon set.', 'Dropped two colours from the palette.'],
      },
    ],
  },
]

export const RESUME = {
  title: 'Résumé',
  roleLine: 'Frontend developer · Bristol, UK · open to conversations',
  summary:
    'Frontend developer working on small, usable tools. I care about readable markup, predictable state and decisions that survive the next person.',
  experience: [
    {
      role: 'Frontend developer',
      org: 'Fernhill Studio',
      period: '2025 — present',
      bullets: [
        'Built the internal request queue used by the support team every day.',
        'Rewrote the changelog so support can answer "when did this change?" without a ticket.',
        'Set up the studio\'s frontend review checklist and its accessibility pass.',
      ],
    },
    {
      role: 'Junior web developer',
      org: 'Marlow & Co',
      period: '2023 — 2025',
      bullets: [
        'Shipped marketing pages from design files with hand-written HTML and CSS.',
        'Added form validation and empty states to a booking flow.',
        'Wrote the onboarding notes the next two hires used.',
      ],
    },
  ],
  projects: 'Selected projects',
  tools: {
    title: 'Tools and skills',
    items: [
      'HTML and semantic structure',
      'CSS, responsive layout, Tailwind CSS',
      'JavaScript and TypeScript',
      'React and component boundaries',
      'Git, code review and written decisions',
    ],
  },
  education: {
    title: 'Education',
    line: 'BSc, Digital Media · Calder College, 2020 — 2023',
  },
} as const
