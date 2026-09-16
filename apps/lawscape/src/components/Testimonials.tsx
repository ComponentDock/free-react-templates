import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mosan Cameron',
    role: 'Executive, FedEx',
    text: 'Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they are blessed whales also made from give may saying meat.',
    image: 'https://picsum.photos/seed/lawscape-test1/150/150',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Director, Nexus Corp',
    text: 'Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they are blessed whales also made from give may saying meat.',
    image: 'https://picsum.photos/seed/lawscape-test2/150/150',
  },
  {
    name: 'David Thornton',
    role: 'Manager, GlobalTech',
    text: 'Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they are blessed whales also made from give may saying meat.',
    image: 'https://picsum.photos/seed/lawscape-test3/150/150',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Client Says About Me
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-smoke">
            Female divided bearing rule one called said Beginning set you living above saw seasons
            void created fruitful third years god.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded bg-white p-6 shadow-sm">
              <Quote
                className="absolute right-4 top-4 h-8 w-8 text-primary-500/20"
                aria-hidden="true"
              />
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading text-base font-bold text-ink">{t.name}</h3>
                  <p className="text-xs text-smoke">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-smoke">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
