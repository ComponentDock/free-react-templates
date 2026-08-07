import {
  Building,
  Building2,
  FileText,
  Hammer,
  PenTool,
  Shapes,
  type LucideIcon,
} from 'lucide-react'

const services: ReadonlyArray<{ icon: LucideIcon; title: string; blurb: string }> = [
  {
    icon: PenTool,
    title: 'Plans and Projects',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
  },
  {
    icon: Shapes,
    title: 'Conceptual Architecture',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
  },
  {
    icon: Building2,
    title: 'Apartment Buildings',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
  },
  {
    icon: Building,
    title: 'Skyscrapers Buildings',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
  },
  {
    icon: FileText,
    title: 'Documentation',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
  },
  {
    icon: Hammer,
    title: 'Restauration Projects',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block bg-brand px-3 py-1 text-xs font-black uppercase tracking-widest text-ink">
            What we do
          </span>
          <h2 className="mt-5 text-3xl font-black text-ink sm:text-4xl dark:text-white">
            Services
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-line bg-white p-8 transition-colors hover:border-brand dark:border-gray-800 dark:bg-gray-950"
            >
              <service.icon
                aria-hidden="true"
                className="h-12 w-12 rounded-sm bg-brand p-2.5 text-ink"
              />
              <h3 className="mt-5 text-lg font-black text-ink dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-300">
                {service.blurb}
              </p>
              <a
                href="#projects"
                className="mt-5 inline-block text-sm font-black uppercase tracking-wide text-ink underline-offset-4 hover:text-brand hover:underline dark:text-white"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
