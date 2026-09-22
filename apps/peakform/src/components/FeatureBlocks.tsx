import { Flame, Dumbbell, Swords, Footprints } from 'lucide-react'

const features = [
  {
    icon: Flame,
    title: 'Yoga',
    description: 'Improve flexibility and find inner peace with our expert-led yoga sessions.',
  },
  {
    icon: Dumbbell,
    title: 'Weight Lifting',
    description: 'Build strength and muscle with professional weight training programs.',
  },
  {
    icon: Swords,
    title: 'Boxing',
    description: 'Get fit and learn self-defense with our high-energy boxing classes.',
  },
  {
    icon: Footprints,
    title: 'Running',
    description: 'Boost your cardio and endurance with guided running programs.',
  },
]

export function FeatureBlocks() {
  return (
    <section className="py-16 md:py-24 bg-cloud" aria-label="Features">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <article key={feature.title} className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{feature.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
