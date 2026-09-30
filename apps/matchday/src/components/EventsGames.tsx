import { events, games } from '../data'
import { Crest } from './Crest'
import { SectionTitle } from './SectionTitle'

/** Upcoming events + latest games: navy two-column band with #242b56 rows
 *  (event rows: photo/title/date/link; game rows: crest | league·score·date
 *  | crest) and a decorative player photo behind the bottom-left. */
export function EventsGames() {
  return (
    <section id="events" className="relative overflow-hidden bg-navy py-[92px]">
      <img
        src="https://picsum.photos/seed/matchday-player-bg/600/700"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 hidden w-[380px] opacity-80 lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Upcoming events */}
        <div>
          <SectionTitle
            title="Upcoming events"
            subtitle="What's next this month"
            align="left"
            light
          />
          <ul className="mt-8 space-y-[3px]">
            {events.map((event) => (
              <li key={event.title} className="flex h-[110px] items-center gap-4 bg-row px-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-[78px] w-[78px] shrink-0 object-cover"
                />
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-medium text-white">{event.title}</h3>
                  <p className="mt-1 text-xs text-[#777b95]">{event.date}</p>
                </div>
                <a
                  href="#events"
                  className="ml-auto shrink-0 text-sm font-medium text-brand hover:text-white"
                >
                  See More
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest games */}
        <div>
          <SectionTitle title="Latest games" subtitle="Results" align="left" light />
          <ul className="mt-8 space-y-[3px]">
            {games.map((game) => (
              <li
                key={`${game.home}-${game.away}`}
                className="flex h-[110px] items-center bg-row px-4"
              >
                <div className="flex w-[34%] items-center gap-3">
                  <Crest className="h-[55px] w-[65px] shrink-0" />
                  <a
                    href="#team"
                    className="truncate text-base font-medium text-white transition-colors hover:text-brand"
                  >
                    {game.home}
                  </a>
                </div>
                <div className="flex w-[32%] flex-col items-center">
                  <span className="text-xs font-medium text-[#777b95]">{game.league}</span>
                  <span className="text-2xl text-white sm:text-3xl">{game.score}</span>
                  <span className="text-[11px] font-medium text-[#777b95]">{game.date}</span>
                </div>
                <div className="flex w-[34%] items-center justify-end gap-3">
                  <a
                    href="#team"
                    className="truncate text-base font-medium text-white transition-colors hover:text-brand"
                  >
                    {game.away}
                  </a>
                  <Crest className="h-[55px] w-[65px] shrink-0" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
