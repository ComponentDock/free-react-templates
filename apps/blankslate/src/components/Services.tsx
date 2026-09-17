import { BarChart3, Headphones, Rocket, ShieldCheck } from 'lucide-react'

const cards = [
  {
    icon: BarChart3,
    title: 'Strategy Planning',
    description:
      'We craft data-driven strategies that align with your business goals and market conditions for sustainable growth.',
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    description:
      'Our digital marketing team creates targeted campaigns across all channels to maximize your reach and ROI.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'We provide round-the-clock support to ensure your business operations run smoothly without interruption.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Solutions',
    description:
      'Protect your business with our comprehensive security solutions designed to safeguard your digital assets.',
  },
] as const

export function Services() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand">
                  <Icon className="h-7 w-7 text-dark" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
