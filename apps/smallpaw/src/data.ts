/** Every string the page shows, in the order the page shows it. */

export const BRAND = 'Smallpaw'

export const CONTACT = {
  phoneLabel: '01743 660 214',
  /** The reference's footer link carries spaces; the href never does. */
  phoneHref: 'tel:01743660214',
  address: '8 Willow Row, Shrewsbury, SY3 8QP',
  email: 'reception@smallpaw.example',
  town: 'Shrewsbury',
} as const

export interface NavLink {
  label: string
  /** The band the label resolves to, or `null` when the reference's route has no band. */
  target: string | null
  /** The band id the scroll-spy watches, or `null` for the route-shaped labels. */
  spy: string | null
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Out of hours', target: '#out-of-hours', spy: 'out-of-hours' },
  { label: 'Animals we see', target: '#species', spy: 'species' },
  { label: 'Health plans', target: '#health-plans', spy: 'health-plans' },
  { label: 'Fees', target: '#fees', spy: 'fees' },
  { label: 'About', target: null, spy: null },
  { label: 'Fee guide', target: '#fees', spy: null },
  { label: 'Blog', target: null, spy: null },
  { label: 'Contact', target: '#contact', spy: null },
]

export const HERO_PHRASES = ['what it will cost', 'before you say yes', 'without you asking']

/** Static — only the stats strip's four numbers animate. */
export const HERO_FACTS = [
  { value: '£46', label: 'Consultation' },
  { value: '24/7', label: 'Cover arranged' },
  { value: '4,100', label: 'Registered pets' },
  { value: '16', label: 'Years independent' },
]

export const HERO_IMAGE = {
  src: 'https://picsum.photos/seed/smallpaw-1/1200/600',
  alt: 'A cat being examined on a consulting table, with the vet listening through a stethoscope',
}

