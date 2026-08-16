export const siteName = 'Sanctus'

export interface NavLink {
  label: string
  href: string
  active?: boolean
  dropdown?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Sermons', href: '#sermons', dropdown: true },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export const sermonDropdown = [
  { label: 'Sermons', href: '#sermons' },
  { label: 'Sermons Single', href: '#sermons' },
  {
    label: 'Dropdown',
    children: [
      { label: 'Sub Menu One', href: '#sermons' },
      { label: 'Sub Menu Two', href: '#sermons' },
      { label: 'Sub Menu Three', href: '#sermons' },
    ],
  },
] as const

export const hero = {
  subheading: 'Welcome to Sanctus church',
  headline: 'Oh Safe To the Rock That Is Higher Than I',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  ctaLabel: 'Go to sermons',
  image: 'https://picsum.photos/seed/sanctus-hero/960/960',
  imageAlt: 'Sermon gathering at sunset',
  playLabel: 'Play sermon video',
} as const

export const about = {
  subheading: 'About us',
  heading: 'Living and Sharing The Gospel',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  ],
  ctaLabel: 'Know more about us',
  image: 'https://picsum.photos/seed/sanctus-about/800/600',
  imageAlt: 'Open books and a warm reading nook',
} as const

export const sermons = {
  subheading: 'Sermons',
  heading: 'Recent Sermons',
  date: '15 Jan 2020 • By Pastor Campbell',
  title: 'Living and Sharing The Gospel',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  ctaLabel: 'Read more',
  cards: [
    { seed: 'sanctus-sermon-1', alt: 'Pastor preaching to the congregation' },
    { seed: 'sanctus-sermon-2', alt: 'Worship band leading songs of praise' },
    { seed: 'sanctus-sermon-3', alt: 'Open Bible on a wooden lectern' },
  ] as const,
} as const

export const whyUs = {
  subheading: 'Why Us',
  heading: 'You matter to God, you matter to us.',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  image: 'https://picsum.photos/seed/sanctus-why/800/600',
  imageAlt: 'Sunrise over a quiet hillside',
  playLabel: 'Play worship video',
  features: [
    {
      title: 'Peace with God',
      copy: 'Far far away, behind the word mountains, far from the countries.',
    },
    {
      title: 'Relationship for the Soul',
      copy: 'Separated they live in Bookmarksgrove right at the coast.',
    },
    {
      title: 'Identifying Limitations',
      copy: 'A small river named Duden flows by their place and supplies it.',
    },
    {
      title: 'His Kingdom',
      copy: 'Even the all-powerful Pointing has no control about the blind texts.',
    },
  ] as const,
  ctaLabel: 'Send us your prayer request',
} as const

export const testimonials = {
  subheading: 'Testimonials',
  heading: 'Living Testimonies',
  itemHeading: 'Far far away, behind the word mountains',
  quotes: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
    'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen.',
    'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road.',
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. One day however a small line of blind text by the name of Lorem Ipsum.',
    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place.',
  ] as const,
  author: 'James Campbell',
  role: 'Person',
  avatar: 'https://picsum.photos/seed/sanctus-person/80/80',
  prevLabel: 'Prev',
  nextLabel: 'Next',
} as const

export const services = {
  subheading: 'Our Services',
  heading: 'Church Services',
  items: [
    {
      title: 'Praise and Worship',
      copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      icon: 'wheat',
    },
    {
      title: 'Marriage',
      copy: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      icon: 'church',
    },
    {
      title: 'Exhortation',
      copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      icon: 'bible',
    },
  ] as const,
  moreLabel: '+ Read more',
} as const

export const join = {
  heading: 'Join with us as we worship the Lord',
  ctaLabel: 'Join Us',
} as const

export const footer = {
  contactTitle: 'Contact',
  address: '43 Raymouth Rd. Baltemoer, London 3910',
  phones: ['+1(123)-456-7890', '+1(123)-456-7890'],
  email: 'info@mydomain.com',
  sourcesTitle: 'Sources',
  sourcesColumns: [
    ['About us', 'Services', 'Vision', 'Mission', 'Terms', 'Privacy'],
    ['Partners', 'Business', 'Careers', 'Blog', 'FAQ', 'Creative'],
  ],
  linksTitle: 'Links',
  links: ['Our Vision', 'About us', 'Contact us'],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'Pinterest', href: 'https://pinterest.com', icon: 'pinterest' },
    { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
  ] as const,
  componentDockHref: 'https://www.componentdock.com/',
  componentDockLabel: 'Component Dock',
  madeWith: 'Made with ♥ by',
  rights: 'All rights reserved',
} as const
