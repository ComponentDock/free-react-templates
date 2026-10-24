import { Building2, Hammer, House, PencilRuler } from 'lucide-react'

const services = [
  {
    title: 'House Planning',
    description:
      'Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt ut labore.',
    Icon: House,
  },
  {
    title: 'House Build',
    description:
      'Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt ut labore.',
    Icon: Hammer,
  },
  {
    title: 'Design & Build',
    description:
      'Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt ut labore.',
    Icon: PencilRuler,
  },
  {
    title: 'Design & Build',
    description:
      'Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt ut labore.',
    Icon: Building2,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          <span>our</span>
          <span className="h-px w-12 bg-ink/30" aria-hidden="true" />
          <span>services</span>
        </p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, Icon }, index) => (
            <li key={`${title}-${index}`} className="bg-panel p-8">
              <Icon className="h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
