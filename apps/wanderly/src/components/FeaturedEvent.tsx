import { Star } from 'lucide-react'

export function FeaturedEvent() {
  return (
    <section className="py-16 bg-cloud">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/wanderly-event/800/500"
              alt="Featured destination"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Upcoming Event
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Maldives — Asia</h2>
            <p className="text-smoke leading-relaxed">
              Experience pristine white sand beaches, crystal clear waters, and vibrant coral reefs.
              Our curated Maldives package includes luxury villa stays, snorkeling excursions, and
              sunset dolphin cruises.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-ash">
                Date: <span className="font-semibold text-navy">12 Aug 2025</span>
              </p>
              <p className="text-ash">
                Cost: <span className="font-semibold text-navy">Start from $820</span>
              </p>
              <p className="text-ash">
                Organizer: <span className="font-semibold text-navy">Wanderly Agency</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-ash text-sm">Rating:</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
            </div>
            <a
              href="#"
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded font-semibold hover:bg-primary-600 transition-colors mt-4"
            >
              Plan Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
