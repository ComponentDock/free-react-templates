/**
 * Every string, price and list on the page, transcribed from the reference
 * design's live copy and re-attributed to the invented brand. Sample-data
 * disclaimers are kept deliberately: the design's argument is that prices and
 * reviews are honest, and inventing them without a note would contradict it.
 */

export const BRAND = 'Airshed'
export const TAGLINE = 'INDOOR AIR'

export const PHONE_DISPLAY = '(555) 140-1400'
export const PHONE_HREF = 'tel:+15551401400'
export const EMAIL = 'hello@airshed.example'
export const ADDRESS = '3420 Central Avenue Southeast, Albuquerque, NM 87106'

export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'
export const COMPONENTDOCK_LABEL = 'Component Dock'
export const COMPONENTDOCK_LINE = 'More templates at Component Dock'

export const NAV_LINKS = [
  { label: 'Measurement', href: '#process' },
  { label: 'Wildfire', href: '#service-wildfire' },
  { label: 'Services', href: '#services' },
  { label: 'Service areas', href: '#areas' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
] as const

export const LICENCE = {
  label: 'Licence',
  number: 'NM MM-98 #00000',
  statement: 'Measurement before equipment',
  servingLabel: 'Serving',
  serving: 'Bernalillo County',
  score: '4.9',
  reviews: '150+ reviews on Google (sample)',
} as const

export const HERO = {
  eyebrow: 'ALBUQUERQUE · LICENSED MECHANICAL',
  headline: 'We measure first.',
  headlineAccent: 'Often the answer is not equipment.',
  lede: 'Most indoor air problems in this city are ventilation, humidity or a filter in the wrong place. A week of logging tells us which. Selling you a purifier before that is guessing with your money.',
  score: '4.9',
  reviews: '150+ reviews on Google · sample data',
  checks: [
    'Seven days of logging before any recommendation',
    'You keep the data, in a readable report',
    'Filters sized to your return, not to the shelf',
    'Roughly half our assessments need no equipment',
  ],
} as const

export const BOOKING = {
  heading: 'Book an air assessment',
  blurb: 'Three fields. We reply within the hour on weekdays.',
  nameLabel: 'Your name',
  namePlaceholder: 'First and last name',
  nameError: 'Tell us who is booking, so we can call you back.',
  phoneLabel: 'Phone',
  phonePlaceholder: '(555) 000-0000',
  phoneError: 'A number with at least seven digits, please.',
  problemLabel: 'What have you noticed?',
  problemPlaceholder: 'Choose the closest match',
  problemError: 'Pick the closest match — it decides which kit we bring.',
  problemOptions: [
    'Stuffy or stale rooms',
    'Dust that never stops',
    'Very dry air',
    'Smoke days',
    'Allergies indoors',
    'A quote I want checked',
  ],
  submit: 'Book the assessment',
  note: 'No obligation. You keep the report whatever it concludes.',
  success: 'Booked. We will confirm by phone within the hour on weekdays.',
} as const

export const MEASURE = {
  eyebrow: 'WHAT WE MEASURE',
  heading: 'Five numbers, logged for a week',
  lede: 'A single spot reading tells you about one moment. A week tells you what your house actually does when you cook, sleep and close the windows.',
  items: [
    {
      number: '01',
      title: 'Particulate, PM2.5',
      body: 'The number that matters in wildfire season and the one a decent filter genuinely fixes. We log indoor against outdoor so you can see what your house is already removing.',
      label: 'The filter question',
    },
    {
      number: '02',
      title: 'Carbon dioxide',
      body: 'The best available proxy for whether a room is ventilated. Bedrooms above 1,200 parts per million overnight are common here and are a ventilation problem, not a purifier problem.',
      label: 'The ventilation question',
    },
    {
      number: '03',
      title: 'Relative humidity',
      body: 'Albuquerque runs dry, which is its own problem: static, cracked woodwork, irritated airways. Occasionally a house runs wet in one room, which is a different and more urgent finding.',
      label: 'The comfort question',
    },
    {
      number: '04',
      title: 'Volatile organic compounds',
      body: 'Rises after cleaning, cooking and new furniture. Useful mostly for what it reveals about air exchange, because a house that clears quickly is a house that breathes.',
      label: 'The air-change question',
    },
    {
      number: '05',
      title: 'Temperature stratification',
      body: 'Logged at two heights. A house that is five degrees different floor to ceiling has an airflow problem that filtration will not touch.',
      label: 'The airflow question',
    },
  ],
} as const

export const CHART = {
  alt: 'A week of logged readings with carbon dioxide rising overnight in a closed bedroom',
  caption: 'Replace with a photograph of your own logging equipment in place before launch.',
  title: 'Bedroom CO₂, one week',
  subtitle: 'Door closed. The spikes are nights, not days.',
  threshold: '1,200 ppm',
  days: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
  footnote: 'The fix here was a transfer grille, not a purifier.',
} as const

export const WHY = {
  eyebrow: 'THE AWKWARD PART',
  heading: 'Roughly half of these assessments end with no sale',
  lede: 'That is not modesty, it is the business model. An honest measurement service is worth paying for precisely because it sometimes says nothing is wrong.',
  principles: [
    {
      title: 'Open a window is sometimes the finding',
      body: 'A bedroom with the door shut and no supply is the most common problem we log, and the fix is a transfer grille or a door undercut rather than a thousand-dollar appliance.',
    },
    {
      title: 'Purifiers are oversold',
      body: 'A portable unit sized for one room, running in one room, does help in that room. Sold as a whole-house answer it is not one, and the difference is rarely explained at the point of sale.',
    },
    {
      title: 'Your filter may be too restrictive',
      body: 'A very high MERV filter in a system not designed for it starves airflow, which makes everything worse while feeling like an upgrade. We measure static pressure before recommending one.',
    },
    {
      title: 'We will tell you it is the cat',
      body: 'Occasionally the finding is an allergen source rather than an air system. That is a genuinely useful answer and it is one nobody selling equipment has an incentive to give.',
    },
  ],
} as const

export const SERVICES = {
  eyebrow: 'WHAT WE DO',
  heading: 'Assessment, then whatever the data supports',
  lede: 'Everything below follows a measurement. Nothing on this list is sold before one.',
  items: [
    {
      id: 'service-assessment',
      title: 'Seven-day air assessment',
      body: 'Logging in two to three rooms plus outdoor reference, with a readable report and a plain-language recommendation.',
      price: 'From $345',
    },
    {
      id: 'service-ventilation',
      title: 'Ventilation improvements',
      body: 'Transfer grilles, bathroom fans that actually vent outside, and fresh-air intakes. Cheap, effective and the most common outcome.',
      price: 'From $420',
    },
    {
      id: 'service-filtration',
      title: 'Whole-house filtration',
      body: 'Media filters sized to your return with static pressure measured before and after, so the cure is not worse than the complaint.',
      price: 'From $890',
    },
    {
      id: 'service-humidification',
      title: 'Humidification',
      body: 'Relevant here more than in most cities. Sized to the house and set to a range rather than to a number, with the risks of over-humidifying explained.',
      price: 'From $1,150',
    },
    {
      id: 'service-ducts',
      title: 'Duct sealing and balancing',
      body: 'Frequently the real fix for a room that is stuffy or stratified, and it improves the heating and cooling you already paid for.',
      price: 'From $850',
    },
    {
      id: 'service-wildfire',
      title: 'Wildfire season preparation',
      body: 'A filter upgrade your system can actually take, a recirculation plan, and sealing the places smoke gets in. Booked in spring, not in August.',
      price: 'From $290',
    },
  ],
  note: 'Starting prices are sample data for demonstration. Replace with your own before launch.',
} as const

export const AREAS = {
  heading: 'Where we work',
  lede: 'Bernalillo County and the surrounding communities. The assessment involves leaving equipment for a week and collecting it, so distance genuinely matters.',
  towns: [
    'Albuquerque',
    'Rio Rancho',
    'Corrales',
    'Bernalillo',
    'Los Ranchos',
    'Tijeras',
    'Placitas',
    'Sandia Park',
    'Belen',
    'Los Lunas',
    'Bosque Farms',
    'Edgewood',
  ] as const,
  note: 'Replace this list with your own towns. Written as plain text it is the cheapest local search signal a trade site has.',
} as const

export const TESTIMONIALS = {
  pill: 'Reviews',
  heading: 'What people say afterwards',
  lede: 'Sample reviews for demonstration. Replace with your own, ideally pulled from Google.',
  items: [
    {
      quote:
        'They logged the house for a week and told me my bedroom needed a transfer grille and nothing else. Two other companies had quoted whole-house purification.',
      name: 'Camilla R.',
      town: 'Nob Hill',
    },
    {
      quote:
        'The report showed my new high-MERV filter had cut airflow badly. Swapped it for a properly sized media cabinet and the back bedroom is finally comfortable.',
      name: 'Desmond A.',
      town: 'Rio Rancho',
    },
    {
      quote:
        'Straightforward and unexcitable, which in this industry is unusual. Data, a recommendation, and no scare stories about what is in my air.',
      name: 'Junko M.',
      town: 'Corrales',
    },
  ],
} as const

export const FAQ = {
  pill: 'Questions',
  heading: 'Before you book',
  lede: 'The questions worth asking anyone selling indoor air equipment.',
  items: [
    {
      question: 'Do I need an air purifier?',
      answer:
        'Possibly, and possibly not. Portable units work well in the room they are in. Whole-house filtration works when the system has the airflow for it. Neither fixes a ventilation problem, which is what most of our measurements actually find.',
    },
    {
      question: 'Why a week, and not a spot reading?',
      answer:
        'Because a spot reading tells you about one moment. Carbon dioxide in a closed bedroom looks fine at 4pm and is high at 4am, and that difference is the whole finding.',
    },
    {
      question: 'Is a higher MERV filter always better?',
      answer:
        'No, and this is the most common expensive mistake. A filter too restrictive for the system starves airflow, which makes comfort and efficiency worse while feeling like an upgrade. Static pressure decides it.',
    },
    {
      question: 'What about UV lights and ionisers?',
      answer:
        'The evidence is mixed and some ionisers generate ozone, which is itself a pollutant. We do not fit them by default and we will not sell you one on the basis of a claim we cannot show you data for.',
    },
    {
      question: 'What if the assessment finds nothing?',
      answer:
        'You get the report and we say so. It happens roughly half the time, it is a legitimate outcome, and it is what the fee buys.',
    },
  ],
} as const

export const CLOSING = {
  heading: 'Want to know what your air is actually doing?',
  lede: 'A week of logging, a readable report, and a recommendation that might be to open a window.',
  primaryCta: 'Book an air assessment',
  secondaryCta: 'Call (555) 140-1400',
} as const

export const CHROME = {
  skip: 'Skip to content',
  darkToggle: 'Switch between light and dark theme',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  cookie:
    'We store one preference on this device — light or dark — and nothing else. No analytics, no advertising cookies.',
  accept: 'Accept',
  decline: 'Essential only',
  reviews: 'out of 5',
} as const

export const FOOTER = {
  blurb:
    'Indoor air quality in Albuquerque. We measure your house for a week before recommending anything, and the answer is often ventilation rather than a purifier.',
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'Air assessments', href: '#services' },
        { label: 'Ventilation', href: '#service-ventilation' },
        { label: 'Filtration', href: '#service-filtration' },
        { label: 'Duct sealing', href: '#service-ducts' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'What we measure', href: '#process' },
        { label: 'Wildfire season', href: '#service-wildfire' },
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
  ],
  newsletterHeading: 'Stay Updated',
  newsletterBody:
    'Seasonal maintenance reminders and plain-English notes on what actually needs doing before winter.',
  newsletterLabel: 'Email address',
  newsletterPlaceholder: 'you@example.com',
  newsletterCta: 'Subscribe',
  newsletterError: 'That address does not look right — check it and try again.',
  newsletterSuccess: 'You are on the list. One note a season, no more.',
  legal: '© 2026 Airshed. All rights reserved.',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  backToTop: 'Back to top',
} as const
