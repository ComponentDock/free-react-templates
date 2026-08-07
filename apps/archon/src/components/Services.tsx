import { Cpu, DraftingCompass, Lightbulb, Square } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    title: 'Square',
    blurb: 'Clean lines and honest materials for every brief.',
    Icon: Square,
  },
  {
    title: 'Technology',
    blurb: 'Smart systems woven quietly into beautiful spaces.',
    Icon: Cpu,
  },
  {
    title: 'Brilliant Ideas',
    blurb: 'Big thinking that turns constraints into character.',
    Icon: Lightbulb,
  },
  {
    title: 'Blueprint',
    blurb: 'Precise drawings that make ambitious plans buildable.',
    Icon: DraftingCompass,
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-mist dark:text-gray-400">
              Our Services
            </span>
            <h2 className="mt-2 text-2xl font-bold text-ink dark:text-white">
              Everything a building needs, under one roof
            </h2>
            <p className="mt-4 leading-relaxed text-mist dark:text-gray-300">
              From concept to completion, we guide every stage of the project.
            </p>
            <p className="mt-3 leading-relaxed text-mist dark:text-gray-300">
              Architecture, interiors, and engineering — coordinated by one team.
            </p>
            <div className="mt-6">
              <ButtonLink
                href="#footer"
                className="rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {services.map(({ title, blurb, Icon }) => (
              <div key={title} className="flex gap-5">
                <Icon aria-hidden="true" className="h-9 w-9 shrink-0 text-brand" />
                <div>
                  <h3 className="text-base font-bold text-ink dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist dark:text-gray-300">
                    {blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
