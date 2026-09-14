import { MapPin, Compass, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink lg:text-5xl">
            Travel More To <span className="text-primary-500">Discover Yourself</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-smoke lg:text-base">
            Explore breathtaking destinations around the world. We craft unforgettable journeys that
            inspire adventure, relaxation, and cultural immersion for every kind of traveler.
          </p>
          <a
            href="#packages"
            className="mt-8 inline-flex items-center gap-2 bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="relative h-72 w-72 rounded-full bg-primary-50 lg:h-96 lg:w-96">
            <img
              src="https://picsum.photos/seed/expedio-hero/600/600"
              alt="Travel destination"
              className="h-full w-full rounded-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
              <MapPin size={18} className="text-primary-500" />
              <span className="text-xs font-medium text-ink">500+ Destinations</span>
            </div>
            <div className="absolute -right-4 top-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
              <Compass size={18} className="text-primary-500" />
              <span className="text-xs font-medium text-ink">Guided Tours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
