import { BadgeCheck, Lightbulb, LineChart, Palette, TrendingUp, Wrench } from 'lucide-react'

const highlights = [
  { icon: BadgeCheck, title: 'No1 in Sales!' },
  { icon: TrendingUp, title: 'Online Marketing' },
  { icon: Palette, title: 'Modern Design' },
  { icon: Wrench, title: 'Easy Customize' },
  { icon: LineChart, title: 'Fast Performance' },
  { icon: Lightbulb, title: 'Great Support' },
] as const

export function Highlights() {
  return (
    <section aria-label="Highlights" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-3xl font-black text-primary-200 dark:text-primary-800">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <highlight.icon className="h-8 w-8 text-primary-500" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink dark:text-white">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et
                tellus blandit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
