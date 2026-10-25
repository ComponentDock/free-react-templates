/** Every string and number the page renders, kept out of the components so the
 *  markup stays about layout and the tests can assert on one source. */

export const NAV_LINKS = [
  { label: 'About', target: '#members', spy: 'members' },
  { label: 'Channels', target: '#channels', spy: 'channels' },
  { label: 'Discussions', target: '#discussions', spy: 'discussions' },
  { label: 'Events', target: '#events', spy: 'events' },
  { label: 'Members', target: '#members', spy: 'members' },
  { label: 'Membership', target: '#pricing', spy: null },
  { label: 'Guidelines', target: '#faq', spy: null },
  { label: 'Blog', target: '#discussions', spy: null },
  { label: 'Contact', target: '#contact', spy: null },
] as const

export const HERO_STATS = [
  { value: '14.2k', label: 'Members' },
  { value: '38', label: 'Channels' },
  { value: '1.4k', label: 'Posts a week' },
  { value: '92%', label: 'Questions answered' },
] as const

/** `final` is the literal the reference lands on; `number` is what animates. */
export const COUNTERS = [
  { final: '14,200', number: 14200, prefix: '', suffix: '', label: 'Active members' },
  { final: '92%', number: 92, prefix: '', suffix: '%', label: 'Questions answered' },
  { final: '< 3h', number: 3, prefix: '< ', suffix: 'h', label: 'Median first reply' },
  { final: '240', number: 240, prefix: '', suffix: '', label: 'Events last year' },
] as const

export type Tone = 'primary' | 'accent' | 'neutral'

export const TONE_TILE: Record<Tone, string> = {
  primary: 'bg-primary-100 text-primary-700',
  accent: 'bg-accent-100 text-accent-700',
  neutral: 'bg-gray-100 text-gray-700',
}

export interface Channel {
  name: string
  glyph: string
  tone: Tone
  blurb: string
  members: string
  posts: string
}

export const CHANNELS: Channel[] = [
  {
    name: 'Design Critique',
    glyph: '◇',
    tone: 'primary',
    blurb: 'Post work in progress, get structured feedback within a day. No drive-by opinions.',
    members: '4,120',
    posts: '180',
  },
  {
    name: 'Show & Tell',
    glyph: '◈',
    tone: 'accent',
    blurb: 'Ship something, say what it cost you, and let the room ask the questions you avoided.',
    members: '3,860',
    posts: '210',
  },
  {
    name: 'Ask the Room',
    glyph: '?',
    tone: 'primary',
    blurb: 'The awkward question channel. Nobody here has ever been told to just google it.',
    members: '5,240',
    posts: '340',
  },
  {
    name: 'Hiring & Gigs',
    glyph: '◆',
    tone: 'neutral',
    blurb: 'Contract work, retainers and the occasional full-time role, posted by members first.',
    members: '1,980',
    posts: '95',
  },
  {
    name: 'Reading Group',
    glyph: '❋',
    tone: 'accent',
    blurb: 'One book a month, six chapters a week, and a live session with whoever wrote it.',
    members: '2,410',
    posts: '60',
  },
  {
    name: 'Off Topic',
    glyph: '◉',
    tone: 'neutral',
    blurb: 'Desks, cats, standing desks, cats on desks. The channel that keeps the rest civil.',
    members: '6,320',
    posts: '420',
  },
]

export interface Discussion {
  votes: string
  channel: string
  answered: boolean
  title: string
  initials: string
  author: string
  replies: string
  when: string
}

