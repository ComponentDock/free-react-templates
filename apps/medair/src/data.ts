// Medair content — health/wellness one-pager (directory of sections).
// Image slots use deterministic picsum seeds; the hero/avatar seeds were
// verified for subject fit during implementation.

export const BRAND = 'Medair'

export const NAV_LINKS = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact'] as const

export const IMAGES = {
  hero: 'https://picsum.photos/id/225/1600/900',
  about: 'https://picsum.photos/seed/medair-about/600/700',
  video: 'https://picsum.photos/seed/medair-video/1600/900',
  appointment: 'https://picsum.photos/seed/medair-appt/1600/900',
  programs: [
    'https://picsum.photos/seed/medair-prog1/280/280',
    'https://picsum.photos/seed/medair-prog2/280/280',
    'https://picsum.photos/seed/medair-prog3/280/280',
    'https://picsum.photos/seed/medair-prog4/280/280',
    'https://picsum.photos/seed/medair-prog5/280/280',
  ],
  steps: [
    'https://picsum.photos/seed/medair-step1/280/280',
    'https://picsum.photos/seed/medair-step2/280/280',
    'https://picsum.photos/seed/medair-step3/280/280',
    'https://picsum.photos/seed/medair-step4/280/280',
  ],
  quotes: [
    'https://picsum.photos/seed/medair-quote1/500/600',
    'https://picsum.photos/seed/medair-quote2/500/600',
    'https://picsum.photos/seed/medair-quote3/500/600',
  ],
  faces: [
    'https://picsum.photos/seed/medair-face1/160/160',
    'https://picsum.photos/seed/medair-face2/160/160',
    'https://picsum.photos/seed/medair-face3/160/160',
  ],
  blogs: [
    'https://picsum.photos/seed/medair-blog1/600/400',
    'https://picsum.photos/seed/medair-blog2/600/400',
    'https://picsum.photos/seed/medair-blog3/600/400',
  ],
} as const

export interface ServiceItem {
  title: string
  icon: 'apple' | 'dumbbell' | 'heart' | 'hand-heart'
  blurb: string
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Nutrition Strategies',
    icon: 'apple',
    blurb:
      'Personal meal plans built around real foods that fit your taste, your schedule, and your goals.',
  },
  {
    title: 'Workout Routines',
    icon: 'dumbbell',
    blurb:
      'Structured training programs for every level, from gentle morning mobility to strength training.',
  },
  {
    title: 'Support Motivation',
    icon: 'heart',
    blurb:
      'Weekly check-ins and a coach in your corner so you stay consistent when life gets busy.',
  },
  {
    title: 'First Hand Advice',
    icon: 'hand-heart',
    blurb:
      'Practical guidance grounded in real experience — no fads, no guesswork, just what works.',
  },
] as const

export const CERTIFIED = {
  label: 'Certified Company',
  count: '24',
  caption: 'Years of experienced',
} as const

export const ABOUT = {
  subheading: 'About Us',
  heading: 'Better Eat, Better Life',
  lead: 'If You Get A Better Nutrition, You Can Enjoy A Healthy Age',
  body: 'We pair evidence-based nutrition science with everyday coaching so healthy eating feels natural, not punishing. Small consistent changes add up to lasting energy, better sleep, and a body that carries you through the years.',
  checklistTitle: 'We Can Help You',
  checklist: [
    'Low Energy',
    'Stress & Anxiety',
    'Poor Eating Habits',
    'Digestive Problems',
    'Balance Body & Mind',
    'Advice',
    'Workout Routines',
    'Protein',
  ],
  years: '24',
  yearsCaption: 'Years of experienced',
} as const

export interface ProgramItem {
  title: string
  icon: 'apple' | 'dumbbell' | 'heart' | 'hand-heart' | 'salad'
  image: string
  blurb: string
}

export const PROGRAMS: ProgramItem[] = [
  {
    title: 'Weight Loss Program',
    icon: 'heart',
    image: IMAGES.programs[0],
    blurb:
      'A sustainable path to a healthier weight — no crash diets, no counting every single calorie.',
  },
  {
    title: 'Sports Nutritionists',
    icon: 'dumbbell',
    image: IMAGES.programs[1],
    blurb: 'Fuel your training with eating plans designed around performance and recovery.',
  },
  {
    title: 'Personalized Nutrition',
    icon: 'apple',
    image: IMAGES.programs[2],
    blurb: 'A plan built around your body, your preferences, and the way you actually live.',
  },
  {
    title: 'Individual Coaching',
    icon: 'hand-heart',
    image: IMAGES.programs[3],
    blurb: 'One-on-one guidance with monthly reviews and adjustments as you progress.',
  },
  {
    title: 'Child Nutrition',
    icon: 'salad',
    image: IMAGES.programs[4],
    blurb: 'Kid-friendly eating habits that grow with your family — simple, fun, and nourishing.',
  },
] as const

