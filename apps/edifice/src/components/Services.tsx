import { CarFront, Wrench, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Basic & Common Repairs',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: Wrench,
  },
  {
    title: 'Brake Repairs & Services',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: CarFront,
  },
  {
    title: 'Preventive Maintenance',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: ShieldCheck,
  },
] as const

export function Services() {
  return (
    <section id="service" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Services</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            Some Features that Made us Unique
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <div
              key={title}
              className="group rounded-[5px] border border-black/5 bg-paper p-8 transition-colors hover:border-brand dark:border-white/10 dark:bg-gray-900"
            >
              <Icon
                className="h-12 w-12 text-brand transition-transform duration-300 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
