import { Dumbbell, PersonStanding, Timer } from 'lucide-react'

export const featureCards: ReadonlyArray<{ title: string; blurb: string }> = [
  {
    title: 'Intense Workouts',
    blurb:
      'High-intensity sessions built around compound lifts, intervals, and progressive overload so every minute in the gym counts.',
  },
  {
    title: 'Cardio & Conditioning',
    blurb:
      'Engineered conditioning circuits that torch calories, sharpen your engine, and keep your heart strong year-round.',
  },
  {
    title: 'Flexibility Training',
    blurb:
      'Guided mobility and stretching work that improves range of motion, speeds up recovery, and prevents injury.',
  },
]

export function Features() {
  const icons = [Dumbbell, Timer, PersonStanding]
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-[#353535] md:text-5xl">
            The real <span className="bg-brand px-1">workout</span> starts when you want to stop.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featureCards.map((card, index) => {
            const Icon = icons[index]!
            return (
              <div key={card.title} className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#f6f9fa] transition-colors hover:bg-brand">
                  <Icon className="h-10 w-10 text-[#353535]" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#353535]">{card.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-muted">
                  {card.blurb}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
