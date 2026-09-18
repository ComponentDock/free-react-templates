import { cn } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/seaview-hero/1920/1080"
        alt="Seaview hotel panoramic view"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">
          Book Your Stay
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Experience luxury and comfort by the sea. Our rooms offer breathtaking views and
          world-class amenities for an unforgettable getaway.
        </p>
        <a
          href="#booking"
          className={cn(
            'mt-8 inline-block rounded bg-primary-400 px-10 py-3',
            'text-sm font-semibold uppercase tracking-wider text-white',
            'transition-colors hover:bg-primary-400/90',
          )}
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
