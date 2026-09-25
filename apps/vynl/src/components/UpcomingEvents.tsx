const UPCOMING = [
  {
    title: 'Classic Songs For Classic People',
    image: 'https://picsum.photos/seed/vynl-up1/800/600',
  },
  {
    title: 'Underground Beats Night',
    image: 'https://picsum.photos/seed/vynl-up2/600/300',
  },
  {
    title: 'Sunset Rooftop Sessions',
    image: 'https://picsum.photos/seed/vynl-up3/600/300',
  },
] as const

export function UpcomingEvents() {
  const [hero, ...rest] = UPCOMING

  return (
    <section className="bg-brand-dark py-16 lg:py-20" data-testid="upcoming-events">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white font-heading">
          Upcoming Events
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Large left image */}
          <a
            href="#"
            className="group relative block h-80 overflow-hidden lg:h-full"
            data-testid="upcoming-card"
          >
            <img
              src={hero.image}
              alt={hero.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
            <div className="absolute inset-0 flex items-end p-6">
              <h3 className="text-2xl font-bold text-white font-heading">{hero.title}</h3>
            </div>
          </a>

          {/* Two stacked right images */}
          <div className="grid gap-4">
            {rest.map((event) => (
              <a
                key={event.title}
                href="#"
                className="group relative block h-40 overflow-hidden"
                data-testid="upcoming-card"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-xl font-bold text-white font-heading">{event.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
