import { MapPin, Clock } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const shows = [
  {
    day: '25',
    month: 'Aug',
    title: 'Sunburn Arena with Wiz Khalifa',
    genre: 'EDM, Pop, Rap | English | Age 15+ | 5hrs',
    location: 'Multiple Venues',
    time: '02:00PM',
  },
  {
    day: '05',
    month: 'Sep',
    title: 'Raymond MTV India Music',
    genre: 'Rock, Sufi | English, Hindi | Age 12+',
    location: 'The Fairmont Hotel: Jaipur',
    time: '02:00PM',
  },
  {
    day: '16',
    month: 'Sep',
    title: 'Sunburn Goa 2024',
    genre: 'EDM | English | Age 15+ | 8hrs',
    location: 'Vagator: Goa',
    time: '02:00PM',
  },
  {
    day: '20',
    month: 'Sep',
    title: 'The Piano Man presents Shockblast',
    genre: 'Jazz, Pop | English | 3hrs',
    location: 'The Piano Man Jazz Club: Delhi',
    time: '08:00PM',
  },
  {
    day: '14',
    month: 'Oct',
    title: 'Zangoora - Kingdom of Dreams',
    genre: 'EDM, Pop, Rap | English | Age 15+ | 5hrs',
    location: 'Kingdom Of Dreams: Gurgaon',
    time: '09:00PM',
  },
] as const

export function Shows() {
  return (
    <section id="shows" aria-label="Upcoming shows" className="bg-void py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-script text-xl text-accent-400">Upcoming Shows</span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              WHEN WE ALL FALL ASLEEP
            </h2>
          </div>
          <ButtonLink
            href="#"
            className="inline-block rounded-full border border-primary-400 bg-transparent px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-400"
          >
            View all
          </ButtonLink>
        </div>

        <div className="mt-12 space-y-4">
          {shows.map((show) => (
            <div
              key={show.title}
              className="flex flex-col items-start gap-4 rounded-lg bg-surface/50 p-5 transition-colors hover:bg-surface sm:flex-row sm:items-center"
            >
              {/* Date */}
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary-400 text-center">
                <span className="text-xl font-bold leading-none text-white">{show.day}</span>
                <span className="text-xs font-semibold uppercase text-white/80">{show.month}</span>
              </div>

              {/* Title + genre */}
              <div className="flex-1">
                <h4 className="text-base font-bold text-white">{show.title}</h4>
                <p className="mt-1 text-xs text-muted">{show.genre}</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                <span>{show.location}</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-1.5 text-sm text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                <span>{show.time}</span>
              </div>

              {/* CTA */}
              <ButtonLink
                href="#"
                className="inline-block rounded-full border border-primary-400 bg-transparent px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-primary-400"
              >
                Buy tickets
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
