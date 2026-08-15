import {
  Apple,
  Baby,
  Bike,
  Dumbbell,
  Flame,
  HeartPulse,
  Medal,
  Salad,
  Shield,
  Timer,
  Trophy,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  blurb: string
}

const services: ReadonlyArray<Service> = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    blurb: 'Free weights, racks, and machines for every level.',
  },
  {
    icon: Bike,
    title: 'Indoor Cycling',
    blurb: 'High-energy spin sessions with live metrics.',
  },
  {
    icon: HeartPulse,
    title: 'Cardio Programs',
    blurb: 'Structured plans for endurance and heart health.',
  },
  {
    icon: Salad,
    title: 'Nutrition Plans',
    blurb: 'Meal guidance tailored to your goals.',
  },
  {
    icon: Medal,
    title: 'Personal Training',
    blurb: 'One-on-one coaching with certified experts.',
  },
  {
    icon: Flame,
    title: 'Fat Burn Classes',
    blurb: 'Fast-paced sessions that torch calories.',
  },
  {
    icon: Baby,
    title: 'Kids Fitness',
    blurb: 'Fun movement classes for younger members.',
  },
  {
    icon: Trophy,
    title: 'Competition Prep',
    blurb: 'Coaching for your next challenge or show.',
  },
  {
    icon: Apple,
    title: 'Meal Prep',
    blurb: 'Weekly ready-to-go meal options.',
  },
  {
    icon: Timer,
    title: 'Interval Training',
    blurb: 'Efficient HIIT circuits for busy days.',
  },
  {
    icon: Shield,
    title: 'Injury Prevention',
    blurb: 'Mobility work and recovery protocols.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    blurb: 'Train together and stay accountable.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xl text-[#ababab]">Fitness Services</span>
          <h2 className="mt-2 text-3xl font-black text-brand md:text-[2.5rem]">Services</h2>
          <p className="mt-4 text-muted">
            A full range of services to support your training — from coaching and classes to
            nutrition and recovery.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="p-6 text-center transition-shadow hover:shadow-[0_0_20px_-5px_rgba(0,0,0,0.1)]"
              >
                <Icon className="mx-auto h-16 w-16 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-muted">{service.blurb}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
