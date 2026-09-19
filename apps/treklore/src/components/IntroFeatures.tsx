import { Map, DollarSign, Briefcase } from 'lucide-react'

const features = [
  {
    icon: Map,
    title: 'Top Destinations',
    description:
      'Explore the most breathtaking destinations around the globe with expertly curated travel experiences.',
  },
  {
    icon: DollarSign,
    title: 'The Best Prices',
    description:
      'We guarantee the best prices on flights, hotels, and vacation packages — quality travel at unbeatable value.',
  },
  {
    icon: Briefcase,
    title: 'Amazing Services',
    description:
      'From planning to departure, our dedicated team ensures every detail of your trip is handled with care.',
  },
]

export function IntroFeatures() {
  return (
    <section aria-label="Features" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <f.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-wide text-navy">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
