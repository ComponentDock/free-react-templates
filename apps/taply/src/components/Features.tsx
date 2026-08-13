import { Settings, ShieldCheck, Smile } from 'lucide-react'
import { features } from '../data'

const icons = [Smile, Settings, ShieldCheck] as const

/** Light-lavender (#faf6fb) "Features you love" row: HIGHLIGHTS eyebrow,
 *  heading, and three icon cards with gradient-filled icons. */
export function Features() {
  return (
    <section id="features" className="bg-lavender px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-eyebrow">Highlights</p>
          <h2 className="mt-3 text-3xl font-medium text-brand-purple lg:text-4xl">
            Features you love
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            // Index is bounded by the features array length (icons.length).
            const Icon = icons[index]!
            return (
              <article
                key={feature.title}
                className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded bg-gradient-to-tr from-brand to-brand-2 text-white">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-medium text-brand-purple">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{feature.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
