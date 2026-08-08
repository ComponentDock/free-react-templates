import { DraftingCompass, PencilRuler, Ruler } from 'lucide-react'

const features = [
  {
    title: 'Building Drawings',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: DraftingCompass,
  },
  {
    title: 'Building Drawings',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: PencilRuler,
  },
  {
    title: 'Building Drawings',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: Ruler,
  },
] as const

export function Features() {
  return (
    <section id="feature" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, blurb, Icon }, index) => (
            <div key={index} className="group text-center">
              <Icon
                className="mx-auto h-12 w-12 text-brand transition-transform duration-300 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <h2 className="mt-5 font-display text-lg font-bold uppercase text-ink dark:text-white">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
