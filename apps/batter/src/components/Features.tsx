import { Sun, Code, Clock } from 'lucide-react'

const features = [
  {
    icon: Sun,
    title: 'Stunning Visuals',
    description:
      'Here, I focus on a range of items and features that we use in life without giving them a second thought.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description:
      'Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description:
      'If you own an iPhone, you have probably already worked out how much fun it is to use it to watch movies.',
  },
]

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <feature.icon size={28} />
              </div>
              <h6 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
                {feature.title}
              </h6>
              <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
