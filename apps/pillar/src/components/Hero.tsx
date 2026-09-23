import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-gray-900 bg-cover bg-center text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/pillar-hero/1600/900)',
      }}
    >
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Interior Design</h1>
        <p className="mb-8 text-lg text-gray-300">
          Crafting spaces that inspire. We bring creativity and precision together to design
          interiors that reflect your vision and lifestyle.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
