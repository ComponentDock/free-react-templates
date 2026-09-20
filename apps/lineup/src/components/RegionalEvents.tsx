import { useState } from 'react'
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react'

const locations = ['New York', 'California', 'South Carolina']

const regionalEvents = [
  { id: 1, title: 'U2 Concert', date: 'Saturday, Jan 27, 2024', image: 'lineup-reg-1' },
  { id: 2, title: 'Broadway Hit', date: 'Saturday, Jan 27, 2024', image: 'lineup-reg-2' },
  { id: 3, title: 'Gallery Exhibition', date: 'Saturday, Jan 27, 2024', image: 'lineup-reg-3' },
  { id: 4, title: 'Art Gallery', date: 'Saturday, Jan 27, 2024', image: 'lineup-reg-4' },
  { id: 5, title: 'Music Concert', date: 'Saturday, Jan 27, 2024', image: 'lineup-reg-5' },
  { id: 6, title: 'EDM Festival', date: 'Saturday, Jan 27, 2024', image: 'lineup-reg-6' },
]

const partners = [
  'Partner Alpha',
  'Partner Beta',
  'Partner Gamma',
  'Partner Delta',
  'Partner Epsilon',
]

export function RegionalEvents() {
  const [selectedLocation, setSelectedLocation] = useState('New York')

  return (
    <section className="bg-[var(--color-light-bg)] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
            Events in {selectedLocation}
          </h2>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-[var(--color-body)] focus:border-[var(--color-primary-start)] focus:outline-none"
            aria-label="Select location"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Event slider */}
        <div className="relative mb-16">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {regionalEvents.map((event) => (
              <div key={event.id} className="w-72 flex-shrink-0">
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={`https://picsum.photos/seed/${event.image}/500/350`}
                    alt={event.title}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-start)] text-white">
                      <Plus className="h-6 w-6" />
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-bold text-[var(--color-heading)]">{event.title}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{event.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider arrows */}
          <button
            type="button"
            className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100 hidden md:block"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-[var(--color-body)]" />
          </button>
          <button
            type="button"
            className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100 hidden md:block"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-[var(--color-body)]" />
          </button>
        </div>

        {/* Partners */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-[var(--color-heading)]">Partners</h3>
          <div className="flex flex-wrap items-center justify-between gap-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-16 items-center justify-center rounded-lg bg-white px-6 shadow-sm"
              >
                <span className="text-sm font-semibold text-[var(--color-muted)]">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
