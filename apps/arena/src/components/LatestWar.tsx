import { btnWhite } from '../brand'
import { latestWar } from '../data'

export function LatestWar() {
  return (
    <section id="war" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-magenta-500">
          Featured fight
        </p>
        <h2 className="font-display text-4xl text-white uppercase">Latest War Fight</h2>

        <div className="relative mt-12 overflow-hidden rounded-lg">
          <img
            src={latestWar.image}
            alt="Latest war fight background"
            className="h-[420px] w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-ember-500/80 via-magenta-500/50 to-navy-950/90"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-14">
            <h3 className="font-display text-3xl text-white uppercase sm:text-4xl">
              {latestWar.title}
            </h3>
            <p className="mt-3 text-sm uppercase tracking-widest text-white/70">{latestWar.date}</p>
            <div className="mt-6 flex items-center gap-6">
              {latestWar.score.split(' ').map((part) => (
                <span key={part} className="font-display text-6xl text-white">
                  {part}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#streams"
                className="text-sm font-medium uppercase tracking-widest text-white underline decoration-ember-500 underline-offset-4 hover:text-ember-400"
              >
                view fight
              </a>
              <a href="#streams" className={btnWhite}>
                Watch Tutorial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
