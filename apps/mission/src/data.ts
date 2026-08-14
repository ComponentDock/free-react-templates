/** Social brand names used in the footer + volunteer overlays. */
export const socials = ['facebook', 'twitter', 'instagram'] as const

export type SocialName = (typeof socials)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
}

/** Top nav links — Blog and Pages carry dropdown items in the reference. */
export const navLinks = [
  { label: 'Home', href: '#home', active: true, children: [] as readonly string[] },
  { label: 'About', href: '#about', active: false, children: [] as readonly string[] },
  { label: 'Causes', href: '#causes', active: false, children: [] as readonly string[] },
  { label: 'Impact', href: '#impact', active: false, children: [] as readonly string[] },
  {
    label: 'Blog',
    href: '#blog',
    active: false,
    children: ['Blog', 'Single Blog'] as readonly string[],
  },
  {
    label: 'Pages',
    href: '#pages',
    active: false,
    children: ['Causes Details', 'Elements'] as readonly string[],
  },
  { label: 'Contact', href: '#contact', active: false, children: [] as readonly string[] },
] as const

export const hero = {
  // Warm rustic scene (man + dog) — the deep maroon overlay does the heavy
  // lifting, matching the reference's red-treated hero photo.
  image: 'https://picsum.photos/id/1012/1920/1000',
  headline: 'Support a Cause You Care About',
  paragraph:
    'At Mission we believe that all children in the world have the right to be cared for and the right to be protected.',
  cta: 'Join Us Today',
} as const

export const cause = {
  kicker: 'Upcoming Cause',
  title: 'Support Nahid for His pneumonia treatment',
  paragraph:
    'Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are changing our world.',
  target: '$2783',
  raised: '$1530',
  progress: 60,
  // Moody dark scene, rendered desaturated (grayscale) like the reference's
  // B&W cause portrait.
  image: 'https://picsum.photos/id/1039/600/500',
} as const

export const about = {
  kicker: 'About Us',
  title: "We've funded 42,113 water projects for 9.6 million people around the world.",
  paragraph:
    'Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are changing our world.',
  badgeCaption: 'Served Over',
  badgeStat: '42,113',
  badgeFooter: 'people around 50+ countries',
  // Mother-and-child embrace — a warm human scene fitting the charity theme.
  image: 'https://picsum.photos/id/838/600/500',
} as const

export const services = [
  {
    title: 'Pure Food & Water',
    paragraph:
      'Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are changing our world.',
    icon: 'droplets',
  },
  {
    title: 'Medicine',
    paragraph:
      'Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are changing our world.',
    icon: 'pill',
  },
  {
    title: 'Education',
    paragraph:
      'Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are changing our world.',
    icon: 'graduation',
  },
] as const

export const helpSlides = [
  {
    title: 'Help Yeati to continue her Primary Education',
    target: '$2783',
    raised: '$1530',
    image: 'https://picsum.photos/id/1011/600/500',
  },
  {
    title: 'Support Rahim to afford his winter clothes',
    target: '$1820',
    raised: '$940',
    image: 'https://picsum.photos/id/1077/600/500',
  },
] as const

export const volunteers = [
  { name: 'Maya Wilson', role: 'Volunteer', image: 'https://picsum.photos/id/1027/400/450' },
  { name: 'Anila Miller', role: 'Volunteer & Donor', image: 'https://picsum.photos/id/64/400/450' },
  { name: 'Rona Dana', role: 'Volunteer', image: 'https://picsum.photos/id/823/400/450' },
  { name: 'Lena Jonson', role: 'Volunteer', image: 'https://picsum.photos/id/996/400/450' },
] as const

export const volunteerCta = {
  // Live band on stage — dark scene under the solid red block.
  image: 'https://picsum.photos/id/453/1920/600',
  title: 'Become a Volunteer',
  paragraph:
    'Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are changing our world.',
  buttons: ['Join With Us', 'Become a Donor'],
} as const

export const footerInfo = {
  address: '200, A-block, Green road, USA',
  phone: '+10 367 267 2678',
  email: 'contact@mission.org',
  navigation: ['Home', 'Rooms', 'About', 'News'],
  newsletterTitle: 'Newsletter',
  newsletterText: 'Subscribe newsletter to get updates',
  newsletterPlaceholder: 'Enter your mail',
  signUp: 'Sign Up',
} as const
