import { FileText, Palette, Rocket, Target } from 'lucide-react'

const cards = [
  {
    icon: Rocket,
    title: 'No1 in Sales!',
    blurb: 'Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.',
  },
  {
    icon: FileText,
    title: 'Documentation inside',
    blurb: 'Tiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    blurb: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.',
  },
  {
    icon: Target,
    title: 'Marketing Strategist',
    blurb: 'Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.',
  },
] as const

export function FeatureCards() {
  return (
    <section aria-label="Features" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <card.icon className="h-10 w-10 text-primary-500" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {card.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
