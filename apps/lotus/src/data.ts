import { Dumbbell, Flower2, HeartPulse } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Classes', href: '#classes' },
  { label: 'Trainer', href: '#trainers' },
  { label: 'Timetable', href: '#schedule' },
  { label: 'About us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [
  {
    headline: 'Experience the best workout humanly possible',
    copy: 'A balanced practice of breath, movement, and mindfulness — designed to strengthen your body and quiet your mind.',
    image: 'https://picsum.photos/seed/lotus-hero-1/1600/1000',
  },
  {
    headline: 'Wake to your full potential',
    copy: 'Begin each day with intention. Our classes meet you where you are and carry you further than you thought possible.',
    image: 'https://picsum.photos/seed/lotus-hero-2/1600/1000',
  },
]

export const aboutCopy =
  'Lotus is a calm space for movement and breath, far from the rush of everyday life. Here the practice comes first: small classes, attentive teachers, and a sequence that grows with you — so every session leaves you stronger, lighter, and more present than the one before.'

export interface Service {
  title: string
  copy: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Body Builder',
    copy: 'Sculpt strength with guided resistance training that builds lean muscle, stability, and lasting power.',
    icon: Dumbbell,
  },
  {
    title: 'Yoga Program',
    copy: 'Flow through foundational postures and breathwork that improve flexibility, balance, and everyday calm.',
    icon: Flower2,
  },
  {
    title: 'Cardio Program',
    copy: 'Raise your heart rate with high-energy sessions designed to boost endurance, stamina, and mood.',
    icon: HeartPulse,
  },
]

export const classes = [
  {
    title: 'Yoga Program',
    copy: 'Foundational flows that open the body and settle the mind — perfect for every level.',
    image: 'https://picsum.photos/seed/lotus-class-1/600/400',
  },
  {
    title: 'Cardio Program',
    copy: 'Dynamic, music-driven sessions that build stamina and burn through the day’s stress.',
    image: 'https://picsum.photos/seed/lotus-class-2/600/400',
  },
  {
    title: 'Body Building',
    copy: 'Structured strength work with coaching on form, pace, and progressive overload.',
    image: 'https://picsum.photos/seed/lotus-class-3/600/400',
  },
]

export const trainers = [
  {
    name: 'Alice Smith',
    role: 'Yoga Expert',
    copy: 'Alice guides her students through breath-led sequences with patience and precision, making every pose feel attainable.',
    image: 'https://picsum.photos/seed/lotus-trainer-1/400/500',
  },
  {
    name: 'John Bulk',
    role: 'Body Expert',
    copy: 'John turns strength training into a clear, repeatable practice — form first, results follow.',
    image: 'https://picsum.photos/seed/lotus-trainer-2/400/500',
  },
  {
    name: 'Madonna Henderson',
    role: 'Health Expert',
    copy: 'Madonna blends mobility, recovery, and nutrition into coaching that supports whole-body health.',
    image: 'https://picsum.photos/seed/lotus-trainer-3/400/500',
  },
]

export const testimonials = [
  {
    quote:
      'The studio changed how I move and how I rest. Every class leaves me stronger and calmer than I arrived.',
    name: 'Dennis Green',
    role: 'Fitness Expert',
  },
  {
    quote:
      'I came for the workout and stayed for the calm. The teachers notice every detail and meet you exactly where you are.',
    name: 'Emma Reyes',
    role: 'Yoga Instructor',
  },
  {
    quote:
      'The schedule fits around a busy life, and the energy in the room is unmatched. I have never felt more consistent.',
    name: 'Liam Carter',
    role: 'Cardio Coach',
  },
]

export const pricing = [
  {
    plan: 'Yoga Program',
    copy: 'A gentle introduction to the practice, with guided flows and breathwork in small groups.',
    price: '$7.5',
  },
  {
    plan: 'Dance program',
    copy: 'Rhythm-based movement classes that build coordination, cardio, and confidence.',
    price: '$12.5',
  },
  {
    plan: 'Fitness Program',
    copy: 'Full access to strength, cardio, and conditioning classes with personalised coaching.',
    price: '$19',
  },
]

export const schedule = [
  {
    time: '7:00am - 8:00am',
    name: 'Basic Exercise',
    copy: 'A gentle full-body warm-up that sets the tone for the day ahead.',
  },
  {
    time: '9:00am - 11:00am',
    name: 'Yoga Program',
    copy: 'A two-hour flow combining foundational postures, breathwork, and deep relaxation.',
  },
  {
    time: '1:00pm - 4:00pm',
    name: 'Body Building',
    copy: 'Afternoon strength session with guided coaching on form and progressive load.',
  },
]

export const posts = [
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'June 12, 2026',
    byline: 'Admin',
    excerpt:
      'Far from the noise of the day, a few minutes of focused breath can reset your whole afternoon.',
    image: 'https://picsum.photos/seed/lotus-blog-1/600/400',
  },
  {
    title: 'Five morning flows to start your day with intention',
    date: 'June 28, 2026',
    byline: 'Admin',
    excerpt: 'Short, gentle sequences you can run before coffee — no mat gymnastics required.',
    image: 'https://picsum.photos/seed/lotus-blog-2/600/400',
  },
  {
    title: 'Why consistency beats intensity in every practice',
    date: 'July 9, 2026',
    byline: 'Admin',
    excerpt:
      'The students who improve most are rarely the loudest — they are simply the ones who keep showing up.',
    image: 'https://picsum.photos/seed/lotus-blog-3/600/400',
  },
  {
    title: 'Breathwork basics: four counts that change everything',
    date: 'July 24, 2026',
    byline: 'Admin',
    excerpt:
      'A simple box-breathing routine you can use between meetings, before bed, or on the mat.',
    image: 'https://picsum.photos/seed/lotus-blog-4/600/400',
  },
]

export const instagramImages = [
  'https://picsum.photos/seed/lotus-inst-1/400/400',
  'https://picsum.photos/seed/lotus-inst-2/400/400',
  'https://picsum.photos/seed/lotus-inst-3/400/400',
  'https://picsum.photos/seed/lotus-inst-4/400/400',
  'https://picsum.photos/seed/lotus-inst-5/400/400',
  'https://picsum.photos/seed/lotus-inst-6/400/400',
]

export const contactEmail = 'lotus@info.com'
