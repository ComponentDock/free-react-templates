/** Estately — one-page real-estate landing copy and imagery.
 *  Design tokens + section copy paraphrased to the same content kinds as the
 *  reference; images are seeded placeholders (picsum) chosen for subject fit. */

export const brand = {
  name: 'Estately',
  tagline: 'Real Estate',
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Buy', href: '#buy' },
  {
    label: 'Pages',
    href: '#pages',
    dropdown: ['About Us', 'Search Result', 'Property'],
  },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export type NavLink = (typeof navLinks)[number]

export const hero = {
  heading: 'Search by state, postcode or suburb',
  disclaimer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium.',
  background: 'https://picsum.photos/id/30/1920/1080',
} as const

export const searchTabs = ['Buy', 'Rent', 'Sell', 'Property Value', 'Agents'] as const

export const intro = {
  title: 'Sell Faster. Save Thousands.',
  rows: [
    {
      heading: 'We charge 2% total. No hidden fees or upfront costs.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, sem urna laoreet orci, eget accumsan odio justo ac nunc.',
      image: 'https://picsum.photos/id/464/600/450',
      imageRight: true,
    },
    {
      heading: 'How Much Can You Save? We work for you, not commission.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, sem urna laoreet orci, eget accumsan odio justo ac nunc.',
      image: 'https://picsum.photos/id/417/600/450',
      imageRight: false,
    },
  ],
} as const

export const properties = {
  title: 'Recently Add Homes',
  cards: [
    {
      badge: 'New',
      price: '$469,000',
      title: '3 Bedrooms Townhouse',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium.',
      image: 'https://picsum.photos/id/164/600/450',
    },
    {
      badge: 'Offer',
      price: '$369,000',
      title: '3 Bedrooms Townhouse',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium.',
      image: 'https://picsum.photos/id/212/600/450',
    },
    {
      badge: 'New',
      price: '$560,000',
      title: '3 Bedrooms Townhouse',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium.',
      image: 'https://picsum.photos/id/183/600/450',
    },
  ],
} as const

export const loan = {
  title: 'See If You Qualify for a Mortgage',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, sem urna laoreet orci.',
  incomePlaceholder: 'Your income',
  amountPlaceholder: 'Amount needed',
} as const

export const stories = {
  title: 'Seller Success Stories',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, sem urna laoreet orci, eget accumsan odio justo ac nunc.',
  image: 'https://picsum.photos/id/235/600/450',
} as const

export const footer = {
  blurb:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, sem urna laoreet orci, eget accumsan odio justo ac nunc.',
  columns: [
    {
      heading: 'Company',
      links: ['About us', 'Services', 'Clients', 'Testimonials', 'Carrers'],
    },
    {
      heading: 'For Buyers',
      links: ['Buy with us', 'Papers', 'Clients', 'Testimonials', 'Homes'],
    },
    {
      heading: 'For Sellers',
      links: ['Seel With us', 'What do You Need', 'Clients', 'Testimonials', 'Guideline'],
    },
    {
      heading: 'For Renters',
      links: ['Rent with us', 'Guidelines', 'Apartments', 'Flats', 'Houses'],
    },
  ],
} as const
