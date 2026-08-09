import { Cog, MapPin, Users, Zap } from 'lucide-react'

const reasons = [
  {
    title: 'Expert Mechanics',
    icon: Users,
    blurb: 'Certified technicians with years of hands-on experience on every make and model.',
  },
  {
    title: 'Convenient Place',
    icon: MapPin,
    blurb: 'Centrally located workshop with easy parking and quick drop-off lanes.',
  },
  {
    title: 'Modern Equipments',
    icon: Cog,
    blurb: 'Computerized diagnostics and up-to-date tools for precise, lasting repairs.',
  },
  {
    title: 'Fast Service Delivery',
    icon: Zap,
    blurb: 'Most jobs completed the same day, so you are back on the road in no time.',
  },
] as const

export function WhyChooseUs() {
  return (
    <section id="gallery" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Our advantages
          </span>
          <h2 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">
            Why Choose Us?
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <reason.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{reason.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
