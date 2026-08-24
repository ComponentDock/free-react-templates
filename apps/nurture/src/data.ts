import { BookOpen, Calculator, Clock, Music, Dumbbell, Pen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export interface FeatureCard {
  icon: LucideIcon
  title: string
  description: string
}

export const FEATURES: FeatureCard[] = [
  {
    icon: Music,
    title: 'Music Class',
    description:
      'Discover rhythm and melody through interactive music sessions designed for young learners.',
  },
  {
    icon: Calculator,
    title: 'Math Class',
    description:
      'Build strong foundations in numbers and problem-solving with fun, hands-on activities.',
  },
  {
    icon: BookOpen,
    title: 'English Class',
    description: 'Develop reading, writing, and communication skills in a supportive environment.',
  },
  {
    icon: Pen,
    title: 'Reading for Kids',
    description: 'Foster a love of reading with curated stories and guided literacy programs.',
  },
  {
    icon: Clock,
    title: 'History Class',
    description: 'Explore the past through engaging stories and interactive timeline activities.',
  },
  {
    icon: Dumbbell,
    title: 'Active Class',
    description:
      'Stay fit and develop motor skills through structured physical activities and games.',
  },
]

export interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Infant',
    price: '$29',
    period: '/month',
    features: [
      'Early learning activities',
      'Safe environment',
      ' nutritious meals',
      'Daily progress reports',
    ],
  },
  {
    name: 'Toddler',
    price: '$49',
    period: '/month',
    features: [
      'Structured curriculum',
      'Creative arts program',
      'Outdoor play sessions',
      'Parent-teacher meetings',
    ],
  },
  {
    name: 'Lad',
    price: '$79',
    period: '/month',
    features: [
      'Full-day programs',
      'Advanced learning modules',
      'Sports & wellness',
      'Field trips & events',
    ],
  },
]

export interface NewsPost {
  image: string
  date: string
  title: string
  excerpt: string
}

export const NEWS_POSTS: NewsPost[] = [
  {
    image: 'https://picsum.photos/seed/nurture-news1/600/400',
    date: 'March 15, 2026',
    title: 'Spring Enrollment Now Open',
    excerpt:
      'Join our exciting spring programs designed to inspire creativity and learning in children.',
  },
  {
    image: 'https://picsum.photos/seed/nurture-news2/600/400',
    date: 'March 10, 2026',
    title: 'New Music Program Launch',
    excerpt:
      'We are thrilled to introduce our brand-new music program with professional instructors.',
  },
  {
    image: 'https://picsum.photos/seed/nurture-news3/600/400',
    date: 'March 5, 2026',
    title: 'Summer Camp Registration',
    excerpt: 'Early bird registration for summer camp is now available — secure your spot today.',
  },
]
