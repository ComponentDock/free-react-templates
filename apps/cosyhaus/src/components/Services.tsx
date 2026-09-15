import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    title: 'Lighting',
    short: 'For each project we establish',
    description:
      'For each project we establish relationships with partners who we know will help us.',
    image: 'https://picsum.photos/seed/cosyhaus-svc1/600/400',
  },
  {
    title: 'Interior Design',
    short: 'For each project we establish',
    description:
      'For each project we establish relationships with partners who we know will help us.',
    image: 'https://picsum.photos/seed/cosyhaus-svc2/600/400',
  },
  {
    title: 'Office Decoration',
    short: 'For each project we establish',
    description:
      'For each project we establish relationships with partners who we know will help us.',
    image: 'https://picsum.photos/seed/cosyhaus-svc3/600/400',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper-alt py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-display text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Our Professional Services
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-ink dark:text-white">
            Best Interior Services
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={svc.image}
                  alt={svc.title}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink dark:text-white">
                  <ButtonLink href="#" className="hover:text-brand">
                    {svc.title}
                  </ButtonLink>
                </h3>
                <p className="mt-1 text-xs font-medium text-mist">{svc.short}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
