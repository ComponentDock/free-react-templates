export const siteName = 'Sanctum Church'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  heading: 'Needing Jesus Christ Together',
  ctaLabel: 'Save your spirit',
  image: 'https://picsum.photos/seed/sanctum-hero/1920/1280',
} as const

export const bibleStudy = {
  heading: 'Bible Study',
  description:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  countdown: { days: 15, hours: 8, mins: 30, secs: 45 },
  ctaLabel: 'Events Details',
} as const

export const about = {
  heading: 'Loving God, Loving Others and Serving the World',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  ],
  image: 'https://picsum.photos/seed/sanctum-about/800/600',
  imageAlt: 'Church community gathering',
} as const

export const services = [
  {
    title: "I'm New Here",
    icon: 'globe' as const,
    description:
      'Welcome to our community — we are glad you found us and invite you to explore what we offer.',
  },
  {
    title: 'Care Ministries',
    icon: 'heart' as const,
    description:
      'Our care team provides support, prayer, and guidance for those going through difficult times.',
  },
  {
    title: 'Prayer Request',
    icon: 'hand' as const,
    description:
      'Submit your prayer needs and our dedicated prayer team will lift you up in prayer.',
  },
  {
    title: 'Podcasts',
    icon: 'headphones' as const,
    description: 'Listen to our weekly sermons and inspirational messages anytime, anywhere.',
  },
] as const

export const newsletter = {
  heading: 'Subscribe to our Newsletter',
  description:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  placeholder: 'Enter email address',
  ctaLabel: 'Subscribe',
} as const

export const sermons = [
  {
    title: 'Be at Peace With One Another',
    speaker: 'Pastor Joseph Meyer',
    image: 'https://picsum.photos/seed/sanctum-sermon1/600/400',
  },
  {
    title: 'Inspirational Message of God',
    speaker: 'Pastor Joseph Meyer',
    image: 'https://picsum.photos/seed/sanctum-sermon2/600/400',
  },
  {
    title: 'Prayers, Presence, and Provision',
    speaker: 'Dave Zuleger',
    image: 'https://picsum.photos/seed/sanctum-sermon3/600/400',
  },
] as const

export const testimonies = [
  {
    quote:
      'This community has transformed my life through their warm welcome and genuine fellowship.',
    name: 'Dennis Green',
    role: 'Member',
    image: 'https://picsum.photos/seed/sanctum-person1/200/200',
  },
  {
    quote: 'Volunteering here has given me a deeper sense of purpose and connection with others.',
    name: 'Sarah Johnson',
    role: 'Volunteer',
    image: 'https://picsum.photos/seed/sanctum-person2/200/200',
  },
  {
    quote:
      'The prayers and support from this congregation have carried me through my toughest seasons.',
    name: 'David Pastor',
    role: 'Pastor',
    image: 'https://picsum.photos/seed/sanctum-person3/200/200',
  },
] as const

export const counters = [
  { number: 20254, label: 'Churches around the world' },
  { number: 4200000, label: 'Members around the globe' },
  { number: 8600000, label: 'Save life & Donations' },
] as const

export const events = [
  {
    day: 7,
    month: 'Aug',
    year: '2018',
    title: "Saturday's Bible Reading",
    time: '9:00am at 456 NC USA',
    image: 'https://picsum.photos/seed/sanctum-event1/400/300',
  },
  {
    day: 14,
    month: 'Aug',
    year: '2018',
    title: 'Wednesday Gospel Singing',
    time: '7:00pm at 456 NC USA',
    image: 'https://picsum.photos/seed/sanctum-event2/400/300',
  },
] as const

export const blog = [
  {
    date: 'July 12, 2018',
    author: 'Admin',
    comments: 3,
    title: 'How faith guides us through the challenges of everyday life',
    image: 'https://picsum.photos/seed/sanctum-blog1/600/400',
  },
  {
    date: 'July 15, 2018',
    author: 'Pastor John',
    comments: 5,
    title: 'Building stronger communities through compassion and service',
    image: 'https://picsum.photos/seed/sanctum-blog2/600/400',
  },
  {
    date: 'July 20, 2018',
    author: 'Sarah Miller',
    comments: 2,
    title: 'The power of prayer in transforming lives and relationships',
    image: 'https://picsum.photos/seed/sanctum-blog3/600/400',
  },
] as const

export const contact = {
  address: '198 West 21th Street, Suite 721 New York NY 10016',
  phone: '+ 1235 2355 98',
  email: 'info@yoursite.com',
} as const

export const footer = {
  componentDockLabel: 'Component Dock',
  componentDockHref: 'https://www.componentdock.com/',
} as const

export const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'facebook' as const },
  { label: 'Twitter', href: '#', icon: 'twitter' as const },
  { label: 'Google', href: '#', icon: 'google' as const },
  { label: 'Instagram', href: '#', icon: 'instagram' as const },
]
