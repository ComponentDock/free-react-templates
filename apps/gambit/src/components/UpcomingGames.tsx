import { UPCOMING_GAMES } from '../data'

/* Upcoming Games recreated from the source's upcoming_games_area: a ghost
   72px cyan title behind the solid heading, then four image cards with a
   centered rgba(44,37,93,0.8) overlay band carrying the title link. */

export function UpcomingGames() {
  return (
    <section id="games" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative mb-20 text-center">
          <h2
            aria-hidden="true"
            className="font-display text-7xl font-bold leading-[60px] text-brand opacity-10"
          >
            Upcoming Games
          </h2>
          <h2 className="font-display -mt-10 text-4xl font-bold text-ink dark:text-white">
            Upcoming Games
          </h2>
        </div>
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {UPCOMING_GAMES.map((game) => (
            <div key={game.title} className="relative inline-block">
              <img
                src={game.image}
                alt=""
                className="w-full rounded-xl object-cover"
                loading="lazy"
              />
              <a
                href="#games"
                className="absolute inset-x-0 bottom-0 flex h-1/2 items-center justify-center rounded-b-xl bg-[rgba(44,37,93,0.8)] px-4 transition-all duration-300 hover:h-full hover:rounded-xl"
              >
                <h3 className="font-display text-lg font-semibold text-white">{game.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