export const DISCUSSIONS: Discussion[] = [
  {
    votes: '128',
    channel: 'Ask the Room',
    answered: true,
    title: 'How do you price a redesign when the client has no brief?',
    initials: 'NF',
    author: 'Nadia Ferreira',
    replies: '34 replies',
    when: '2 hours ago',
  },
  {
    votes: '214',
    channel: 'Show & Tell',
    answered: false,
    title: 'Six months of building in public — what actually moved the needle',
    initials: 'TL',
    author: 'Tomas Lindqvist',
    replies: '61 replies',
    when: '5 hours ago',
  },
  {
    votes: '76',
    channel: 'Design Critique',
    answered: true,
    title: 'Critique wanted: onboarding flow for a two-sided marketplace',
    initials: 'PR',
    author: 'Priya Raman',
    replies: '18 replies',
    when: 'Yesterday',
  },
  {
    votes: '143',
    channel: 'Off Topic',
    answered: false,
    title: 'Is anyone else finding async standups worse than the meeting?',
    initials: 'DW',
    author: 'Dan Whitfield',
    replies: '92 replies',
    when: 'Yesterday',
  },
  {
    votes: '88',
    channel: 'Hiring & Gigs',
    answered: true,
    title: 'Contract template for a three-month retainer — what am I missing?',
    initials: 'AO',
    author: 'Amara Osei',
    replies: '27 replies',
    when: '2 days ago',
  },
]

export interface Member {
  name: string
  role: string
  initials: string
  quote: string
  answers: string
  badge: string
}

export const MEMBERS: Member[] = [
  {
    name: 'Priya Raman',
    role: 'Product designer, Bangalore',
    initials: 'PR',
    quote:
      'I came for the critique threads and stayed because the moderators answer first. Nine dollars a month to be taken seriously by people who do the same work is the cheapest subscription I have.',
    answers: '312',
    badge: 'Top contributor',
  },
  {
    name: 'Tomas Lindqvist',
    role: 'Indie founder, Malmö',
    initials: 'TL',
    quote:
      'Every other group I pay for is a firehose. This one is small enough that I recognise the names in a thread, so I read the whole thing instead of skimming the first comment.',
    answers: '198',
    badge: 'Channel moderator',
  },
  {
    name: 'Amara Osei',
    role: 'Freelance developer, Accra',
    initials: 'AO',
    quote:
      'The pricing threads alone paid for the membership twice over. Someone had already made every mistake I was about to make, and told me exactly what it cost.',
    answers: '147',
    badge: '',
  },
]

export interface Event {
  day: string
  month: string
  type: string
  title: string
  meta: string
  seats: string
}

export const EVENTS: Event[] = [
  {
    day: '12',
    month: 'Mar',
    type: 'Critique session',
    title: 'Portfolio teardown, live and unedited',
    meta: '18:00 GMT · 90 min · hosted by Design Critique moderators',
    seats: '12 of 40 seats left',
  },
  {
    day: '19',
    month: 'Mar',
    type: 'Member talk',
    title: 'How we priced ourselves out of a bad market',
    meta: '16:00 GMT · 45 min · hosted by Tomas Lindqvist',
    seats: 'Open to all members',
  },
  {
    day: '26',
    month: 'Mar',
    type: 'Reading group',
    title: 'Reading group — Working in Public, chapters 4–6',
    meta: '19:00 GMT · 60 min · hosted by Reading Group channel',
    seats: '8 of 25 seats left',
  },
  {
    day: '02',
    month: 'Apr',
    type: 'Open session',
    title: 'Office hours with the moderator team',
    meta: '15:00 GMT · 60 min · hosted by the moderator team',
    seats: 'Drop in any time',
  },
]

export interface TierFeature {
  label: string
  included: boolean
}

export interface Tier {
  name: string
  blurb: string
  monthly: number
  yearly: number
  cta: string
  ctaClass: string
  ground: string
  features: TierFeature[]
  popular: boolean
}

