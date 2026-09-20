import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { useRef } from 'react'

const events = [
  {
    title: 'Summer Soundwave Festival',
    venue: 'Bayfront Park, Miami FL',
    image: 'https://picsum.photos/seed/encoremix-event-1/800/500',
  },
  {
    title: 'Neon Nights Open Air',
    venue: 'Red Rocks Amphitheatre, CO',
    image: 'https://picsum.photos/seed/encoremix-event-2/800/500',
  },
  {
    title: 'Underground Sessions Vol. 3',
    venue: 'The Warehouse, Brooklyn NY',
    image: 'https://picsum.photos/seed/encoremix-event-3/800/500',
  },
  {
    title: 'Sunset Boulevard Live',
    venue: 'Hollywood Bowl, Los Angeles CA',
    image: 'https://picsum.photos/seed/encoremix-event-4/800/500',
  },
]

export function NextEvents() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 'left' | 'right') {
    const el = scrollRef.current!
    const amount = el.offsetWidth * 0.8
    if (direction === 'left') {
      el.scrollLeft -= amount
    } else {
      el.scrollLeft += amount
    }
  }

  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(5,5,5,0.8), rgba(5,5,5,0.8)), url(https://picsum.photos/seed/encoremix-events-bg/1920/800)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-2 text-center text-sm font-medium tracking-widest text-brand-subtitle uppercase">
          Just the best
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Our Next Events
        </h2>

        <div className="relative">
          <button
            aria-label="Previous event"
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={32} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-8 pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {events.map((event) => (
              <div
                key={event.title}
                className="relative min-w-[300px] flex-shrink-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${event.image})`,
                }}
              >
                <div className="flex h-64 flex-col items-center justify-center p-6 text-center">
                  <h3 className="mb-3 text-xl font-bold text-white">{event.title}</h3>
                  <p className="flex items-center gap-1 text-sm text-white/70">
                    <MapPin size={14} /> {event.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Next event"
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
