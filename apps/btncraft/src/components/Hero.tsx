import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center dark:from-gray-900 dark:to-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/20">
          Modern Bootstrap Button Library
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          BtnCraft — Modern Bootstrap Button Showcase
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A comprehensive collection of Bootstrap-styled buttons with solid, outline, pill, square,
          icon-augmented, and interactive variants. Copy-paste ready for your next project.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover"
          >
            <Sparkles className="h-4 w-4" />
            Explore Showcase
          </a>
          <a
            href="#playground"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Try Playground
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
