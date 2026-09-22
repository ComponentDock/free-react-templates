import { ROOMS } from '../data'
import { cn } from '@free-react-templates/ui'

export function Rooms() {
  return (
    <section id="rooms" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-dark">Our Rooms</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Choose from our selection of beautifully appointed rooms and suites.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ROOMS.map((room) => (
            <div
              key={room.name}
              className={cn(
                'group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300',
                'hover:-translate-y-1 hover:shadow-lg',
              )}
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-dark">{room.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{room.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {room.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-offwhite px-2 py-0.5 text-xs text-muted"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-brand">{room.price}</span>
                  <a
                    href="#contact"
                    className="rounded bg-brand px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-brand-hover"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
