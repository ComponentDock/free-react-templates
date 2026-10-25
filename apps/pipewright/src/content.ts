/**
 * Every string on the page, in the reference design's order. Keeping the copy
 * out of the components means a test can assert a band's content once and the
 * components stay layout.
 */

export const BRAND = 'Pipewright'
export const BRAND_NOTE = 'NC Licence #000000 · (555) 010-0142'
export const PHONE_DISPLAY = '(555) 010-0142'
export const PHONE_HREF = 'tel:+15550100142'
export const EMAIL = 'sam@pipewright.example'
export const ADDRESS = '41 Haywood Road, Asheville, NC 28806'
export const LICENCE_LABEL = 'Licensed'
export const LICENCE_BODY =
  'NC licence #000000, insured and bonded. Sample details for template demonstration.'
export const RATING = '5.0'
export const RATING_NOTE = '90+ reviews on Google · sample data'
export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'

interface NavLink {
  readonly label: string
  readonly id: string
}

/** The four labels are in-page anchors: the recreation is a single page. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'What I do', id: 'services' },
  { label: 'Meet Sam', id: 'owner' },
  { label: 'Reviews', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
]

export const HERO = {
  kicker: 'Asheville · Licensed since 1996',
  headline: 'You get me, and you get my van.',
  lede: 'I am Sam Ordway. I have been plumbing in Asheville for thirty years, the last eleven on my own. There is no dispatcher, no apprentice sent instead, and no van number two.',
  lede2:
    'That means I cannot be everywhere, and I will tell you honestly when I am booked. It also means the person who quotes your job is the person standing in your crawl space doing it.',
  image: 'https://picsum.photos/seed/pipewright-1/940/1175',
  imageAlt: 'Placeholder photograph standing in for the owner beside his own van',
  figcaption:
    'Replace with a photograph of yourself beside your own van. On a one-van business this image is the credential.',
  cta: 'Call (555) 010-0142',
} as const

interface ServiceRow {
  readonly name: string
  readonly body: string
  readonly price: string
}

export const SERVICES = {
  kicker: 'What I do',
  heading: 'A short list, done properly',
  intro:
    'If it is not on this list I probably know someone better than me for it, and I will give you their number.',
  note: 'Prices are sample data for demonstration. Replace them with your own before launch.',
  rows: [
    {
      name: 'Repairs and leaks',
      body: 'Dripping taps, failed shut-offs, leaking traps and the pipe behind the washing machine that has been damp for a year.',
      price: 'From $110',
    },
    {
      name: 'Drain clearing',
      body: 'Kitchen, bath and laundry. I cable it, then tell you whether it will come back and why.',
      price: 'From $160',
    },
    {
      name: 'Water heaters',
      body: 'Repair where a repair is honest, replacement where it is not. I take the old one away.',
      price: 'From $980 fitted',
    },
    {
      name: 'Toilets and fixtures',
      body: 'Running toilets, new faucets, and the small jobs the bigger outfits will not book you in for.',
      price: 'From $95',
    },
    {
      name: 'Crawl space and freeze damage',
      body: 'Asheville winters split pipes every year. I insulate, repair and lag so the same run does not go again.',
      price: 'Quoted on site',
    },
    {
      name: 'Advice on the phone, free',
      body: 'If you can fix it yourself in ten minutes I would rather tell you how than charge you to watch me do it.',
      price: 'No charge',
    },
  ] satisfies readonly ServiceRow[],
} as const

export const OWNER = {
  kicker: 'Why one van',
  image: 'https://picsum.photos/seed/pipewright-owner/224/224',
  imageAlt: 'Placeholder portrait of Sam Ordway',
  lede: 'I tried running three vans for two years. The work got worse and I stopped enjoying it.',
  paragraphs: [
    'So I went back to one. I answer the phone myself, I quote the job myself, and I do the work myself. When I am in your house I am not thinking about the second crew somewhere across town.',
    'If you ring and I cannot fit you in this week, I will say so straight away rather than booking you a fortnight out and hoping. A one-van diary that tells the truth is worth more than a call centre that does not.',
  ],
  signature: 'Sam Ordway',
  role: 'Licensed plumber, Asheville',
  link: 'Read more about how I work',
} as const

export const EMERGENCY = {
  label: 'Out of hours',
  line: 'I answer my own phone until 21:00, and from 06:00.',
  note: 'Overnight I let it go to voicemail, because a plumber who has not slept should not be soldering in your ceiling. Leave a message and I ring back at six.',
  cta: 'Call (555) 010-0142',
} as const

export const AREAS = {
  heading: 'Where I get to',
  intro:
    'Asheville and the valleys around it. Further out for bigger jobs, but I will be straight with you about travel.',
  note: 'Replace this list with your own towns before launch.',
  towns: [
    'Asheville',
    'West Asheville',
    'Black Mountain',
    'Weaverville',
    'Arden',
    'Fletcher',
    'Swannanoa',
    'Candler',
    'Fairview',
    'Leicester',
    'Woodfin',
    'Mars Hill',
  ],
} as const

interface Review {
  readonly quote: string
  readonly name: string
  readonly town: string
  readonly initial: string
}

export const TESTIMONIALS = {
  badge: 'Reviews',
  heading: 'What people say',
  lede: 'Sample reviews for demonstration. Replace with your own.',
  starsLabel: 'Five out of five',
  items: [
    {
      quote:
        'Sam talked me through shutting the water off on the phone, then turned up when he said he would. He also told me the water heater had four or five years left when the last company had condemned it.',
      name: 'Ruth M.',
      town: 'West Asheville',
      initial: 'R',
    },
    {
      quote:
        'Booked three weeks out because he only has the one van, and worth every day of the wait. Tidy, straight about the cost, and no attempt to sell me a new heater I did not need.',
      name: 'Callum B.',
      town: 'Black Mountain',
      initial: 'C',
    },
    {
      quote:
        'Rang about a dripping faucet and he told me which washer to buy and how to do it myself. Did not charge me a penny for the call, and it has not dripped since.',
      name: 'Imogen P.',
      town: 'Arden',
      initial: 'I',
    },
  ] satisfies readonly Review[],
} as const

export const CONTACT = {
  heading: 'Ring Sam',
  lede: 'If I am on a job I will ring you back the same day. If I am under a house it might be the evening.',
  primary: 'Call (555) 010-0142',
  secondary: 'Send a message instead',
  mailto: 'mailto:sam@pipewright.example',
} as const

export const COOKIE_COPY =
  'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.'

export const FOOTER = {
  blurb:
    'One plumber, one van, thirty years of it. Repairs, drains and water heaters across Asheville and the valley.',
  columns: [
    {
      heading: 'What I do',
      links: [
        { label: 'Repairs', id: 'services' },
        { label: 'Drains', id: 'services' },
        { label: 'Water heaters', id: 'services' },
        { label: 'Small jobs', id: 'services' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Meet Sam', id: 'owner' },
        { label: 'Reviews', id: 'testimonials' },
        { label: 'Contact', id: 'contact' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Call Sam', id: 'contact' },
        { label: 'Service area', id: 'service-areas' },
      ],
    },
  ],
  legal: '© 2026 Pipewright. All rights reserved.',
  componentDock: 'More templates at Component Dock',
  socials: [
    { id: 'x', label: 'Pipewright on X', href: 'https://x.com/componentdock' },
    { id: 'instagram', label: 'Pipewright on Instagram', href: 'https://www.instagram.com/' },
    { id: 'linkedin', label: 'Pipewright on LinkedIn', href: 'https://www.linkedin.com/' },
  ],
} as const
