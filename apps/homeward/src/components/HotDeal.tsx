import { Bed, Bath, Maximize, Car, Phone } from 'lucide-react'

export function HotDeal() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Don&apos;t Miss
          </p>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">Today&apos;s Hot Deal</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/homeward-hotdeal/800/600"
              alt="Hot deal property interior"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded bg-price px-3 py-1 text-sm font-bold text-white">
              Hot Deal
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold text-price">$540,000</p>
            <h3 className="mt-2 text-xl font-bold text-heading">Modern Apartment in Downtown</h3>
            <p className="mt-4 text-sm leading-relaxed text-body">
              Stunning modern apartment with floor-to-ceiling windows, open-concept kitchen, and
              premium finishes throughout. Located in the heart of downtown with easy access to
              restaurants, shopping, and public transit. This is the perfect urban living
              experience.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-body">
              <span className="flex items-center gap-1">
                <Maximize className="h-4 w-4" aria-hidden="true" />
                1,200 sqft
              </span>
              <span className="flex items-center gap-1">
                <Bed className="h-4 w-4" aria-hidden="true" />3 Beds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="h-4 w-4" aria-hidden="true" />2 Baths
              </span>
              <span className="flex items-center gap-1">
                <Car className="h-4 w-4" aria-hidden="true" />1 Garage
              </span>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/homeward-agent/100/100"
                alt="Agent Sarah Johnson"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-heading">Sarah Johnson</p>
                <p className="text-xs text-body">Real Estate Agent</p>
              </div>
              <a
                href="tel:+103672672678"
                className="ml-auto flex items-center gap-2 rounded bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
