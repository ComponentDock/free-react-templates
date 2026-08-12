import { Clock, Dumbbell, Tag, User } from 'lucide-react'
import { FEATURES } from '../data'

const icons = [Dumbbell, Clock, User, Tag] as const

/**
 * Features — "Why You Should Choose Us" section with 4 feature cards, each
 * with a line icon, a title, and a short description.
 */
export function Features() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="text-4xl font-bold text-ink lg:text-5xl">Why You Should Choose Us</h2>
          <p className="mt-5 text-sm text-body">Four reasons members stay for years, not months.</p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = icons[index]!
            return (
              <div key={feature.title} className="text-center">
                <Icon className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
                <h4 className="mt-9 text-lg text-black">{feature.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-body">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
