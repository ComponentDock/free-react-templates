/** Copy and content inventory for the Barstone law-firm template. */

export const siteName = 'Barstone'
export const siteBlurb =
  'A boutique firm for owners, boards and families who would rather settle a matter once than argue it twice.'

export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export const blogMenu: NavLink[] = [
  { label: 'Blog', href: '#blog' },
  { label: 'Single blog', href: '#blog' },
  { label: 'Elements', href: '#contact' },
]

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'Blog', href: '#blog', children: blogMenu },
  { label: 'Contact', href: '#contact' },
]

export const headerCta = { label: "Let's Talk", href: '#contact' }

export const hero = {
  title: 'Finest And Strongest Law Firm Win The World',
  subline:
    'Barstone counsels owners, boards and families through the decisions that outlast them — quietly, precisely and on the record.',
  cta: { label: 'More About Us', href: '#about' },
  portrait: 'https://picsum.photos/seed/barstone-portrait/766/926',
}

export const about = {
  statement: "The lawyer's truth is not truth but consistency or a consistent expediency",
  images: {
    wide: {
      src: 'https://picsum.photos/seed/barstone-chambers/760/520',
      alt: 'The firm reading room, lined with case reports',
    },
    tall: {
      src: 'https://picsum.photos/seed/barstone-counsel/540/520',
      alt: 'A partner and a client reviewing a settlement file',
    },
  },
  paragraph:
    'We have argued in the same courtrooms for twenty-six years, which is why our advice tends to be short. Every engagement starts with the record, then the remedy, then the cost of both — so a client can decide what a matter is worth before it is filed.',
}

export interface Service {
  title: string
  description: string
  icon: 'gavel' | 'scale' | 'siren' | 'shield'
}

export const services: Service[] = [
  {
    title: 'Get Law Advice',
    description:
      'A first hour with a partner, on the record, before you sign anything or promise anyone a deadline.',
    icon: 'gavel',
  },
  {
    title: 'Review The Case',
    description:
      'We read the file the way the other side will, then tell you which paragraphs carry the argument.',
    icon: 'scale',
  },
  {
    title: 'Winning Guarantee',
    description:
      'A written fee agreement with a capped budget and a decision point after every stage of the matter.',
    icon: 'siren',
  },
  {
    title: 'Full Support',
    description:
      'One partner from intake to closing, with the paralegal, the accountant and the surveyor already briefed.',
    icon: 'shield',
  },
]

export interface CaseStudy {
  caption: string
  note: string
  image: string
  alt: string
}

export const caseStudies = {
  heading: 'Recent Case Study',
  intro:
    'Three matters settled this year, each one closed before it reached a courtroom because the record was assembled properly the first time.',
  items: [
    {
      caption: 'Shareholder Dispute',
      note: 'Deadlock resolved in eleven weeks',
      image: 'https://picsum.photos/seed/barstone-case-boardroom/720/560',
      alt: 'A boardroom table with a signed settlement in the centre',
    },
    {
      caption: 'Commercial Lease',
      note: 'Nine-year term renegotiated',
      image: 'https://picsum.photos/seed/barstone-case-lease/720/560',
      alt: 'The facade of a leased commercial building',
    },
    {
      caption: 'Estate Planning',
      note: 'Four generations, one trust deed',
      image: 'https://picsum.photos/seed/barstone-case-estate/720/560',
      alt: 'A desk with a will, a seal and a pair of reading glasses',
    },
  ] satisfies CaseStudy[],
}

export interface Attorney {
  name: string
  role: string
  email: string
  portrait: string
  alt: string
}

export const attorneys = {
  heading: 'Meet Our Attorneys',
  intro:
    'Three partners, three practices, one filing cabinet. Each of them answers their own telephone and signs their own letters.',
  people: [
    {
      name: 'Adrian Vance',
      role: 'Managing Partner',
      email: 'a.vance@barstone.law',
      portrait: 'https://picsum.photos/seed/barstone-attorney-vance/560/640',
      alt: 'Adrian Vance, managing partner',
    },
    {
      name: 'Helena Marsh',
      role: 'Finance Lawyer',
      email: 'h.marsh@barstone.law',
      portrait: 'https://picsum.photos/seed/barstone-attorney-marsh/560/640',
      alt: 'Helena Marsh, finance lawyer',
    },
    {
      name: 'Curtis Blake',
      role: 'Litigation Lawyer',
      email: 'c.blake@barstone.law',
      portrait: 'https://picsum.photos/seed/barstone-attorney-blake/560/640',
      alt: 'Curtis Blake, litigation lawyer',
    },
  ] satisfies Attorney[],
}

