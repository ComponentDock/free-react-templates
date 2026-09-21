import { CircleDot, Flower2, Footprints, Leaf } from 'lucide-react'

const cards = [
  {
    icon: CircleDot,
    title: 'Acupuncture Therapy',
    description:
      "Precision needle placement to stimulate energy flow, relieve pain, and restore your body's natural balance.",
  },
  {
    icon: Flower2,
    title: 'Holistic Therapy',
    description:
      'Comprehensive body treatments that address physical, emotional, and spiritual well-being together.',
  },
  {
    icon: Footprints,
    title: 'Reflexology',
    description:
      'Targeted pressure point therapy on feet and hands to promote healing throughout the entire body.',
  },
  {
    icon: Leaf,
    title: 'Natural Healing',
    description:
      'Plant-based remedies and herbal treatments crafted from centuries-old traditions for modern wellness.',
  },
]

export function ServiceCards() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:px-8">
        {cards.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex gap-5 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
