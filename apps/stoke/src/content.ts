/**
 * Every string on the page, in the reference's order. Keeping the copy out of
 * the components means a test can assert the band content once and the
 * components stay layout.
 */

export const PHONE_LABEL = '(555) 060-0600'
export const PHONE_HREF = 'tel:5550600600'
export const CITY = 'Tulsa, OK'
export const DISPATCH_EMAIL = 'dispatch@stokehvac.example'
export const ADDRESS = '1420 East 15th Street, Tulsa, OK 74120'

export interface NavLink {
  readonly label: string
  readonly id: string
}

/** `Rates` folds into the services band — its six price lines are the rates. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Emergency', id: 'response' },
  { label: 'Services', id: 'services' },
  { label: 'Rates', id: 'services' },
  { label: 'Service areas', id: 'areas' },
  { label: 'About', id: 'why-us' },
  { label: 'Contact', id: 'contact' },
]

/** The bands the scroll-spy watches, in document order. */
export const BAND_IDS = ['response', 'process', 'services', 'why-us', 'areas', 'contact'] as const

export const LICENCE = 'OK MECH #00000'
export const LICENCE_LOCATION = 'Tulsa metro'

export interface ArrivalWindow {
  readonly key: string
  readonly from: number
  readonly to: number
  readonly label: string
  readonly promise: string
  readonly note: string
  readonly overnight: boolean
}

/**
 * The three shifts, with the promise each one can actually hold. The overnight
 * window wraps midnight, so its test is the wrap-aware one.
 */
export const ARRIVAL_WINDOWS: readonly ArrivalWindow[] = [
  {
    key: '7-17',
    from: 7,
    to: 17,
    label: 'Weekday daytime',
    promise: 'within 2 hours',
    note: 'Six trucks out. Most calls are reached well inside the window.',
    overnight: false,
  },
  {
    key: '17-22',
    from: 17,
    to: 22,
    label: 'Evenings to 10pm',
    promise: 'within 3 hours',
    note: 'Three trucks. After-hours rate applies and is quoted on the phone.',
    overnight: false,
  },
  {
    key: '22-7',
    from: 22,
    to: 7,
    label: 'Overnight',
    promise: 'first call at 7am',
    note: 'Two technicians on call overnight for no-heat below freezing and for anything unsafe. Everything else is booked first thing.',
    overnight: true,
  },
]

/** The pair the static markup ships before a client resolves the hour. */
export const FALLBACK_CLOCK = {
  promise: 'within 2 hours',
  label: 'Weekday daytime crew',
  note: 'Six trucks out, dispatch answers on the first ring.',
} as const

export const HERO_EYEBROW = 'Tulsa · Licensed mechanical contractor'
export const HERO_LINE_ONE = 'We will not tell you we are fast.'
export const HERO_LINE_TWO = 'We will tell you when.'
export const HERO_LEDE =
  'Every HVAC company in this city says twenty-four seven. Almost none of them says what time a technician reaches your door. Ours is on this page, and it changes with the hour.'
export const HERO_GHOST = 'What time can you be here?'
export const HERO_RATING = '4.9'
export const HERO_RATING_NOTE = '260+ reviews on Google · sample data'

export const HERO_TICKS: readonly string[] = [
  'The arrival window, published by time of day',
  'After-hours rate quoted before we set off',
  'A technician answers, not an answering service',
  'If we will miss the window you hear before it opens',
]

export interface ProcessItem {
  readonly title: string
  readonly body: string
  readonly takeaway: string
}

export const PROCESS_EYEBROW = 'Before we arrive'
export const PROCESS_HEADING = 'Four things worth trying while you wait'
export const PROCESS_LEDE =
  'Some of these will fix it and save you a call-out. We would rather tell you than bill you for a tripped breaker.'

