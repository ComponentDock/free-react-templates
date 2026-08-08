import { DraftingCompass, PencilRuler, Ruler } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: ReadonlyArray<{ title: string; blurb: string; icon: LucideIcon }> = [
  {
    title: 'Perfectly Design',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: PencilRuler,
  },
  {
    title: 'Carefully Planned',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    icon: DraftingCompass,
  },
  {
    title: 'Smartly Execute',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: Ruler,
  },
] as const

export function Services() {
  return (
    <section
      id="about"
      aria-label="Our services"
      className="bg-white py-20 dark:bg-gray-950 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group">
              <span className="flex h-16 w-16 items-center justify-center rounded bg-paper text-brand transition-colors group-hover:bg-brand group-hover:text-white dark:bg-gray-900">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {service.blurb}
              </p>
              <a
                href="#about"
                className="mt-4 inline-block text-sm font-semibold text-brand underline-offset-4 hover:underline"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
