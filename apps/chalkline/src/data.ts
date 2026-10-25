/** The page's copy and its data tables. Nothing here is fetched: the design is a
 * marketing page, so every row, price and answer is a constant. */

export const brand = {
  name: 'Chalkline',
  tagline:
    'An open learning management system for schools, universities and training providers. Self-host it, or let us run it in your region.',
  email: 'hello@chalklinelms.org',
  licence: 'AGPL-3.0 · the trademark is held by the Chalkline Foundation',
  deed: 'Built by a 34-person cooperative with no outside investors.',
} as const

export const navLinks = [
  { label: 'Platform', href: '#roles' },
  { label: 'Gradebook', href: '#gradebook' },
  { label: 'Standards', href: '#standards' },
  { label: 'Migration', href: '#migration' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#faq' },
  { label: 'Notes', href: '#newsletter' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroStats = [
  { value: '90', label: 'Institutions' },
  { value: '400', label: 'Thousand learners' },
  { value: '12', label: 'Years in service' },
  { value: '99', label: 'Percent uptime' },
] as const

export const heroPhrases = [
  'institution actually owns',
  'registrar can audit',
  'team can self-host',
] as const

export const counters = [
  { value: 90, label: 'Institutions running Chalkline' },
  { value: 400, label: 'Thousand active learners' },
  { value: 31, label: 'Countries' },
  { value: 99, label: 'Percent uptime, rolling year' },
] as const

export const roles = [
  {
    meta: 'Default',
    title: 'Learner',
    blurb: 'Sees enrolled courses, their own submissions and their own grades. Nothing else, ever.',
  },
  {
    meta: 'Assigned per course',
    title: 'Instructor',
    blurb:
      'Full control inside their own courses, including marking, extensions and re-opening a closed submission.',
  },
  {
    meta: 'Assigned per programme',
    title: 'Programme lead',
    blurb:
      'Reads and marks across every course in their programme, and can override a released grade with a recorded reason.',
  },
  {
    meta: 'Institution-wide',
    title: 'Administrator',
    blurb:
      'Manages enrolment, integrations and retention. Cannot silently edit a grade — every override is logged.',
  },
] as const

export type Cell = { kind: 'full' } | { kind: 'scoped'; label: string } | { kind: 'none' }

const full: Cell = { kind: 'full' }
const none: Cell = { kind: 'none' }
const own = (label = 'own courses'): Cell => ({ kind: 'scoped', label })

export const capabilityGroups = [
  {
    name: 'Courses and content',
    rows: [
      {
        capability: 'View enrolled course content',
        cells: [full, full, full, full],
      },
      {
        capability: 'Create and publish a course',
        cells: [none, own(), own(), full],
      },
      {
        capability: 'Import a SCORM or LTI package',
        cells: [none, own('own courses only'), full, full],
      },
    ],
  },
  {
    name: 'Assessment',
    rows: [
      { capability: 'Submit an assignment', cells: [full, none, none, none] },
      { capability: 'Mark and release grades', cells: [none, own(), own(), full] },
      { capability: 'Grant an extension', cells: [none, own(), own(), full] },
      {
        capability: 'Override a released grade',
        cells: [none, own('logged, with reason'), own(), none],
      },
    ],
  },
  {
    name: 'People and data',
    rows: [
      { capability: "See another learner's grades", cells: [none, own(), full, full] },
      { capability: 'Enrol and unenrol learners', cells: [none, none, own(), full] },
      { capability: 'Export a full data extract', cells: [none, none, none, full] },
      {
        capability: 'Delete a learner record',
        cells: [none, none, own('two-person approval'), full],
      },
    ],
  },
] as const

export const roleColumns = ['Learner', 'Instructor', 'Programme lead', 'Administrator'] as const

export const gradebook = {
  course: 'BSc Environmental Science · Hydrology II',
  meta: 'Cohort 2026-A · 6 assessments · weighted mean',
  chips: ['7 learners', 'Weighted mean'],
  columns: [
    { code: 'LAB-1', weight: '15% · /100' },
    { code: 'LAB-2', weight: '15% · /100' },
    { code: 'QUIZ', weight: '10% · /100' },
    { code: 'MID', weight: '20% · /100' },
    { code: 'PROJ', weight: '20% · /100' },
    { code: 'EXAM', weight: '20% · /100' },
  ],
  learners: [
    { name: 'Ines Halvorsen', group: 'Group A', scores: [88, 91, 84, 79, 93, 87], mean: 87.0 },
    { name: 'Tomasz Wierzbicki', group: 'Group A', scores: [74, 68, 92, 71, 80, 76], mean: 75.9 },
    { name: 'Amara Boateng', group: 'Group B', scores: [95, 89, 88, 90, 91, 94], mean: 91.4 },
    { name: 'Callum Reid', group: 'Group B', scores: [61, 47, 70, 55, 66, 58], mean: 59.0 },
    { name: 'Priya Raghavan', group: 'Group C', scores: [82, 78, 81, 84, 88, 80], mean: 82.5 },
    { name: 'Dorian Ferreira', group: 'Group C', scores: [42, 38, 55, 44, 61, 41], mean: 46.7 },
    { name: 'Hana Yoshida', group: 'Group C', scores: [79, 85, 90, null, 87, 83], mean: 67.6 },
  ],
  legend: [
    'Distinction from 85, merit from 70, pass from 50. Any row with a component still outstanding stays Incomplete whatever the mean says.',
    'A missing submission counts as zero in the weighted mean and shows as an em dash, never as a blank cell.',
    'Learners see only their own row, and see it exactly as their instructor does.',
  ],
} as const

export type StandardStatus = 'Certified' | 'Supported' | 'Partial' | 'Roadmap'

export const standardsGroups = [
  {
    name: 'Content and activity',
    blurb: 'Bringing in material you already own, and getting it out again if you leave.',
    rows: [
      {
        code: 'SCORM 1.2',
        name: 'Sharable Content Object Reference Model',
        detail:
          'Import, launch, sequencing and completion reporting. Legacy packages from 2004-era authoring tools still run unmodified.',
        status: 'Certified',
      },
      {
        code: 'SCORM 2004',
        name: '4th edition',
        detail:
          'Full sequencing and navigation, including the rollup rules most implementations quietly skip.',
        status: 'Certified',
      },
      {
        code: 'xAPI',
        name: 'Experience API 1.0.3',
        detail:
          'A built-in Learning Record Store, or point statements at your own. Offline statements queue and replay.',
        status: 'Supported',
      },
      {
        code: 'cmi5',
        name: 'xAPI profile for the LMS',
        detail:
          'Launch and session tracking work. The full "moveOn" state machine sits behind a feature flag while conformance testing finishes.',
        status: 'Partial',
      },
      {
        code: 'QTI 3.0',
        name: 'Question and Test Interoperability',
        detail: 'Import and export of item banks, including composite and adaptive items.',
        status: 'Supported',
      },
    ],
  },
  {
    name: 'Roster and identity',
    blurb: 'Nobody should be typing a class list into a second system.',
    rows: [
      {
        code: 'LTI 1.3',
        name: 'Learning Tools Interoperability',
        detail:
          'Platform and tool roles, deep linking, and Assignment and Grade Services so external tools write straight into the gradebook.',
        status: 'Certified',
      },
      {
        code: 'OneRoster 1.2',
        name: 'Roster and gradebook exchange',
        detail:
          'REST and CSV. Nightly sync from your student system, with a dry-run diff before anything is written.',
        status: 'Supported',
      },
      {
        code: 'SAML 2.0',
        name: 'Single sign-on',
        detail:
          'Works with Shibboleth, ADFS, Entra ID and the national federations. Multiple identity providers on one tenant.',
        status: 'Certified',
      },
      {
        code: 'OIDC',
        name: 'OpenID Connect',
        detail:
          'Authorisation code flow with PKCE. Group and affiliation claims map straight onto Chalkline roles.',
        status: 'Certified',
      },
      {
        code: 'SCIM 2.0',
        name: 'Provisioning',
        detail:
          'Create, update and deprovision accounts from your identity provider, including the leaver process.',
        status: 'Supported',
      },
    ],
  },
  {
    name: 'Accessibility and data',
    blurb: 'The obligations that outlive whoever signed the contract.',
    rows: [
      {
        code: 'WCAG 2.2',
        name: 'Level AA',
        detail:
          'Audited annually by an external firm. The report and the open defect list are both public.',
        status: 'Supported',
      },
      {
        code: 'EN 301 549',
        name: 'European accessibility requirement',
        detail:
          'An accessibility statement generated per tenant, with the outstanding items named rather than summarised.',
        status: 'Supported',
      },
      {
        code: 'GDPR',
        name: 'Data protection',
        detail:
          'Data processing agreement, EU and UK hosting regions, and configurable retention with a real deletion job.',
        status: 'Supported',
      },
      {
        code: 'VPAT 2.5',
        name: 'Accessibility conformance report',
        detail:
          'The current report covers the 2.4 revision. The 2.5 rewrite lands with the next release.',
        status: 'Roadmap',
      },
    ],
  },
] as const

export type StandardRow = (typeof standardsGroups)[number]['rows'][number]

export const migration = {
  lead: 'Two thirds of the institutions running Chalkline moved from something else. The honest version is that content moves well, quizzes move mostly, and anything built with a vendor’s proprietary page builder gets rebuilt.',
  vendors: ['Moodle', 'Canvas', 'Blackboard'],
  rows: [
    { item: 'Course structure and files', cells: ['Automatic', 'Automatic', 'Automatic'] },
    { item: 'Assignments and due dates', cells: ['Automatic', 'Automatic', 'Mapped'] },
    { item: 'Question banks', cells: ['Automatic', 'Mapped', 'Mapped'] },
    { item: 'Historical grades', cells: ['Mapped', 'Mapped', 'Automatic'] },
    { item: 'Rubrics', cells: ['Mapped', 'Automatic', 'Rebuild'] },
    { item: 'Discussion history', cells: ['Mapped', 'Mapped', 'Rebuild'] },
    { item: 'Media and file storage', cells: ['Automatic', 'Automatic', 'Rebuild'] },
    { item: 'Proprietary page-builder content', cells: ['Rebuild', 'Rebuild', 'Rebuild'] },
    { item: 'Third-party tool links', cells: ['Automatic', 'Automatic', 'Mapped'] },
  ],
  legend:
    '"Automatic" means the importer handles it with no human decision. "Mapped" means we translate it and someone signs off the result. "Rebuild" means we will help, but it is new work — plan the hours.',
  stages: [
    {
      stage: 'Stage 1',
      duration: '1 week',
      title: 'Sample import',
      blurb:
        'You send three real courses — a simple one, an awkward one, and the one everybody complains about. We import them and show you exactly what broke.',
      owner: 'Us, with one of your instructors',
    },
    {
      stage: 'Stage 2',
      duration: '2–3 weeks',
      title: 'Roster and sign-on',
      blurb:
        'Identity provider, student-system sync and role mapping, run in parallel with your existing platform so nothing depends on it yet.',
      owner: 'Your IT team, our engineer on call',
    },
    {
      stage: 'Stage 3',
      duration: '2–4 weeks',
      title: 'Bulk import and sign-off',
      blurb:
        'Everything moves. Each programme lead reviews their own courses against a checklist and signs, or tells us what is wrong.',
      owner: 'Your programme leads',
    },
    {
      stage: 'Stage 4',
      duration: '1 weekend',
      title: 'Cutover',
      blurb:
        'Read-only freeze on the old system, final delta import, DNS change. The old system stays readable for a full academic year.',
      owner: 'Us, on a call with your team',
    },
  ],
  footnote:
    'Median time from first sample import to cutover across the last twenty migrations was eleven weeks. The longest was nine months, and it was a merger, not a migration.',
} as const

export type Plan = {
  name: string
  blurb: string
  price: string
  unit: string
  note: string
  features: ReadonlyArray<{ label: string; included: boolean }>
  cta: string
  featured: boolean
}

export const plans: ReadonlyArray<Plan> = [
  {
    name: 'Self-hosted',
    blurb: 'Run it yourself. Same code, same features, no licence key.',
    price: 'Free',
    unit: 'forever',
    note: 'AGPL-3.0. No licence key, no feature flags, no call to us required.',
    features: [
      { label: 'Every feature, no feature flags', included: true },
      { label: 'Community forum and public issue tracker', included: true },
      { label: 'Docs, reference deployment and Helm chart', included: true },
      { label: 'Security advisories on the public list', included: true },
      { label: 'Named support contact', included: false },
      { label: 'Migration service', included: false },
    ],
    cta: 'Read the install guide',
    featured: false,
  },
  {
    name: 'Operated',
    blurb: 'We run it in your region, you keep the exit door open.',
    price: '€3.40',
    unit: 'per learner / year',
    note: 'Billed annually on distinct learners who logged in at least once. Falls if your numbers fall.',
    features: [
      { label: 'Everything in Self-hosted', included: true },
      { label: 'EU, UK or Canadian hosting region', included: true },
      { label: '99.9% uptime commitment, credited', included: true },
      { label: 'Named support contact, 4-hour response', included: true },
      { label: 'Quarterly upgrade, scheduled with you', included: true },
      { label: 'Full data extract on request, any time', included: true },
    ],
    cta: 'Book a walkthrough',
    featured: true,
  },
  {
    name: 'Consortium',
    blurb: 'For groups buying together, and for anyone over 20,000 learners.',
    price: 'Talk to us',
    unit: 'annual agreement',
    note: 'A fixed annual fee, agreed once and held for the term of the agreement.',
    features: [
      { label: 'Everything in Operated', included: true },
      { label: 'Shared identity across member institutions', included: true },
      { label: 'Migration service included', included: true },
      { label: 'Two named engineers, one-hour response', included: true },
      { label: 'A seat on the roadmap council', included: true },
      { label: 'Annual on-site review', included: true },
    ],
    cta: 'Talk to us',
    featured: false,
  },
]

export const faqs = [
  {
    question: 'What actually happens if we leave?',
    answer:
      'You run one command and get a tarball — courses, submissions, grades, discussion history, files and the audit log, in documented open formats. Operated customers can trigger it themselves from the admin console at any time, without asking us and without a notice period. We do not consider your data to be leverage.',
  },
  {
    question: 'Is this really the same code as the paid version?',
    answer:
      'Yes, and you can check. There is no enterprise fork, no feature flags gated on a licence key, and no "open core" module we hold back. What you pay for on the Operated plan is that we run it, patch it and answer the phone — not access to features.',
  },
  {
    question: 'How does per-learner pricing count someone who drops out in week three?',
    answer:
      'We count distinct learners with at least one login in the billing year, measured at year end. A learner who registers and never logs in is not counted. A learner enrolled on four courses is counted once. If your number falls, so does the invoice.',
  },
  {
    question: 'Can we run a pilot alongside our current platform?',
    answer:
      'That is the normal way to start, and LTI 1.3 makes it work properly — Chalkline can sit inside your existing platform as a tool, or host tools from it, so a single department can pilot without the registry noticing anything changed.',
  },
  {
    question: 'Who is behind this, and what happens if you are acquired?',
    answer:
      'Chalkline is built by a 34-person cooperative with no outside investors. The code is AGPL-3.0 and the trademark is held by a foundation with institutional trustees, so an acquisition could not close the source or relicense it. That is the point of the structure.',
  },
  {
    question: 'What is the worst thing about Chalkline?',
    answer:
      'The authoring tools. If your instructors are used to a drag-and-drop page builder they will find ours plain, and we have deliberately not built a proprietary one because it is the single hardest thing to migrate away from. Most institutions author in something standards-based and import it. Some find that a fair trade and some do not.',
  },
] as const

export const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Roles and permissions', href: '#roles' },
      { label: 'Gradebook', href: '#gradebook' },
      { label: 'Standards', href: '#standards' },
      { label: 'Migration', href: '#migration' },
    ],
  },
  {
    title: 'Cooperative',
    links: [
      { label: 'About', href: '#faq' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Release notes', href: '#newsletter' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Questions', href: '#faq' },
      { label: 'Accessibility statement', href: '#standards' },
      { label: 'Privacy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
    ],
  },
] as const

export const legalLinks = [
  { label: 'Privacy Policy', href: '#contact' },
  { label: 'Terms of Service', href: '#contact' },
  { label: 'Style Guide', href: '#roles' },
] as const
