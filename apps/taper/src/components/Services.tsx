import { Ruler, Scissors, Sparkles } from 'lucide-react'

const services = [
  {
    name: 'Stylish Hair Cut',
    blurb:
      'Precision cuts tailored to your face shape and lifestyle, finished with premium styling products.',
    icon: Scissors,
  },
  {
    name: 'Body Massege',
    blurb:
      'Relaxing chair-side massage that eases tension while you enjoy the full grooming experience.',
    icon: Sparkles,
  },
  {
    name: 'Breard Style',
    blurb:
      'Expert beard shaping, line-ups, and hot-towel treatment for a sharp, well-groomed look.',
    icon: Ruler,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Professional Services
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Our Best services that we offering to you
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold uppercase text-ink dark:text-white">
                {service.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
