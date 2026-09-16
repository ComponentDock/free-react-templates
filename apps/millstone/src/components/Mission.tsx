import { ShieldCheck, HeartPulse, Lightbulb, Leaf } from 'lucide-react'

const MISSIONS = [
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    description: 'We ensure every product meets the highest standards of quality and reliability.',
  },
  {
    icon: HeartPulse,
    title: 'Safety First',
    description: 'Worker safety is our top priority across all operations and facilities.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously improving processes through cutting-edge technology and research.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to environmentally responsible manufacturing and operations.',
  },
]

export function Mission() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-heading mb-3">Our Mission</h2>
          <p className="font-body text-sm text-body max-w-2xl mx-auto">
            Delivering excellence in industrial solutions with a focus on quality, safety,
            innovation, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MISSIONS.map((item) => (
            <article key={item.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-4">
                <item.icon className="text-primary-400" size={28} />
              </div>
              <h3 className="font-heading text-base font-bold text-heading mb-2">{item.title}</h3>
              <p className="font-body text-sm text-body leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
