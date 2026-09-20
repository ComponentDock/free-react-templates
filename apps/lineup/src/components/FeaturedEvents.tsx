const events = [
  {
    id: 1,
    title: 'Michael Smith in concert',
    date: 'August 25',
    image: 'lineup-feat-1',
    size: 'full',
  },
  { id: 2, title: 'Street art fest', date: 'November 28', image: 'lineup-feat-2', size: 'full' },
  { id: 3, title: 'Anabelle in concert', date: 'August 28', image: 'lineup-feat-3', size: 'full' },
  { id: 4, title: '', date: '', image: 'lineup-feat-4', size: 'half' },
  { id: 5, title: '', date: '', image: 'lineup-feat-5', size: 'half' },
  { id: 6, title: '', date: '', image: 'lineup-feat-6', size: 'half' },
  { id: 7, title: "90's Disco Night", date: 'August 28', image: 'lineup-feat-7', size: 'full' },
  { id: 8, title: 'Modern Ballet', date: 'August 25', image: 'lineup-feat-8', size: 'full' },
  { id: 9, title: 'Smoke show', date: 'August 28', image: 'lineup-feat-9', size: 'full' },
  { id: 10, title: '', date: '', image: 'lineup-feat-10', size: 'half' },
  { id: 11, title: '', date: '', image: 'lineup-feat-11', size: 'half' },
]

export function FeaturedEvents() {
  return (
    <section className="bg-[var(--color-light-bg)] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`group relative overflow-hidden rounded-lg ${event.size === 'half' ? 'col-span-1' : 'col-span-2 md:col-span-1'}`}
            >
              <img
                src={`https://picsum.photos/seed/${event.image}/600/400`}
                alt={event.title || 'Event'}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-64"
                loading="lazy"
              />
              {event.title && (
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <span className="text-sm text-white/80">{event.date}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
