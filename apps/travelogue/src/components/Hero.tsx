import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/travelogue-hero/1920/1080"
        alt="Scenic travel destination"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl">
          Explore the World
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          Discover breathtaking destinations, curated trips, and unforgettable experiences tailored
          just for you.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-md bg-white/10 px-9 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Let's Go
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
    </section>
  )
}
