import { Leaf, Palette, Truck, Sparkles } from 'lucide-react'

const benefits = [
  {
    id: 'freshness',
    icon: Leaf,
    title: '100% Freshness',
    desc: 'Most people are unaware of the less common flower',
  },
  {
    id: 'artist',
    icon: Palette,
    title: 'Made by artist',
    desc: 'Most people are unaware of the less common flower',
  },
  {
    id: 'courier',
    icon: Truck,
    title: 'Own courier',
    desc: 'Most people are unaware of the less common flower',
  },
  {
    id: 'quality',
    icon: Sparkles,
    title: '100% Quality',
    desc: 'Most people are unaware of the less common flower',
  },
]

export function Benefits() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        {benefits.map(({ id, icon: Icon, title, desc }) => (
          <div key={id} className="flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-bloom-50 text-bloom-400">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h4
                className="mb-1 text-lg font-bold text-gray-900"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
