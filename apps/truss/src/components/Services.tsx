import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    title: 'Architect',
    image: 'https://picsum.photos/seed/truss-3/600/450',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Interior Design',
    image: 'https://picsum.photos/seed/truss-4/600/450',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Landscape Design',
    image: 'https://picsum.photos/seed/truss-5/600/450',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Consultancy',
    image: 'https://picsum.photos/seed/truss-6/600/450',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-faint">Services</p>
        <h2 className="font-display text-3xl font-extrabold text-ink dark:text-white sm:text-5xl">
          Our Services
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={cn('flex flex-col gap-6 sm:flex-row', index % 2 === 1 && 'lg:mt-28')}
            >
              <img
                src={service.image}
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full shrink-0 rounded-sm object-cover sm:w-1/2"
              />
              <div className="sm:pl-2">
                <h3 className="font-display text-2xl font-bold text-ink dark:text-white sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist dark:text-white/60">
                  {service.blurb}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-hover"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
