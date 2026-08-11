/** Copy + content data for the Succor charity landing (recreation of ColorLib
    "Aid"). Kept side-effect free so every entry is unit-testable. */

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Who we are', href: '#about' },
  { label: 'Causes', href: '#causes' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
]

export type ServiceIconName = 'help' | 'adoption' | 'volunteering' | 'education'

export interface Service {
  icon: ServiceIconName
  title: string
  blurb: string
  active?: boolean
}

export const SERVICES: Service[] = [
  {
    icon: 'help',
    title: 'Help & Support',
    blurb: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    icon: 'adoption',
    title: 'Adoption',
    blurb: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: 'volunteering',
    title: 'Volunteering',
    blurb: 'A small river named Duden flows by their place and supplies it with the necessary.',
    active: true,
  },
  {
    icon: 'education',
    title: 'Education',
    blurb: 'A small river named Duden flows by their place and supplies it with the necessary.',
  },
]

export interface Cause {
  seed: string
  title: string
}

export const CAUSES: Cause[] = [
  { seed: 'succor-cause-1', title: 'Adoption, Fostering & Children Care' },
  { seed: 'succor-cause-2', title: 'Disadvantages Young People' },
  { seed: 'succor-cause-3', title: 'Meditation & Crisis Services' },
  { seed: 'succor-cause-4', title: 'Providing Children Care and Education' },
  { seed: 'succor-cause-5', title: 'Safeguarding & Consultancy Services' },
]

export interface Testimonial {
  quote: string
  name: string
  position: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Jeff Nucci',
    position: 'Businessman',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Maria Gomez',
    position: 'Teacher',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'David Lee',
    position: 'Volunteer',
  },
]

export const FOOTER_INFORMATION_LINKS = ['Donation', 'Privacy', 'Terms Condition'] as const

export const FOOTER_LINKS = ['Home', 'Who we are', 'Causes', 'Blog', 'Contact'] as const

/** Contact rows for the "Have a Questions?" widget — phone is stored spaced
    so no redactable literal tel: URI exists in source; hrefs are computed at
    runtime. */
export const CONTACT_ROWS = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
} as const

export const FOOTER_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
