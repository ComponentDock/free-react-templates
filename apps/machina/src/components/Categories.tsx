import { Award, BadgeCheck, Factory, ShieldCheck } from 'lucide-react'
import { CATEGORIES, CATEGORIES_EYEBROW, CATEGORIES_TITLE } from '../data'

const categoryIcons = {
  badge: BadgeCheck,
  shield: ShieldCheck,
  award: Award,
  factory: Factory,
} as const

/**
 * Categories — light-gray (#f7f7fd) section (source
 * `div.categories-area.gray-bg`): centered eyebrow + heading and a four-card
 * grid (Quality, Reliability, Experience, Manufacturing), each with a red
 * icon and a short description.
 */
export function Categories() {
  return (
    <section className="bg-lilac py-24" aria-label="Categories">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            {CATEGORIES_EYEBROW}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            {CATEGORIES_TITLE}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => {
            const Icon = categoryIcons[category.icon]
            return (
              <div key={category.title} className="bg-white p-8 text-center shadow-sm">
                <Icon className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{category.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{category.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
