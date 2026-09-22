import { Dumbbell, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Aerobics Program',
    description:
      'Aenean auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus.',
  },
  {
    icon: Zap,
    title: 'Train Hard',
    description:
      'Sed porta vel lacus quis lacinia. Vestibulum nec justo lectus. In hac habitasse platea dictumst. Proin vulputate rhoncus nibh eu vehicula.',
  },
  {
    icon: Heart,
    title: 'Basic Program',
    description:
      'Aenean auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus.',
  },
] as const

export function IntroFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center">
            <feature.icon className="mb-4 h-12 w-12 text-primary-500" aria-hidden="true" />
            <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-ink">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
