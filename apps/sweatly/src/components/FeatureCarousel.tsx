import { useState } from 'react'
import {
  Activity,
  Apple,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flame,
  HeartPulse,
  Medal,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  blurb: string
}

const features: ReadonlyArray<Feature> = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    blurb: 'Build raw strength with progressive barbell and dumbbell programs.',
  },
  {
    icon: Activity,
    title: 'Cardio Zones',
    blurb: 'Burn fat and boost endurance in our dedicated cardio area.',
  },
  {
    icon: HeartPulse,
    title: 'Heart Health',
    blurb: 'Track your heart rate and hit the right zones every single session.',
  },
  {
    icon: Apple,
    title: 'Nutrition Coaching',
    blurb: 'Personalized meal plans that fuel your fitness goals.',
  },
  {
    icon: Medal,
    title: 'Expert Trainers',
    blurb: 'Certified coaches guide every rep, set, and stretch.',
  },
  {
    icon: Flame,
    title: 'Fat Burn Classes',
    blurb: 'High-energy classes designed to torch calories fast.',
  },
]

const PAGE_SIZE = 3
const pageCount = Math.ceil(features.length / PAGE_SIZE)

export function FeatureCarousel() {
  const [page, setPage] = useState(0)
  const visible = features.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const goTo = (next: number) => setPage((next + pageCount) % pageCount)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xl text-[#ababab]">Stay Healthy</span>
          <h2 className="mt-2 text-3xl font-black text-brand md:text-[2.5rem]">
            Setup Your Body With Workout
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to train smarter — from coaching and classes to nutrition and
            recovery — under one roof.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {visible.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white p-8 text-center shadow-[0_0_20px_-5px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)]"
              >
                <Icon className="mx-auto h-16 w-16 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-muted">{feature.blurb}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            aria-label="Previous features"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="text-sm font-bold text-muted" aria-live="polite">
            {page + 1} / {pageCount}
          </span>
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            aria-label="Next features"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
