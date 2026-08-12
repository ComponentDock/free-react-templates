/* Iris content + image constants. Copy is paraphrased from the source
   demo but keeps the same content kinds (nav links + dropdowns, hero
   headline + CTA, feature rows, services mosaic, client feedback,
   Instagram strip, footer widgets). Photos are seeded picsum
   placeholders — no source assets copied. */

export const BRAND = 'Iris'

export const NAV_LINKS = ['Home', 'About', 'Projects', 'Pages', 'Blog', 'Contact'] as const

export const DROPDOWNS: Record<string, readonly string[]> = {
  Projects: ['Projects', 'Project Details'],
  Pages: ['Elements'],
  Blog: ['Blog', 'Blog Details'],
} as const

export const HERO_TITLE = 'Nature Photoshoot'

export const HERO_TEXT =
  'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.'

export const HERO_IMAGE = 'https://picsum.photos/id/28/1600/750'

export const FEATURE_HEADING = 'Spreading Peace to world'

const FEATURE_TEXT =
  'If you are looking at blank cassette on the web you may be very confused at the difference in price. You may see some for as low as $.17 each.'

export const FEATURES = [
  {
    title: FEATURE_HEADING,
    text: FEATURE_TEXT,
    image: 'https://picsum.photos/seed/iris-feature-1/700/500',
  },
  {
    title: FEATURE_HEADING,
    text: FEATURE_TEXT,
    image: 'https://picsum.photos/seed/iris-feature-2/700/500',
  },
  {
    title: FEATURE_HEADING,
    text: FEATURE_TEXT,
    image: 'https://picsum.photos/seed/iris-feature-3/700/500',
  },
  {
    title: FEATURE_HEADING,
    text: FEATURE_TEXT,
    image: 'https://picsum.photos/seed/iris-feature-4/700/500',
  },
] as const

export const SERVICES_TITLE = 'Services Offered by Us'

export const SERVICES_TEXT =
  'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.'

const SERVICE_HEADING = 'Spreading Peace to world'

const SERVICE_TEXT =
  'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.'

/* Eight mosaic cells, alternating image / text panels in DOM order. */
export const SERVICES = [
  { kind: 'image', image: 'https://picsum.photos/seed/iris-service-1/400/400' },
  { kind: 'text', heading: SERVICE_HEADING, text: SERVICE_TEXT },
  { kind: 'image', image: 'https://picsum.photos/seed/iris-service-2/400/400' },
  { kind: 'text', heading: SERVICE_HEADING, text: SERVICE_TEXT },
  { kind: 'text', heading: SERVICE_HEADING, text: SERVICE_TEXT },
  { kind: 'image', image: 'https://picsum.photos/seed/iris-service-3/400/400' },
  { kind: 'text', heading: SERVICE_HEADING, text: SERVICE_TEXT },
  { kind: 'image', image: 'https://picsum.photos/seed/iris-service-4/400/400' },
] as const

export const FEEDBACK_TITLE = "Client's Feedback"

export const FEEDBACK_TEXT =
  'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.'

export const TESTIMONIALS = [
  {
    quote:
      'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.',
    name: 'Mark Alviro Wiens',
    role: 'CEO at Google',
    avatar: 'https://picsum.photos/seed/iris-client-1/90/90',
  },
  {
    quote:
      'Gadgets and gear for every desk — the accessory collection covers laptops, monitors, printers, scanners, speakers and projectors with care.',
    name: 'Mark Alviro Wiens',
    role: 'CEO at Google',
    avatar: 'https://picsum.photos/seed/iris-client-2/90/90',
  },
  {
    quote:
      'A curated range of computer accessories for your laptop, monitor, printer, scanner, speaker, projector and hardware needs.',
    name: 'Mark Alviro Wiens',
    role: 'CEO at Google',
    avatar: 'https://picsum.photos/seed/iris-client-3/90/90',
  },
] as const

export const INSTAGRAM_BUTTON = 'Follow us on instagram'

export const INSTAGRAM_IMAGES = [
  'https://picsum.photos/seed/iris-insta-1/320/320',
  'https://picsum.photos/seed/iris-insta-2/320/320',
  'https://picsum.photos/seed/iris-insta-3/320/320',
  'https://picsum.photos/seed/iris-insta-4/320/320',
  'https://picsum.photos/seed/iris-insta-5/320/320',
  'https://picsum.photos/seed/iris-insta-6/320/320',
] as const

export const ABOUT_TITLE = 'About Me'

export const ABOUT_TEXT =
  'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff.'

export const NEWSLETTER_TITLE = 'Newsletter'

export const NEWSLETTER_TEXT = 'Stay updated with our latest trends'

export const FOLLOW_TITLE = 'Follow Me'

export const FOLLOW_TEXT = 'Let us be social'

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Behance', href: 'https://behance.net' },
] as const

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
