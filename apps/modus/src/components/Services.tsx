import { Paintbrush, Ruler, Compass } from 'lucide-react'

const services = [
  {
    title: 'Interior Design',
    description:
      'The automated process starts as soon as your clothes go into the machine. We create beautiful spaces tailored to your vision.',
    image: 'https://picsum.photos/seed/modus-svc1/600/400',
    icon: Paintbrush,
  },
  {
    title: 'Space Planning',
    description:
      'The automated process starts as soon as your clothes go into the machine. Maximize every square foot with intelligent layouts.',
    image: 'https://picsum.photos/seed/modus-svc2/600/400',
    icon: Ruler,
  },
  {
    title: 'Creative Styling',
    description:
      'The automated process starts as soon as your clothes go into the machine. Curate furniture and accessories for a cohesive look.',
    image: 'https://picsum.photos/seed/modus-svc3/600/400',
    icon: Compass,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-mist dark:text-gray-400">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <article
                key={svc.title}
                className="group overflow-hidden rounded-lg bg-paper transition-shadow hover:shadow-lg dark:bg-gray-900"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                    <a href="#" className="transition-colors hover:text-brand">
                      {svc.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                    {svc.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
