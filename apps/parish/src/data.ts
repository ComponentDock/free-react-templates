export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const brand = {
  name: 'Parish',
  tagline: 'Christian Church',
}

export const hero = {
  image: 'https://picsum.photos/id/1043/1600/1000',
  playLabel: 'Watch our latest sermons',
  headline: 'Loving God, Loving Others, Serving God With All Your Heart',
  sub: 'Submit your presence to the creator of the universe',
}

export interface Ministry {
  title: string
  body: string
  icon: string
  active?: boolean
}

export const ministries: Ministry[] = [
  {
    title: 'Daily Prayers',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: 'praying-hands',
  },
  {
    title: 'Church Community',
    body: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    icon: 'church',
    active: true,
  },
  {
    title: 'Teaching',
    body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: 'book-open',
  },
  {
    title: 'Helpers',
    body: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    icon: 'heart-handshake',
  },
  {
    title: 'Wedding',
    body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: 'gem',
  },
  {
    title: 'Events',
    body: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    icon: 'megaphone',
  },
]

export const counter = {
  image: 'https://picsum.photos/id/1081/900/700',
  heading: 'We are church that believes in Jesus Christ',
  body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
}

export interface Stat {
  target: number
  label: string
}

export const stats: Stat[] = [
  { target: 70000, label: 'Members' },
  { target: 1000, label: 'Pastors' },
  { target: 100000, label: 'Donation' },
  { target: 100, label: 'Churches' },
]

export const sermon = {
  image: 'https://picsum.photos/id/1067/800/600',
  title: 'Lord is Sufficient for all of our needs',
  meta: 'Sermon from: Felix Gonner · Categories: God, Pray · On Sunday 13 Jan, 2019',
  body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  watchLabel: 'Watch Sermons',
  downloadLabel: 'Download Sermons',
}

export const instagramImages: string[] = [
  'https://picsum.photos/id/1050/400/400',
  'https://picsum.photos/id/1041/400/400',
  'https://picsum.photos/id/1035/400/400',
  'https://picsum.photos/id/1065/400/400',
]

export interface Testimonial {
  quote: string
  image: string
  name: string
  position: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    image: 'https://picsum.photos/id/1027/200/200',
    name: 'John Cooper',
    position: 'Member',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/id/64/200/200',
    name: 'Mary Lane',
    position: 'Member',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text decided to leave.',
    image: 'https://picsum.photos/id/823/200/200',
    name: 'David Grant',
    position: 'Volunteer',
  },
]

export interface ChurchEvent {
  image: string
  title: string
  time: string
  venue: string
  address: string
}

export const events: ChurchEvent[] = [
  {
    image: 'https://picsum.photos/id/164/600/400',
    title: 'How To Recover The Cutting Edge',
    time: 'Monday, 8:00 Am - Tuesday, 8:00 Pm',
    venue: 'Spring Church',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    image: 'https://picsum.photos/id/1055/600/400',
    title: 'The Power of Community Prayer',
    time: 'Saturday, 10:00 Am - 11:30 Am',
    venue: 'Parish Hall',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    image: 'https://picsum.photos/id/1076/600/400',
    title: 'Youth Fellowship Weekend',
    time: 'Friday, 6:00 Pm - Sunday, 12:00 Pm',
    venue: 'Campus Center',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
]

export interface BlogPost {
  meta: string
  title: string
  image: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    meta: 'Aug 5, 2019 · Admin · 3',
    title: 'Know About Our God Who Created This Universe',
    image: 'https://picsum.photos/id/1029/600/400',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    meta: 'Jul 28, 2019 · Admin · 5',
    title: 'Living a Life of Faith and Service',
    image: 'https://picsum.photos/id/1040/600/400',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    meta: 'Jul 21, 2019 · Admin · 2',
    title: 'Finding Peace in Times of Trouble',
    image: 'https://picsum.photos/id/1054/600/400',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export interface FooterColumn {
  heading: string
  links: string[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'About',
    links: [
      'Staff',
      'Beliefs',
      'History',
      'Mission',
      'Wedding & Funerals',
      'Jobs & Internship',
      'Fellowships',
    ],
  },
  {
    heading: 'Connect',
    links: [
      'Home Groups',
      'Recovery Groups',
      'Memberships',
      'Children & Students',
      'Volunteer',
      'Counseling',
      'Assistance',
    ],
  },
]

export const serviceHours = [
  { day: 'Saturday Prayer Meeting', time: '10:00 am to 11:30 am' },
  { day: 'Sunday Service', time: '8:30 am to 11:30 am' },
]

export const sectionLabels = {
  ministries: 'Ministries',
  counter: 'About Us',
  sermonSub: "Experience God's Presence",
  sermonHeading: 'Sermon for Today',
  testimony: 'Inspirational Testimony',
  events: 'Events',
  eventsHeading: 'Upcoming Events',
  blog: 'Our Blog',
  blogHeading: 'Recent Blog',
}
