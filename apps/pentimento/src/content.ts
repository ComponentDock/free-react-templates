/**
 * Every string on the page. The voice is first person, dry and specific:
 * centimetres, DKK, materials named, and the refusals kept — a rewrite that
 * adds a discount or a superlative has deleted the design.
 */

export const site = {
  name: 'Kjeldsen',
  artist: 'Maren Kjeldsen',
  descriptor: 'Studio, Refshaleøen',
  address: 'Refshalevej 213, Copenhagen, 1432',
  phone: '+45 32 88 41 06',
  phoneHref: 'tel:+4532884106',
  email: 'studio@kjeldsen.art',
  componentDock: 'https://www.componentdock.com/',
} as const

export interface NavItem {
  label: string
  href: string
  /** The four band labels light up with the scroll position. */
  spy: boolean
}

export const NAV: readonly NavItem[] = [
  { label: 'Works', href: '#works', spy: true },
  { label: 'Exhibitions', href: '#exhibitions', spy: true },
  { label: 'Statement', href: '#statement', spy: true },
  { label: 'Acquiring work', href: '#acquire', spy: true },
  { label: 'Questions', href: '#faq', spy: false },
  { label: 'Contact', href: '#contact', spy: false },
]

export const SPY_IDS = ['works', 'exhibitions', 'statement', 'acquire'] as const

export const hero = {
  badge: 'Studio, Refshaleøen · Copenhagen',
  headline: 'Painting the hour',
  phrases: ['before the light goes', 'when the room turns grey', 'nobody photographs'],
  lead:
    'Oil on linen, worked slowly and mostly from observation. Recent paintings, current exhibitions and how to acquire work directly from the studio.',
  primaryCta: { label: 'View available works', href: '#works' },
  secondaryCta: { label: 'Read the statement', href: '#statement' },
  videoLabel: 'Watch Demo',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  image: 'https://picsum.photos/seed/pentimento-1/1200/600',
  imageAlt: 'Paint jars and brushes on a studio table',
} as const

export type PaintingStatus = 'Available' | 'Reserved' | 'Sold' | 'Private collection'

export interface Painting {
  category: string
  title: string
  year: string
  medium: string
  size: string
  status: PaintingStatus
  /** Only available and reserved works carry a price. */
  price?: string
  image: string
}

/** Six paintings, exactly three of them Available — the arithmetic `#contact` promises. */
export const paintings: readonly Painting[] = [
  {
    category: 'Interiors',
    title: 'Kitchen, four in the afternoon',
    year: '2032',
    medium: 'Oil on linen',
    size: '120 × 90 cm',
    status: 'Available',
    price: 'DKK 46,000',
    image: 'https://picsum.photos/seed/pentimento-2/600/750',
  },
  {
    category: 'Interiors',
    title: 'Two chairs, one occupied',
    year: '2032',
    medium: 'Oil on linen',
    size: '90 × 70 cm',
    status: 'Reserved',
    price: 'DKK 32,000',
    image: 'https://picsum.photos/seed/pentimento-3/600/750',
  },
  {
    category: 'Refshaleøen',
    title: 'Harbour, low tide',
    year: '2031',
    medium: 'Oil on linen',
    size: '150 × 110 cm',
    status: 'Sold',
    image: 'https://picsum.photos/seed/pentimento-4/600/750',
  },
  {
    category: 'Interiors',
    title: 'Study for a long room',
    year: '2031',
    medium: 'Oil on board',
    size: '40 × 30 cm',
    status: 'Available',
    price: 'DKK 12,500',
    image: 'https://picsum.photos/seed/pentimento-5/600/750',
  },
  {
    category: 'Refshaleøen',
    title: 'Crane at rest',
    year: '2031',
    medium: 'Oil on linen',
    size: '110 × 110 cm',
    status: 'Private collection',
    image: 'https://picsum.photos/seed/pentimento-6/600/750',
  },
  {
    category: 'Interiors',
    title: 'The window, repainted',
    year: '2030',
    medium: 'Oil on linen',
    size: '100 × 80 cm',
    status: 'Available',
    price: 'DKK 38,000',
    image: 'https://picsum.photos/seed/pentimento-7/600/750',
  },
]

export const works = {
  eyebrow: 'Selected works',
  title: 'Recent paintings',
  lead:
    'Prices are for unframed works collected from the studio. Framing, crating and shipping are quoted separately and at cost.',
} as const