export const PROCESS_ITEMS: readonly ProcessItem[] = [
  {
    title: 'Check the breaker and the switch',
    body: 'There is usually a plain light switch near the furnace or air handler that looks like nothing. It gets knocked off. Check the breaker panel too, and reset once only.',
    takeaway: 'Fixes it more often than you would think',
  },
  {
    title: 'Change the filter',
    body: 'A blocked filter is the most common cause of a system that runs but does not cool, and of one that freezes solid. If the filter is grey, that is your answer.',
    takeaway: 'Two minutes',
  },
  {
    title: 'If the coil is iced, switch to fan only',
    body: 'Thermostat off, fan on. That melts the ice without running the compressor, which is the part that gets destroyed by running it iced.',
    takeaway: 'One to three hours',
  },
  {
    title: 'Then stop',
    body: 'Anything involving refrigerant, gas or the flue is ours. There is no homeowner fix for those and every attempt makes the repair more expensive.',
    takeaway: 'Call us',
  },
]

export interface ServiceItem {
  readonly title: string
  readonly body: string
  readonly price: string
}

export const SERVICES_EYEBROW = 'What we come out for'
export const SERVICES_HEADING = 'The calls we take at two in the morning'
export const SERVICES_LEDE =
  'Emergency work is a narrow list. Everything else is better booked for daylight, and we will say so rather than charge you the out-of-hours rate for it.'

export const SERVICES: readonly ServiceItem[] = [
  {
    title: 'No cooling',
    body: 'Capacitor, contactor, fan motor or refrigerant. We diagnose first and quote the part before it goes in.',
    price: 'From $119 after hours',
  },
  {
    title: 'No heat',
    body: 'Ignitors, flame sensors, limit switches and control boards. Below freezing this is a same-night call, not a morning one.',
    price: 'From $119 after hours',
  },
  {
    title: 'Anything unsafe',
    body: 'Burning smells, a cracked heat exchanger, a carbon monoxide alarm. We shut it down and make it safe before anything else.',
    price: 'Safety call, no diagnostic fee',
  },
  {
    title: 'Water where it should not be',
    body: 'A blocked condensate line will flood a ceiling overnight. Cheap to clear, expensive to ignore.',
    price: 'From $149',
  },
  {
    title: 'Frozen system',
    body: 'We thaw it properly, find why it froze and fix that, rather than restarting it and leaving.',
    price: 'From $149',
  },
  {
    title: 'Commercial cover',
    body: 'Restaurants, server rooms and anywhere stock or equipment is at risk. Contract holders come first.',
    price: 'Contract rates',
  },
]

export const SERVICES_NOTE = 'Starting prices are sample data for the demo.'

export const WHY_EYEBROW = 'Why publish a window'
export const WHY_HEADING = 'A promise you can check is worth more than one you cannot'
export const WHY_LEDE =
  'Nothing on this page is generous. It is all just stated, which turns out to be unusual.'
export const WHY_CAPTION = 'Sample crew schedule shown.'

export interface Claim {
  readonly term: string
  readonly detail: string
}

export const CLAIMS: readonly Claim[] = [
  {
    term: 'The window is by shift, not one number',
    detail:
      'Two hours in the daytime and first thing in the morning overnight. One number across twenty-four hours would be a number that is wrong most of the day.',
  },
  {
    term: 'You hear before the window, not after',
    detail:
      'If a call ahead of yours overruns you get a phone call before your window opens, with a new one and the choice to rebook. Silence is the thing people actually hate.',
  },
  {
    term: 'The after-hours rate is quoted first',
    detail:
      'On the phone, before a truck moves. It does not change on your doorstep, and it is the same rate whether the job takes twenty minutes or two hours to diagnose.',
  },
  {
    term: 'We tell you when it can wait',
    detail:
      'Plenty of two in the morning calls are better and cheaper as nine in the morning calls. We will say so and book you in rather than take the overtime.',
  },
]

export const AREAS_HEADING = 'Where we run at night'
export const AREAS_LEDE =
  'The Tulsa metro. Overnight cover reaches the towns on this list; beyond them we will be honest about the drive rather than quote you a window we cannot make.'
export const AREAS_NOTE = 'Towns shown are a sample list.'

