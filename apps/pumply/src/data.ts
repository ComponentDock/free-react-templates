import {
  Activity,
  Apple,
  Bike,
  Dumbbell,
  Flame,
  Flower2,
  HeartPulse,
  Music,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home-section' },
  { label: 'Classes', href: '#classes-section' },
  { label: 'Schedule', href: '#schedule-section' },
  { label: 'Trainer', href: '#trainer-section' },
  { label: 'Services', href: '#services-section' },
] as const

export interface Counter {
  icon: LucideIcon
  value: string
  label: string
}

export const counters: Counter[] = [
  { icon: Dumbbell, value: '2,260', label: 'Members' },
  { icon: Bike, value: '210', label: 'Daily Visitors' },
  { icon: Apple, value: '887', label: 'Health Program' },
  { icon: HeartPulse, value: '1,920', label: 'Heart Beat' },
]

export interface ClassSlide {
  title: string
  category: string
  image: string
}

export const classSlides: ClassSlide[] = [
  {
    title: 'Classes fitness name here',
    category: 'Fitness',
    image: 'https://picsum.photos/seed/pumply-class-1/640/480',
  },
  {
    title: 'Classes fitness name here',
    category: 'Cardio Vascular',
    image: 'https://picsum.photos/seed/pumply-class-2/640/480',
  },
  {
    title: 'Classes fitness name here',
    category: 'Lose Weight',
    image: 'https://picsum.photos/seed/pumply-class-3/640/480',
  },
  {
    title: 'Classes fitness name here',
    category: 'Cardio Vascular',
    image: 'https://picsum.photos/seed/pumply-class-4/640/480',
  },
  {
    title: 'Classes fitness name here',
    category: 'Fitness',
    image: 'https://picsum.photos/seed/pumply-class-5/640/480',
  },
]

export const scheduleDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Sunday',
] as const

export type ScheduleDay = (typeof scheduleDays)[number]

export interface ScheduleRow {
  name: string
  time: string
  trainer: string
}

export const scheduleRows: ScheduleRow[] = [
  { name: 'Gym', time: '8:00am - 10:00am', trainer: 'John Doe' },
  { name: 'Meditation', time: '10:00am - 10:30am', trainer: 'James Holmes' },
  { name: 'Weight Lifting', time: '1:00pm - 2:30pm', trainer: 'Ben Smith' },
  { name: 'Crossfit', time: '3:00pm - 3:45pm', trainer: 'Craig Peters' },
  { name: 'Aerobics', time: '5:00pm - 5:30pm', trainer: 'Paul Green' },
]

export interface Trainer {
  name: string
  role: string
  image: string
  bio: string
}

export const trainers: Trainer[] = [
  {
    name: 'James Holmes',
    role: 'Aerobatics Trainer',
    image: 'https://picsum.photos/seed/pumply-trainer-1/480/600',
    bio: 'A passionate coach who helps members master control, balance and precision in every session.',
  },
  {
    name: 'Kelly Green',
    role: 'Aerobatics Trainer',
    image: 'https://picsum.photos/seed/pumply-trainer-2/480/600',
    bio: 'Specialist in high-energy programs that build confidence and strength step by step.',
  },
  {
    name: 'Ben Smith',
    role: 'Aerobatics Trainer',
    image: 'https://picsum.photos/seed/pumply-trainer-3/480/600',
    bio: 'Focused on technique and endurance, Ben designs routines that push your limits safely.',
  },
]

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Dumbbell,
    title: 'Weight Lifting',
    description: 'Build raw strength with coached free-weight and machine sessions.',
  },
  {
    icon: Flower2,
    title: 'Meditation',
    description: 'Find your calm with guided breathing and mindfulness classes.',
  },
  {
    icon: Flame,
    title: 'Crossfit',
    description: 'High-intensity functional training that burns and builds.',
  },
  {
    icon: Music,
    title: 'Aerobics',
    description: 'Rhythm-driven cardio workouts that keep you moving.',
  },
  {
    icon: Activity,
    title: 'Gym',
    description: 'Full access to modern equipment with support whenever you need it.',
  },
  {
    icon: RefreshCw,
    title: 'Circling',
    description: 'Group mobility rounds that restore balance and joint health.',
  },
]
