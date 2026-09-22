import { Dumbbell, Waves, Apple } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Pilates with trainer',
    description:
      'Etiam commodo justo nec aliquam feugiat. Donec a leo eget augue porttitor sollicitudin.',
  },
  {
    icon: Waves,
    title: 'Swimming Pool',
    description:
      'Donec a leo eget augue porttitor sollicitudin. Morbi sed varius risus, vitae molestie lectus.',
  },
  {
    icon: Apple,
    title: 'Healthy diet plan',
    description:
      'Morbi sed varius risus, vitae molestie lectus. Donec id hendrerit velit, eu fringilla neque.',
  },
]

export function Features() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <Icon className="h-8 w-8 text-brand-400" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-heading">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-body">{feature.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 text-lg font-bold text-white transition-colors hover:bg-brand-500"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  +
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
