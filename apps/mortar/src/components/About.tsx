import { Building2, Factory, HardHat, Ruler, Users } from 'lucide-react'
import { about } from '../data'

const miniServiceIcons = [Building2, Users, Ruler, Factory] as const

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/mortar-about/800/600"
            alt="Construction site with workers"
            className="h-full w-full rounded object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-8 right-4 flex rotate-[-90deg] items-center gap-3 bg-charcoal px-8 py-6 text-white">
            <HardHat className="h-10 w-10 text-brand" aria-hidden="true" />
            <div className="text-left">
              <span className="block text-3xl font-semibold">{about.badgeYears}</span>
              <span className="block text-sm">{about.badgeCaption}</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {about.kicker}
          </span>
          <h2 className="mt-2 text-4xl font-medium leading-snug text-ink md:text-5xl">
            {about.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">{about.paragraph}</p>
          <h3 className="mt-8 text-xl font-medium text-charcoal">{about.subHeading}</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {about.miniServices.map((service, index) => {
              const Icon = miniServiceIcons[index]!
              return (
                <div key={service.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="font-medium text-charcoal">{service.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{service.blurb}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