export const consultation = {
  statement: 'Bring us the matter that keeps you awake and we will tell you, in one hour, what it is worth.',
  cta: { label: 'Request Free Consultation', href: '#contact' },
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'They read four years of correspondence in a weekend and found the one letter that settled it. I have not had to think about that contract since.',
    name: 'Daniel Whitmore',
    role: 'General Counsel, Haversham Group',
    avatar: 'https://picsum.photos/seed/barstone-quote-1/110/110',
  },
  {
    quote:
      'Barstone told me my case was worth less than I hoped, explained why, and then won more than that. The honesty was the part I paid for.',
    name: 'Richard Calloway',
    role: 'Founder, Calloway & Finch',
    avatar: 'https://picsum.photos/seed/barstone-quote-2/110/110',
  },
  {
    quote:
      'Our trust deed had been copied forward since 1978. Helena rebuilt it in a fortnight and the family signed without a single argument.',
    name: 'Marianne Oduya',
    role: 'Trustee, Ellsworth Trust',
    avatar: 'https://picsum.photos/seed/barstone-quote-3/110/110',
  },
  {
    quote:
      'A lease dispute that would have cost us a warehouse. One partner, three letters, and the landlord came to the table.',
    name: 'Peter Salinas',
    role: 'Operations Director, Northgate Logistics',
    avatar: 'https://picsum.photos/seed/barstone-quote-4/110/110',
  },
]

export interface Post {
  category: string
  date: string
  title: string
  excerpt: string
  likes: number
  comments: number
  image: string
  alt: string
}

export const blog = {
  heading: 'Latest From Blog',
  intro:
    'Notes from the practice — short, unedited and written for clients rather than for other lawyers.',
  posts: [
    {
      category: 'Contract',
      date: 'March 30, 2026',
      title: 'What a warranty actually promises',
      excerpt:
        'A warranty is not a guarantee that nothing will break. It is a promise about who pays when it does, and that distinction decides most disputes.',
      likes: 0,
      comments: 2,
      image: 'https://picsum.photos/seed/barstone-blog-warranty/720/480',
      alt: 'A contract page annotated in the margin',
    },
    {
      category: 'Property',
      date: 'March 12, 2026',
      title: 'Read the lease before you sign the lease',
      excerpt:
        'The clause that costs tenants the most is rarely the rent. It is the repair schedule nobody reads until the roof fails in February.',
      likes: 0,
      comments: 2,
      image: 'https://picsum.photos/seed/barstone-blog-lease/720/480',
      alt: 'Keys on top of a printed lease',
    },
    {
      category: 'Estate',
      date: 'February 24, 2026',
      title: 'When a handshake stops being enough',
      excerpt:
        'Families who never argued about money still argue about a house. A deed written in plain language is cheaper than a decade of silence.',
      likes: 0,
      comments: 2,
      image: 'https://picsum.photos/seed/barstone-blog-estate/720/480',
      alt: 'A house key beside a signed deed',
    },
  ] satisfies Post[],
}

export const footer = {
  heading: 'Our Service',
  serviceLinks: [
    { label: 'Family Law', href: '#services' },
    { label: 'Corporate', href: '#services' },
    { label: 'Litigation', href: '#services' },
    { label: 'Property', href: '#services' },
    { label: 'Employment', href: '#services' },
    { label: 'Estate Planning', href: '#services' },
  ],
  contact: {
    heading: 'Contact Info',
    address: '18 Barstone Row, Suite 900, Portland, OR 97204',
    phone: '+1 (503) 555-0148',
    email: 'hello@barstone.law',
    website: 'www.barstone.law',
  },
  instagram: {
    heading: 'Instagram',
    tiles: [
      { src: 'https://picsum.photos/seed/barstone-tile-1/300/300', alt: 'The firm library' },
      { src: 'https://picsum.photos/seed/barstone-tile-2/300/300', alt: 'A courtroom bench' },
      { src: 'https://picsum.photos/seed/barstone-tile-3/300/300', alt: 'A case file on a desk' },
      { src: 'https://picsum.photos/seed/barstone-tile-4/300/300', alt: 'The firm entrance' },
      { src: 'https://picsum.photos/seed/barstone-tile-5/300/300', alt: 'A signing on the record' },
      { src: 'https://picsum.photos/seed/barstone-tile-6/300/300', alt: 'A partner at the lectern' },
    ],
  },
  menu: [
    { label: 'Home', href: '#top' },
    { label: 'Services', href: '#services' },
    { label: 'Careers', href: '#attorneys' },
    { label: 'FAQ', href: '#contact' },
  ],
  socials: [
    { network: 'Twitter', label: 'Barstone on Twitter', href: 'https://twitter.com/' },
    { network: 'Instagram', label: 'Barstone on Instagram', href: 'https://instagram.com/' },
    { network: 'Facebook', label: 'Barstone on Facebook', href: 'https://facebook.com/' },
  ],
}

export const attribution = { label: 'Component Dock', href: 'https://www.componentdock.com/' }
