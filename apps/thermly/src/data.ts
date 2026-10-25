/**
 * Every string the page renders lives here, so the sections stay presentational
 * and the tests can assert copy without reading markup.
 *
 * The business is fictional: Millbrook in Cedar County is an invented demo
 * service area, and the phone number is a reserved 555 number.
 */

export const brand = {
  name: 'Thermly',
  descriptor: 'Heating & Air',
  city: 'Millbrook',
  county: 'Cedar County',
  licence: 'Licence #1048832 · C-20',
  phone: '(555) 020-0200',
  phoneHref: 'tel:+15550200200',
  email: 'hello@thermly.example',
  address: '4120 Cedar Ridge Avenue, Millbrook, CA 93614',
  tagline:
    'Licensed heating and cooling contractor in Millbrook. Book a real arrival window online for air conditioning, heating and indoor air quality.',
  copyright: '© 2026 Thermly Heating & Air. All rights reserved.',
  rating: '4.8',
  ratingNote: '340+ reviews on Google · sample data',
} as const

export const navLinks = [
  { label: 'Services', href: '#seasons' },
  { label: 'Maintenance plans', href: '#plans' },
  { label: 'Service areas', href: '#areas' },
  { label: 'About', href: '#why-us' },
  { label: 'Blog', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroTicks = [
  'A two-hour window, not a whole day',
  'Diagnostic fee waived if you go ahead',
  'Part prices quoted before we fit them',
  'NATE-certified technicians, no subcontractors',
] as const

export type Season = 'cooling' | 'heating'

export interface ServiceCard {
  title: string
  blurb: string
  price: string
}

export const seasonCopy: Record<Season, { title: string; description: string }> = {
  cooling: {
    title: `It is cooling season in ${brand.city}`,
    description:
      'Between May and September the failures are capacitors, condensers and refrigerant. Here is what we are fitting and what it costs.',
  },
  heating: {
    title: `It is heating season in ${brand.city}`,
    description:
      'From November the calls change to ignition faults, heat exchangers and heat pumps that will not defrost. Same technicians, different parts on the van.',
  },
}

export const services: Record<Season, ServiceCard[]> = {
  cooling: [
    {
      title: 'AC not cooling',
      blurb:
        'Capacitor, contactor, fan motor or a refrigerant leak. We diagnose first and quote the part before fitting it.',
      price: 'From $89 diagnostic',
    },
    {
      title: 'Cooling tune-up',
      blurb:
        'Coil clean, refrigerant check, amp draw on the compressor and a written condition report.',
      price: 'From $129',
    },
    {
      title: 'AC replacement',
      blurb:
        'Right-sized by Manual J, not by matching the old badge. Quoted with two or three efficiency options.',
      price: 'From $6,400 installed',
    },
    {
      title: 'Ductless mini-split',
      blurb: 'For additions, converted garages and rooms the ducts never reached properly.',
      price: 'From $3,900 per zone',
    },
    {
      title: 'Thermostat upgrade',
      blurb: 'Smart thermostats fitted and configured against your system, not left on defaults.',
      price: 'From $320 fitted',
    },
    {
      title: 'Duct sealing',
      blurb:
        'Cedar County attics run hot. Leaking ducts throw the cooling you paid for into the roof space.',
      price: 'From $850',
    },
  ],
  heating: [
    {
      title: 'No heat',
      blurb:
        'Ignitors, flame sensors, limit switches and control boards. Most no-heat calls are fixed on the first visit.',
      price: 'From $89 diagnostic',
    },
    {
      title: 'Heating tune-up',
      blurb:
        'Combustion analysis, heat exchanger inspection and a carbon monoxide test in the living space.',
      price: 'From $129',
    },
    {
      title: 'Furnace replacement',
      blurb:
        'Gas furnaces sized to the house, with the flue and gas run brought up to current code.',
      price: 'From $4,800 installed',
    },
    {
      title: 'Heat pump service',
      blurb: 'Defrost faults, reversing valves and auxiliary heat that runs when it should not.',
      price: 'From $89 diagnostic',
    },
    {
      title: 'Safety inspection',
      blurb:
        'A carbon monoxide and heat exchanger check, written up whether or not you need a repair.',
      price: 'From $99',
    },
    {
      title: 'Insulation top-up',
      blurb: 'The cheapest heating upgrade in most Millbrook houses built before 1990.',
      price: 'Quoted on site',
    },
  ],
}

export const servicesFootnote =
  'Starting prices are shown for guidance. Your quote is fixed in writing before any part is fitted.'

export const reasons = [
  {
    title: 'Two hours, not eight',
    body: 'You book a two-hour window and we text when the technician leaves the previous job. If we are going to miss it, you hear from us before it starts.',
  },
  {
    title: 'The price of the part, before it goes in',
    body: 'We diagnose, then show you the part and what it costs. Nothing gets fitted while you are out of the room.',
  },
  {
    title: 'Sized properly, not matched to the old one',
    body: 'Replacements are sized with a Manual J load calculation. An oversized system short-cycles, costs more and dehumidifies worse.',
  },
  {
    title: 'Employed technicians',
    body: 'Eleven NATE-certified technicians on staff. No subcontractors, no commission on parts.',
  },
] as const

export const reasonsCaption =
  'A Thermly technician and van, photographed on a call in Cedar County.'

export const steps = [
  {
    ordinal: '01',
    title: 'You pick the window',
    body: 'Choose the job, the day and a two-hour arrival window. You get a text confirmation, not a call back.',
    duration: 'Under a minute',
  },
  {
    ordinal: '02',
    title: 'We diagnose and quote',
    body: 'The technician tests the system, shows you the fault and writes a price. You approve before anything is fitted.',
    duration: 'Usually 45 minutes',
  },
  {
    ordinal: '03',
    title: 'We fix it and log it',
    body: 'Most repairs are done on the visit. You get the old part, the warranty and a note of what was measured.',
    duration: 'Most calls, one visit',
  },
] as const

export interface Plan {
  name: string
  price: string
  blurb: string
  features: string[]
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Seasonal',
    price: '$14',
    blurb: 'One system, two visits a year.',
    features: [
      'Spring cooling tune-up',
      'Autumn heating tune-up',
      '10% off repairs',
      'No overtime charge on evenings',
    ],
  },
  {
    name: 'Priority',
    price: '$24',
    blurb: 'Same visits, plus you jump the queue in a heatwave.',
    features: [
      'Everything in Seasonal',
      'Same-day booking in peak season',
      '15% off repairs',
      'Diagnostic fee waived every time',
      'Filters supplied and fitted',
    ],
    featured: true,
  },
  {
    name: 'Whole home',
    price: '$39',
    blurb: 'Up to three systems, one household.',
    features: [
      'Everything in Priority',
      'Up to three systems covered',
      'Annual duct inspection',
      'Air quality report',
    ],
  },
]

export const plansFootnote = 'Plans are billed monthly. Cancel any time with 30 days notice.'

export const towns = [
  'Millbrook',
  'Cedar Falls',
  'Ashgrove',
  'Kingsbury',
  'Selby',
  'Sangerfield',
  'Reedham',
  'Fowler',
  'Kerman',
  'Vista Alto',
  'Hanford',
  'Tulare',
  'Chowchilla',
  'Parlier',
  'Dinuba',
  'Firebaugh',
] as const

export const areasLead = `We cover ${brand.county} and the towns listed here, with a technician based north of Millbrook and another down towards Selby, so the windows hold.`

export const areasFootnote =
  'If your town is not listed, call and we will tell you honestly whether we cover it.'

export const reviews = [
  {
    quote:
      'Picked a window on the website on a Sunday night and someone was here Monday at ten past eight. Nobody else in this town lets you do that.',
    initial: 'R',
    name: 'Renee K.',
    town: 'Cedar Falls',
  },
  {
    quote:
      'They showed me the burnt capacitor, told me the price, and had it running in twenty minutes. The last company wanted to replace the whole condenser.',
    initial: 'A',
    name: 'Anthony V.',
    town: 'Hanford',
  },
  {
    quote:
      'The load calculation came back two sizes smaller than the unit we had. Our summer bill dropped and the house is finally even upstairs.',
    initial: 'S',
    name: 'Sofia M.',
    town: 'Kingsbury',
  },
] as const

export const reviewsFootnote = `Reviews from ${brand.county} customers, collected after the visit.`

export const faqs = [
  {
    question: 'Do you really hold the two-hour window?',
    answer:
      'We hold it or we tell you. If a job before you overruns you get a text before your window opens with a new one, and the choice to rebook. The windows are real because we cap the number of calls per technician per day.',
  },
  {
    question: 'What does the diagnostic cost?',
    answer:
      'The diagnostic is quoted when you book and waived if you go ahead with the repair that day. Maintenance plan members never pay it.',
  },
  {
    question: 'Will you quote a replacement without pressuring me?',
    answer:
      'We quote two or three efficiency options with the running cost of each, and we leave it in writing. If your system has years left in it we will say so, because an unnecessary replacement is the fastest way to lose a maintenance customer.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Our licence number is on every page of this site. We carry liability insurance and workers compensation, and we will send certificates before we start if your building requires them.',
  },
  {
    question: 'Do you work on heat pumps?',
    answer:
      'Yes, including cold-climate and dual-fuel systems. Heat pumps are most of what we now install in Millbrook, and defrost faults are one of the most common calls we take in January.',
  },
] as const

export const bookingServices = [
  { value: 'no-cooling', label: 'No cooling' },
  { value: 'no-heat', label: 'No heat' },
  { value: 'tune-up', label: 'Tune-up' },
  { value: 'install-quote', label: 'Replacement quote' },
  { value: 'air-quality', label: 'Air quality' },
] as const

export const arrivalWindows = [
  { label: '8am to 10am', note: 'First call of the day' },
  { label: '10am to 12pm', note: null },
  { label: '1pm to 3pm', note: null },
  { label: '3pm to 5pm', note: 'Most popular' },
] as const

/**
 * Demo availability: `[dayIndex, windowIndex]` pairs the sample week already
 * sells out. Day 0 loses its first two windows, which is what makes the
 * taken-slot state visible on first paint.
 */
export const takenSlots: ReadonlyArray<readonly [number, number]> = [
  [0, 0],
  [0, 1],
  [1, 3],
  [2, 0],
  [4, 2],
  [5, 1],
  [6, 0],
  [6, 3],
]

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Air conditioning', href: '#seasons' },
      { label: 'Heating', href: '#seasons' },
      { label: 'Ducts and airflow', href: '#seasons' },
      { label: 'Indoor air quality', href: '#seasons' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#why-us' },
      { label: 'Service areas', href: '#areas' },
      { label: 'Maintenance plans', href: '#plans' },
      { label: 'Blog', href: '#reviews' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Book a visit', href: '#book' },
      { label: 'Contact', href: '#contact' },
      { label: 'Questions', href: '#faq' },
      { label: 'Terms', href: '#faq' },
    ],
  },
] as const

export const socialLinks = [
  { label: 'Twitter', href: 'https://x.com/', mark: 'X' },
  { label: 'Instagram', href: 'https://www.instagram.com/', mark: 'IG' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', mark: 'in' },
] as const
