import { Compass, Puzzle, Target } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { packages } from '../data'

const iconMap = {
  puzzle: Puzzle,
  target: Target,
  compass: Compass,
} as const

const titleColors: Record<string, string> = {
  lagoon: 'text-lagoon',
  leaf: 'text-leaf',
  coral: 'text-coral',
}

const buttonColors: Record<string, string> = {
  cherry: 'bg-cherry hover:bg-red-700',
  amber: 'bg-amber hover:bg-yellow-500',
  leaf: 'bg-leaf hover:bg-green-600',
}

/** Packages section (reference `.site-section.bg-info`): teal-blue band with
 *  a centered cursive eyebrow + white heading and three white cards, each
 *  with an 80px icon wrap, colored title, and colored LEARN MORE button. */
export function Packages() {
  return (
    <section id="packages" aria-label="Packages" className="bg-lake py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center font-cursive text-2xl text-coral">{packages.eyebrow}</p>
        <h2 className="mt-3 text-center text-4xl font-bold text-white">{packages.heading}</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {packages.cards.map(({ icon, color, title, text, ctaColor }) => {
            const Icon = iconMap[icon]
            return (
              <article key={title} className="rounded-[7px] bg-white p-10 text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mist">
                  <Icon className="h-8 w-8 text-ink" aria-hidden="true" />
                </span>
                <h3 className={cn('mt-6 text-lg font-bold', titleColors[color])}>{title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{text}</p>
                <a
                  href="#pricing"
                  className={cn(
                    'mt-6 inline-block rounded-[30px] px-6 py-3 text-sm tracking-[0.2rem] text-white uppercase transition-colors',
                    buttonColors[ctaColor],
                  )}
                >
                  LEARN MORE
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
