const EVENTS = [
  {
    name: 'Jazz Concert',
    location: 'Manhattan',
    date: '26 Nov',
    image: 'https://picsum.photos/seed/quest-jazz/400/300',
  },
  {
    name: 'DeeJay in the House',
    location: 'Manhattan',
    date: '26 Nov',
    image: 'https://picsum.photos/seed/quest-dj/400/300',
  },
  {
    name: 'Theatre Night Outside',
    location: 'Manhattan',
    date: '26 Nov',
    image: 'https://picsum.photos/seed/quest-theatre/400/300',
  },
  {
    name: 'Wine Tasting',
    location: 'Manhattan',
    date: '26 Nov',
    image: 'https://picsum.photos/seed/quest-wine/400/300',
  },
  {
    name: 'New Moon Party',
    location: 'Manhattan',
    date: '26 Nov',
    image: 'https://picsum.photos/seed/quest-moon/400/300',
  },
  {
    name: 'Happy Hour at Pub',
    location: 'Manhattan',
    date: '26 Nov',
    image: 'https://picsum.photos/seed/quest-pub/400/300',
  },
] as const

export function FeaturedEvents() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(rgba(14,2,35,0.85), rgba(14,2,35,0.85)), url(https://picsum.photos/seed/quest-events-bg/1920/1080)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-brand mx-auto mb-4" />
          <h3 className="text-white text-2xl font-bold">Featured events</h3>
          <p className="text-white/60 text-sm mt-2">Editor&apos;s pick</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {EVENTS.map((event) => (
            <div
              key={event.name}
              className="flex bg-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/15 transition-colors"
            >
              <div className="relative w-40 flex-shrink-0">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 bg-brand text-white text-xs font-bold px-2 py-1">
                  {event.date}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-center">
                <h4 className="text-white font-bold text-lg">{event.name}</h4>
                <h5 className="text-white/60 text-sm mb-2">{event.location}</h5>
                <p className="text-white/50 text-sm line-clamp-2">
                  Explore this amazing event and discover what makes it special in your city.
                </p>
              </div>
              <div className="flex items-center pr-4">
                <button
                  aria-label={`Details for ${event.name}`}
                  className="w-10 h-10 bg-brand flex items-center justify-center text-white font-bold text-xl hover:bg-brand-hover transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
