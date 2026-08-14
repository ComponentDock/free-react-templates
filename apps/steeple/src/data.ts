export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export const BELIEFS_DROPDOWN = {
  label: 'Beliefs',
  children: [
    { label: 'God', href: '#beliefs' },
    { label: 'Humanity', href: '#beliefs' },
    { label: 'Salvation', href: '#beliefs' },
    {
      label: 'Churches',
      href: '#beliefs',
      nested: [
        { label: 'America', href: '#beliefs' },
        { label: 'Europe', href: '#beliefs' },
        { label: 'Asia', href: '#beliefs' },
        { label: 'Africa', href: '#beliefs' },
      ],
    },
  ],
} as const

export const HERO_SLIDES = [
  {
    image: 'https://picsum.photos/id/1035/1600/900',
    headline: 'For The Time',
    accent: 'Is At Hand',
    tail: '',
  },
  {
    image: 'https://picsum.photos/id/1067/1600/900',
    headline: 'The',
    accent: 'Truth',
    tail: 'Will Set You Free',
  },
] as const

export const SERMON = {
  heading: 'Latest Sermon',
  subheading: '“Thy Kingdom Come”',
  speaker: 'Pastor Edward Cane',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat quia nisi a nesciunt vitae.',
} as const

export const ABOUT = {
  heading: 'About Our Church',
  tagline: 'We are helping people with the Cretor!',
  image: 'https://picsum.photos/seed/steeple-about/640/480',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quaerat! Quod distinctio corporis obcaecati sed, illum magni eligendi iure quos, iste sapiente repellat autem at voluptas veritatis laboriosam perferendis, itaque.',
} as const

export const FEATURES = [
  {
    title: 'Our Mission',
    icon: 'send',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, perspiciatis praesentium eos voluptatem?',
  },
  {
    title: 'Testimonies',
    icon: 'messages',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, perspiciatis praesentium eos voluptatem?',
  },
  {
    title: 'Listen To Our Sermons',
    icon: 'megaphone',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, perspiciatis praesentium eos voluptatem?',
  },
  {
    title: 'Join Our Church',
    icon: 'users',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, perspiciatis praesentium eos voluptatem?',
  },
] as const

export const EVENTS = [
  {
    title: 'Church Bible Study',
    date: 'January 20, 2018',
    author: 'Josh Holmes',
    image: 'https://picsum.photos/seed/steeple-event1/480/360',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quo, quos recusandae aperiam. Repellat quisquam, quo minima officia.',
  },
  {
    title: 'Church Building Accomplishments in January 2018',
    date: 'January 20, 2018',
    author: 'Josh Holmes',
    image: 'https://picsum.photos/seed/steeple-event2/480/360',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quo, quos recusandae aperiam. Repellat quisquam, quo minima officia.',
  },
  {
    title: 'Learn How To Pray',
    date: 'January 20, 2018',
    author: 'Josh Holmes',
    image: 'https://picsum.photos/seed/steeple-event3/480/360',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quo, quos recusandae aperiam. Repellat quisquam, quo minima officia.',
  },
] as const

export const QUICK_CONTACT = [
  {
    title: 'Location',
    icon: 'map-pin',
    lines: ['New York - 2398', '10 Hadson Carl Street'],
  },
  {
    title: 'Service Times',
    icon: 'clock',
    lines: [
      'Wednesdays at 6:30PM - 7:30PM',
      'Fridays at Sunset - 7:30PM',
      'Saturdays at 8:00AM - Sunset',
    ],
  },
  {
    title: 'Get In Touch',
    icon: 'message-circle',
    lines: ['Email: info@yoursite.com', 'Phone: (123) 3240-345-9348'],
  },
] as const

export const QUICK_MENU = [
  'About',
  'Services',
  'Approach',
  'Sustainability',
  'News',
  'Careers',
] as const

export const MINISTRIES = ['Children', 'Women', 'Bible Study', 'Church', 'Missionaries'] as const
