import { Palette, Scissors, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Coloring',
    copy: 'Balayage, highlights, and full-color transformations by certified colorists.',
  },
  {
    icon: Scissors,
    title: 'Haircut',
    copy: 'Precision cuts tailored to your face shape, lifestyle, and personal style.',
  },
  {
    icon: Sparkles,
    title: 'Hairstyle',
    copy: 'Event styling, blowouts, and signature looks for every occasion.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Our Services</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-colors hover:bg-brand hover:text-white dark:bg-gray-900 dark:hover:bg-brand"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-brand dark:bg-gray-800">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
