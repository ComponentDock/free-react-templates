/**
 * Every piece of copy on the page, in the reference's DOM order. Prose is the
 * reference's own product copy; identity strings (wordmark, city, phone,
 * mailbox, social handles) are Closeknit's.
 */

export const NAV_LINKS = [
  { label: 'Feed', href: '#feed', id: 'feed' },
  { label: 'Circles', href: '#circles', id: 'circles' },
  { label: 'People', href: '#people', id: 'people' },
  { label: 'Privacy', href: '#privacy', id: 'privacy' },
  { label: 'About', href: '#testimonials', id: 'testimonials' },
  { label: 'Plans', href: '#pricing', id: 'pricing' },
  { label: 'Blog', href: '#faq', id: 'faq' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const

/** The four bands the scroll spy watches (the plan/blog links are labels). */
export const SPY_IDS = [
  'feed',
  'circles',
  'people',
  'privacy',
  'pricing',
  'faq',
  'contact',
] as const

export const HERO = {
  badge: 'No public feed. No follower count. No algorithm.',
  title: 'Share with the people',
  phrases: ['you actually meant', 'who were there', 'who will care'] as const,
  lede: 'Closeknit is a social network made of small groups. Every post goes to one circle, chosen by you, and stays there. Nothing is recommended to strangers and nothing is ranked.',
  primary: 'Create your circle',
  secondary: 'See how it works',
  watch: 'Watch Demo',
  figure: {
    src: 'https://picsum.photos/seed/closeknit-hero/1600/900',
    alt: 'Friends sharing a moment together outdoors',
  },
  stats: [
    { value: '9 avg', label: 'People per circle' },
    { value: '0', label: 'Ads served' },
    { value: '100%', label: 'Chronological' },
    { value: '2.8k', label: 'Circles created' },
  ],
} as const

export const COUNTERS = [
  { value: 9, suffix: 'avg', label: 'Average circle size' },
  { value: 100, suffix: '%', label: 'Chronological feed' },
  { value: 0, suffix: '', label: 'Ads, ever' },
  { value: 31, suffix: 'sec', label: 'Median export time' },
] as const

export type Post = {
  initials: string
  author: string
  circle: string
  time: string
  badge?: 'Photo' | 'Poll'
  body: string
  image?: string
  hearts: number
  comments: number
}

export const POSTS: Post[] = [
  {
    initials: 'LM',
    author: 'Léa Moreau',
    circle: 'Sunday Climbers',
    time: '2h',
    badge: 'Photo',
    body: 'Finally sent the overhang route after six weeks of failing on the same move. Turns out the trick was a completely different foot placement that Sam spotted from the ground.',
    image: 'https://picsum.photos/seed/closeknit-post-1/800/600',
    hearts: 24,
    comments: 7,
  },
  {
    initials: 'IB',
    author: 'Idris Bello',
    circle: 'Flat 3B',
    time: '5h',
    body: 'Boiler engineer is coming Thursday between 08:00 and 12:00. I can be here until 10 — can someone cover the rest of the window?',
    hearts: 5,
    comments: 11,
  },
  {
    initials: 'HP',
    author: 'Hana Petrova',
    circle: 'Book Club',
    time: 'Yesterday',
    badge: 'Poll',
    body: 'Next month — the long Russian one everybody keeps recommending, or the short essay collection? I am genuinely happy either way but we should decide before the 20th.',
    hearts: 18,
    comments: 22,
  },
  {
    initials: 'MR',
    author: 'Marcus Reid',
    circle: 'Sunday Climbers',
    time: 'Yesterday',
    body: 'Reminder that the gym closes early on Sunday for a competition. Moving our session to Saturday morning unless anyone objects in the next day or so.',
    hearts: 12,
    comments: 4,
  },
  {
    initials: 'NH',
    author: 'Nour Haddad',
    circle: 'Extended Family',
    time: '2d',
    badge: 'Photo',
    body: "Grandma's ninetieth. She made everyone dance, including the people who claimed they do not dance. Full album in the circle.",
    image: 'https://picsum.photos/seed/closeknit-post-5/800/600',
    hearts: 63,
    comments: 29,
  },
]

export type Circle = {
  name: string
  blurb: string
  access: 'Private' | 'Invite only'
  members: number
  activity: 'Active today' | 'Active this week' | 'Active this month'
  image: string
}

export const CIRCLES: Circle[] = [
  {
    name: 'Sunday Climbers',
    blurb: 'Six of us, one gym, a shared spreadsheet of routes nobody else would find interesting.',
    access: 'Private',
    members: 6,
    activity: 'Active today',
    image: 'https://picsum.photos/seed/closeknit-circle-1/640/320',
  },
  {
    name: 'Flat 3B',
    blurb: 'Bills, boiler, bins and the ongoing negotiation about the thermostat.',
    access: 'Private',
    members: 4,
    activity: 'Active today',
    image: 'https://picsum.photos/seed/closeknit-circle-2/640/320',
  },
  {
    name: 'Book Club',
    blurb:
      'Twelve people, one book a month, and a strict rule against finishing early and spoiling it.',
    access: 'Invite only',
    members: 12,
    activity: 'Active this week',
    image: 'https://picsum.photos/seed/closeknit-circle-3/640/320',
  },
  {
    name: 'Extended Family',
    blurb: 'Four generations, three countries, and a lot of photographs of small children.',
    access: 'Private',
    members: 31,
    activity: 'Active today',
    image: 'https://picsum.photos/seed/closeknit-circle-4/640/320',
  },
  {
    name: 'Allotment Plot 14',
    blurb: 'Seed swaps, slug warfare and a running total of what the tomatoes actually cost us.',
    access: 'Invite only',
    members: 8,
    activity: 'Active this week',
    image: 'https://picsum.photos/seed/closeknit-circle-5/640/320',
  },
  {
    name: 'Old Course Mates',
    blurb: 'Fifteen years on, still the same arguments about the same lecturer.',
    access: 'Private',
    members: 17,
    activity: 'Active this month',
    image: 'https://picsum.photos/seed/closeknit-circle-6/640/320',
  },
]

export type Person = {
  initials: string
  name: string
  handle: string
  blurb: string
  circles: string[]
}

export const PEOPLE: Person[] = [
  {
    initials: 'LM',
    name: 'Léa Moreau',
    handle: '@lea',
    blurb: 'Climbs badly, photographs it well. Shares route beta and very little else.',
    circles: ['Sunday Climbers', 'Book Club'],
  },
  {
    initials: 'IB',
    name: 'Idris Bello',
    handle: '@idris',
    blurb: 'Keeper of the flat spreadsheet and the only person who reads the meter.',
    circles: ['Flat 3B'],
  },
  {
    initials: 'HP',
    name: 'Hana Petrova',
    handle: '@hana',
    blurb: 'Reads faster than the club can keep up with and never spoils anything.',
    circles: ['Book Club', 'Allotment Plot 14'],
  },
  {
    initials: 'NH',
    name: 'Nour Haddad',
    handle: '@nour',
    blurb: 'Family archivist. Three decades of photographs, slowly being scanned.',
    circles: ['Extended Family'],
  },
]

export type PrivacyDefault = {
  title: string
  body: string
  status: 'On by default' | 'Permanently off' | 'Off by default' | 'Always available'
  on: boolean
}

export const PRIVACY: PrivacyDefault[] = [
  {
    title: 'Posts default to one circle',
    body: 'Choosing a circle is a required step, not a dropdown you can leave on public. There is no public option at all.',
    status: 'On by default',
    on: true,
  },
  {
    title: 'No cross-circle visibility',
    body: 'Someone in your Book Club cannot see that your Flat 3B circle exists, or who is in it.',
    status: 'On by default',
    on: true,
  },
  {
    title: 'Screenshots are not blocked, they are logged',
    body: 'Blocking is theatre. Instead, the circle sees when a post was screenshotted, which is a social fix for a social problem.',
    status: 'On by default',
    on: true,
  },
  {
    title: 'Search engine indexing',
    body: 'Nothing on Closeknit is crawlable. There is no public page to index in the first place.',
    status: 'Permanently off',
    on: false,
  },
  {
    title: 'Read receipts',
    body: 'Off unless a circle turns them on together. One person cannot enable them for everybody.',
    status: 'Off by default',
    on: false,
  },
  {
    title: 'Export everything, any time',
    body: 'One click produces a zip of every post, photo and comment you have made. Median export completes in 31 seconds.',
    status: 'Always available',
    on: true,
  },
]

export const PRIVACY_CALLOUT =
  'We cannot show you targeted advertising because we do not collect what would be needed to target it. There is no advertising business here to protect, which is why these defaults can stay where they are.'

export type Tier = {
  name: string
  blurb: string
  monthly: number
  yearly: number
  features: { text: string; included: boolean }[]
  cta: string
  featured?: boolean
  ctaTone: 'secondary' | 'primary'
}

export const TIERS: Tier[] = [
  {
    name: 'Free',
    blurb: 'Up to three circles, everything else included.',
    monthly: 0,
    yearly: 0,
    features: [
      { text: 'Up to 3 circles', included: true },
      { text: 'Unlimited posts and photos', included: true },
      { text: 'Full privacy controls', included: true },
      { text: 'Unlimited circles', included: false },
      { text: 'Original-quality photo storage', included: false },
    ],
    cta: 'Start free',
    ctaTone: 'secondary',
  },
  {
    name: 'Member',
    blurb: 'Unlimited circles and full-resolution photo storage.',
    monthly: 5,
    yearly: 50,
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'Unlimited circles', included: true },
      { text: 'Original-quality photo storage', included: true },
      { text: 'Shared circle albums', included: true },
      { text: 'Priority export', included: true },
    ],
    cta: 'Become a member',
    featured: true,
    ctaTone: 'primary',
  },
  {
    name: 'Family',
    blurb: 'One subscription covering up to six people.',
    monthly: 12,
    yearly: 120,
    features: [
      { text: 'Everything in Member, for 6 people', included: true },
      { text: 'Shared family archive', included: true },
      { text: 'Legacy contact settings', included: true },
      { text: 'Guided setup for older relatives', included: true },
      { text: 'One combined invoice', included: true },
    ],
    cta: 'Set up a family plan',
    ctaTone: 'primary',
  },
]

