import { MapPin } from 'lucide-react'

const EVENTS = [
  {
    date: 'Feb 21',
    title: 'Grand Opening Gala',
    description:
      'Join us for an evening of art, music, and celebration as we unveil our newest exhibition featuring world-class modern artists.',
    location: 'Main Gallery Hall',
  },
  {
    date: 'Feb 22',
    title: 'Artist Meet & Greet',
    description:
      'Meet the artists behind the exhibition. Hear their stories, inspirations, and the creative process behind their masterpieces.',
    location: 'Gallery B',
  },
  {
    date: 'Mar 1',
    title: 'Sculpture Garden Tour',
    description:
      'A guided walking tour through our outdoor sculpture garden featuring installations from contemporary sculptors around the globe.',
    location: 'Outdoor Wing',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy">
          <span className="font-[family-name:var(--font-playfair)]">Upcoming Events</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {EVENTS.map((event) => (
            <div key={event.title} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-3 inline-block bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
                {event.date}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-navy">{event.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">{event.description}</p>
              <div className="flex items-center gap-1 text-xs text-muted">
                <MapPin className="h-3 w-3" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
