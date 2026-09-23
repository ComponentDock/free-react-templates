import { Bell, Heart, Zap } from 'lucide-react'

const features = [
  {
    icon: Bell,
    title: 'Modern Design',
    description:
      'We bring contemporary architectural solutions with clean lines and innovative spatial planning.',
  },
  {
    icon: Heart,
    title: 'Build With Love',
    description:
      'Every project is crafted with passion and attention to detail, ensuring lasting quality and satisfaction.',
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    description:
      'Our efficient design process delivers results on time without compromising on quality or creativity.',
  },
]

export function Features() {
  return (
    <section className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mb-4 text-4xl text-brand">
                <feature.icon className="mx-auto h-10 w-10" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-ink">{feature.title}</h3>
              <p className="text-mist">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
