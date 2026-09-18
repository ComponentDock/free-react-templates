import { Square, BedDouble, Bath, Car } from 'lucide-react'

export function HotDeal() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/roofmark-7/800/500"
              alt="Hot deal property"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-brand-green text-white text-xs font-semibold uppercase px-3 py-1 rounded">
                House
              </span>
              <span className="bg-brand-purple text-white text-xs font-semibold uppercase px-3 py-1 rounded">
                For Sale
              </span>
            </div>
          </div>

          {/* Right - Details */}
          <div>
            <span className="text-brand-green text-2xl font-bold">$3,800</span>
            <h3 className="text-2xl font-bold text-brand-body mt-2">
              Sunny Apartment in Manhattan
            </h3>
            <p className="text-brand-muted flex items-center gap-1 mt-1 mb-4">
              📍 123 Street, New York, USA
            </p>
            <p className="text-brand-secondary leading-relaxed mb-6">
              This stunning apartment offers modern living in the heart of Manhattan. Featuring
              spacious rooms, natural light, and premium finishes throughout. Walking distance to
              restaurants, shops, and public transit.
            </p>

            {/* Agent */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://picsum.photos/seed/roofmark-agent/60/60"
                alt="Agent"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-brand-body font-semibold">John Smith</p>
                <p className="text-brand-muted text-sm">Real Estate Agent</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center">
                <Square size={32} className="mx-auto text-brand-green mb-2" />
                <p className="text-brand-body font-bold text-lg">2,400</p>
                <p className="text-brand-muted text-sm">Sq Ft</p>
              </div>
              <div className="text-center">
                <BedDouble size={32} className="mx-auto text-brand-green mb-2" />
                <p className="text-brand-body font-bold text-lg">4</p>
                <p className="text-brand-muted text-sm">Beds</p>
              </div>
              <div className="text-center">
                <Bath size={32} className="mx-auto text-brand-green mb-2" />
                <p className="text-brand-body font-bold text-lg">3</p>
                <p className="text-brand-muted text-sm">Baths</p>
              </div>
              <div className="text-center">
                <Car size={32} className="mx-auto text-brand-green mb-2" />
                <p className="text-brand-body font-bold text-lg">2</p>
                <p className="text-brand-muted text-sm">Garage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
