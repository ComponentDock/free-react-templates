import { Send, Volume2, MessageCircle, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Send,
    title: 'Our Mission',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.',
  },
  {
    icon: Volume2,
    title: 'Listen To Our Sermons',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.',
  },
  {
    icon: MessageCircle,
    title: 'Testimonies',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.',
  },
] as const

export function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center font-amatic text-4xl font-bold text-navy">
          More Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <div key={feat.title} className="p-4 text-center">
                <Icon className="mx-auto mb-3 h-12 w-12 text-brand" />
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-navy">
                  {feat.title}
                </h3>
                <p className="mb-3 text-sm text-gray-600">{feat.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
