import { CreditCard, Dumbbell, HeartPulse, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Classes', href: '#classes' },
  { label: 'Schedules', href: '#schedules' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export interface Slide {
  eyebrow: string
  title: string
  subtitle: string
  image: string
}

export const heroSlides: Slide[] = [
  {
    eyebrow: 'Crossfit',
    title: 'Shape Your Perfect Body',
    subtitle:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/kinesis-hero-1/1600/900',
  },
  {
    eyebrow: 'Crossfit',
    title: 'Increase Your Muscle Power',
    subtitle:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/kinesis-hero-2/1600/900',
  },
  {
    eyebrow: 'Crossfit',
    title: 'You Only Fail, When You Stop Trying',
    subtitle:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/kinesis-hero-3/1600/900',
  },
]

export interface AboutPoint {
  label: string
  icon: LucideIcon
}

export const aboutPoints: AboutPoint[] = [
  { label: 'Men Fitness and Workout', icon: Dumbbell },
  { label: 'Women Fitness and Workout', icon: HeartPulse },
  { label: 'Personal Trainings', icon: Users },
]

export interface CounterStat {
  value: number
  suffix: string
  label: string
}

export const counters: CounterStat[] = [
  { value: 26, suffix: '+', label: 'Years of experienced' },
  { value: 150, suffix: '+', label: 'Fitness Trainers' },
  { value: 300, suffix: '+', label: 'Best Equipments' },
  { value: 12, suffix: 'k+', label: 'Satisfied Clients' },
]

export interface Feature {
  icon: LucideIcon
  title: string
  blurb: string
}

export const features: Feature[] = [
  {
    icon: Dumbbell,
    title: 'Free Fitness Training',
    blurb:
      'Every new member trains with a coach for the first two weeks — no charge, no fine print.',
  },
  {
    icon: HeartPulse,
    title: 'Tons of Cardio & Strength',
    blurb: 'Track machines, free weights and functional zones keep every session challenging.',
  },
  {
    icon: CreditCard,
    title: 'No Commitment Memberships',
    blurb: 'Train month to month and cancel whenever you like. Your plan, your pace.',
  },
]

export interface ClassItem {
  title: string
  image: string
  price: string
}

export const classItems: ClassItem[] = [
  {
    title: 'Body Building',
    price: '$100',
    image: 'https://picsum.photos/seed/kinesis-class-1/800/600',
  },
  {
    title: 'Weight Lifting',
    price: '$100',
    image: 'https://picsum.photos/seed/kinesis-class-2/800/600',
  },
  { title: 'Cardio', price: '$100', image: 'https://picsum.photos/seed/kinesis-class-3/800/600' },
  {
    title: 'Martial Arts',
    price: '$100',
    image: 'https://picsum.photos/seed/kinesis-class-4/800/600',
  },
  { title: 'Yoga', price: '$100', image: 'https://picsum.photos/seed/kinesis-class-5/800/600' },
  { title: 'Cycling', price: '$100', image: 'https://picsum.photos/seed/kinesis-class-6/800/600' },
]

export interface Plan {
  name: string
  price: number
  featuresList: string[]
}

export const plans: Plan[] = [
  {
    name: 'Basic Plan',
    price: 49,
    featuresList: [
      'Personal Trainer',
      'Convenient Time',
      'Special Class',
      'Group Training',
      'Free Fitness Training',
    ],
  },
  {
    name: 'Beginner Plan',
    price: 79,
    featuresList: [
      'Personal Trainer',
      'Convenient Time',
      'Special Class',
      'Group Training',
      'Free Fitness Training',
    ],
  },
  {
    name: 'Premium Plan',
    price: 109,
    featuresList: [
      'Personal Trainer',
      'Convenient Time',
      'Special Class',
      'Group Training',
      'Free Fitness Training',
    ],
  },
]

export const successQuotes: string[] = [
  'From 264 lbs to 154 lbs, A Great transformation in my life.',
  "I'm Sheryl Johnson Proved that 50 Really Is the New 30",
]

export const scheduleDays: string[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export interface ScheduleRow {
  time: string
  classes: string[]
}

export const scheduleRows: ScheduleRow[] = [
  {
    time: '8am-9am',
    classes: ['Body Building', '', 'Cardio', '', 'Aerobics', '', 'Stretching'],
  },
  {
    time: '10am-11am',
    classes: ['', 'Weight Lifting', '', 'Yoga', '', 'Cycling', ''],
  },
  {
    time: '1pm-2pm',
    classes: ['Body Building', '', 'Cardio', '', '', 'Stretching', ''],
  },
  {
    time: '3pm-5pm',
    classes: ['', 'Weight Lifting', '', 'Yoga', 'Aerobics', 'Cycling', ''],
  },
  {
    time: '7pm-9pm',
    classes: ['Body Building', '', '', 'Yoga', '', '', 'Stretching'],
  },
]

export interface Trainer {
  name: string
  role: string
  image: string
}

export const trainers: Trainer[] = [
  {
    name: 'Aron Mighty',
    role: 'Crossfit Coach',
    image: 'https://picsum.photos/seed/kinesis-trainer-1/500/640',
  },
  {
    name: 'Alicia Brown',
    role: 'Fitness Trainer',
    image: 'https://picsum.photos/seed/kinesis-trainer-2/500/640',
  },
  {
    name: 'Anne Henderson',
    role: 'Yoga Instructor',
    image: 'https://picsum.photos/seed/kinesis-trainer-3/500/640',
  },
  {
    name: 'Bruce Grapler',
    role: 'Personal Trainer',
    image: 'https://picsum.photos/seed/kinesis-trainer-4/500/640',
  },
]

export interface Testimonial {
  quote: string
  name: string
  position: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
  },
  {
    quote:
      'The coaches rebuilt my routine from scratch and the results showed within a month of training.',
    name: 'Sandra Kline',
    position: 'Gym Member',
  },
  {
    quote:
      'I came for the classes and stayed for the community — every session pushes me a little further.',
    name: 'Marcus Reed',
    position: 'Triathlon Athlete',
  },
]

export interface Post {
  date: string
  comments: number
  title: string
  excerpt: string
  image: string
}

export const posts: Post[] = [
  {
    date: 'Dec. 20, 2020',
    comments: 3,
    title: 'Really Good Workout, Can Feel it Working',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/kinesis-post-1/600/400',
  },
  {
    date: 'Jan. 04, 2021',
    comments: 5,
    title: '5 Recovery Habits Every Athlete Needs',
    excerpt:
      'Sleep, mobility and protein are the quiet half of training — here is how we schedule them.',
    image: 'https://picsum.photos/seed/kinesis-post-2/600/400',
  },
  {
    date: 'Feb. 12, 2021',
    comments: 2,
    title: 'Build a Training Plan That Actually Sticks',
    excerpt: 'Progress comes from consistency, not intensity. Start small and add volume slowly.',
    image: 'https://picsum.photos/seed/kinesis-post-3/600/400',
  },
  {
    date: 'Mar. 02, 2021',
    comments: 7,
    title: 'Mobility Work: The Missing Half of Strength',
    excerpt:
      'Ten minutes of daily mobility keeps joints happy under heavy loads and speeds up recovery.',
    image: 'https://picsum.photos/seed/kinesis-post-4/600/400',
  },
]

export interface Social {
  name: string
  label: string
  href: string
  path: string
}

export const socials: Social[] = [
  {
    name: 'Twitter',
    label: 'Twitter',
    href: 'https://x.com',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'Facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
]

export const footerLinks: NavLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Trainers Team', href: '#trainers' },
  { label: 'Awesome Classes', href: '#classes' },
  { label: 'Pricing Packages', href: '#pricing' },
  { label: 'Latest News', href: '#news' },
]

export const address = '203 Fake St. Mountain View, San Francisco, California, USA'

export const phoneDisplay = '+2 392 3929 210'
export const phoneHref = 'tel:' + phoneDisplay.replace(/[^\d+]/g, '')
export const email = 'info@yourdomain.com'
