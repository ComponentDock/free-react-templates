/**
 * Every string on the page. The register is first person plural, plain,
 * numerate and unsentimental — prices, weeks, file extensions, and no
 * exclamation marks. The refusals are load-bearing: a rewrite that adds a
 * "trusted by" wall, a fake star rating or a free-quote popup has deleted the
 * design.
 */

export const site = {
  name: 'Makeready',
  descriptor: 'Graphic design studio, Dublin',
  address: '14 Windmill Lane, Dublin, D02 F206',
  phone: '+353 1 559 0284',
  phoneHref: 'tel:+35315590284',
  email: 'studio@makeready.design',
  componentDock: 'https://www.componentdock.com/',
} as const

export interface NavItem {
  label: string
  href: string
  /** The four band labels carry the scroll position; Questions/Contact do not. */
  spy: boolean
}

export const NAV: readonly NavItem[] = [
  { label: 'Work', href: '#work', spy: true },
  { label: 'Disciplines', href: '#disciplines', spy: true },
  { label: 'Process', href: '#process', spy: true },
  { label: 'Deliverables', href: '#deliverables', spy: true },
  { label: 'Questions', href: '#faq', spy: false },
  { label: 'Contact', href: '#contact', spy: false },
]

export const SPY_IDS = ['work', 'disciplines', 'process', 'deliverables'] as const

export const hero = {
  badge: 'Dublin · Identity, editorial, packaging, type',
  headline: 'Design that survives',
  phrases: ['contact with production', 'a print run', 'being handed to someone else'],
  /** The static accessible name for the animated line. */
  headlineLabel: 'Design that survives contact with production',
  lead: 'A six-person studio working mostly in print. We finish artwork properly, supply files a printer can actually use, and write guidelines that a future in-house designer can follow without ringing us.',
  primaryCta: { label: 'Start a project', href: '#contact' },
  secondaryCta: { label: 'See the work', href: '#work' },
  videoLabel: 'Watch Demo',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  image: 'https://picsum.photos/seed/makeready-1/1200/600',
  imageAlt: 'A designer’s desk with a drawing tablet, a keyboard and an open book on print design',
  stats: [
    { value: '11', label: 'Years' },
    { value: '140+', label: 'Identities' },
    { value: '6', label: 'In the studio' },
    { value: '3', label: 'ISTD awards' },
  ],
} as const

export interface CaseStudy {
  discipline: string
  year: string
  company: string
  title: string
  brief: string
  approach: string
  outcome: string
  metric: string
  metricCaption: string
  image: string
  imageAlt: string
}

export const work = {
  eyebrow: 'Selected work',
  title: 'Three projects, start to finish',
  lead: 'With the brief as it was actually written, not as we would have preferred it.',
  labels: { brief: 'Brief', approach: 'Approach', outcome: 'Outcome' } as const,
  cases: [
    {
      discipline: 'Packaging',
      year: '2032',
      company: 'Kilbeggan Coffee Roasters',
      title: 'A bag that works at 40 mm and at four metres',
      brief:
        'Eleven single-origin coffees, sold both in a small shop and on supermarket shelves, needed to be told apart instantly by staff and by customers who had never seen them before.',
      approach:
        'One fixed structure with a variable colour band and a large origin numeral. The numeral carries at shelf distance, the band codes the roast level, and the whole system prints in two spot colours to keep the unit cost down.',
      outcome:
        'Rolled out across eleven SKUs with no increase in print cost, and the numeral became the way staff refer to the coffees internally.',
      metric: '2 colours',
      metricCaption: 'print spec across all eleven SKUs',
      image: 'https://picsum.photos/seed/makeready-2/700/525',
      imageAlt: 'Three coffee bags in a fixed structure, each with a different colour band',
    },
    {
      discipline: 'Editorial',
      year: '2031',
      company: 'The Liffey Review',
      title: 'A quarterly that had grown from 48 pages to 210',
      brief:
        'A literary quarterly whose page count had quadrupled while its layout stayed the same, so readers had stopped being able to find anything.',
      approach:
        'A four-tier hierarchy with running heads, a proper contents architecture and two text sizes rather than one. Set in a single family at four weights to keep the typesetting maintainable by a volunteer team.',
      outcome:
        'Handed over as an InDesign template with paragraph styles that the editors have used unaided for six issues.',
      metric: '6 issues',
      metricCaption: 'produced without studio involvement',
      image: 'https://picsum.photos/seed/makeready-3/700/525',
      imageAlt: 'An open literary quarterly showing running heads and a two-size text hierarchy',
    },
    {
      discipline: 'Identity',
      year: '2031',
      company: 'Harbour & Vale',
      title: 'An identity for a firm that will be bought within five years',
      brief:
        'A professional services firm that was explicit about being acquired eventually, and wanted an identity that would not be embarrassing to fold into a larger group.',
      approach:
        'Restraint. A wordmark rather than a symbol, one typeface, a neutral palette, and guidelines written so an acquiring brand team could see immediately what was load-bearing and what was decorative.',
      outcome:
        'Applied across stationery, signage and a 60-page document system. Still in use, and the guidelines have been amended twice by their own team.',
      metric: '60 pp',
      metricCaption: 'document system, self-maintained',
      image: 'https://picsum.photos/seed/makeready-4/700/525',
      imageAlt: 'A wordmark applied across stationery and a signage panel',
    },
  ] as readonly CaseStudy[],
} as const

