export interface NavItem {
  label: string
  href: string
}

export interface ClassType {
  title: string
  image: string
}

interface ExperienceItem {
  title: string
  text: string
  icon: ExperienceIcon
}

export type ExperienceIcon =
  'flower2' | 'heartpulse' | 'activity' | 'bone' | 'heart' | 'droplet' | 'book-open' | 'dumbbell'

export interface ClassCard {
  title: string
  date: string
  image: string
}

interface TimetableCell {
  name: string
  time: string
  image: string
}

export interface Testimonial {
  quote: string
  name: string
  image: string
}

export interface Stat {
  value: number
  label: string
}

export interface Post {
  title: string
  excerpt: string
  image: string
}

export const brand = {
  name: 'Zendo',
  tagline: 'Yoga & Meditation Studio',
}

export const navLinks: NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Trainer', href: '#classes-section' },
  { label: 'Classes', href: '#classes-section' },
  { label: 'Schedule', href: '#schedule-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const hero = {
  slides: [
    {
      heading: 'Discover Your Inner Sanctuary',
      subheading: 'Everyday We Bring Hope and Smile to the Patient We Serve',
      image: 'https://picsum.photos/seed/zendo-hero-1/1920/1080',
    },
    {
      heading: 'Lighting Your Heart & Mind',
      subheading: 'Your Health is Our Top Priority with Comprehensive, Affordable medical.',
      image: 'https://picsum.photos/seed/zendo-hero-2/1920/1080',
    },
  ],
  cta: 'View our works',
}

export const classTypes: ClassType[] = [
  {
    title: 'Power Yoga',
    image: 'https://picsum.photos/seed/zendo-class-1/400/400',
  },
  {
    title: 'Community Class',
    image: 'https://picsum.photos/seed/zendo-class-2/400/400',
  },
  {
    title: 'Foundation Yoga',
    image: 'https://picsum.photos/seed/zendo-class-3/400/400',
  },
  {
    title: 'Prenatal Yoga',
    image: 'https://picsum.photos/seed/zendo-class-4/400/400',
  },
]

export const experience = {
  heading: 'Experience of Yoga',
  image: 'https://picsum.photos/seed/zendo-services/500/800',
  alt: 'Woman meditating in a yoga pose',
  items: [
    {
      title: 'Balance Body & Mind',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      icon: 'flower2',
    },
    {
      title: 'Healthy Daily Life',
      text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      icon: 'heartpulse',
    },
    {
      title: 'Improves your flexibility',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      icon: 'activity',
    },
    {
      title: 'Protects your spine',
      text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      icon: 'bone',
    },
    {
      title: 'Betters your bone health',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      icon: 'heart',
    },
    {
      title: 'Increases your blood flow',
      text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      icon: 'droplet',
    },
    {
      title: 'Keep a practice journal',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      icon: 'book-open',
    },
    {
      title: 'Builds muscle strength',
      text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      icon: 'dumbbell',
    },
  ] satisfies ExperienceItem[],
}

export const classes: ClassCard[] = [
  {
    title: 'Private & Group Lessons',
    date: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
    image: 'https://picsum.photos/seed/zendo-classes-1/600/450',
  },
  {
    title: 'Yoga for Pregnant',
    date: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
    image: 'https://picsum.photos/seed/zendo-classes-2/600/450',
  },
  {
    title: 'Yoga for Beginners',
    date: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
    image: 'https://picsum.photos/seed/zendo-classes-3/600/450',
  },
  {
    title: 'Yoga Barre',
    date: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
    image: 'https://picsum.photos/seed/zendo-classes-4/600/450',
  },
  {
    title: 'Yoga Core',
    date: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
    image: 'https://picsum.photos/seed/zendo-classes-5/600/450',
  },
  {
    title: 'Yoga Restore',
    date: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
    image: 'https://picsum.photos/seed/zendo-classes-6/600/450',
  },
]

export const timetable = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  rows: [
    {
      cells: [
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t1/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t2/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t3/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t4/60/60',
        },
      ],
    },
    {
      cells: [
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t5/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t6/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t7/60/60',
        },
        null,
      ],
    },
    {
      cells: [
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t8/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t9/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t10/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t11/60/60',
        },
      ],
    },
    {
      cells: [
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t12/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t13/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t14/60/60',
        },
        null,
      ],
    },
    {
      cells: [
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t15/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t16/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t17/60/60',
        },
        null,
        {
          name: 'Yoga training',
          time: '7 am-6 am',
          image: 'https://picsum.photos/seed/zendo-t18/60/60',
        },
      ],
    },
  ] satisfies { cells: (TimetableCell | null)[] }[],
  months: ['September', 'November'],
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Gabby Smith',
    image: 'https://picsum.photos/seed/zendo-p1/100/100',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Floyd Weather',
    image: 'https://picsum.photos/seed/zendo-p2/100/100',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    name: 'James Dee',
    image: 'https://picsum.photos/seed/zendo-p3/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Lance Roger',
    image: 'https://picsum.photos/seed/zendo-p4/100/100',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Kenny Bufer',
    image: 'https://picsum.photos/seed/zendo-p2/100/100',
  },
]

export const stats: Stat[] = [
  { value: 2560, label: 'Happy Customers' },
  { value: 60, label: 'Yoga Classes' },
  { value: 50, label: 'Years of Experience' },
  { value: 100, label: 'Yoga Conducted' },
]

export const posts: Post[] = [
  {
    title: 'Is wellness the new luxury',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/zendo-post-1/600/450',
  },
  {
    title: 'Yoga for a healthy spine',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/zendo-post-2/600/450',
  },
  {
    title: 'Finding balance in a busy world',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/zendo-post-3/600/450',
  },
]

export const galleryImages: string[] = [
  'https://picsum.photos/seed/zendo-gallery-1/600/600',
  'https://picsum.photos/seed/zendo-gallery-2/600/600',
  'https://picsum.photos/seed/zendo-gallery-3/600/600',
  'https://picsum.photos/seed/zendo-gallery-4/600/600',
  'https://picsum.photos/seed/zendo-gallery-5/600/600',
  'https://picsum.photos/seed/zendo-gallery-6/600/600',
  'https://picsum.photos/seed/zendo-gallery-7/600/600',
  'https://picsum.photos/seed/zendo-gallery-8/600/600',
]

export const footer = {
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  popularLinks: [
    { label: 'Yoga for Beginners', href: '#classes-section' },
    { label: 'Yoga for Pregnant', href: '#classes-section' },
    { label: 'Yoga Barre', href: '#classes-section' },
    { label: 'Yoga Advance', href: '#classes-section' },
  ],
  quickLinks: [
    { label: 'Home', href: '#home-section' },
    { label: 'About', href: '#about-section' },
    { label: 'Classes', href: '#classes-section' },
    { label: 'Schedule', href: '#schedule-section' },
    { label: 'Contact', href: '#contact-section' },
  ],
  questionTitle: 'Have a Questions?',
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
  messagePlaceholder: 'Message',
  sendLabel: 'Send message',
}
