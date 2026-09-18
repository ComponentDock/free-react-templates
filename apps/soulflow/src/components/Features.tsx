import { Brain, Heart, Sparkles, Mountain } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Peace of Mind',
    description: 'Find inner calm through guided meditation and mindfulness practices.',
  },
  {
    icon: Heart,
    title: 'Mindfulness',
    description: 'Develop awareness of the present moment in every aspect of life.',
  },
  {
    icon: Sparkles,
    title: 'Meditation',
    description: 'Deep meditation sessions led by experienced spiritual guides.',
  },
  {
    icon: Mountain,
    title: 'Yoga Carpet',
    description: 'Premium yoga mats and equipment provided for every session.',
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Yoga Features</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soulflow-teal/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-soulflow-teal" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