export const statement = {
  eyebrow: 'Statement',
  title: 'On painting rooms nobody is looking at',
  caption: 'Studio, Refshaleøen, February 2032',
  image: 'https://picsum.photos/seed/pentimento-8/700/875',
  paragraphs: [
    'I paint interiors, mostly my own and mostly at the end of the afternoon. The subject is not really the room — it is the particular quality of light that arrives just before it becomes necessary to switch something on, when colour drains out of everything unevenly and the corners go first.',
    'Everything is worked from observation over a long period, which means the paintings record several afternoons rather than one. A chair moves between sittings. The light changes and I keep the earlier version. I have stopped regarding this as a problem to solve and started treating it as the actual subject.',
    'The Refshaleøen series came out of walking to the studio along the water in winter. Industrial structures at that hour behave like furniture — they stop being cranes and start being shapes that interrupt a grey field. The two series are more closely related than they look.',
    'I work in oil on linen almost exclusively, occasionally on board for studies. Slowly, in thin layers, with a great deal of scraping back. A large painting takes between four and nine months and I usually have three going at once because waiting for a layer to dry is unbearable otherwise.',
  ],
  quote: 'A room is at its most honest in the twenty minutes before someone turns a lamp on.',
} as const

export interface Exhibition {
  year: string
  tags: readonly string[]
  title: string
  venue: string
}

export const exhibitions = {
  eyebrow: 'Exhibitions',
  title: 'Where the work has been',
  lead: 'Solo shows, selected group exhibitions, prizes and residencies.',
  note:
    'Full CV and high-resolution images available to galleries, curators and press on request. Please write to the studio address rather than through social channels.',
  rows: [
    {
      year: '2033',
      tags: ['Solo', 'Forthcoming'],
      title: 'The Long Room',
      venue: 'Galleri Nordhavn · Copenhagen',
    },
    {
      year: '2032',
      tags: ['Group'],
      title: 'Painting After Observation',
      venue: 'Kunsthal Aarhus · Aarhus',
    },
    {
      year: '2032',
      tags: ['Prize'],
      title: 'Shortlist, Nordic Painting Award',
      venue: 'Nationalmuseum · Stockholm',
    },
    {
      year: '2031',
      tags: ['Solo'],
      title: 'Refshaleøen',
      venue: 'Galleri Nordhavn · Copenhagen',
    },
    {
      year: '2031',
      tags: ['Residency'],
      title: 'Winter studio residency',
      venue: 'Fogo Island Arts · Newfoundland',
    },
    {
      year: '2030',
      tags: ['Group'],
      title: 'Interiors, Nine Painters',
      venue: 'Kunstverein Hamburg · Hamburg',
    },
    {
      year: '2029',
      tags: ['Solo'],
      title: 'First Rooms',
      venue: 'Sydhavn Projektrum · Copenhagen',
    },
  ] as readonly Exhibition[],
} as const

export interface Route {
  numeral: string
  title: string
  body: string
  finePrint: string
}

export const acquire = {
  eyebrow: 'Acquiring work',
  title: 'Three ways to buy',
  lead: 'Available works can be bought directly from the studio. Everything else goes through the galleries below.',
  routes: [
    {
      numeral: '01',
      title: 'Directly from the studio',
      body:
        'Works marked available on this page can be bought direct. Write with the title and I will confirm it is still free, send additional images and arrange a studio visit if you are in Copenhagen.',
      finePrint: 'Payment in two instalments. Nothing leaves the studio until the second clears.',
    },
    {
      numeral: '02',
      title: 'Through a gallery',
      body:
        'Works in current exhibitions are handled entirely by the showing gallery, including pricing and shipping. I will pass your enquiry on rather than working around them.',
      finePrint: 'Gallery prices include their commission and are not negotiable by me.',
    },
    {
      numeral: '03',
      title: 'Commission',
      body:
        'I take one or two commissions a year, always interiors, always from observation, which means I need access to the room. I will say no to most requests and it is nothing personal.',
      finePrint: 'Twelve to eighteen months from agreement. Fifty percent on commencement.',
    },
  ] as readonly Route[],
  represented: [
    { name: 'Galleri Nordhavn', note: 'Copenhagen' },
    { name: 'Kunstverein Hamburg', note: 'Hamburg (group exhibitions)' },
  ],
  cta: { label: 'Enquire about a work', href: '#contact' },
} as const

