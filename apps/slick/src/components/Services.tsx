import { Palette, Scissors, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Stylish hair cut',
    copy: 'Precision cuts shaped around your face, your routine, and the way your hair actually grows.',
    icon: Scissors,
  },
  {
    title: 'Cut & hair style',
    copy: 'From textured crops to slicked-back classics — finished with product and a style lesson.',
    icon: Sparkles,
  },
  {
    title: 'Color & hair wash',
    copy: 'Clean, even color work followed by a relaxing wash that leaves your scalp feeling brand new.',
    icon: Palette,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-lavender py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            What We Do Best
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase text-ink dark:text-white sm:text-4xl">
            Our Services
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {service.copy}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
