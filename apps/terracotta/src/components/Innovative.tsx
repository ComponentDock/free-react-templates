import { Layers, Lightbulb, PenTool } from 'lucide-react'

const features = [
  {
    title: 'Innovative Design',
    blurb: 'Living over the god living creature that appear place creeping upon.',
    Icon: Lightbulb,
  },
  {
    title: 'Smart Planning',
    blurb: 'Living over the god living creature that appear place creeping upon.',
    Icon: PenTool,
  },
  {
    title: 'Creative Build',
    blurb: 'Living over the god living creature that appear place creeping upon.',
    Icon: Layers,
  },
] as const

export function Innovative() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {features.map(({ title, blurb, Icon }) => (
          <div key={title} className="flex gap-5">
            <Icon className="mt-1 h-10 w-10 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">{blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