export type Testimonial = { quote: string; initial: string; name: string; role: string }

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I post photographs of my children again. Not to an audience of four hundred, to the eleven people who are actually related to them.',
    initial: 'N',
    name: 'Nour Haddad',
    role: 'Family archivist',
  },
  {
    quote:
      'The feed ends. It genuinely ends, and then it says so. I had forgotten that was possible.',
    initial: 'M',
    name: 'Marcus Reid',
    role: 'Member since 2030',
  },
  {
    quote:
      "Our flat's boiler saga lives in a circle of four rather than in a group chat that also contains my mother.",
    initial: 'I',
    name: 'Idris Bello',
    role: 'Member since 2031',
  },
]

export type Faq = { question: string; answer: string }

export const FAQS: Faq[] = [
  {
    question: 'Can I make a post public?',
    answer:
      'No. There is no public surface anywhere on Closeknit, which is why nothing here is indexable and why we can promise that a post reaches exactly the people you chose.',
  },
  {
    question: 'How do you make money without advertising?',
    answer:
      'Subscriptions, and nothing else. Free accounts are capped at three circles, which is enough for most people and is subsidised by members who need more.',
  },
  {
    question: 'What happens to my photographs if I stop paying?',
    answer:
      'They stay, at the resolution they were uploaded. Dropping to Free limits you to three circles but never deletes anything, and export remains available.',
  },
  {
    question: 'Is there an algorithm at all?',
    answer:
      'Only chronological ordering. There is no ranking model, no recommendation system and no way for a post to reach someone who is not in the circle it was posted to.',
  },
  {
    question: 'Can I move my data somewhere else?',
    answer:
      'Yes, in one click, at any time, on every plan including Free. The export is a documented format rather than a dump nobody can read.',
  },
]

