import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCarousel, windowed } from '../carousel'
import { schedule } from '../data'

const WINDOW = 3

/** Game schedule (reference `.ftco-game-schedule`): a subheading plus a
 *  carousel of six match cards (venue, team, date) with prev/next controls;
 *  on mobile the cards stack. */
export function GameSchedule() {
  const { start, next, prev } = useCarousel(schedule.games.length)
  const visible = windowed(schedule.games, start, WINDOW)

  return (
    <section aria-label="Game schedule" className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-sm tracking-wider uppercase">{schedule.subheading}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {visible.map(({ item, index }) => (
            <article
              key={index}
              className="flex items-center gap-4 rounded-[5px] border border-ink/10 p-5 transition-shadow hover:shadow-[0_24px_36px_-11px_rgba(0,0,0,0.09)]"
            >
              <img
                src={item.logo}
                alt=""
                aria-hidden="true"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <span className="text-sm text-muted">{item.venue}</span>
                <h4 className="text-base font-bold text-ink">{item.team}</h4>
                <span className="text-sm text-muted">{item.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous games"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-slate hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next games"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-slate hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="text-sm text-muted">
            Showing {visible.length} of {schedule.games.length} games
          </span>
        </div>
      </div>
    </section>
  )
}
