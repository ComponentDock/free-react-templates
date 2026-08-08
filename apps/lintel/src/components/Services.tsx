import { ChefHat, Lamp, Layers, Palette, PencilRuler, UtensilsCrossed } from 'lucide-react'

const services = [
  {
    title: 'Creative Stairs',
    blurb:
      'Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate.',
    icon: Layers,
  },
  {
    title: 'Kitchen Design',
    blurb:
      'Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate.',
    icon: ChefHat,
  },
  {
    title: 'Lamp Decoration',
    blurb:
      'Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate.',
    icon: Lamp,
  },
  {
    title: 'Interior Blueprint',
    blurb:
      'Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate.',
    icon: PencilRuler,
  },
  {
    title: 'Dinning Table',
    blurb:
      'Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Modern Design',
    blurb:
      'Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate.',
    icon: Palette,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold uppercase text-ink dark:text-white">What We Do</h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-9 w-9" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-base font-bold text-ink dark:text-white">
                <a href="#services" className="transition-colors hover:text-brand">
                  {service.title}
                </a>
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-mist dark:text-white/60">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