export interface Discipline {
  title: string
  price: string
  body: string
  tags: readonly string[]
}

export const disciplines = {
  eyebrow: 'What we do',
  title: 'Four things, properly',
  lead: 'We are not a full-service agency. There is no digital product team, no media buying and no motion department, and we will tell you who to ring for those.',
  items: [
    {
      title: 'Identity',
      price: 'from €14,000',
      body: 'Wordmarks, symbols and the system around them — typography, colour, layout rules and the guidelines document that makes it usable by people who are not us.',
      tags: ['Wordmark', 'Type system', 'Colour spec', 'Guidelines PDF', 'Artwork files'],
    },
    {
      title: 'Editorial',
      price: 'from €9,000',
      body: 'Books, journals, reports and annual publications. Grid, hierarchy and a template your team can actually produce the next issue in.',
      tags: ['Grid', 'Paragraph styles', 'InDesign template', 'Sample spreads', 'Handover session'],
    },
    {
      title: 'Packaging',
      price: 'from €11,000',
      body: 'Structure, artwork and print specification, taken through to a signed-off proof with your printer rather than handed over as a visual.',
      tags: ['Dielines', 'Print-ready artwork', 'Colour spec', 'Proof sign-off'],
    },
    {
      title: 'Typography',
      price: 'from €6,500',
      body: 'Custom lettering, wordmark drawing and type selection and licensing advice. Occasionally a full custom face, though that is a longer conversation.',
      tags: ['Vector lettering', 'Kerning pairs', 'Licence guidance'],
    },
  ] as readonly Discipline[],
} as const

export interface Stage {
  numeral: string
  duration: string
  title: string
  body: string
  deliverable: string
}

export const process = {
  eyebrow: 'How a project runs',
  title: 'Four stages, fixed price',
  lead: 'Quoted as a whole rather than hourly, with the stages and the payment points agreed before anything starts.',
  stages: [
    {
      numeral: '01',
      duration: '1–2 weeks',
      title: 'Brief and audit',
      body: 'We read what exists, talk to the people who will use the thing, and write the brief back to you in our own words. Roughly a third of projects change shape at this point.',
      deliverable: 'Written brief, agreed scope',
    },
    {
      numeral: '02',
      duration: '2–3 weeks',
      title: 'Concepts',
      body: 'Two directions, presented in context rather than on a white background. We show you the one we recommend and say why, rather than presenting three and asking you to choose.',
      deliverable: 'Two routes, in application',
    },
    {
      numeral: '03',
      duration: '3–5 weeks',
      title: 'Development',
      body: 'The chosen route taken to completion across every application in scope. This is the longest and least visible stage, and it is where most of the actual design happens.',
      deliverable: 'Full system, all applications',
    },
    {
      numeral: '04',
      duration: '1–2 weeks',
      title: 'Artwork and handover',
      body: 'Production-ready files, colour specification, and a guidelines document. We speak to your printer directly and check the first proof.',
      deliverable: 'Artwork, guidelines, proof sign-off',
    },
  ] as readonly Stage[],
  footnotes: [
    'Fifty percent on commencement, fifty on final artwork delivery. Nothing invoiced in between.',
    'Two rounds of revisions are included at each stage. Further rounds are quoted, not silently absorbed.',
    'You own the final artwork outright on payment. We license nothing back to you.',
  ],
  youGet: 'You get',
} as const

export interface DeliverableRow {
  name: string
  format: string
  note?: string
}

export interface DeliverableColumn {
  title: string
  rows: readonly DeliverableRow[]
}

export const deliverables = {
  eyebrow: 'What you actually receive',
  title: 'The file list, published',
  lead: 'Every studio gets asked this and most answer it in a proposal. It is on the website because it is the most practical question a client has.',
  columns: [
    {
      title: 'Artwork',
      rows: [
        {
          name: 'Primary logo',
          format: 'AI · EPS · SVG · PDF',
          note: 'Positive, reversed and single-colour versions',
        },
        { name: 'Secondary marks', format: 'AI · EPS · SVG' },
        { name: 'Web-ready exports', format: 'SVG · PNG @1x @2x @3x' },
        { name: 'Favicon set', format: 'SVG · ICO · PNG' },
      ],
    },
    {
      title: 'Specification',
      rows: [
        {
          name: 'Colour reference',
          format: 'PDF',
          note: 'Pantone, CMYK, RGB and HEX with tolerances',
        },
        {
          name: 'Typography spec',
          format: 'PDF',
          note: 'Families, weights, sizes and licence status',
        },
        { name: 'Clear space and minimum sizes', format: 'PDF' },
        { name: 'Guidelines document', format: 'PDF · InDesign' },
      ],
    },
    {
      title: 'Working files',
      rows: [
        { name: 'Source design files', format: 'INDD · AI', note: 'Layered, named and organised' },
        {
          name: 'Fonts used',
          format: 'Licence details',
          note: 'Licences bought in your name, not ours',
        },
        { name: 'Image assets', format: 'TIFF · PSD' },
        { name: 'Print dielines', format: 'PDF · DXF' },
      ],
    },
  ] as readonly DeliverableColumn[],
  note: 'Everything is supplied in open or industry-standard formats. You will never need a subscription to our software to open your own artwork, and we do not hold source files hostage — you own them on final payment, in full, without a licence back to us.',
} as const

