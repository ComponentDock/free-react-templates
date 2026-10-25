/** Every string the page shows, in the order the page shows it. */

export const LICENCE = {
  registration: 'KY MP #00000',
  certification: 'Acoustic and thermal certified',
  county: 'Jefferson County',
  rating: '4.9',
  reviews: '220+ reviews on Google',
} as const

export const CONTACT = {
  phoneLabel: '(555) 130-1300',
  phoneHref: 'tel:5551301300',
  address: '2210 Frankfort Avenue, Louisville, KY 40206',
  email: 'office@aquifer.example',
  city: 'Louisville, KY',
} as const

export interface NavLink {
  label: string
  /** The band the label resolves to on this single page. */
  target: string
  /** The band id the scroll-spy watches. */
  spy: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'How we find it', target: '#why-us', spy: 'why-us' },
  { label: 'Insurance', target: '#faq', spy: 'faq' },
  { label: 'Services', target: '#services', spy: 'services' },
  { label: 'Service areas', target: '#areas', spy: 'areas' },
  { label: 'About', target: '#process', spy: 'process' },
  { label: 'Contact', target: '#contact', spy: 'contact' },
]

export const HERO_CHECKLIST = [
  'Located before anything is opened',
  'Marked on the floor, with the depth',
  'Written report your insurer will accept',
  'Fee credited if we do the repair',
]

/** The select's first entry is a prompt, not a symptom. */
export const SYMPTOM_PROMPT = 'Choose the closest match'

export const SYMPTOMS = [
  'Water bill jumped',
  'Warm patch on the floor',
  'Sound of running water',
  'Damp carpet or buckling floor',
  'Meter spins with everything off',
  'Pool losing water',
  'Insurance asked for a leak report',
]

export interface Sign {
  n: string
  title: string
  body: string
  label: string
}

export const SIGNS: Sign[] = [
  {
    n: '01',
    title: 'The bill jumped with no change in habits',
    body: 'A supply-side leak under pressure runs continuously, so the meter turns even at three in the morning. Compare two bills before you call anybody.',
    label: 'Strong sign',
  },
  {
    n: '02',
    title: 'A warm patch on the floor',
    body: 'On a slab, the hot line is the one that shows. Warmth spreads along the pipe, so the patch sits downstream of the actual break.',
    label: 'Usually a hot line',
  },
  {
    n: '03',
    title: 'Running water with everything off',
    body: 'Shut every fixture and listen at the meter. If it is still turning, the loss is between the meter and the house, or under the slab.',
    label: 'Check the meter',
  },
  {
    n: '04',
    title: 'Damp carpet or a buckling floor',
    body: 'Photograph it before you move furniture. The insurer will ask for the condition of the floor as it was found, not as it looked after a week of drying.',
    label: 'Photograph it now',
  },
  {
    n: '05',
    title: 'A pool that keeps dropping',
    body: 'A bucket test separates evaporation from a leak: a bucket of pool water beside the pool loses less than the pool does if the shell or the line is leaking.',
    label: 'Do the bucket test',
  },
  {
    n: '06',
    title: 'Nothing visible at all',
    body: 'Most slab leaks show nothing on the surface until the drywall or the baseboard does. A meter test and an acoustic listen find them while they are still cheap.',
    label: 'Still findable',
  },
]

export interface Instrument {
  title: string
  body: string
}

export const INSTRUMENTS: Instrument[] = [
  {
    title: 'Isolate and pressure test',
    body: 'Close the supply at the meter and isolate the zones. A gauge that falls tells us whether the loss is on the supply side at all — before anybody opens a floor.',
  },
  {
    title: 'Acoustic listening',
    body: 'A pressurised leak makes noise. A ground microphone over the slab narrows the area to about a square metre, and the sound is loudest directly above the break.',
  },
  {
    title: 'Thermal imaging',
    body: 'A hot line warms the slab around it. The camera shows the plume, which tells us which direction the pipe runs and where it turns under the floor.',
  },
  {
    title: 'Tracer gas where needed',
    body: 'For a drain or a line that will not hold pressure, a hydrogen mix finds the path through the backfill. It is the last resort, not the first, because it costs a day.',
  },
]

export interface ServiceCell {
  title: string
  body: string
  price: string
}

