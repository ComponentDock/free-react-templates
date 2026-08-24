import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative flex min-h-[80vh] items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/havenshore-hero/1600/900')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <a href="#booking" className="mb-4 inline-block" aria-label="Scroll to booking">
            <ArrowDown className="bounce-animate h-8 w-8 text-white/70" />
          </a>
          <h1 className="font-display text-5xl font-semibold text-white md:text-7xl">Havenshore</h1>
          <p className="mt-4 max-w-lg text-lg text-white/80">
            A chance to go offline and get in touch with nature.
          </p>
        </div>
      </div>
    </section>
  )
}
