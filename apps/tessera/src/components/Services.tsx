import { Factory, Hammer, HardHat, PencilRuler } from 'lucide-react'

const services = [
  {
    title: 'Design',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: PencilRuler,
  },
  {
    title: 'Industrial Design',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Factory,
  },
  {
    title: 'Architecture Support',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: HardHat,
  },
  {
    title: 'Renovation',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Hammer,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-paper py-20 dark:bg-gray-900 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm dark:bg-gray-950"
            >
              <span className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-brand text-white">
                <service.icon className="h-10 w-10" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {service.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