export const OUT_OF_HOURS = {
  eyebrow: 'Out of hours',
  title: 'Who sees your animal at three in the morning',
  lede: 'We do not staff our own overnight service, and we would rather say so plainly than let you find out in an emergency.',
  provider: 'Severnside Emergency Veterinary Service',
  providerAddress: 'Units 3–4, Lancaster Road, Shrewsbury SY1 3NG',
  distance: '2.4 miles from our practice',
  schedule: [
    { hours: 'Mon – Fri, 08:30 – 18:30', cover: 'Our own vets, here' },
    { hours: 'Sat, 09:00 – 13:00', cover: 'Our own vets, here' },
    { hours: 'All other hours', cover: 'Severnside, 2.4 miles away' },
  ],
  footnote:
    'Calling our normal number at any hour gives you a recorded message with the out-of-hours number and address. Out-of-hours consultations are charged by the provider, not by us, and are considerably more expensive than a daytime appointment — typically £180 to £250 before any treatment. This is normal across the profession and worth knowing before you need it.',
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export const STATS: Stat[] = [
  { value: 4100, suffix: '', label: 'Registered pets' },
  { value: 16, suffix: '', label: 'Years independently owned' },
  { value: 5, suffix: '', label: 'RCVS-registered vets' },
  { value: 100, suffix: '%', label: 'Fees published before treatment' },
]

export interface SpeciesCard {
  emoji: string
  name: string
  body: string
  care: string
  /** Referred species are visibly different: dashed border, grey ground, a chip. */
  referred: boolean
}

export const SPECIES: SpeciesCard[] = [
  {
    emoji: '🐕',
    name: 'Dogs',
    body: 'Full consultation, surgical, dental and diagnostic services including in-house bloods and digital radiography.',
    care: 'Annual booster, 6-monthly check',
    referred: false,
  },
  {
    emoji: '🐈',
    name: 'Cats',
    body: 'Separate cat waiting area and cat-only consulting hours on Tuesday and Thursday mornings, which lowers stress considerably.',
    care: 'Annual booster, 6-monthly check',
    referred: false,
  },
  {
    emoji: '🐇',
    name: 'Rabbits',
    body: 'Vaccination, dental work and neutering. Rabbits are prey animals and deteriorate quietly, so we ask you to bring them in earlier than feels necessary.',
    care: 'Annual RVHD & myxomatosis',
    referred: false,
  },
  {
    emoji: '🐹',
    name: 'Small mammals',
    body: 'Guinea pigs, ferrets, rats and hamsters. Consultations and routine surgery; complex cases referred.',
    care: 'Health check, 6-monthly',
    referred: false,
  },
  {
    emoji: '🦜',
    name: 'Reptiles and birds',
    body: 'We do not have the husbandry expertise or housing to do this properly. Referred to Telford Exotics, who are genuinely good at it.',
    care: 'Referred at registration',
    referred: true,
  },
  {
    emoji: '🐴',
    name: 'Horses and livestock',
    body: 'An entirely different practice discipline requiring different equipment and out-of-hours cover. Referred to Baschurch Equine.',
    care: 'Referred at registration',
    referred: true,
  },
]

export const SPECIES_CALLOUT =
  'We are not an exotics or equine practice, and we will not attempt work we are not properly equipped for. For reptiles, birds and horses we refer to practices in Telford and Baschurch, and we will make the call for you rather than handing over a phone number.'

export interface Plan {
  name: string
  subtitle: string
  saving: string
  price: string
  inclusions: string[]
  cta: string
  featured: boolean
}

export const PLANS: Plan[] = [
  {
    name: 'Puppy & Kitten',
    subtitle: 'First year, dogs and cats',
    saving: 'Saves £64',
    price: '£17',
    inclusions: [
      'Full primary vaccination course',
      'Monthly parasite treatment, first year',
      'Microchipping',
      'Two health checks',
      '10% off neutering',
    ],
    cta: 'Join Puppy & Kitten',
    featured: false,
  },
  {
    name: 'Adult',
    subtitle: 'Dogs and cats, 1–8 years',
    saving: 'Saves £96',
    price: '£21',
    inclusions: [
      'Annual booster vaccination',
      'Year-round flea, tick and worm treatment',
      'Two health checks a year',
      'Annual nail clip and anal gland check',
      '10% off dental work and neutering',
    ],
    cta: 'Join Adult',
    featured: true,
  },
  {
    name: 'Senior',
    subtitle: 'Dogs and cats over 8',
    saving: 'Saves £140',
    price: '£29',
    inclusions: [
      'Everything in Adult',
      'Twice-yearly senior blood screen',
      'Blood pressure check',
      'Urine screen',
      'Arthritis assessment',
    ],
    cta: 'Join Senior',
    featured: false,
  },
]

export const PLANS_FOOTNOTE =
  'Plans cover preventive care only — vaccinations, parasite treatment and health checks. They are not insurance and they do not cover illness, injury or surgery.'

export interface FeeRow {
  item: string
  detail: string
  standard: string
  /** `Included`, a discounted figure, or an em dash for the one thing no plan covers. */
  plan: string
  /** The em dash is rendered differently from money and must not be a price. */
  dash: boolean
}

export const FEES: FeeRow[] = [
  {
    item: 'Consultation',
    detail: '15 minutes with a vet, including a full clinical exam',
    standard: '£46',
    plan: 'Included',
    dash: false,
  },
  {
    item: 'Annual booster, dog',
    detail: 'DHP and leptospirosis, with a health check',
    standard: '£62',
    plan: 'Included',
    dash: false,
  },
  {
    item: 'Annual booster, cat',
    detail: 'Flu, enteritis and leukaemia, with a health check',
    standard: '£58',
    plan: 'Included',
    dash: false,
  },
  {
    item: 'Cat neutering, female',
    detail: 'Day procedure, including pre-anaesthetic checks and pain relief',
    standard: '£145',
    plan: '£131',
    dash: false,
  },
  {
    item: 'Dog neutering, male',
    detail: 'Under 20 kg, day procedure with post-operative check',
    standard: '£265',
    plan: '£239',
    dash: false,
  },
  {
    item: 'Dental scale and polish',
    detail: 'Under anaesthetic, excluding extractions',
    standard: '£310',
    plan: '£279',
    dash: false,
  },
  {
    item: 'Microchipping',
    detail: 'Implant and lifetime registration',
    standard: '£22',
    plan: 'Included',
    dash: false,
  },
  {
    item: 'Euthanasia, in practice',
    detail: 'Including sedation and a private room with as much time as you need',
    standard: '£95',
    plan: '—',
    dash: true,
  },
]

export const FEES_CALLOUT =
  'These are the fees for straightforward cases. Anything complicated is quoted before we proceed, and we will always ring you with a revised estimate rather than carrying on and presenting a larger bill afterwards. If cost is a concern, say so — there is very often more than one reasonable option and we would rather discuss them.'

export interface Testimonial {
  quote: string
  name: string
  initials: string
  place: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'They rang me mid-procedure to say it was going to cost more than quoted and asked whether to continue. I have never had that call from a vet before.',
    name: 'Diane Mercer',
    initials: 'D',
    place: 'Bayston Hill',
  },
  {
    quote:
      'The cat-only mornings made a genuine difference. He stopped being a shaking wreck in the waiting room.',
    name: 'Owen Prydderch',
    initials: 'O',
    place: 'Shrewsbury',
  },
  {
    quote:
      'When our old dog reached the end they gave us a room and did not hurry us once. I will not forget how that was handled.',
    name: 'Marta Nowak',
    initials: 'M',
    place: 'Meole Brace',
  },
]

