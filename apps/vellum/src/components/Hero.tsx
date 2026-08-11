import { ChevronDown } from 'lucide-react'
import { heroHeadline, heroImageAlt, heroParagraph, heroSubheading, scrollLabel } from '../data'

export function Hero() {
  return (
    <section id="top" aria-label="Welcome" className="relative flex min-h-screen items-center">
      <img
        src="https://picsum.photos/seed/vellum-hero/1600/900"
        alt={heroImageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{ background: 'linear-gradient(45deg, #f200ff 0%, #ffba42 100%)' }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-lg text-white">{heroSubheading}</h2>
          <h1 className="mt-2 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {heroHeadline}
          </h1>
          <p className="mt-6 max-w-xl text-white/90">{heroParagraph}</p>
        </div>
      </div>
      <a
        href="#blog"
        aria-label={scrollLabel}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <span
          aria-hidden="true"
          className="mx-auto flex h-20 w-[30px] items-start justify-center rounded-full border-2 border-white/60"
        >
          <span className="mt-2 block h-8 w-[14px] animate-bounce rounded-full border border-white/60" />
        </span>
        <ChevronDown aria-hidden="true" className="mx-auto mt-1" />
      </a>
    </section>
  )
}
