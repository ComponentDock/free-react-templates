import { ArrowRight } from 'lucide-react'

const services = [
  { title: 'Special Rooms', image: 'https://picsum.photos/seed/roxyglow-sr1/600/400' },
  { title: 'Swimming Pool', image: 'https://picsum.photos/seed/roxyglow-sp2/600/400' },
  { title: 'Restaurant', image: 'https://picsum.photos/seed/roxyglow-rs3/600/400' },
  { title: 'Suites & Rooms', image: 'https://picsum.photos/seed/roxyglow-sr4/600/400' },
] as const

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative h-64 overflow-hidden bg-cover bg-center ${
                i === 3 ? 'bg-black' : ''
              }`}
              style={i === 3 ? undefined : { backgroundImage: `url(${service.image})` }}
            >
              {i === 3 && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{ backgroundImage: `url(${service.image})` }}
                  aria-hidden="true"
                />
              )}
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                {i === 3 && (
                  <div
                    className="mt-4 flex h-10 w-10 items-center justify-center border border-white text-white transition-colors hover:bg-white hover:text-ink"
                    aria-label="View Suites & Rooms"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
