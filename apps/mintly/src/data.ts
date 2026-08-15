import {
  Calendar,
  Clock,
  Heart,
  Home,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  Baby,
  Smile,
  ShieldCheck,
  Sparkles,
  AlarmClock,
  type LucideIcon,
} from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const heroPortrait = 'https://picsum.photos/seed/mintly-hero/900/1100'

export interface HeroIcon {
  icon: LucideIcon
  label: string
}

export const heroIcons: HeroIcon[] = [
  { icon: Heart, label: 'Compassionate care' },
  { icon: Home, label: 'Family dentistry' },
  { icon: Leaf, label: 'Gentle treatments' },
]

export interface InfoCard {
  icon?: LucideIcon
  heading: string
  body: string
  buttonLabel: string
  phone?: string
  hours?: string[]
}

export const infoCards: InfoCard[] = [
  {
    phone: '1-800-600-3800',
    heading: 'EMERGENCY SERVICE.',
    body: 'Dental emergencies happen. Our team is on call around the clock to get you relief fast.',
    buttonLabel: 'See More',
  },
  {
    icon: Calendar,
    heading: 'DO YOU WANT TO MAKE AN APPOINTMENT.',
    body: 'Booking a visit takes less than a minute. Pick a time that suits you and we will take care of the rest.',
    buttonLabel: 'Book Now',
  },
  {
    icon: Clock,
    heading: 'OPENING HOURS.',
    body: '',
    hours: ['Monday – Friday', 'Saturday – Sunday'],
    buttonLabel: 'Contact Us',
  },
]

export interface Department {
  icon: LucideIcon
  title: string
  description: string
}

export const departments: Department[] = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description:
      'Routine check-ups, cleanings, and exams that keep your smile healthy all year round.',
  },
  {
    icon: Smile,
    title: 'Orthodontics',
    description:
      'Modern braces and clear aligners that gently guide your teeth into perfect alignment.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Whitening, veneers, and smile makeovers designed around your natural features.',
  },
  {
    icon: ShieldCheck,
    title: 'Dental Surgery',
    description:
      'Precise, comfortable surgical care — from wisdom teeth to implants — with fast recovery.',
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description:
      'A friendly, pressure-free environment that makes kids actually look forward to the dentist.',
  },
  {
    icon: AlarmClock,
    title: 'Emergency Care',
    description:
      'Same-day appointments for chips, pain, and injuries, handled with calm expertise.',
  },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '15+', label: 'Years of Experience' },
  { value: '8k+', label: 'Happy Patients' },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'How do I book an appointment?',
    answer:
      'Call us at 1-800-600-3800 or use the contact form below. Most appointments are confirmed within one business hour.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer:
      'Yes — we work with most major insurance providers and will help you verify your coverage before your first visit.',
  },
  {
    question: 'What should I do in a dental emergency?',
    answer:
      'Call our emergency line right away. We keep same-day slots open for urgent cases like severe pain, chips, or knocked-out teeth.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'We offer flexible payment plans and transparent pricing, so you can plan your treatment with no surprises.',
  },
]

export interface ContactDetail {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '120 Smile Avenue, Portland, OR',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '1-800-600-3800',
    href: 'tel:18006003800',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@mintly.example',
    href: 'mailto:hello@mintly.example',
  },
]

export const aboutImage = 'https://picsum.photos/seed/mintly-about/900/700'