export const SERVICES: ServiceCell[] = [
  {
    title: 'Slab leak location',
    body: 'Supply or drain under a slab, marked on the floor with the depth and a photograph of the mark.',
    price: 'From $395',
  },
  {
    title: 'Pool leak location',
    body: 'Shell, skimmer or buried line, separated by a bucket test before any dye goes in the water.',
    price: 'From $445',
  },
  {
    title: 'Irrigation and service line',
    body: 'The line between the meter and the house, or a zone that will not hold pressure overnight.',
    price: 'From $345',
  },
  {
    title: 'Sewer and drainage leaks',
    body: 'A camera survey and a tracer survey where the camera cannot explain the loss on its own.',
    price: 'From $395',
  },
  {
    title: 'Repair after location',
    body: 'One hole where the mark is, quoted before we open it, and only if you want us to do it.',
    price: 'Quoted after location',
  },
  {
    title: 'Insurance documentation',
    body: 'Photographs, the instrument readings and a written cause — the file an adjuster asks for.',
    price: 'Included with location',
  },
]

export const TOWNS = [
  'Louisville',
  'Jeffersontown',
  'St. Matthews',
  'Middletown',
  'Shively',
  'Prospect',
  'Anchorage',
  'Fern Creek',
  'Okolona',
  'Lyndon',
  'Shelbyville',
  'La Grange',
]

export interface Testimonial {
  quote: string
  name: string
  initials: string
  town: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'They found it under the kitchen slab in about ninety minutes and marked one square. The plumber who came afterwards opened exactly that square. I have had two other companies guess at this floor.',
    name: 'Yvonne P.',
    initials: 'Y',
    town: 'St. Matthews',
  },
  {
    quote:
      'The report is what made the difference. Photographs, the pressure readings, the depth — the adjuster accepted it the first time and we never had to argue about the cause.',
    name: 'Grant M.',
    initials: 'G',
    town: 'Prospect',
  },
  {
    quote:
      'Our pool had been losing an inch a week for two summers. They did the bucket test, then found a fitting behind the coping. Nobody dug up the deck for nothing.',
    name: 'Denise O.',
    initials: 'D',
    town: 'Fern Creek',
  },
]

export interface Faq {
  question: string
  answer: string
}

export const FAQS: Faq[] = [
  {
    question: 'Can you really find it without breaking anything?',
    answer:
      'Yes, in most cases. The instruments listen through the slab, so the first opening is the one the repair needs — a single square, marked before anybody lifts a tool. If a line will not hold pressure at all, a small access point may be needed to introduce tracer gas, and that is quoted before we start.',
  },
  {
    question: 'How accurate is the location?',
    answer:
      'Around a square metre under a slab, and tighter when the line is metallic or the leak is loud. We mark the point, note the depth below the finished floor, and photograph the mark so the repair is not a second search.',
  },
  {
    question: 'Will my insurance cover it?',
    answer:
      'Policies commonly cover the resulting damage and the access, and commonly exclude the failed pipe itself and the location fee — but the wording differs by policy, and we are not adjusters. What we supply is the evidence: instrument readings, photographs and a stated cause, which is what a claim needs to be assessed.',
  },
  {
    question: 'Should I repair or reroute?',
    answer:
      'Under a slab, a reroute through the attic or the walls is often cheaper than breaking out a floor and is less likely to fail again in the same place. We quote both after the location and tell you which one we would choose in your house.',
  },
  {
    question: 'Do I have to use you for the repair?',
    answer:
      'No. The location fee buys the location and the report, and the fee is credited against the repair if you do use us. Plenty of customers hand the report to their own plumber, and that is a normal outcome rather than a lost job.',
  },
]

export const FOOTER_SERVICES = [
  'Slab leak location',
  'Pool leaks',
  'Service lines',
  'Repair after location',
]

export const FOOTER_COMPANY = [
  { label: 'How we find it', target: '#why-us' },
  { label: 'Insurance', target: '#faq' },
  { label: 'Service areas', target: '#areas' },
  { label: 'About', target: '#process' },
]

export const FOOTER_SUPPORT = [
  { label: 'Contact', target: '#contact' },
  { label: 'Privacy', target: null },
  { label: 'Terms', target: null },
]
