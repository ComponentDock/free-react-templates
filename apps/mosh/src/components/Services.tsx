import { Code2, PenTool, Search } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Development',
    blurb:
      'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit.',
  },
  {
    icon: PenTool,
    title: 'Design',
    blurb:
      'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit.',
  },
  {
    icon: Search,
    title: 'SEO',
    blurb:
      'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit.',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-300">
            Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            What you get if you start your business with us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus
            blandit.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900/40 dark:text-primary-300">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
