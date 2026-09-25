const EVENTS = [
  {
    title: 'Slamp Party',
    description:
      'A high-energy night of electronic beats and light shows that will keep you dancing until dawn.',
    date: { day: '19', month: 'Jun' },
    image: 'https://picsum.photos/seed/vynl-event1/600/400',
  },
  {
    title: 'Love For My City',
    description:
      'Celebrating local talent with live sets from emerging DJs and underground music collectives.',
    date: { day: '24', month: 'Jun' },
    image: 'https://picsum.photos/seed/vynl-event2/600/400',
  },
  {
    title: 'Music Night Fest Party',
    description:
      'The ultimate music festival experience featuring world-class DJs and immersive sound installations.',
    date: { day: '8', month: 'Jul' },
    image: 'https://picsum.photos/seed/vynl-event3/600/400',
  },
]

export function FeaturedEvents() {
  return (
    <section className="bg-brand-dark py-16 lg:py-20" data-testid="featured-events">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white font-heading">
          Featured Events
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <div key={event.title} className="group" data-testid="event-card">
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex flex-col items-center bg-brand-gold px-3 py-2 text-center">
                  <span className="text-xl font-bold text-white">{event.date.day}</span>
                  <span className="text-xs uppercase text-white/80">{event.date.month}</span>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white font-heading">{event.title}</h3>
              <p className="mt-2 text-sm text-white/50">{event.description}</p>
              <a
                href="#"
                className="mt-3 inline-block text-sm font-semibold text-brand-gold transition-colors hover:text-white"
              >
                Info
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
