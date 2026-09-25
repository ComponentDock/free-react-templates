import { Download, Code } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <img
        src="https://picsum.photos/seed/swatchkit-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 text-center">
        <h1
          id="hero-heading"
          className="font-heading text-6xl font-extrabold uppercase tracking-wider text-white md:text-8xl"
        >
          Swatchkit
        </h1>
        <p className="mt-4 text-lg text-gray-300 md:text-xl">A Free UI Kit on Swatchkit Design.</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#download"
            className={cn(
              'inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white',
              'transition-colors hover:bg-brand-dark',
            )}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Tools
          </a>
          <a
            href="#components"
            className={cn(
              'inline-flex items-center gap-2 rounded-full border border-gray-500 bg-gray-900/80 px-8 py-3 text-sm font-semibold text-white',
              'transition-colors hover:border-white hover:bg-gray-800',
            )}
          >
            <Code className="h-4 w-4" aria-hidden="true" />
            Components
          </a>
        </div>
      </div>
    </section>
  )
}
