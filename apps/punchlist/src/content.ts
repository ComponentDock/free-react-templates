/**
 * Every string on the page. Operational detail (the eight priced jobs, the
 * coverage areas, the four documents, the reviews and the answers) is verbatim
 * from the design being recreated; the brand, the phone number, the email
 * address, the yard address and the policy references are this build's own.
 */

export const BRAND = 'Punchlist'
export const PHONE_DISPLAY = '0113 496 0288'
export const PHONE_HREF = 'tel:+441134960288'
export const EMAIL = 'bookings@punchlist.repair'
export const ADDRESS = 'Unit 3, Hollin Works, Leeds, LS9 8AJ'
export const HOURS = [
  { days: 'Mon – Fri', hours: '07:30 – 17:30' },
  { days: 'Saturday', hours: '08:00 – 13:00' },
  { days: 'Sunday', hours: 'closed' },
] as const
export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'
export const CONTACT_LABEL = 'Get a fixed quote'

export interface NavLink {
  readonly label: string
  readonly href: string
}

/** Seven live targets: this build has no inner routes, so no label points at one. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Rates', href: '#rates' },
  { label: 'Recent work', href: '#work' },
  { label: 'Areas covered', href: '#areas' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Questions', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const CHROME = {
  skip: 'Skip to content',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  darkToggle: 'Toggle dark mode',
  cookie:
    'We use cookies to keep the site working and to see which pages people actually read. Nothing is sold on.',
  decline: 'Decline',
  accept: 'Accept All',
  call: 'Call now',
  mobileCta: 'Send the list',
} as const

export const HERO = {
  pill: 'Fixed call-out fee. No charge for the quote.',
  heading: 'The odd jobs you keep',
  phrases: ['meaning to sort', 'putting off', 'writing on a list'] as readonly string[],
  lede: 'Shelves that need putting up properly, a door that has not closed since spring, the flat-pack still in its box. Two qualified tradespeople, published rates, and a written quote before any work starts.',
  primaryCta: 'Get a fixed quote',
  secondaryCta: 'See our rates',
  photo: 'https://picsum.photos/seed/punchlist-1/1200/600',
  photoAlt: 'A Punchlist tradesperson fitting a kitchen shelf',
} as const

export interface Figure {
  readonly value: string
  readonly label: string
}

/** The hero's four figures sit on a hairline above the photo. */
export const HERO_STATS: readonly Figure[] = [
  { value: '£45', label: 'Call-out, fixed' },
  { value: '2,400+', label: 'Jobs completed' },
  { value: '4.9', label: 'Average rating' },
  { value: '12 yrs', label: 'On the tools' },
]

/** Four counters that count up on intersect; the figures ship correct in the DOM. */
export const COUNTERS: readonly Figure[] = [
  { value: '2,400', label: 'Jobs completed' },
  { value: '4.9', label: 'Average rating across 380 reviews' },
  { value: '96%', label: 'Finished on the first visit' },
  { value: '12', label: 'Years on the tools' },
]

export const COUNTERS_NOTE = 'Sample figures for a demonstration site.'

export interface Rate {
  readonly job: string
  readonly covers: string
  readonly from: string
  readonly typical: string
  readonly popular?: boolean
}

export const RATES_COPY = {
  pill: 'Published rates',
  heading: 'What things actually cost',
  lede: 'These are the real numbers we quote from. No estimate over the phone that doubles when we arrive.',
  columns: { job: 'Job', covers: 'What that covers', from: 'From', typical: 'Typical' },
  popular: 'Most booked',
  footnote:
    'Every job starts with a £45 call-out that covers the first half hour, and it comes off the total if you go ahead. Materials are charged at what we pay for them, with the receipt attached to your invoice. Quotes are free and given in writing.',
} as const

/** Eight jobs, in the reference's order. Two carry the `Most booked` chip. */
export const RATES: readonly Rate[] = [
  {
    job: 'Flat-pack assembly',
    covers: 'Wardrobes, beds, desks — built, levelled and secured to the wall where needed',
    from: '£65',
    typical: '£65–140',
    popular: true,
  },
  {
    job: 'Shelving and wall fixings',
    covers: 'Includes finding the studs properly rather than hoping',
    from: '£55',
    typical: '£55–120',
  },
  {
    job: 'Door adjustment and hanging',
    covers: 'Sticking doors, dropped hinges, new internal doors hung and trimmed',
    from: '£70',
    typical: '£70–180',
  },
  {
    job: 'Small plumbing repairs',
    covers: 'Taps, traps, toilet fills and leaks that are not behind a wall',
    from: '£80',
    typical: '£80–200',
  },
  {
    job: 'Minor electrical',
    covers: 'Sockets, switches and light fittings — Part P certified work only',
    from: '£90',
    typical: '£90–240',
    popular: true,
  },
  {
    job: 'Painting and making good',
    covers: 'Filling, sanding and two coats, usually after another job has made a mess',
    from: '£120',
    typical: '£120–400',
  },
  {
    job: 'Garden and outdoor repairs',
    covers: 'Fence panels, gates, decking boards and outdoor taps',
    from: '£75',
    typical: '£75–320',
  },
  {
    job: 'Half-day rate',
    covers: 'For a list of small jobs — usually the best value if you have four or more',
    from: '£180',
    typical: '4 hours',
  },
]

