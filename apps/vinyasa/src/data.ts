export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Trainers', href: '#classes' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog Home', href: '#blog' },
      { label: 'Blog Single', href: '#blog' },
    ],
  },
  {
    label: 'Pages',
    href: '#schedule',
    children: [
      { label: 'Schedule', href: '#schedule' },
      { label: 'Courses', href: '#classes' },
      { label: 'Elements', href: '#blog' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const topBar = {
  phone: '+880 1234 654 953',
  bookHref: '#contact',
}

export const hero = {
  label: 'Vinyasa',
  headlinePrefix: 'to',
  headlineAccent: 'Shape',
  headlineSuffix: 'your body',
  copy: 'Flowing classes that build strength, flexibility, and calm — led by coaches who notice the details.',
  image: 'https://picsum.photos/seed/vinyasa-hero/1600/1000',
  poseImage: 'https://picsum.photos/seed/vinyasa-pose/500/700',
}

export const aboutCards = [
  {
    title: 'Why Choose Us',
    copy: 'Small classes, attentive coaching, and a schedule that fits a busy week.',
  },
  {
    title: 'Our Properties',
    copy: 'Bright, well-equipped studios with mats, showers, and room to breathe.',
  },
  {
    title: 'Legal Notice',
    copy: 'Clear membership terms, flexible passes, and no hidden fees.',
  },
  {
    title: 'Our Programs',
    copy: 'Yoga, strength, and cardio tracks that progress week after week.',
  },
]

export const aboutImage = 'https://picsum.photos/seed/vinyasa-about/600/700'

export const featuredClasses = [
  {
    title: 'Get into shape now',
    image: 'https://picsum.photos/seed/vinyasa-class-1/600/450',
  },
  {
    title: 'Get into shape now',
    image: 'https://picsum.photos/seed/vinyasa-class-2/600/450',
  },
  {
    title: 'Get into shape now',
    image: 'https://picsum.photos/seed/vinyasa-class-3/600/450',
  },
  {
    title: 'Get into shape now',
    image: 'https://picsum.photos/seed/vinyasa-class-4/600/450',
  },
]

export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export const scheduleRows = [
  { name: 'Fitness Aero', times: ['02.00', '10.00', '02.00', '02.00', '10.00'] },
  { name: 'Senior Fitness', times: ['02.00', '10.00', '02.00', '02.00', '10.00'] },
  { name: 'Cardio Flow', times: ['10.00', '02.00', '10.00', '10.00', '02.00'] },
  { name: 'Yoga Basics', times: ['08.00', '08.00', '10.00', '08.00', '08.00'] },
]

export const testimonials = [
  {
    quote:
      'Vinyasa gave me a routine I actually enjoy. The teachers know every member by name and by goal.',
    name: 'Helena Phillips',
    role: 'CEO at Facebook',
    avatar: 'https://picsum.photos/seed/vinyasa-avatar-1/200/200',
  },
  {
    quote:
      'I joined for the schedule and stayed for the community. Six months in, I am fitter than ever.',
    name: 'Cordelia Barton',
    role: 'Marketing Lead',
    avatar: 'https://picsum.photos/seed/vinyasa-avatar-2/200/200',
  },
  {
    quote:
      'The morning flow classes changed how I start every day. Calm body, clear head, real energy.',
    name: 'Carrie Reese',
    role: 'Product Designer',
    avatar: 'https://picsum.photos/seed/vinyasa-avatar-3/200/200',
  },
]

export const cta = {
  headline: 'Ready to start your fitness journey?',
  copy: 'Join Vinyasa today and get your first week free — no contracts, no lock-in, just movement.',
  image: 'https://picsum.photos/seed/vinyasa-cta/1600/600',
}

export const posts = [
  {
    title: 'Five reasons to start your day on the mat',
    excerpt:
      'A short morning flow pays dividends all day — here is what changes after thirty days.',
    date: '13th Dec',
    likes: '15',
    comments: '02',
    image: 'https://picsum.photos/seed/vinyasa-blog-1/600/400',
  },
  {
    title: 'Strength without the grind: bodyweight basics',
    excerpt:
      'You do not need a rack of iron to build real, functional strength. Start with these moves.',
    date: '18th Dec',
    likes: '21',
    comments: '04',
    image: 'https://picsum.photos/seed/vinyasa-blog-2/600/400',
  },
  {
    title: 'Breathing techniques for busy people',
    excerpt: 'Two minutes of focused breath between meetings can reset your whole afternoon.',
    date: '24th Dec',
    likes: '12',
    comments: '03',
    image: 'https://picsum.photos/seed/vinyasa-blog-3/600/400',
  },
]

export const contact = {
  address: '56/8, rockybeach road, santa monica, Los angeles, California - 59620',
  phones: ['+880 1234 654 953', '+880 3434 654 953'],
  email: 'hello@vinyasa.fit',
}

export const newsletterLabel = 'Email address'
