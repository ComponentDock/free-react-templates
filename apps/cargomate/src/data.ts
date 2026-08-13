export const topStrip = {
  phone: '012-6532-568-9746',
  email: 'emergency@cargomate.io',
  socials: ['facebook', 'twitter', 'dribbble', 'behance'] as const,
} as const

export interface NavLink {
  label: string
  href: string
  current: boolean
  submenu?: readonly string[]
}

export const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '#home', current: true },
  { label: 'About', href: '#about', current: false },
  { label: 'Services', href: '#services', current: false },
  { label: 'Pages', href: '#features', current: false, submenu: ['Elements'] },
  { label: 'Blog', href: '#blog', current: false, submenu: ['Blog', 'Blog Details'] },
  { label: 'Contact', href: '#contact', current: false },
] as const

export const hero = {
  id: 'home',
  headline: 'Solid Super Service',
  subtext:
    'For all of your shipping and freight needs, our team handles every cargo with care — from a single parcel to full container loads, on time and on budget.',
  cta: 'Explore More',
  image: 'https://picsum.photos/seed/cargomate-1/1600/800',
} as const

export const features = {
  items: [
    {
      icon: 'package',
      title: 'Shipment Tracking',
      text: 'Follow every consignment in real time with live status updates from pickup to final delivery.',
      link: 'Find your cargo',
    },
    {
      icon: 'help',
      title: 'Have a Question?',
      text: 'Our support desk answers around the clock — customs, routes, rates, or anything else on your mind.',
      link: 'Contact Us',
    },
    {
      icon: 'file',
      title: 'Get a Quote',
      text: 'Receive a tailored price for your shipment in minutes by telling us what you need to move.',
      link: 'Start a quote',
    },
    {
      icon: 'calc',
      title: 'Shipping Calculator',
      text: 'Estimate freight costs by weight, dimensions, and destination before you book.',
      link: 'Get Estimate',
    },
  ] as const,
  eyebrow: 'About Our Company',
  heading: "We're Carefully Delivering your happiness.",
  copy: [
    'If you are looking for a dependable logistics partner, we move your goods with the same care we would our own.',
    'From warehousing to last-mile delivery, our global network keeps your supply chain moving without a hitch.',
  ],
  cta: 'Learn More About Us',
} as const

export const about = {
  id: 'about',
  eyebrow: 'About Our Company',
  heading: 'Some statistics that we want to show our viewers',
  brands: ['PACIFIC LINE', 'GLOBAL SHIP', 'MERIDIAN', 'ATLAS FREIGHT', 'NORDCARGO', 'ORIENT STAR'],
  counters: [
    { value: 2500, prefix: '$', suffix: '+', icon: 'package', label: 'Packages Delivered' },
    { value: 500, prefix: '$', suffix: '+', icon: 'users', label: 'Satisfied Clients' },
    { value: 70, prefix: '$', suffix: '+', icon: 'globe', label: 'Contries reach' },
    { value: 5000, prefix: '', suffix: '', icon: 'scale', label: 'Tons of goods' },
  ] as const,
} as const

export const services = {
  id: 'services',
  eyebrow: 'Our Offered Services',
  heading: 'We offer Various Services to get you covered',
  cards: [
    {
      image: 'https://picsum.photos/seed/cargomate-2/560/400',
      title: 'Did not find your Package',
      text: 'Lost shipments happen — our tracing team locates your cargo and gets it moving again, wherever it is in the world.',
      link: 'Learn More',
    },
    {
      image: 'https://picsum.photos/seed/cargomate-3/560/400',
      title: 'Did not find your Package',
      text: 'Lost shipments happen — our tracing team locates your cargo and gets it moving again, wherever it is in the world.',
      link: 'Learn More',
    },
    {
      image: 'https://picsum.photos/seed/cargomate-4/560/400',
      title: 'Did not find your Package',
      text: 'Lost shipments happen — our tracing team locates your cargo and gets it moving again, wherever it is in the world.',
      link: 'Learn More',
    },
  ] as const,
} as const

export const quote = {
  id: 'quote',
  eyebrow: 'Get a quote now!',
  heading: 'Check the estimated cost for your requesting goods',
  tabs: [
    { label: 'Get an estimation', key: 'estimation' },
    { label: 'Track Shipment', key: 'track' },
  ] as const,
  fields: [
    'First name',
    'Last name',
    'Email Address',
    'Cargo Type',
    'Country of Origin',
    'Destination',
    'Quantity',
    'Weight',
    'Width',
    'Height',
  ] as const,
  submit: 'Request a Quote',
  success:
    'Thank you — your request has been received. Our team will reply within one business day.',
} as const

export const testimonials = {
  eyebrow: 'User Feedback',
  heading: 'What our customers feedback for amazing service.',
  slides: [
    {
      quote:
        'They delivered a full container ahead of schedule, with constant updates along the way. Easily the most reliable freight partner we have used.',
      name: 'Marvel Maison',
      role: 'Chief Executive, Amazon',
      avatar: 'https://picsum.photos/seed/cargomate-9/70/70',
    },
    {
      quote:
        'Customs clearance that usually takes days was handled in hours. Their team truly understands international shipping.',
      name: 'Marvel Maison',
      role: 'Chief Executive, Amazon',
      avatar: 'https://picsum.photos/seed/cargomate-10/70/70',
    },
  ] as const,
} as const

export const blog = {
  id: 'blog',
  eyebrow: 'Latest Blog Posts',
  heading: 'Check the latest posts from our blog',
  posts: [
    {
      image: 'https://picsum.photos/seed/cargomate-5/400/300',
      title: 'Some statistics that we want to show',
      excerpt:
        'A look at the numbers behind our network — routes covered, parcels moved, and the milestones that keep us going.',
      date: '13th Mar, 2019',
      comments: '02 Comments',
      overlay: false,
    },
    {
      image: 'https://picsum.photos/seed/cargomate-6/400/300',
      title: 'Some statistics that we want to show',
      excerpt:
        'A look at the numbers behind our network — routes covered, parcels moved, and the milestones that keep us going.',
      date: '13th Mar, 2019',
      comments: '02 Comments',
      overlay: false,
    },
    {
      image: 'https://picsum.photos/seed/cargomate-7/800/600',
      title: 'Some statistics that we want to show',
      excerpt:
        'A look at the numbers behind our network — routes covered, parcels moved, and the milestones that keep us going.',
      date: '13th Mar, 2019',
      comments: '02 Comments',
      overlay: true,
    },
  ] as const,
} as const

export const cta = {
  kicker: 'Get a quick response from our team',
  heading: 'Please feel free to reach us',
  button: 'Explore More',
} as const

export const footer = {
  id: 'contact',
  about:
    'Cargomate moves freight across 70+ countries with a single promise: your cargo arrives safe and on time.',
  newsletter: {
    heading: 'Newsletter',
    line: 'Stay update with our latest',
    placeholder: 'Email Address',
  } as const,
  follow: {
    heading: 'Follow Us',
    line: 'Let us be social',
    socials: ['facebook', 'twitter', 'dribbble', 'behance'] as const,
  } as const,
} as const
