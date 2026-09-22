import { ArrowRight } from 'lucide-react'

export function HeroBanner() {
  return (
    <section
      className="relative flex min-h-[520px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/medlink-hero/1600/800')",
      }}
      aria-label="Hero banner"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          We Care for Your Health
          <br className="hidden md:block" /> Every Moment
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Providing compassionate and comprehensive healthcare services for you and your family.
          Your well-being is our top priority.
        </p>
        <a
          href="#appointment"
          className="inline-flex items-center gap-2 rounded bg-[#76b900] px-8 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:bg-[#5a8f00] transition-colors"
        >
          Get Started
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
