import { Heart, Video, Flame, Magnet } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Wedding',
    description:
      'Capturing the magic of your special day with timeless photography that tells your love story.',
  },
  {
    icon: Video,
    title: 'Events',
    description:
      'Professional event coverage that captures the energy and emotion of every occasion.',
  },
  {
    icon: Flame,
    title: 'Conferences',
    description: 'Documenting conferences and seminars with crisp, engaging photography.',
  },
  {
    icon: Magnet,
    title: 'Culture',
    description: 'Exploring cultural narratives through documentary and editorial photography.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-400/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
