import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center overflow-hidden"
      aria-label="Hero slider"
    >
      <img
        src="https://picsum.photos/seed/batterly-hero/1920/800"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-display italic text-4xl md:text-5xl lg:text-[46px] leading-tight mb-6">
          Making your life sweeter
          <br />
          one bite at a time!
        </h1>
        <a
          href="#shop"
          className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:bg-brand-dark transition-colors"
        >
          Our cakes
        </a>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white hover:bg-brand transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white hover:bg-brand transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
