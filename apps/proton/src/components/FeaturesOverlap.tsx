import { Lightbulb, Palette, Zap } from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: 'Intuitive Thinking',
    description:
      'We approach every project with clarity and purpose, ensuring your website works as hard as you do.',
  },
  {
    icon: Palette,
    title: 'Orange for Carrots',
    description:
      'Bold design choices that stand out. We create visual identities that leave a lasting impression.',
  },
  {
    icon: Zap,
    title: 'Infinite Possibilities',
    description:
      'From concept to launch, we deliver websites that scale with your business ambitions.',
  },
]

export function FeaturesOverlap() {
  return (
    <section className="relative z-20 mx-auto -mt-24 max-w-6xl px-4 sm:px-6">
      <div className="rounded-lg bg-white p-10 shadow-xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <Icon className="mx-auto mb-4 h-12 w-12 text-proton-500" />
              <h5 className="mb-2 text-lg font-bold">{title}</h5>
              <p className="text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
