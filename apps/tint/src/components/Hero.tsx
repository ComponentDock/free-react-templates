import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-navy-800 bg-cover bg-center"
      aria-label="Hero banner"
    >
      <div className="absolute inset-0 bg-navy-800/70" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white font-[family-name:var(--font-condensed)] md:text-5xl lg:text-6xl">
          Here&apos;s the Preview of
          <br />
          Interior Design Conference of 2024
        </h1>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-gold-400 px-8 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-gold-500"
        >
          Learn more about this
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