export const FOOTER = {
  blurb:
    'A social network built on small circles instead of one public feed — you choose who sees what, every time you post.',
  address: '12 Alder Lane, Portland, OR 97209',
  phone: '(503) 555-0142',
  phoneHref: 'tel:5035550142',
  email: 'hello@closeknit.app',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Feed', href: '#feed' },
        { label: 'Circles', href: '#circles' },
        { label: 'People', href: '#people' },
        { label: 'Privacy', href: '#privacy' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#testimonials' },
        { label: 'Blog', href: '#faq' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'Questions', href: '#faq' },
      ],
    },
  ],
  newsletter: {
    title: 'Stay Updated',
    blurb: 'A weekly note: new circles worth joining, and what changed in your privacy controls.',
    placeholder: 'you@example.com',
    action: 'Subscribe',
    success: 'Thanks — check your inbox for the first note.',
    invalid: 'Enter a valid email address.',
  },
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#contact' },
    { label: 'Style Guide', href: '#feed' },
  ],
  copyright: '© 2026 Closeknit. All rights reserved.',
  componentDock: { label: 'Component Dock', href: 'https://www.componentdock.com/' },
}

export const MOBILE_CTA = {
  call: 'Call Now',
  phoneHref: 'tel:5035550142',
  tour: 'Book a Tour',
  tourHref: '#contact',
}

export const COOKIE = {
  text: 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
  decline: 'Decline',
  accept: 'Accept All',
}
