import { ArrowDown } from 'lucide-react'
import { Typewriter } from './Typewriter'
import { heroName, rotatingRoles } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Left-half indigo wash (10% opacity over white → pale lavender). */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1/2 bg-brand/10" />

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <p className="text-base font-extrabold uppercase tracking-[0.25em] text-brand">Hey! I am</p>
        <h1 className="mt-4 text-5xl font-extrabold text-ink sm:text-6xl">{heroName}</h1>
        <h2 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">
          I&apos;m a <Typewriter words={rotatingRoles} />
        </h2>
      </div>

      <a
        href="#about-section"
        aria-label="Scroll down to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-line bg-white/60">
          <ArrowDown className="h-5 w-5 animate-bounce text-brand" aria-hidden="true" />
        </span>
      </a>
    </section>
  )
}
