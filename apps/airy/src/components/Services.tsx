import { Target, BarChart3, Palette, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Target,
    title: 'Business Strategy',
    description: 'Crafting winning strategies to outperform your competition.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Turning raw data into actionable business intelligence.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating stunning visuals that communicate your brand story.',
  },
  {
    icon: Sparkles,
    title: 'Creative',
    description: 'Innovative ideas that make your brand stand out from the crowd.',
  },
]

export function Services() {
  return (
    <section className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-300 text-white">
                <item.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
