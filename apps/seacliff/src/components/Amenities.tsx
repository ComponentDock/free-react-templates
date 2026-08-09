import {
  ConciergeBell,
  Droplets,
  Dumbbell,
  Palmtree,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react'
import { Reveal } from './Reveal'

interface Amenity {
  name: string
  blurb: string
  icon: typeof Droplets
}

const amenities: Amenity[] = [
  {
    name: 'Infinity Pool',
    blurb: 'A heated infinity edge that melts into the horizon, surrounded by private cabanas.',
    icon: Droplets,
  },
  {
    name: 'Full-Service Spa',
    blurb: 'Oceanfront treatments, saunas, and expert therapists for total renewal.',
    icon: Sparkles,
  },
  {
    name: 'Fine Dining',
    blurb: 'Three signature venues with menus crafted by award-winning chefs.',
    icon: UtensilsCrossed,
  },
  {
    name: 'Fitness Center',
    blurb: 'A 24-hour gym with modern equipment, classes, and personal trainers.',
    icon: Dumbbell,
  },
  {
    name: 'Private Beach',
    blurb: 'Steps from your room — pristine white sand, loungers, and beach service.',
    icon: Palmtree,
  },
  {
    name: 'Concierge',
    blurb: 'Around-the-clock concierge for excursions, transfers, and every request.',
    icon: ConciergeBell,
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            World-Class Amenities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            Every detail curated to make your stay effortless, indulgent, and memorable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <Reveal
                key={amenity.name}
                delay={100}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                  {amenity.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {amenity.blurb}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
