import { Building2, DraftingCompass, HardHat, PencilRuler, Ruler, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: ReadonlyArray<{ title: string; blurb: string; icon: LucideIcon }> = [
  {
    title: 'Construction Consultation',
    blurb:
      'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    icon: HardHat,
  },
  {
    title: 'House Renovation',
    blurb:
      'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    icon: Wrench,
  },
  {
    title: 'Planning',
    blurb:
      'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    icon: DraftingCompass,
  },
  {
    title: 'Interior Design',
    blurb:
      'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    icon: PencilRuler,
  },
  {
    title: 'Architecture',
    blurb:
      'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    icon: Building2,
  },
  {
    title: 'Installation Works',
    blurb:
      'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    icon: Ruler,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="bg-paper py-20 dark:bg-gray-900 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-brand">Our services</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white">
              Far far away, behind the word mountains, far from the countries
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-brand-dark">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink dark:text-white">
                <a href="#services" className="hover:text-brand">
                  {service.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {service.blurb}
              </p>
              <a
                href="#services"
                className="mt-4 inline-block text-sm font-semibold text-brand underline-offset-4 hover:underline"
              >
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
