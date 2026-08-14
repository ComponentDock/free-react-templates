import { cn } from '@free-react-templates/ui'
import { useCarousel } from '../hooks/useCarousel'
import { scheduleGames } from '../data'

const visible = 3
const intervalMs = 4000

export function GameSchedule() {
  const { start, maxIndex, goTo } = useCarousel(scheduleGames.length, visible, intervalMs)
  const games = scheduleGames.slice(start, start + visible)

  return (
    <section id="games" aria-label="Game schedule" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-bold uppercase text-dark md:text-5xl">
          Game <span className="text-brand">Schedule</span>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <article
              key={game.date}
              className="rounded border border-black/10 bg-white p-6 text-center shadow-[0_42px_29px_-31px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center justify-center gap-4">
                <img
                  src={`https://picsum.photos/seed/slugger-home/48/48`}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-xs font-semibold uppercase text-muted">vs</span>
                <img
                  src={`https://picsum.photos/seed/slugger-away-${game.away.toLowerCase().replace(/\s+/g, '-')}/48/48`}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-dark">
                {game.home} <span className="font-sans text-sm font-semibold text-muted">vs</span>{' '}
                {game.away}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted">{game.venue}</p>
              <p className="mt-1 text-sm font-semibold text-dark">{game.date}</p>
              <a
                href="#games"
                className="mt-4 inline-block font-display text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-dark"
              >
                Watch Game
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === start ? 'true' : undefined}
              onClick={() => goTo(index)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                index === start ? 'w-6 bg-brand' : 'w-2.5 bg-black/20 hover:bg-black/40',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
