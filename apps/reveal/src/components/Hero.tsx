import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/reveal-hero/1920/1080')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">Reveal</h1>
        <p className="text-lg text-white/70 md:text-xl">
          I'm a Product Designer Based In San Francisco
        </p>
      </div>
      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Scroll to portfolio section"
      >
        <ChevronDown size={32} className="animate-bounce" />
        <span className="sr-only">Scroll</span>
      </a>
    </section>
  )
}
