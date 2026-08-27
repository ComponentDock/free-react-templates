import { Sparkles, Layers } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white py-20 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          <Sparkles className="h-4 w-4" />
          Bootstrap Buttons 02 Recreation
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          Button #07 Collection & Effects
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          A comprehensive suite of modern UI buttons featuring solid fills, outlines, interactive
          dropdowns, grouped toolbars, checkbox/radio toggles, slide animations, and social brand
          styles built with React and Tailwind CSS.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#solid"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40"
          >
            <Layers className="h-5 w-5" />
            Explore Buttons
          </a>
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Component Dock
          </a>
        </div>
      </div>
    </section>
  )
}