export interface Job {
  readonly category: string
  readonly title: string
  readonly blurb: string
  readonly area: string
  readonly time: string
  readonly cost: string
  readonly photo: string
}

export const WORK_COPY = {
  pill: 'Recent work',
  heading: 'Jobs from the last month',
  lede: 'Real jobs with the time and the final cost, because that is what everyone actually wants to know.',
  labels: { area: 'Area', time: 'Time', cost: 'Cost' },
} as const

export const WORK: readonly Job[] = [
  {
    category: 'Carpentry',
    title: 'Kitchen shelving, three walls',
    blurb:
      'Solid oak shelves onto a plasterboard wall with no usable studs. Resolved with toggle fixings rated well above the load, and the client sent a photograph of it holding a cast-iron pan collection.',
    area: 'Headingley',
    time: '5 hrs',
    cost: '£240',
    photo: 'https://picsum.photos/seed/punchlist-2/600/450',
  },
  {
    category: 'Doors',
    title: 'Sticking front door, finally fixed',
    blurb:
      'Two previous visits by others had planed the door, which is the wrong fix. The frame had dropped. Reset the hinges, packed the top hinge and it has closed properly since.',
    area: 'Chapel Allerton',
    time: '2 hrs',
    cost: '£95',
    photo: 'https://picsum.photos/seed/punchlist-3/600/450',
  },
  {
    category: 'Outdoor',
    title: 'Fence rebuild after storm damage',
    blurb:
      'Six panels and two posts, with the posts set in postcrete rather than dry gravel. Old panels taken away and disposed of at the tip, which is included in the quote.',
    area: 'Meanwood',
    time: '1.5 days',
    cost: '£680',
    photo: 'https://picsum.photos/seed/punchlist-4/600/450',
  },
]

export interface Area {
  readonly name: string
  readonly response: string
  readonly postcodes: string
  readonly note?: string
}

export const AREAS_COPY = {
  pill: 'Coverage',
  heading: 'Where we work',
  lede: "If you are outside these, ring anyway — we will tell you honestly whether it is worth the travel.",
  note: 'Response times are for a standard booking, not an emergency. We do not run a 24-hour emergency service, and we would rather say that plainly than take the job and turn up late.',
} as const

export const AREAS: readonly Area[] = [
  {
    name: 'Leeds central',
    response: 'Next day',
    postcodes: 'LS1 · LS2 · LS7 · LS9',
  },
  {
    name: 'North Leeds',
    response: 'Next day',
    postcodes: 'LS6 · LS8 · LS16 · LS17',
  },
  {
    name: 'South Leeds',
    response: '2–3 days',
    postcodes: 'LS10 · LS11 · LS26',
  },
  {
    name: 'West Leeds',
    response: '2–3 days',
    postcodes: 'LS12 · LS13 · LS28',
    note: 'No travel charge',
  },
  {
    name: 'Wetherby & Boston Spa',
    response: 'Within a week',
    postcodes: 'LS22 · LS23',
    note: '£20 travel added',
  },
  {
    name: 'Harrogate fringe',
    response: 'Within a week',
    postcodes: 'HG1 · HG2 · HG3',
    note: '£30 travel added',
  },
]

export type CredentialIcon = 'liability' | 'electrical' | 'checked' | 'guarantee'

export interface Credential {
  readonly icon: CredentialIcon
  readonly title: string
  readonly body: string
  readonly reference: string
}

export const CREDENTIALS_COPY = {
  pill: 'The boring but important part',
  heading: 'Insured, certified and checked',
  lede: 'Ask any tradesperson for these four things. If they cannot produce them, keep looking.',
} as const

/** References are invented for this recreated brand. */
export const CREDENTIALS: readonly Credential[] = [
  {
    icon: 'liability',
    title: 'Public liability',
    body: 'Two million pounds of cover, in date, and the certificate goes out with every written quote without you having to ask.',
    reference: 'Policy AVL-8820417',
  },
  {
    icon: 'electrical',
    title: 'Part P certified',
    body: 'All electrical work is notifiable and certified. Anyone offering to change your consumer unit without this is not someone to let in.',
    reference: 'NICEIC reg. 6603942',
  },
  {
    icon: 'checked',
    title: 'DBS checked',
    body: 'Both tradespeople hold an enhanced DBS certificate, which matters if you are booking work around children or elderly relatives.',
    reference: 'Renewed annually',
  },
  {
    icon: 'guarantee',
    title: 'Twelve-month guarantee',
    body: 'Workmanship is guaranteed for a year. If it fails and it was our fault, we come back and fix it at no cost, including the call-out.',
    reference: 'In writing, on every invoice',
  },
]