export interface Faq {
  question: string
  answer: string
}

export const FAQS: Faq[] = [
  {
    question: 'Do I need insurance if I am on a health plan?',
    answer:
      'Yes. A health plan covers routine preventive care — vaccinations, parasite treatment, health checks. It does not cover illness, injury or surgery. Insurance covers the unexpected and expensive. They do different jobs and most clients sensibly have both.',
  },
  {
    question: 'Why is out-of-hours so much more expensive?',
    answer:
      'Because a full clinical team is awake and on site overnight for whatever arrives, which is expensive to staff whether or not anyone comes in. Typical out-of-hours consultation fees are £180 to £250 before treatment. That is charged by Severnside rather than by us.',
  },
  {
    question: 'Can you give me a price before I bring my pet in?',
    answer:
      'For routine things, yes, and they are on this page. For an unwell animal we can rarely quote accurately without examining them, but we will give you an estimate before doing anything beyond the consultation, and we will ring you if the picture changes.',
  },
  {
    question: 'What happens at the end?',
    answer:
      'We give you a private room with a separate entrance and no time limit, and you can stay as long as you want afterwards. Home visits are possible and often kinder — please ring and ask. We will talk you through the options for afterwards without rushing.',
  },
  {
    question: 'Are you independent?',
    answer:
      'Yes. Smallpaw has been independently owned since 2009 and is not part of a corporate group. That is increasingly unusual and it is the main reason we can publish our own fees rather than following a national price list.',
  },
]

export interface FooterLinkItem {
  label: string
  target: string | null
}

export const FOOTER_PRACTICE: FooterLinkItem[] = [
  { label: 'Fee guide', target: '#fees' },
  { label: 'Animals we see', target: '#species' },
  { label: 'Out of hours', target: '#out-of-hours' },
  { label: 'Health plans', target: '#health-plans' },
]

export const FOOTER_COMPANY: FooterLinkItem[] = [
  { label: 'About', target: null },
  { label: 'Blog', target: null },
]

export const FOOTER_SUPPORT: FooterLinkItem[] = [
  { label: 'Contact', target: '#contact' },
  { label: 'Terms', target: null },
]

export interface SocialTile {
  label: string
  href: string
  /** Inline brand glyph — the icon library no longer ships brand marks. */
  path: string
}

export const SOCIAL: SocialTile[] = [
  {
    label: 'Smallpaw on X',
    href: 'https://x.com/componentdock',
    path: 'M4 4l16 16M20 4L4 20',
  },
  {
    label: 'Smallpaw on Instagram',
    href: 'https://www.instagram.com/',
    path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5h.01',
  },
  {
    label: 'Smallpaw on LinkedIn',
    href: 'https://www.linkedin.com/',
    path: 'M6 9v9M6 6h.01M11 18v-5a3 3 0 0 1 6 0v5',
  },
]
