/** Giveback — one-page charity foundation template.
 *  Content mirrors the reference design's structure and copy kinds
 *  (headline + subtext + CTA per section). All photos are picsum
 *  placeholders — no source assets copied. */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Causes', href: '#causes' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  // Dark cinematic portrait — white text pops on the navy overlay.
  image: 'https://picsum.photos/id/1027/1920/950',
  headline: 'Give a helping hand to those who need it!',
  paragraph: 'When a child gets access to good food, it can change just about everything.',
  cta: 'Ongoing Programs',
} as const

export const upcoming = {
  kicker: 'Upcoming Program',
  title: 'Donate vitamin B12 supply program',
  paragraph:
    'Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  // Moody human scene — matches the emotional tone of the source photo.
  image: 'https://picsum.photos/id/1039/800/650',
  donateLabel: 'Donate Now',
  viewLabel: 'View Programs',
} as const

export const about = {
  kicker: 'About Us',
  title: 'We are tender heart charity foundation.',
  paragraph:
    'Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  // Mother-and-child embrace — a warm human scene fitting the charity theme.
  image: 'https://picsum.photos/id/838/800/650',
  cta: 'Discover More',
} as const

export const causes = [
  {
    title: 'Help the ecosystems',
    paragraph:
      'Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    goal: '$67,845',
    raised: '$48,845',
    image: 'https://picsum.photos/id/1011/600/450',
  },
  {
    title: 'Donate Vitamin B12 Program',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    goal: '$54,200',
    raised: '$31,950',
    image: 'https://picsum.photos/id/1077/600/450',
  },
  {
    title: 'View Savers In Deworm Program',
    paragraph:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    goal: '$41,760',
    raised: '$27,410',
    image: 'https://picsum.photos/id/1012/600/450',
  },
] as const

export const whatWeDo = {
  kicker: 'Helping today',
  title: 'What we are doing',
  paragraph:
    'Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: 'https://picsum.photos/id/64/800/650',
  cta: 'Join Us Today',
} as const

export const services = {
  kicker: 'Helping today',
  title: 'How we help people',
  // Dark stage scene — reads well under the navy overlay band.
  image: 'https://picsum.photos/id/453/1920/700',
  items: [
    {
      title: 'Pure Food & Water',
      paragraph:
        'Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      icon: 'droplets',
    },
    {
      title: 'Health & Medicine',
      paragraph:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      icon: 'briefcase-medical',
    },
    {
      title: 'Education',
      paragraph:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
      icon: 'graduation-cap',
    },
  ] as const,
} as const

export const blogPosts = [
  {
    title: 'Bringing up a new habit for charity works',
    paragraph:
      'Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    day: '15',
    month: 'June',
    image: 'https://picsum.photos/id/823/600/450',
  },
  {
    title: 'We donate vitamin B12 to kids in need',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    day: '10',
    month: 'July',
    image: 'https://picsum.photos/id/996/600/450',
  },
  {
    title: 'Volunteers making the world a better place',
    paragraph:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    day: '05',
    month: 'August',
    image: 'https://picsum.photos/id/64/600/450',
  },
] as const

export const footerInfo = {
  blurb:
    'Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  navigation: ['Home', 'About', 'Services', 'Blog', 'Contact'],
  address: '4486 Richards Avenue, Modesto CA - 95354',
  phone: '209-818-6041',
  email: 'charity90@gmail.com',
  supportTitle: 'Support',
  supportText:
    'Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  supportCta: 'Join Us Today',
} as const
