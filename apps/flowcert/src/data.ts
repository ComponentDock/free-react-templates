/**
 * Every string the page renders lives here, so the sections stay presentational
 * and the tests can assert copy without reading markup.
 *
 * The business is fictional: Ridgemont in Kesler County is an invented demo
 * service area, every town in the coverage list is invented, and the phone
 * number is a reserved 555 number.
 */

export const brand = {
  name: 'Flowcert',
  descriptor: 'Backflow Testing',
  city: 'Ridgemont',
  region: 'OR',
  county: 'Kesler County',
  certification: 'OR #04127',
  phone: '(555) 150-1500',
  phoneHref: 'tel:5551501500',
  email: 'letters@flowcert.example',
  address: '1280 Alder Way, Ridgemont, OR 97041',
  tagline:
    'Certified backflow testing across Kesler County: a published price, a twenty-minute test, and the result filed with the authority for you.',
  copyright: '© 2026 Flowcert. All rights reserved.',
  rating: '4.9',
  ratingNote: '380+ reviews on Google · sample data',
} as const

export const navLinks = [
  { label: 'Got a letter?', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Services', href: '#services' },
  { label: 'Service areas', href: '#areas' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroTicks = [
  'Fixed price, published, no survey first',
  'Results filed with the authority for you',
  "Reminder before next year's deadline",
  'Repairs quoted at the test, not on a second visit',
] as const

export interface Step {
  ordinal: string
  title: string
  body: string
  link: string
}

export const steps: Step[] = [
  {
    ordinal: '01',
    title: 'Find the device on the letter',
    body: 'The letter names the device and where the authority believes it sits. Most are in a pit by the meter, under a lid you have probably never opened.',
    link: 'You may not know where',
  },
  {
    ordinal: '02',
    title: 'We test it, on site, in twenty minutes',
    body: 'A certified tester opens the pit, checks the relief valve and the check assembly, and writes down the readings. No water is shut off to the house.',
    link: 'Annual, by a certified tester',
  },
  {
    ordinal: '03',
    title: 'We file the result the same day',
    body: 'The certificate goes to the water authority and to you. If the device failed, the failure notice is filed too — that is the part that keeps the penalty away.',
    link: 'We file it',
  },
  {
    ordinal: '04',
    title: 'If it failed, you decide about the repair',
    body: 'A failed device usually needs a rebuild kit or a new device. We quote it at the test with the part price on the page, and you can say no and call someone else.',
    link: 'Usually a small repair',
  },
]

export interface PriceCell {
  title: string
  blurb: string
  price: string
}

export const prices: PriceCell[] = [
  {
    title: 'Residential irrigation device',
    blurb: 'The one most letters are about. Test, certificate and filing in one visit.',
    price: '$85',
  },
  {
    title: 'Each additional device',
    blurb: 'Second and third devices at the same address, tested in the same appointment.',
    price: '$45',
  },
  {
    title: 'Commercial device, up to 2 inch',
    blurb: 'Shops, cafés and small units. Includes the test report the authority asks for.',
    price: '$135',
  },
  {
    title: 'Commercial device, over 2 inch',
    blurb: 'Larger assemblies, usually on a dedicated fire or process line. Priced after the size is confirmed.',
    price: 'From $195',
  },
  {
    title: 'Repair kit and retest',
    blurb: 'A failed check assembly rebuilt with the manufacturer kit, then retested and refiled.',
    price: 'From $165',
  },
  {
    title: 'Device replacement',
    blurb: 'When the body itself has failed. Quoted with the part price in front of you.',
    price: 'Quoted at the test',
  },
]

export const pricesFootnote =
  'Sample pricing for demonstration. Your price is fixed when you book, and nothing is added at the visit.'

export const services: PriceCell[] = [
  {
    title: 'Annual certification testing',
    blurb: 'The service the letter asks for: test, certificate, filing, and a copy for your records.',
    price: 'From $85',
  },
  {
    title: 'Repairs and rebuild kits',
    blurb: 'Failed relief valves and check assemblies rebuilt to the manufacturer specification.',
    price: 'From $165',
  },
  {
    title: 'Device replacement',
    blurb: 'A new assembly fitted, tested and certified, with the old one taken away.',
    price: 'Quoted at the test',
  },
  {
    title: 'New installation certification',
    blurb: 'A newly fitted device certified before the line is signed off by the inspector.',
    price: 'From $145',
  },
  {
    title: 'Property portfolios',
    blurb: 'Several addresses on one schedule, with one filing summary per property.',
    price: 'Quoted per portfolio',
  },
  {
    title: 'Annual reminders',
    blurb: 'A note a month before the deadline, so the letter never arrives as a surprise.',
    price: 'Free',
  },
]

export const servicesFootnote =
  'Sample content for demonstration. Every service is carried out by a certified tester.'

export const reasons = [
  {
    title: 'The price is published, before anyone visits',
    body: 'Six prices are on this page. A test is $85 for the device most letters are about, and the filing is included, so the number you read is the number you pay.',
  },
  {
    title: 'The filing is the service, not an extra',
    body: 'A test that is not filed is a test you will be asked to do again. We send the certificate to the authority the same day and keep the receipt.',
  },
  {
    title: 'Twenty minutes, and the water stays on',
    body: 'The device is tested in place. Nobody needs to be home, no water is shut off, and the pit lid goes back as we found it.',
  },
  {
    title: 'The reminder is the actual product',
    body: 'The letter arrives because an annual deadline passed. Our reminder lands a month earlier, which is the only reason a customer of ours ever gets a second letter.',
  },
] as const

export const reasonsEyebrow = 'Why anyone bothers'
export const reasonsHeading = 'Three reasons this exists, and one of them is real'
export const reasonsLead =
  'Backflow testing is a legal obligation dressed up as a service. The obligation is real; the dressing is where most of the money goes.'
export const reasonsCaption =
  'Replace with a photograph of your own tester and gauges before launch.'

export const towns = [
  'Ridgemont',
  'Fallbrook',
  'Kelso',
  'Aldergrove',
  'Wickham',
  'Newhall',
  'Sutter',
  'Bellcrest',
  'Harlow',
  'Vestry',
  'Copeland',
  'Marchmont',
] as const

export const areasLead = `We test across ${brand.county} and the twelve towns listed here, with one tester based north of ${brand.city} and another south of Marchmont, so appointments hold.`

export const areasFootnote =
  'Replace this list with your own towns before launch. If your town is not listed, call and we will say honestly whether we cover it.'

export const reviews = [
  {
    quote:
      'Booked on a Tuesday, tested on the Thursday, and the certificate was with the water authority before I had thought to chase it.',
    initial: 'R',
    name: 'Reggie N.',
    town: 'Fallbrook',
  },
  {
    quote:
      'They showed me the failed check assembly, told me the rebuild price from the website, and it was the same number on the invoice.',
    initial: 'A',
    name: 'Annika L.',
    town: 'Aldergrove',
  },
  {
    quote:
      'Three devices across two buildings, one appointment, one filing summary per address. That is the whole reason we moved to them.',
    initial: 'H',
    name: 'Hugo D.',
    town: 'Property manager, Ridgemont',
  },
] as const

export const reviewsBadge = 'Reviews'
export const reviewsHeading = 'What people say afterwards'
export const reviewsFootnote =
  'Sample reviews for demonstration. Testimonials are illustrative, not real customers.'

export const faqs = [
  {
    question: 'What happens if I ignore the letter?',
    answer:
      'The water authority can suspend the supply to the property until a passing test is on file. In practice most jurisdictions send a second and third notice first, and the fee rises each time. It is cheaper to test it now.',
  },
  {
    question: 'Do I have to be home?',
    answer:
      'No. The device is outside, usually in a pit by the meter. If we need access to a locked compound we will call before the visit and arrange it.',
  },
  {
    question: 'What if the device fails?',
    answer:
      'You get the failure notice, a photograph of the readings, and a price to rebuild or replace. You are under no obligation to have us do the work — the test fee is the test fee either way.',
  },
  {
    question: 'Is the filing really included?',
    answer:
      'Yes. The certificate is sent to the authority named on your letter on the day of the test, and you get a copy by email. There is no separate filing charge on this page because there is none on the invoice.',
  },
  {
    question: 'How often does this have to happen?',
    answer:
      'Annually for most devices, by a certified tester. Some commercial and fire-line assemblies are tested more often, and your letter will say which. We put the next date in the reminder list either way.',
  },
] as const

export const faqBadge = 'Questions'
export const faqHeading = 'Before you book'
export const faqLead =
  'The five things people ask on the phone, answered here so you do not have to call.'

export const bookingReasons = [
  { value: 'annual-test', label: 'Annual test' },
  { value: 'irrigation', label: 'Irrigation device' },
  { value: 'commercial', label: 'Commercial device' },
  { value: 'new-installation', label: 'New installation' },
  { value: 'failed-repair', label: 'Failed, needs repair' },
  { value: 'not-sure', label: 'I do not know' },
] as const

export const closingHeading = 'Letter on the counter?'
export const closingLine = 'Fixed price, twenty minutes, filed the same day.'

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Annual testing', href: '#services' },
      { label: 'Repairs and rebuilds', href: '#services' },
      { label: 'Device replacement', href: '#services' },
      { label: 'Property portfolios', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#why-us' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Service areas', href: '#areas' },
      { label: 'Reviews', href: '#testimonials' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Book a test', href: '#quote' },
      { label: 'Contact', href: '#contact' },
      { label: 'Questions', href: '#faq' },
      { label: 'The letter', href: '#process' },
    ],
  },
] as const

export const socialLinks = [
  { label: 'Twitter', href: 'https://x.com/', mark: 'X' },
  { label: 'Instagram', href: 'https://www.instagram.com/', mark: 'IG' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', mark: 'in' },
] as const
