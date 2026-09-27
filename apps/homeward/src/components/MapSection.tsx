import { MapPin } from 'lucide-react'

const locations = [
  { id: 'new-york', label: 'New York', count: 12 },
  { id: 'san-francisco', label: 'San Francisco', count: 8 },
  { id: 'los-angeles', label: 'Los Angeles', count: 15 },
  { id: 'chicago', label: 'Chicago', count: 6 },
]

export function MapSection() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="flex h-[400px] items-center justify-center rounded-lg bg-gray-100">
              <MapPin className="h-16 w-16 text-brand/30" aria-hidden="true" />
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Explore
            </p>
            <h2 className="mb-6 text-2xl font-bold text-heading">Choose a Location</h2>
            <div className="space-y-3">
              {locations.map((loc) => (
                <label
                  key={loc.id}
                  className="flex cursor-pointer items-center gap-3 rounded border border-gray-200 px-4 py-3 transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <input
                    type="radio"
                    name="location"
                    value={loc.id}
                    className="h-4 w-4 accent-accent"
                  />
                  <span className="flex-1 text-sm font-medium text-heading">{loc.label}</span>
                  <span className="text-xs text-body">({loc.count} listings)</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-1 left-0 h-24 w-full bg-brand/5 rounded-t-full"
        aria-hidden="true"
      />
    </section>
  )
}
