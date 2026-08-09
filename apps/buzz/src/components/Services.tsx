import { Ruler, Scissors, Sparkles } from 'lucide-react'

const services = [
  {
    name: 'Smooth Shave',
    blurb:
      'A classic hot-towel straight-razor shave with soothing oils for a close, comfortable finish.',
    icon: Scissors,
  },
  {
    name: 'Beard Triming',
    blurb: 'Precision beard shaping and line-ups that keep your style sharp between visits.',
    icon: Ruler,
  },
  {
    name: 'Haircut Styles',
    blurb: 'From classic cuts to modern fades, tailored to your face shape and lifestyle.',
    icon: Sparkles,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ad minim veniam.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-xl border border-gray-100 bg-paper p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase text-ink dark:text-white">
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
