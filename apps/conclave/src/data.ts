/* Conclave — UX Conference landing page content.
   Brand palette: purple #3b1d82 (primary) · pink #ea0763 (accent) ·
   light #f7f7f7 · footer navy #111429 · text #242424 · muted #797979. */

export const BRAND = 'Conclave'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const EVENT_DATE = new Date(2025, 0, 22, 9, 0, 0)

export const SPEAKERS = [
  { name: 'Sarah Johnson', role: 'CEO & Founder' },
  { name: 'Michael Chen', role: 'Keynote Speaker' },
  { name: 'Emily Davis', role: 'UX Design Lead' },
  { name: 'James Wilson', role: 'Workshop Host' },
  { name: 'Olivia Brown', role: 'Panel Moderator' },
  { name: 'David Martinez', role: 'Tech Lead' },
] as const

export const FEATURES = [
  {
    title: 'Expert Speakers',
    description:
      'Learn from industry leaders who are shaping the future of user experience design across the globe.',
    icon: 'users',
  },
  {
    title: 'Hands-on Workshops',
    description:
      'Participate in interactive sessions where you can apply new techniques and tools in real-time.',
    icon: 'lightbulb',
  },
  {
    title: 'Networking Events',
    description:
      'Connect with fellow professionals, share ideas, and build lasting relationships in the industry.',
    icon: 'network',
  },
] as const

export const SCHEDULE_DAYS = [
  {
    label: 'Day 1',
    date: 'Jan 20, 2025',
    sessions: [
      {
        title: 'Opening Keynote: The Future of UX',
        speaker: 'Sarah Johnson',
        role: 'CEO & Founder',
        time: '09:00 - 10:30',
      },
      {
        title: 'Design Systems in Practice',
        speaker: 'Emily Davis',
        role: 'UX Design Lead',
        time: '11:00 - 12:30',
      },
    ],
  },
  {
    label: 'Day 2',
    date: 'Jan 21, 2025',
    sessions: [
      {
        title: 'User Research Methods',
        speaker: 'Michael Chen',
        role: 'Keynote Speaker',
        time: '09:00 - 10:30',
      },
      {
        title: 'Workshop: Prototyping With React',
        speaker: 'James Wilson',
        role: 'Workshop Host',
        time: '11:00 - 13:00',
      },
      {
        title: 'Panel: Accessibility in Design',
        speaker: 'Olivia Brown',
        role: 'Panel Moderator',
        time: '14:00 - 15:30',
      },
    ],
  },
  {
    label: 'Day 3',
    date: 'Jan 22, 2025',
    sessions: [
      {
        title: 'Advanced Interaction Design',
        speaker: 'David Martinez',
        role: 'Tech Lead',
        time: '09:00 - 10:30',
      },
      {
        title: 'Closing Keynote: What Comes Next',
        speaker: 'Sarah Johnson',
        role: 'CEO & Founder',
        time: '11:00 - 12:30',
      },
    ],
  },
  {
    label: 'Day 4',
    date: 'Jan 23, 2025',
    sessions: [
      {
        title: 'Workshop: Design Thinking',
        speaker: 'Emily Davis',
        role: 'UX Design Lead',
        time: '09:00 - 12:00',
      },
      {
        title: 'Networking Lunch & Farewell',
        speaker: 'Conclave Team',
        role: 'Organizers',
        time: '12:30 - 14:00',
      },
    ],
  },
] as const

export const TICKETS = [
  {
    plan: 'Normal',
    subtitle: 'Standard Access',
    price: 45,
    features: [
      { text: 'All Day Access', included: true },
      { text: 'Coffee Breaks', included: true },
      { text: 'Lunch Included', included: true },
      { text: 'Workshop Access', included: false },
      { text: 'VIP Networking', included: false },
    ],
    active: false,
  },
  {
    plan: 'Advance',
    subtitle: 'Full Experience',
    price: 50,
    features: [
      { text: 'All Day Access', included: true },
      { text: 'Coffee Breaks', included: true },
      { text: 'Lunch Included', included: true },
      { text: 'Workshop Access', included: true },
      { text: 'VIP Networking', included: false },
    ],
    active: true,
  },
  {
    plan: 'Ultimate',
    subtitle: 'Premium Pass',
    price: 60,
    features: [
      { text: 'All Day Access', included: true },
      { text: 'Coffee Breaks', included: true },
      { text: 'Lunch Included', included: true },
      { text: 'Workshop Access', included: true },
      { text: 'VIP Networking', included: true },
    ],
    active: false,
  },
] as const

export const GOLD_SPONSORS = ['TechVision', 'DesignHub', 'InnovateCo'] as const
export const SILVER_SPONSORS = ['PixelWorks', 'UXStudio', 'CreativeFlow'] as const

export const BLOG_POSTS = [
  {
    title: 'Top UX Trends to Watch in 2025',
    date: 'Jan 15, 2025',
    comments: 12,
  },
  {
    title: 'How to Build Inclusive Design Systems',
    date: 'Jan 10, 2025',
    comments: 8,
  },
  {
    title: 'The Future of AI in User Experience',
    date: 'Jan 5, 2025',
    comments: 15,
  },
] as const

export const FOOTER_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const INSTA_FEED = Array.from(
  { length: 8 },
  (_, i) => `https://picsum.photos/seed/conclave-insta${i + 1}/100/100`,
)
