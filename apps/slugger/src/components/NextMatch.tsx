import { nextMatchGames } from '../data'

export function NextMatch() {
  return (
    <section aria-label="Next match" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-bold uppercase text-dark md:text-5xl">
          Next <span className="text-brand">Match</span>
        </h2>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/slugger-stadium/640/480"
            alt="Stadium ahead of the next match"
            className="w-full rounded-md object-cover"
          />
          <div className="grid gap-5">
            {nextMatchGames.map((game) => (
              <article
                key={game.date}
                className="flex flex-wrap items-center justify-between gap-3 rounded border border-black/10 bg-white p-5 shadow-[0_42px_29px_-31px_rgba(0,0,0,0.05)]"
              >
                <div>
                  <h3 className="font-display text-base font-bold uppercase text-dark">
                    {game.home}{' '}
                    <span className="font-sans text-sm font-semibold text-muted">vs</span>{' '}
                    {game.away}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-wider text-muted">
                    {game.venue} - {game.date}
                  </p>
                </div>
                <a
                  href="#games"
                  className="font-display text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-dark"
                >
                  Watch Game
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
