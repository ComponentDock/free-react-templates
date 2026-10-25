/** One phone number, one crew, one page. */
export const contact = {
  phone: '(555) 010-0148',
  phoneHref: 'tel:5550100148',
  company: 'Rodline Plumbing',
  componentDock: 'https://www.componentdock.com/',
}

export const offer = {
  lead: '$49 drain clearing this month',
  qualifier: 'Standard kitchen and bath lines. Mains quoted separately.',
}

export const nav = {
  wordmark: 'Rodline',
  shortCall: 'Call now',
}

export const hero = {
  headline: 'Blocked drain cleared today,',
  headlineAccent: 'from $49.',
  lede: 'Denver drain clearing and plumbing repairs with a flat-rate price agreed before we start. Book before noon and we come the same day.',
  proof: [
    'Flat-rate price agreed before we start',
    'Same-day visits booked before noon',
    'Licensed, insured and locally owned',
    'No call-out fee, ever',
  ],
  rating: '4.8',
  ratingNote: '340+ reviews on Google · sample data',
}

export interface Field {
  name: 'name' | 'phone' | 'need'
  label: string
  placeholder: string
  autoComplete: string
  type: 'text' | 'tel'
}

export const fields: Field[] = [
  {
    name: 'name',
    label: 'Your name',
    placeholder: 'First and last name',
    autoComplete: 'name',
    type: 'text',
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: '(555) 000-0000',
    autoComplete: 'tel',
    type: 'tel',
  },
]

export const needs = [
  'Blocked drain',
  'Burst pipe or leak',
  'No hot water',
  'Water heater replacement',
  'Toilet or faucet repair',
  'Something else',
]

export const quoteForm = {
  title: 'Book a slot',
  sub: 'Three fields. We ring back within fifteen minutes during business hours.',
  selectLabel: 'What do you need?',
  selectPlaceholder: 'Choose the closest match',
  submit: 'Get my flat-rate price',
  finePrint: 'No obligation. We never sell your details.',
  thanksTitle: 'Got it. We will ring you back.',
  thanksBody:
    'A real person rings you back within fifteen minutes during business hours. Overnight, it is first thing in the morning.',
  again: 'Book another slot',
}

export const why = {
  eyebrow: 'Why this number',
  title: 'Three reasons people ring us back',
  lede: 'Nothing here is unusual. It is simply what a plumbing company should do and most do not.',
  caption: 'Replace with a photograph of your own crew before launch.',
  image: 'https://picsum.photos/seed/rodline-1/800/600',
  items: [
    {
      term: 'The price is agreed first',
      detail:
        'You hear the flat rate before a tool comes out of the van. If the job changes, we stop and re-quote.',
    },
    {
      term: 'You see what caused it',
      detail:
        'The camera goes down the line and you watch it on the screen. No mystery diagnosis, no invented blockage.',
    },
    {
      term: 'Same-day, genuinely',
      detail:
        'Four vans on the road before seven. If we cannot make it today, we say so on the phone.',
    },
  ],
}

export const services = {
  eyebrow: 'What we do',
  title: 'Three things, done properly',
  lede: 'This crew does drains, repairs and water heaters. For remodels and re-pipes we will point you at someone who does those all day.',
  items: [
    {
      name: 'Drain clearing',
      blurb:
        'Kitchen, bath and main lines cleared with a rotating head, and a camera survey of the whole run included in the price.',
      price: 'From $49 this month',
    },
    {
      name: 'Leaks and repairs',
      blurb:
        'Burst pipes, failed valves and the small drips under the sink that quietly cost a fortune in water over a year.',
      price: 'From $129',
    },
    {
      name: 'Water heaters',
      blurb:
        'Repair, replacement and tankless upgrades, installed, certified and old unit taken away the same week.',
      price: 'From $1,150 installed',
    },
  ],
}

export const reviews = {
  badge: 'Reviews',
  title: 'What people said afterwards',
  lede: 'Sample reviews for demonstration. Replace with your own.',
  items: [
    {
      quote:
        'Rang at nine on a Tuesday, cleared by eleven, and the price was exactly the price they quoted on the phone. No call-out fee on top, no surprises when the card came out either.',
      name: 'Brandon L.',
      city: 'Denver',
    },
    {
      quote:
        'They put the camera down the line and showed me the footage before quoting the repair. First plumber who has ever done that in this house, and the quote was the flat rate they had already given me.',
      name: 'Sofia H.',
      city: 'Lakewood',
    },
    {
      quote:
        'Water heater died on a Sunday night. New one in and running by Tuesday morning, no weekend surcharge, and they took the old tank away with them when they left.',
      name: 'Neil A.',
      city: 'Aurora',
    },
  ],
}

export const faq = {
  badge: 'Questions',
  title: 'Before you book',
  lede: 'The five things people ask before they fill this in.',
  items: [
    {
      question: 'Is the $49 a real price?',
      answer:
        'Yes, for a standard kitchen or bath line during the promotion. Mains, root intrusion and after-hours work are quoted before we start.',
    },
    {
      question: 'What if it needs more than a clear?',
      answer:
        'We stop, show you the camera survey and give you a flat price for the repair before any more work happens.',
    },
    {
      question: 'Do you charge to come out?',
      answer: 'No. The visit and the camera survey are included in the flat rate.',
    },
    {
      question: 'How quickly can you get here?',
      answer:
        'Book before noon and we come the same day. After noon, it is first thing the next morning.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Licensed, bonded and insured. Ask for the certificate when we arrive — every van carries a copy.',
    },
  ],
}

export const availability = {
  label: 'Same-day availability',
  line: 'Book before noon and we come today.',
  sticky: 'Same-day availability · (555) 010-0148',
}

export const footer = {
  copyright: '© 2026 Rodline Plumbing.',
  privacy: 'Privacy',
  terms: 'Terms',
  notice:
    'Sample content for template demonstration. Replace every price, licence number and review before launch.',
  more: 'More templates at Component Dock',
}
