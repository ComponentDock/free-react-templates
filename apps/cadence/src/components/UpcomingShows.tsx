import { Calendar, MapPin, Clock } from 'lucide-react'

const shows = [
  {
    day: '17',
    month: 'July',
    title: 'Electric Castle Festival',
    city: 'Cluj, Romania',
    venue: 'At the Castle',
    time: '20:30',
    img: 'https://picsum.photos/seed/cadence-show1/80/80',
  },
  {
    day: '23',
    month: 'July',
    title: 'Electric Festival',
    city: 'Manhattan, NY, USA',
    venue: 'Main Stadium',
    time: '21:30',
    img: 'https://picsum.photos/seed/cadence-show2/80/80',
  },
  {
    day: '25',
    month: 'July',
    title: 'Sunflower Festival',
    city: 'Paris, France',
    venue: 'Sunflower Arena',
    time: '20:30',
    img: 'https://picsum.photos/seed/cadence-show3/80/80',
  },
  {
    day: '30',
    month: 'July',
    title: 'Summer Sounds',
    city: 'Berlin, Germany',
    venue: 'Open Air Arena',
    time: '19:00',
    img: 'https://picsum.photos/seed/cadence-show4/80/80',
  },
]

export function UpcomingShows() {
  return (
    <section className="bg-white py-24" id="shows">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black uppercase text-cadence-text md:text-5xl">
            Upcoming Shows
          </h2>
          <p className="text-sm uppercase tracking-wider text-cadence-muted">
            Sed porta cursus enim, vitae maximus felis luctus iaculis.
          </p>
        </div>

        {/* Shows list */}
        <div className="space-y-6">
          {shows.map((show) => (
            <div
              key={`${show.day}-${show.month}-${show.title}`}
              className="flex flex-wrap items-center gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4 transition-shadow hover:shadow-md md:gap-6"
            >
              {/* Date */}
              <div className="min-w-[80px] text-center">
                <span className="block text-3xl font-black text-cadence-pink">{show.day}</span>
                <span className="text-xs font-semibold uppercase text-cadence-muted">
                  {show.month}
                </span>
              </div>

              {/* Image + Name */}
              <div className="flex items-center gap-3">
                <img
                  src={show.img}
                  alt={show.title}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h6 className="font-bold text-cadence-text">{show.title}</h6>
                  <p className="flex items-center gap-1 text-xs text-cadence-muted">
                    <MapPin size={12} /> {show.city}
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="hidden items-center gap-1 text-sm text-cadence-muted md:flex">
                <Calendar size={14} /> {show.venue}
              </div>

              {/* Time */}
              <div className="hidden items-center gap-1 text-sm text-cadence-muted md:flex">
                <Clock size={14} /> {show.time}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="ml-auto rounded-full bg-gradient-to-r from-cadence-pink to-cadence-purple px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Buy Tickets
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