export interface Testimonial {
  readonly quote: string
  readonly name: string
  readonly area: string
}

export const TESTIMONIALS_COPY = {
  pill: 'Reviews',
  heading: 'What people say afterwards',
  lede: 'Collected from real bookings, unedited.',
  previous: 'Previous review',
  next: 'Next review',
  goTo: 'Show review',
} as const

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'The quote was the price. That should not be remarkable and in my experience it absolutely is.',
    name: 'Helen Ashworth',
    area: 'Headingley',
  },
  {
    quote:
      'Turned up when they said, took their boots off without being asked, and told me one of the jobs on my list did not need doing.',
    name: 'Raj Patel',
    area: 'Chapel Allerton',
  },
  {
    quote:
      'They found the actual cause of the sticking door rather than planing it down like the last two people did.',
    name: 'Marie Dubois',
    area: 'Meanwood',
  },
]

export interface FaqItem {
  readonly question: string
  readonly answer: string
}

export const FAQ_COPY = {
  pill: 'Questions',
  heading: 'What people ask before booking',
  lede: 'Mostly about money, which is fair.',
} as const

export const FAQS: readonly FaqItem[] = [
  {
    question: 'Is the quote really fixed?',
    answer:
      'Yes, provided the job is what we saw. If we open something up and find a genuine surprise — rot behind a panel, wiring that is not to standard — we stop, explain it, and give you a revised price before continuing. You can say no at that point and only pay the call-out.',
  },
  {
    question: 'What does the £45 call-out cover?',
    answer:
      'Travel and the first half hour on site. If you go ahead with the work it comes off the total, so it only really costs you anything if you decide not to proceed.',
  },
  {
    question: 'Do you charge for materials?',
    answer:
      'At cost, with the receipt attached to your invoice. We do not add a markup on materials, because it makes the quote impossible for you to sanity check.',
  },
  {
    question: 'Can you do electrical work?',
    answer:
      'Sockets, switches, light fittings and anything else that falls under Part P, which we are certified for. Consumer units and full rewires we refer to a full-time electrician rather than pretending.',
  },
  {
    question: 'How far ahead are you booking?',
    answer:
      'Usually next day in central and north Leeds, two to three days further out. We are not an emergency service and will say so rather than take a booking we cannot honour.',
  },
]

export const CONTACT_COPY = {
  heading: 'Send us the list',
  lede: 'Photographs help. Most quotes come back the same day, in writing, with the call-out and materials spelled out.',
  primaryCta: 'Get a fixed quote',
  secondaryCta: 'Check our rates first',
} as const

export const QUOTE = {
  title: 'Send us the list',
  intro: 'Four fields. We reply with a written quote, usually the same day.',
  nameLabel: 'Your name',
  emailLabel: 'Email',
  subjectLabel: 'What needs doing (optional)',
  messageLabel: 'The list',
  messagePlaceholder: 'Six shelves, a sticking door, and the flat-pack wardrobe still in its box.',
  submit: 'Send the list',
  close: 'Close',
  nameError: 'Enter your name',
  emailError: 'Enter an email address we can reply to',
  messageError: 'Tell us what needs doing',
  success: 'Thanks — your list is in. We will reply with a written quote, usually the same day.',
  sidebar: {
    phone: 'Phone',
    email: 'Email',
    workshop: 'Workshop',
    hours: 'Working hours',
  },
} as const

export const FOOTER = {
  blurb:
    'Local handyman and home repair — published hourly rates, a fixed call-out fee, and a written quote before anyone picks up a tool.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Rates', href: '#rates' },
        { label: 'Recent work', href: '#work' },
        { label: 'Areas covered', href: '#areas' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Credentials', href: '#credentials' },
        { label: 'Reviews', href: '#testimonials' },
        { label: 'Questions', href: '#faq' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'Send the list', href: '#contact' },
      ],
    },
  ] as readonly { readonly title: string; readonly links: readonly NavLink[] }[],
  newsletterTitle: 'Stay Updated',
  newsletterBlurb:
    'Seasonal maintenance reminders and the occasional honest note about what a job should cost.',
  emailLabel: 'Email address',
  emailPlaceholder: 'Enter your email',
  subscribe: 'Subscribe',
  emailError: 'Enter an email address',
  success: 'Thanks — you are on the list.',
  copyright: `© 2026 ${BRAND}. All rights reserved.`,
  componentDock: 'More templates at Component Dock',
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/',
      path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 2.2a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm6.6-2.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/',
      path: 'M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.9c0-.8.2-1.4 1.4-1.4h1.6V4.9c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.2v2.9h2.4V21h2.9Z',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      path: 'M6.9 20.5H3.6V9h3.3v11.5ZM5.2 7.5a1.9 1.9 0 1 1 0-3.9 1.9 1.9 0 0 1 0 3.9Zm15.3 13h-3.3v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.9V9h3.2v1.6h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 4.9v6.7Z',
    },
  ] as readonly { readonly label: string; readonly href: string; readonly path: string }[],
} as const