export const TOWNS: readonly string[] = [
  'Tulsa',
  'Broken Arrow',
  'Owasso',
  'Jenks',
  'Bixby',
  'Sand Springs',
  'Sapulpa',
  'Catoosa',
  'Claremore',
  'Coweta',
  'Glenpool',
  'Skiatook',
]

export interface Review {
  readonly quote: string
  readonly name: string
  readonly town: string
}

export const REVIEWS_HEADING = 'What people say afterwards'
export const REVIEWS_NOTE = 'Sample reviews for the demonstration.'

export const REVIEWS: readonly Review[] = [
  {
    quote:
      'Furnace died on the coldest night of the year. Their site said first call at seven, and a truck was on the drive at ten past. No other company would even give me a time.',
    name: 'Ellis W.',
    town: 'Broken Arrow',
  },
  {
    quote:
      'They told me on the phone it was probably my filter, talked me through checking it, and it was. Did not charge me anything. Guess who fitted our new system in the spring.',
    name: 'Nadia F.',
    town: 'Jenks',
  },
  {
    quote:
      'Called at nine in the evening, got the after-hours rate up front, and the invoice matched it exactly. That has not been my experience with this trade.',
    name: 'Rob T.',
    town: 'Owasso',
  },
]

export const FAQ_HEADING = 'Before you call at 3am'
export const FAQ_NOTE = 'The things worth knowing before you dial, including when not to.'

export interface FaqItem {
  readonly question: string
  readonly answer: string
}

export const FAQS: readonly FaqItem[] = [
  {
    question: 'What counts as an emergency?',
    answer:
      'No heat when it is below freezing, no cooling when it is dangerously hot, anything burning or smelling of burning, a carbon monoxide alarm, and water coming through a ceiling. A system that is noisy, weak or cycling oddly is a real problem and it is a daylight problem. We will tell you which you have on the phone.',
  },
  {
    question: 'What does after hours cost?',
    answer:
      'There is an after-hours rate on top of the diagnostic, and we state both on the phone before a truck moves. It does not change when we arrive. Sample rates are in the services list above.',
  },
  {
    question: 'Will you really tell me not to call you out?',
    answer:
      'Yes, when the honest answer is that it can wait until morning and cost you less. We would rather have the maintenance customer than the one overtime call.',
  },
  {
    question: 'Do you charge to come out if it is a tripped breaker?',
    answer:
      'If we are already on your drive, the diagnostic applies. That is why the four checks on this page are here: we would rather you found it yourself for nothing.',
  },
  {
    question: 'Can you fix it the same night?',
    answer:
      'Most no-heat and no-cooling calls are a part we carry. If it is a part we do not, we make the property safe and usable overnight and return with it, and you are told the plan before we leave.',
  },
]

export const CLOSING_HEADING = 'Is it cold in there, or hot?'
export const CLOSING_LEDE =
  'Call and a technician will tell you what it probably is, what it costs, and when we can be there.'
export const CLOSING_GHOST = 'See the arrival windows'

export interface FooterLink {
  readonly label: string
  readonly href: string
}

export interface FooterColumn {
  readonly heading: string
  readonly links: readonly FooterLink[]
}

export const FOOTER_BLURB =
  'Emergency heating and cooling in Tulsa. We publish the arrival window rather than promising fast service, and a technician answers the phone at any hour.'

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    heading: 'Services',
    links: [
      { label: 'No cooling', href: '#services' },
      { label: 'No heat', href: '#services' },
      { label: 'Unsafe systems', href: '#services' },
      { label: 'Commercial cover', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Arrival windows', href: '#response' },
      { label: 'Rates', href: '#services' },
      { label: 'Service areas', href: '#areas' },
      { label: 'About', href: '#why-us' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
    ],
  },
]

export interface SocialLink {
  readonly label: 'Facebook' | 'Instagram' | 'LinkedIn'
  readonly href: string
}

export const SOCIALS: readonly SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

export const NEWSLETTER_HEADING = 'Stay Updated'
export const NEWSLETTER_BLURB =
  'Seasonal maintenance reminders and plain-English notes on what actually needs doing before winter.'
export const NEWSLETTER_CONFIRMATION = 'Thanks — you are on the list.'

export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'
