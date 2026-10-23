import { Palette, Sliders, Zap } from 'lucide-react'

const highlights = [
  { title: 'Easy to Use', icon: Zap },
  { title: 'Awesome Design', icon: Palette },
  { title: 'Easy to Customize', icon: Sliders },
] as const

export function Highlights() {
  return (
    <section id="service" className="bg-paper py-16 dark:bg-gray-900 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        {highlights.map((highlight) => {
          const Icon = highlight.icon
          return (
            <div
              key={highlight.title}
              className="rounded-md bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod tepo
                raraincididunt ugt labore.
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
