import { Rocket } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="overflow-hidden bg-gradient-to-br from-accent-400 via-primary-400 to-primary-600"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:py-32">
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Choose a powerful design for your Start-up
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          Get your freebie template now!
        </p>
        <a
          href="#features"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-primary-600 shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <Rocket className="h-4 w-4" aria-hidden="true" />
          Discover
        </a>
      </div>
    </section>
  )
}
