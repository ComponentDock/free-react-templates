/* Swole content + image constants. Copy is paraphrased from the source
   demo but keeps the same content kinds (tagline + headline + CTA,
   course cards with price, schedule table, feature cards, about copy,
   testimonial quotes, member CTA, footer columns + newsletter). Photos are
   seeded picsum placeholders — no source assets copied. */

export const BRAND = 'Swole'

export const PHONE = '+4 40 1234 654 953'

export const NAV_LINKS = ['Home', 'About', 'Courses', 'Contact'] as const

export const BLOG_DROPDOWN = ['Blog', 'Single Blog'] as const

export const PAGES_DROPDOWN = ['Gallery', 'Course Details', 'Course Shedule', 'Elements'] as const

export const COURSES = [
  {
    title: 'Basic Body Building',
    price: '$140.00',
    description:
      'Start your training journey with the essentials: machine work, mobility, and a coached plan to build your first real strength base.',
    image: 'https://picsum.photos/seed/swole-course-1/600/400',
  },
  {
    title: 'Intermediate Body Building',
    price: '$200.00',
    description:
      'Push past plateaus with progressive overload, split programming, and weekly technique review from your coach.',
    image: 'https://picsum.photos/seed/swole-course-2/600/400',
  },
  {
    title: 'Advanced Body Building',
    price: '$250.00',
    description:
      'Competition-ready training: periodized volume, nutrition guidance, and one-on-one sessions twice a week.',
    image: 'https://picsum.photos/seed/swole-course-3/600/400',
  },
] as const

export const SCHEDULE_HEAD = ['Course Name', 'Mon', 'The', 'Wed', 'Thu', 'Fri'] as const

export const SCHEDULE_ROWS = [
  ['Fitness Aero', '02.00', '10.10', '02.00', '02.10', '10.00'],
  ['Fitness Aero', '02.00', '10.10', '02.00', '02.10', '10.00'],
  ['Fitness Aero', '02.00', '10.10', '02.00', '02.10', '10.00'],
  ['Fitness Aero', '02.00', '10.10', '02.00', '02.10', '10.00'],
  ['Fitness Aero', '02.00', '10.10', '02.00', '02.10', '10.00'],
  ['Fitness Aero', '02.00', '10.10', '02.00', '02.10', '10.00'],
] as const

export const FEATURES = [
  {
    title: 'Quality Training',
    description:
      'Every session is built around form first — small classes, big attention, and coaching that actually corrects you.',
  },
  {
    title: 'Flexible Timeframe',
    description:
      'Open from early morning to late evening, with classes and open-floor hours that fit any schedule.',
  },
  {
    title: 'Qualified Trainers',
    description:
      'Our coaches are certified, experienced, and obsessed with your progress — not just your monthly fee.',
  },
  {
    title: 'Affordable Price',
    description:
      'Serious programming without the premium markup. Plans start low and every tier adds real value.',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Helena Phillips',
    role: 'CEO at Google',
    quote:
      'The coaching at Swole changed how I train completely. Strength, energy, and confidence — all of it improved within months.',
    avatar: 'https://picsum.photos/seed/swole-t1/160/160',
  },
  {
    name: 'James Carter',
    role: 'Marathon Runner',
    quote:
      'I came for the schedule flexibility and stayed for the trainers. Every session is intentional and every rep has a purpose.',
    avatar: 'https://picsum.photos/seed/swole-t2/160/160',
  },
  {
    name: 'Sofia Reyes',
    role: 'Yoga Instructor',
    quote:
      'A rare gym that balances intensity with care. The community here keeps me showing up week after week.',
    avatar: 'https://picsum.photos/seed/swole-t3/160/160',
  },
  {
    name: 'Marcus Bell',
    role: 'Personal Trainer',
    quote:
      'As a trainer myself I am picky about gyms. Swole is the only place where I trust the programming completely.',
    avatar: 'https://picsum.photos/seed/swole-t4/160/160',
  },
  {
    name: 'Emily Watson',
    role: 'Product Designer',
    quote:
      'The member app, the class booking, the coaching check-ins — everything is smooth and built around the athlete.',
    avatar: 'https://picsum.photos/seed/swole-t5/160/160',
  },
  {
    name: 'David Kim',
    role: 'Software Engineer',
    quote:
      'I have trained in five cities and none of them matched the attention you get here. Worth every penny.',
    avatar: 'https://picsum.photos/seed/swole-t6/160/160',
  },
  {
    name: 'Olivia Brown',
    role: 'Nutrition Coach',
    quote:
      'Strong programming, honest coaches, and a space that actually feels motivating. Swole raised my own standards.',
    avatar: 'https://picsum.photos/seed/swole-t7/160/160',
  },
] as const

export const ABOUT_PARAGRAPHS = [
  'Since 2004 we have helped thousands of members build strength, endurance, and discipline under one roof. Our floor is equipped for every goal — from your first deadlift to a competition-ready physique.',
  'Train with certified coaches who track your progress, adjust your plan, and push you exactly as hard as you need. No crowded floors, no forgotten members — just focused, honest training.',
] as const

export const FOOTER_BLURB =
  'Swole is a dedicated fitness center built on coaching quality and real results. Join a community that trains hard, recovers smart, and shows up every single day.'

export const FOOTER_ADDRESS = '56/8, Rockybeach Road, Santa Monica, Los Angeles, California - 59620'

export const FOOTER_PHONES = ['012-6532-568-9746', '012-6532-569-9748'] as const