export interface Testimonial {
  quote: string
  initial: string
  name: string
  role: string
}

export const testimonials = {
  eyebrow: 'Clients',
  title: 'Mostly about the handover',
  lead: 'Which is the part that tends to go wrong elsewhere.',
  items: [
    {
      quote:
        'The guidelines were written for someone who is not a designer, which is exactly who ended up using them. We have produced six issues without ringing them once.',
      initial: 'N',
      name: 'Niamh Cassidy',
      role: 'Editor, The Liffey Review',
    },
    {
      quote:
        'They rang our printer directly and sorted a colour problem before it became our problem. Nobody has ever done that for us before.',
      initial: 'E',
      name: 'Eoin Barry',
      role: 'Kilbeggan Coffee Roasters',
    },
    {
      quote:
        'We asked for something that would survive being acquired and they took that brief literally, which we appreciated more than a beautiful thing we would have had to abandon.',
      initial: 'C',
      name: 'Claire Duggan',
      role: 'Harbour & Vale',
    },
  ] as readonly Testimonial[],
  previous: 'Previous testimonial',
  next: 'Next testimonial',
} as const

export interface FaqItem {
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Questions',
  title: 'Money, ownership and scope',
  lead: 'The five things worth settling before a project starts.',
  items: [
    {
      question: 'Why fixed price rather than hourly?',
      answer:
        'Because hourly punishes you for our inefficiency and makes it impossible for you to budget. We quote the whole project after the brief stage, and if we misjudge it that is our problem rather than an additional invoice.',
    },
    {
      question: 'Who owns the work?',
      answer:
        'You do, outright, on final payment — including source files. We do not license artwork back to clients and we do not charge separately for the working files. The only exception is typefaces, which are licensed from their foundries in your name.',
    },
    {
      question: 'What if we do not like either concept?',
      answer:
        'It has happened twice in eleven years. Both times we went back to the brief, because two rejected routes almost always means we misread the problem rather than that we need a third route. There is no additional charge for that.',
    },
    {
      question: 'Do you do websites?',
      answer:
        'We design them and hand over to a developer, or work alongside yours. We do not build them, and a studio that claims equal expertise in identity, print production and front-end development is usually stretching at least one of those claims.',
    },
    {
      question: 'How far ahead are you booking?',
      answer:
        'Six to ten weeks for a full identity, less for smaller pieces. We run three projects at a time and will tell you honestly if the timeline does not suit rather than taking the work and delaying you.',
    },
  ] as readonly FaqItem[],
} as const

export const contact = {
  title: 'Tell us what the actual problem is',
  lead: 'The brief you send is rarely the brief we end up working to, and that is fine. Start with the problem.',
  primaryCta: { label: 'Start a project', href: 'mailto:studio@makeready.design' },
  secondaryCta: { label: 'Read the deliverables list', href: '#deliverables' },
  fields: {
    name: 'Name',
    email: 'E-mail',
    subject: 'Subject (optional)',
    message: 'What is the problem?',
  },
  submit: 'Send the enquiry',
  success: 'Thank you — we reply to every enquiry within two working days.',
} as const

export const footer = {
  blurb:
    'A graphic design studio working in identity, editorial, packaging and type. Six people, print-first, and a deliverables list published before you ask for it.',
  studioHeading: 'The studio',
  studioLinks: [
    { label: 'Work', href: '#work' },
    { label: 'Disciplines', href: '#disciplines' },
    { label: 'Process', href: '#process' },
    { label: 'Deliverables', href: '#deliverables' },
  ],
  moreHeading: 'More',
  moreLinks: [
    { label: 'Questions', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  newsletterHeading: 'Stay updated',
  newsletterCopy:
    'Four or five times a year: work we have shipped, and the odd note about print production.',
  newsletterLabel: 'E-mail address',
  subscribe: 'Subscribe',
  newsletterSuccess: 'Added. Four or five notes a year, nothing else.',
  newsletterError: 'That address looks incomplete. Check it and subscribe again.',
  copyright: '© 2026 Makeready. All rights reserved.',
  legalLinks: [
    { label: 'Questions', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  componentDockLabel: 'Component Dock',
} as const

export const chrome = {
  cookie: {
    copy: 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
    decline: 'Decline',
    accept: 'Accept All',
  },
  mobile: { enquiry: 'Enquire', call: 'Call the studio' },
} as const
