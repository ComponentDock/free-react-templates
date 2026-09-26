import { Shirt, Droplets, Camera, Building2, Film, Heart } from 'lucide-react'

const services = [
  {
    icon: Shirt,
    title: 'Fashion Photography',
    description:
      'An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise.',
  },
  {
    icon: Droplets,
    title: 'Nature Photography',
    description:
      'An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise.',
  },
  {
    icon: Camera,
    title: 'Event Coverage',
    description:
      'An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise.',
  },
  {
    icon: Building2,
    title: 'Property Tours',
    description:
      'An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise.',
  },
  {
    icon: Film,
    title: 'Multimedia Services',
    description:
      'An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise.',
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description:
      'An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="font-[var(--font-heading)] text-lg font-light uppercase tracking-widest text-coral-400">
            Our Services
          </h3>
          <h2 className="font-[var(--font-heading)] mt-2 text-3xl font-semibold text-gray-900">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <s.icon size={28} className="text-coral-400" strokeWidth={1.5} />
                <h4 className="font-[var(--font-heading)] text-lg font-medium text-gray-900">
                  {s.title}
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