export const INTRO = {
  subheading: 'Finding Balance in Food, Health and Wellness',
  heading: 'Get Health and Instruction Coach',
  highlight: 'Instruction Coach',
  cta: 'Make An Appointment',
} as const

export const STEPS: ProgramItem[] = [
  {
    title: 'Trusted Services',
    icon: 'hand-heart',
    image: IMAGES.steps[0],
    blurb: 'Certified coaches and evidence-based methods you can rely on.',
  },
  {
    title: 'Natural Ways',
    icon: 'apple',
    image: IMAGES.steps[1],
    blurb: 'Whole-food first guidance that works with your body, not against it.',
  },
  {
    title: 'Routine Exercise',
    icon: 'dumbbell',
    image: IMAGES.steps[2],
    blurb: 'Movement plans that slot into real weeks and build real momentum.',
  },
  {
    title: 'Success/Goal',
    icon: 'heart',
    image: IMAGES.steps[3],
    blurb: 'Clear milestones and honest tracking so wins are visible along the way.',
  },
] as const

export const VIDEO = {
  subheading: 'Finding Balance In Food, Health And Wellness',
  heading: 'Start Your Body Changing With Healthy Nutrition',
} as const

export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
  face: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Medair changed how I eat and how I feel. For the first time a plan actually fit my life instead of the other way around.',
    name: 'Nicole Scott',
    role: 'Marketing Manager',
    image: IMAGES.quotes[0],
    face: IMAGES.faces[0],
  },
  {
    quote:
      'The workout routines and weekly check-ins kept me accountable. Down 14 pounds and honestly enjoying the process.',
    name: 'David Renshaw',
    role: 'Software Engineer',
    image: IMAGES.quotes[1],
    face: IMAGES.faces[1],
  },
  {
    quote:
      'Our whole family joined the child nutrition program. Simple swaps, happier dinners, and way more energy at the end of the day.',
    name: 'Amara Okafor',
    role: 'Nursery Teacher',
    image: IMAGES.quotes[2],
    face: IMAGES.faces[2],
  },
] as const

export interface BlogPost {
  day: string
  month: string
  title: string
  image: string
  blurb: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    day: '13',
    month: 'Jan',
    title: 'How Much Do You Really Need To Eat Each Day?',
    image: IMAGES.blogs[0],
    blurb:
      'A practical look at portion sizes, protein needs, and why more food is not always the answer.',
  },
  {
    day: '05',
    month: 'Feb',
    title: 'Five Easy Morning Habits For Lasting Energy',
    image: IMAGES.blogs[1],
    blurb: 'Small routines that set the tone for your whole day — no cold plunges required.',
  },
  {
    day: '21',
    month: 'Mar',
    title: 'Meal Prep Without The Chaos: A Beginner Guide',
    image: IMAGES.blogs[2],
    blurb: 'How to plan, shop, and prep a week of good meals in under two hours.',
  },
] as const

export const APPOINTMENT = {
  heading: 'Drop A Message',
  subheading: 'Who We Are',
  title: 'We Best Nutrition',
  blurb:
    'A full-service nutrition practice for individuals, athletes, and families who want real, lasting change.',
  bullets: ['Good Products', 'Natural & Healthy Foods'],
  subjects: ['Individual Coaching', 'Sport Nutrition', 'Personal Nutrition', 'Other'],
  placeholders: {
    name: 'Your Full Name',
    email: 'Email Address',
    subject: 'Select Subject',
    message: 'Message',
  },
} as const

export const FOOTER = {
  blurb:
    'Medair is a health & wellness coaching practice helping people eat mindfully, move often, and feel great — one sustainable habit at a time.',
  services: ['Sport Nutritionists', 'Balance Body & Mind', 'Workout Routines', 'Child Nutrition'],
  quickLinks: ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact'],
  contact: {
    address: '203 Oak Street, Mountain View, California, USA',
    phone: '+2 392 3929 210',
    email: 'hello@medair.example',
  },
  copyright: '© 2026 Medair — All rights reserved',
  dockLink: {
    href: 'https://www.componentdock.com/',
    label: 'More templates at Component Dock',
  },
} as const
