import { HardHat, Mountain, Gem, Shovel, Hammer, Pickaxe } from 'lucide-react'

const features = [
  {
    icon: HardHat,
    title: 'Safety First',
    desc: 'Industry-leading safety protocols and training for all team members.',
  },
  {
    icon: Mountain,
    title: 'Land Development',
    desc: 'Comprehensive land clearing, grading, and site preparation services.',
  },
  {
    icon: Gem,
    title: 'Resource Extraction',
    desc: 'Efficient and sustainable mining operations for valuable resources.',
  },
  {
    icon: Shovel,
    title: 'Earth Moving',
    desc: 'Large-scale earth moving and material handling capabilities.',
  },
  {
    icon: Hammer,
    title: 'Construction',
    desc: 'Full-service construction from foundation to completion.',
  },
  {
    icon: Pickaxe,
    title: 'Mining Solutions',
    desc: 'Surface and underground mining solutions tailored to your needs.',
  },
]

export function Features() {
  return (
    <section id="services" className="py-20 bg-light-bg">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-brand" />
                </div>
                <h3 className="text-lg font-bold font-heading text-heading mb-2">{f.title}</h3>
                <p className="text-sm text-body leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
