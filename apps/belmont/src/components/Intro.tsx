import { cn } from '@free-react-templates/ui'

export function Intro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left text */}
        <div className="space-y-6">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand">luxury resort</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Relax in our Hotel
          </h2>
          <p className="leading-relaxed text-mist">
            Experience the perfect blend of comfort and elegance at Belmont. Our luxury hotel offers
            world-class amenities, breathtaking views, and exceptional service that will make your
            stay unforgettable.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#rooms"
              className="text-sm font-semibold uppercase text-brand transition hover:text-brand-dark"
            >
              View Rooms →
            </a>
            <button className="rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark">
              Book Your Stay
            </button>
          </div>
        </div>

        {/* Right images */}
        <div className="relative h-80 sm:h-96 lg:h-[500px]">
          <img
            src="https://picsum.photos/seed/belmont-intro-1/600/400"
            alt="Hotel lobby"
            className={cn(
              'absolute top-0 left-0 h-48 w-64 rounded object-cover shadow-lg sm:h-56 sm:w-72',
            )}
          />
          <img
            src="https://picsum.photos/seed/belmont-intro-2/600/400"
            alt="Hotel pool"
            className={cn(
              'absolute top-16 left-20 h-48 w-64 rounded object-cover shadow-lg sm:top-20 sm:left-24 sm:h-56 sm:w-72',
            )}
          />
          <img
            src="https://picsum.photos/seed/belmont-intro-3/600/400"
            alt="Hotel room"
            className={cn(
              'absolute top-32 left-10 h-48 w-64 rounded object-cover shadow-lg sm:top-40 sm:left-12 sm:h-56 sm:w-72',
            )}
          />
        </div>
      </div>
    </section>
  )
}
