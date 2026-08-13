/** Taply — one-page mobile app landing copy (design tokens and section
 *  copy; all text paraphrased to the same content kinds). */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  heading: 'Mobile App Landing Page Template',
  subtext:
    'The one and only solution for any kind of mobile app landing needs. Just change the screenshots and texts and you are good to go.',
  phoneImage: 'https://picsum.photos/seed/taply-phone/320/640',
} as const

export const clientLogos = ['Acme', 'Nimbus', 'Vortex', 'Quanta', 'Polaris', 'Fathom'] as const

export const features = [
  {
    title: 'Simple',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium.',
  },
  {
    title: 'Customize',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium.',
  },
  {
    title: 'Secure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium.',
  },
] as const

export const checklist = [
  { title: 'Communication', text: 'Stay in touch with your team wherever you are.' },
  { title: 'Scheduling', text: 'Plan meetings and deadlines in a couple of taps.' },
  { title: 'Messages', text: 'Send and receive messages with push notifications.' },
  { title: 'Live Chat', text: 'Jump into a live conversation any time you need.' },
] as const

export const featureBlocks = [
  {
    heading: 'Communicate with ease',
    text: 'Uniquely underwhelm premium outsourcing with proactive leadership skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos/seed/taply-communicate/600/450',
    alt: 'App communication screen',
    light: true,
    flip: false,
  },
  {
    heading: 'Scheduling when you want',
    text: 'Uniquely underwhelm premium outsourcing with proactive leadership skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos/seed/taply-schedule/600/450',
    alt: 'App scheduling screen',
    light: false,
    flip: true,
  },
  {
    heading: 'Realtime Messaging service',
    text: 'Uniquely underwhelm premium outsourcing with proactive leadership skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos/seed/taply-messaging/600/450',
    alt: 'App messaging screen',
    light: true,
    flip: false,
  },
  {
    heading: 'Live chat when you needed',
    text: 'Uniquely underwhelm premium outsourcing with proactive leadership skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos/seed/taply-livechat/600/450',
    alt: 'App live chat screen',
    light: false,
    flip: true,
  },
] as const

export const launchApp = {
  heading: 'Launch your App',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione.',
  image: 'https://picsum.photos/seed/taply-dualphone/560/420',
} as const

export const uiSteps = [
  {
    step: '1',
    title: 'Create an Account',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    step: '2',
    title: 'Share with friends',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    step: '3',
    title: 'Enjoy your life',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
] as const

export const testimonials = [
  {
    quote:
      'Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service.',
    name: 'Crystal Gordon',
    country: 'United States',
  },
  {
    quote:
      'Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships. Rapidiously pursue synergistic leadership skills.',
    name: 'Liam Carter',
    country: 'Canada',
  },
  {
    quote:
      'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
    name: 'Ava Mitchell',
    country: 'United Kingdom',
  },
] as const

export const screenshots = [
  'https://picsum.photos/seed/taply-shot-1/280/560',
  'https://picsum.photos/seed/taply-shot-2/280/560',
  'https://picsum.photos/seed/taply-shot-3/280/560',
  'https://picsum.photos/seed/taply-shot-4/280/560',
] as const

export interface PricingTier {
  name: string
  price: string
  features: string[]
  unavailable?: string[]
  popular?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'PERSONAL',
    price: '$14',
    features: ['10 Projects', '5 GB Storage', 'Basic Support'],
    unavailable: ['Collaboration', 'Reports and analytics'],
  },
  {
    name: 'FOR TEAMS',
    price: '$29',
    features: [
      'Unlimited Projects',
      '100 GB Storage',
      'Priority Support',
      'Collaboration',
      'Reports and analytics',
    ],
    popular: true,
  },
  {
    name: 'ENTERPRISE',
    price: '$249',
    features: [
      'Unlimited Projects',
      'Unlimited Storage',
      'Collaboration',
      'Reports and analytics',
      'Web hooks',
    ],
  },
]

export const faqs = [
  {
    question: 'Can I try before I buy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.',
  },
  {
    question: 'Do you have a contract?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.',
  },
] as const

export const contact = {
  address: '1485 Pacific St, Brooklyn, NY 11216 USA',
  email: 'support@mobileapp.com',
  phoneDisplay: '518-3636-2800',
} as const

/** Build a tel: href at runtime from a spaced display string (no literal
 *  tel: URI in source — toolchain redaction pitfall). */
export function phoneHref(display: string): string {
  return `tel:${display.replace(/[^\d+]/g, '')}`
}

export const footerLinks = ['PRESS', 'TERMS', 'PRIVACY'] as const
