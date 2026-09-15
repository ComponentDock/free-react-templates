import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex h-[600px] items-center justify-center overflow-hidden bg-navy-800">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/manor-hero/1920/600)' }}
      />
      <div className="absolute inset-0 bg-navy-800/40" />

      <div className="relative z-10 text-center">
        <h1 className="font-heading text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
          find your home
        </h1>
      </div>

      <button
        className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-coral-400 text-white shadow-lg transition-colors hover:bg-coral-500 sm:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-coral-400 text-white shadow-lg transition-colors hover:bg-coral-500 sm:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