export const TIERS: Tier[] = [
  {
    name: 'Reader',
    blurb: 'Read the whole room. No card, no trial clock.',
    monthly: 0,
    yearly: 0,
    cta: 'Start reading',
    ctaClass: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ground: 'bg-gray-50 border border-gray-200',
    popular: false,
    features: [
      { label: 'Read every channel and thread', included: true },
      { label: 'Search the full archive', included: true },
      { label: 'The weekly digest email', included: true },
      { label: 'Post and reply in channels', included: false },
      { label: 'Member directory', included: false },
    ],
  },
  {
    name: 'Member',
    blurb: 'Post, reply, vote and join every live session.',
    monthly: 9,
    yearly: 90,
    cta: 'Join the Community',
    ctaClass: 'bg-primary-600 text-white hover:bg-primary-700',
    ground: 'bg-white ring-2 ring-primary-600',
    popular: true,
    features: [
      { label: 'Everything in Reader', included: true },
      { label: 'Post, reply and vote in every channel', included: true },
      { label: 'Join live sessions and office hours', included: true },
      { label: 'Member directory and direct messages', included: true },
      { label: 'Ask for a critique any weekday', included: true },
    ],
  },
  {
    name: 'Patron',
    blurb: 'Fund the moderators and keep the room free to read.',
    monthly: 29,
    yearly: 290,
    cta: 'Become a patron',
    ctaClass: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    ground: 'bg-primary-50 border border-primary-100',
    popular: false,
    features: [
      { label: 'Everything in Member', included: true },
      { label: 'Fund the moderators directly', included: true },
      { label: 'Early access to every recording', included: true },
      { label: 'A patron badge beside your name', included: true },
      { label: 'The quarterly patron call', included: true },
    ],
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I stopped asking questions in public because the answers were either a link or a shrug. Here the first reply is usually from someone who has shipped the thing I am stuck on.',
    name: 'Dan Whitfield',
    role: 'Engineering lead, Northgate',
    initials: 'DW',
  },
  {
    quote:
      'The membership is the only place I can say out loud that a project failed and get six replies about what to try next instead of silence.',
    name: 'Nadia Ferreira',
    role: 'Independent consultant',
    initials: 'NF',
  },
  {
    quote:
      'We hired two people out of the gigs channel. Both of them had been answering questions for a year before we ever spoke.',
    name: 'Marcus Hale',
    role: 'Founder, Hale & Co',
    initials: 'MH',
  },
]

export const FAQS = [
  {
    question: 'Is the community public or private?',
    answer:
      'Every thread is public to read, including the ones you write. Posting, replying and joining live sessions need a membership, and that is the whole business model — membership pays the moderators, not ads.',
  },
  {
    question: 'How is this different from a Slack or Discord group?',
    answer:
      'Six channels instead of sixty, a thread list you can actually finish, and moderators whose job is to answer rather than to police. Nothing rolls away at the end of the day, so a good answer stays findable.',
  },
  {
    question: 'What does moderation actually look like?',
    answer:
      'Two part-time moderators read every new thread. They answer what they can, pull in someone who knows the rest, and close anything that turns into a pile-on. Their names and hours are on the about page.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      'Yes, from the billing page, in one click. Your membership runs to the end of the period you paid for and your threads stay readable afterwards, because reading is free.',
  },
  {
    question: 'Do you sell ads or member data?',
    answer:
      'No. There are no ads, no sponsor slots and no data brokers. The only money that comes in is membership, which is why the pricing page states exactly what it pays for.',
  },
] as const

export const FOOTER_CHANNELS = [
  { label: 'Design Critique', target: '#channels' },
  { label: 'Show & Tell', target: '#channels' },
  { label: 'Ask the Room', target: '#channels' },
  { label: 'Off Topic', target: '#channels' },
] as const

export const FOOTER_COMPANY = [
  { label: 'About', target: '#members' },
  { label: 'Blog', target: '#discussions' },
] as const

export const FOOTER_SUPPORT = [
  { label: 'Contact', target: '#contact' },
  { label: 'Terms', target: '#faq' },
] as const

export const FOOTER_LEGAL = [
  { label: 'Privacy Policy', target: '#faq' },
  { label: 'Terms of Service', target: '#faq' },
  { label: 'Style Guide', target: '#channels' },
] as const

export const CONTACT = {
  address: '210 Union Street, Portland, OR 97204',
  phoneLabel: '(555) 214-0980',
  phoneHref: 'tel:5552140980',
  email: 'hello@veranda.example',
} as const
