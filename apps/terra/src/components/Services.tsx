import { Sparkles, Flower2, Droplets, Gem, Eye, Bath, Wand2, Leaf } from 'lucide-react'

const services = [
  {
    title: 'Beauty Massage',
    blurb: 'Even the all-powerful Pointing has no control about the blind texts.',
    icon: Sparkles,
  },
  {
    title: 'Facial Therapy',
    blurb: 'Far far away, behind the word mountains, far from the countries.',
    icon: Flower2,
  },
  {
    title: 'Skin Care',
    blurb: 'Separated they live in Bookmarksgrove right at the coast.',
    icon: Droplets,
  },
  {
    title: 'Parlor & Beauty',
    blurb: 'A small river named Duden flows by their place and supplies it.',
    icon: Gem,
  },
  {
    title: 'Eye Shadow',
    blurb: 'One morning, when Gregor Samsa woke from troubled dreams.',
    icon: Eye,
  },
  {
    title: 'Relaxation Room',
    blurb: 'It is a paradisematic country, in which roasted parts of sentences.',
    icon: Bath,
  },
  {
    title: 'MakeUp',
    blurb: 'The Big Oxmox advised her not to do so, because there were thousands.',
    icon: Wand2,
  },
  {
    title: 'Aroma Therapy',
    blurb: 'She packed her seven versalia, put her initial into the belt.',
    icon: Leaf,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-brand-soft py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          Services
        </p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink sm:text-4xl dark:text-white">
          Our Beauty &amp; Spa Services
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
              >
                <Icon
                  className="mx-auto h-11 w-11 text-brand"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-display text-lg text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
