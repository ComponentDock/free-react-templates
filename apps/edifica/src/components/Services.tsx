import { Hammer, Building, PaintBucket, Compass } from 'lucide-react'

const services = [
  {
    icon: Hammer,
    title: 'Construction',
    description:
      'From foundations to framing, we deliver reliable construction services for residential and commercial projects.',
  },
  {
    icon: Building,
    title: 'House Renovation',
    description:
      'Transform your living space with our expert renovation team, handling everything from kitchens to full remodels.',
  },
  {
    icon: PaintBucket,
    title: 'Painting',
    description:
      'Professional interior and exterior painting with premium finishes that stand the test of time.',
  },
  {
    icon: Compass,
    title: 'Architecture Design',
    description:
      'Innovative architectural designs that blend aesthetics with functionality for your dream project.',
  },
]

export function Services() {
  return (
    <section className="py-16" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="services-heading" className="sr-only">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="p-4">
                <div className="mb-4 flex justify-center">
                  <Icon size={48} className="text-primary-400" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-smoke">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