export interface FaqItem {
  question: string
  answer: string
}

export const faq = {
  pill: 'Practical questions',
  title: 'Before you write',
  lead: 'Shipping, framing, condition and the questions collectors ask most.',
  items: [
    {
      question: 'Are prices negotiable?',
      answer:
        'Studio prices are not. They are set in consultation with the gallery so that buying direct is never cheaper than buying through them, which would be an unpleasant thing to do to people who have supported the work for years.',
    },
    {
      question: 'Do works come framed?',
      answer:
        'No. Prices are for unframed work collected from the studio. I am happy to recommend two framers in Copenhagen who understand oil on linen, and to advise on a moulding, but framing is arranged and paid for by the buyer.',
    },
    {
      question: 'How is work shipped?',
      answer:
        'Crated by a fine-art shipper and insured for the full value. Within Europe this is typically DKK 3,000 to 9,000 depending on size. I do not roll paintings or send them by ordinary courier under any circumstances.',
    },
    {
      question: 'Can I visit the studio?',
      answer:
        'Yes, by arrangement on Thursdays and Fridays. It is a working studio on Refshaleøen with no heating to speak of in January, which is worth knowing before you come.',
    },
    {
      question: 'Do you sell prints?',
      answer:
        'No. It is a reasonable question and the answer is simply that the paintings depend on surface and thickness, and a print of one is a photograph of a texture rather than the thing itself.',
    },
  ] as readonly FaqItem[],
} as const

export const contact = {
  title: 'Three works are currently available',
  lead: 'Write with a title and I will confirm availability, send further images and arrange a viewing.',
  primaryCta: { label: 'Enquire about a work', href: '#contact-form' },
  secondaryCta: { label: 'See the exhibition history', href: '#exhibitions' },
  form: {
    title: 'Send an enquiry',
    name: { label: 'Name', placeholder: 'Your name' },
    email: { label: 'E-mail', placeholder: 'you@example.com' },
    subject: { label: 'Which work', placeholder: 'Title of the painting, if you have one' },
    message: { label: 'Message', placeholder: 'Where you saw the work, and what you would like to know' },
    submit: 'Send enquiry',
    success:
      'Received. I answer enquiries on Thursdays and Fridays, usually with a few additional images attached.',
  },
} as const

export interface FooterColumn {
  heading: string
  links: readonly { label: string; href: string }[]
}

export const footer = {
  blurb:
    'Painter working in oil on linen. Works, exhibition history, studio notes and acquisition enquiries.',
  columns: [
    {
      heading: 'The work',
      links: [
        { label: 'Recent paintings', href: '#works' },
        { label: 'Statement', href: '#statement' },
        { label: 'Exhibitions', href: '#exhibitions' },
        { label: 'Acquiring work', href: '#acquire' },
      ],
    },
    {
      heading: 'Studio',
      links: [
        { label: 'Practical questions', href: '#faq' },
        { label: 'Representation', href: '#acquire' },
        { label: 'Studio address', href: '#contact' },
      ],
    },
    {
      heading: 'Enquiries',
      links: [
        { label: 'Send an enquiry', href: '#contact-form' },
        { label: 'Call the studio', href: 'tel:+4532884106' },
        { label: 'studio@kjeldsen.art', href: 'mailto:studio@kjeldsen.art' },
      ],
    },
  ] as readonly FooterColumn[],
  newsletter: {
    heading: 'Stay updated',
    blurb: 'Occasional studio notes and first sight of new work, usually before it reaches a gallery.',
    placeholder: 'Enter your email',
    submit: 'Subscribe',
    success: 'Added. Studio notes arrive rarely, and never with an offer attached.',
    error: 'That address looks incomplete. Check it and send again.',
  },
  copyright: '© 2026 Maren Kjeldsen. All rights reserved.',
  /** The reference's legal routes have no single-page equivalent, so they stay text. */
  legal: ['Privacy Policy', 'Terms of Service', 'Style Guide'],
} as const

export const chrome = {
  cookie: {
    copy: 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
    decline: 'Decline',
    accept: 'Accept All',
  },
  mobile: {
    enquiry: 'Enquire',
    call: 'Call the studio',
  },
} as const
