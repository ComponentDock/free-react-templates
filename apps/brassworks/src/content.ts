/** Catalogue card: one shop category with the number of lines held on site. */
export interface Category {
  name: string
  count: string
  seed: string
}

export const categories: Category[] = [
  { name: 'Fixtures', count: '180 lines stocked', seed: 'brassworks-cat-fixtures' },
  { name: 'Water heaters', count: '64 lines stocked', seed: 'brassworks-cat-heaters' },
  { name: 'Pipe and fittings', count: '900 lines stocked', seed: 'brassworks-cat-pipe' },
  { name: 'Tools', count: '240 lines stocked', seed: 'brassworks-cat-tools' },
]

/** A featured product: square photo, serif name, three spec rows, a price line. */
export interface Product {
  title: string
  blurb: string
  specs: { label: string; value: string }[]
  price: string
  seed: string
}

export const products: Product[] = [
  {
    title: 'Wall-hung WC frame',
    blurb: 'Concealed cistern frame with a dual flush plate, built to standard stud spacing.',
    specs: [
      { label: 'Projection', value: '500 mm' },
      { label: 'Flush', value: '6/3 litre dual' },
      { label: 'Stock', value: '40+ on site' },
    ],
    price: 'Trade price on account',
    seed: 'brassworks-wc-frame',
  },
  {
    title: 'Tankless gas heater',
    blurb: 'Condensing tankless, sized for three outlets running at the same time.',
    specs: [
      { label: 'Flow rate', value: '9.8 gpm' },
      { label: 'Efficiency', value: '0.96 UEF' },
      { label: 'Stock', value: '12 on site' },
    ],
    price: 'Trade price on account',
    seed: 'brassworks-heater',
  },
  {
    title: 'Press fittings, copper',
    blurb: 'The full range in half inch to two inch, with press tool hire on the counter.',
    specs: [
      { label: 'Sizes', value: '1/2 in - 2 in' },
      { label: 'Standard', value: 'ASME B16.51' },
      { label: 'Stock', value: 'Deep' },
    ],
    price: 'Trade price on account',
    seed: 'brassworks-press-fittings',
  },
  {
    title: 'Sectional drain machine',
    blurb: 'For three to six inch lines, available to buy or to hire by the day.',
    specs: [
      { label: 'Capacity', value: '3 in - 6 in' },
      { label: 'Cable', value: '100 ft sections' },
      { label: 'Hire', value: 'Day or week' },
    ],
    price: 'Hire from $95 a day',
    seed: 'brassworks-drain-machine',
  },
]

/** The shelf, as eight supplier tiles in one hairline mosaic. */
export const brands: { name: string; range: string }[] = [
  { name: 'Ridgeway', range: 'Fixtures and brassware' },
  { name: 'Calder', range: 'Water heaters' },
  { name: 'Ironline', range: 'Pipe and fittings' },
  { name: 'Toolright', range: 'Tools and hire' },
  { name: 'Kelvane', range: 'Valves and controls' },
  { name: 'Basin Row', range: 'Showroom ranges' },
  { name: 'Duravex', range: 'Drainage' },
  { name: 'Provale', range: 'Consumables' },
]

/** The trade argument, in three columns of plain terms. */
export const terms: { title: string; body: string }[] = [
  {
    title: 'Trade pricing',
    body: 'Banded by volume and reviewed every quarter, not fixed at whatever you negotiated the year you opened.',
  },
  {
    title: 'Thirty-day terms',
    body: 'Statement at month end, one invoice, and a named person on the phone who knows your account.',
  },
  {
    title: 'Collection, not delivery slots',
    body: 'Order by four, collect from the counter the next morning. No waiting in for a van that says "before six".',
  },
]

export const navLinks: { label: string; href: string }[] = [
  { label: 'Catalogue', href: '#featured' },
  { label: 'Brands', href: '#brands' },
  { label: 'Trade accounts', href: '#trade' },
  { label: 'Showroom', href: '#showroom' },
  { label: 'Contact', href: '#contact' },
]

export const address = ['Brassworks Supply Co.', '1480 Foundry Row', 'Sacramento, CA 95814']

export const hours: { day: string; time: string }[] = [
  { day: 'Monday to Friday', time: '06:30 - 17:00' },
  { day: 'Saturday', time: '07:00 - 13:00' },
  { day: 'Sunday', time: 'Closed' },
]

export const contact = {
  phone: '(555) 010-0231',
  phoneHref: 'tel:5550100231',
  email: 'counter@brassworks.example',
}

export const footerColumns: { head: string; links: { label: string; href: string }[] }[] = [
  {
    head: 'Catalogue',
    links: [
      { label: 'Fixtures', href: '#featured' },
      { label: 'Water heaters', href: '#featured' },
      { label: 'Pipe and fittings', href: '#featured' },
      { label: 'Tools', href: '#featured' },
    ],
  },
  {
    head: 'Company',
    links: [
      { label: 'Catalogue', href: '#featured' },
      { label: 'Brands', href: '#brands' },
      { label: 'Trade accounts', href: '#trade' },
      { label: 'Showroom', href: '#showroom' },
    ],
  },
  {
    head: 'Support',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
    ],
  },
]

/** Sample-content notices — a licensee needs to know what to replace. */
export const notices = {
  products: 'Sample products and stock figures for template demonstration. Replace with your own before launch.',
  brands:
    'Sample brand names for template demonstration. Replace with the ranges you actually stock — listing a brand you cannot supply is the fastest way to lose an account customer.',
  trade: 'Sample terms for template demonstration.',
  showroom:
    'Sample details for template demonstration. Bring the drawings and we will pull the matching ranges before you arrive.',
}
