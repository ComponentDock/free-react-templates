import { ArrowRight } from 'lucide-react'
import { latestResult } from '../data'

export function Scoreboard() {
  return (
    <section aria-label="Latest game result" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-bold uppercase text-dark md:text-5xl">
          Latest Game <span className="text-brand">Result</span>
        </h2>
        <div className="slash-accent-brand mx-auto mt-12 max-w-4xl rounded px-6 py-12">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://picsum.photos/seed/slugger-home/80/80"
                alt=""
                className="h-20 w-20 rounded-full border-4 border-white/30 object-cover"
              />
              <h3 className="font-display text-xl font-bold uppercase text-white">
                {latestResult.home.name}
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-display text-6xl font-extrabold text-white">
                {latestResult.home.score}
              </span>
              <span className="font-display text-2xl font-semibold uppercase text-white/70">
                vs
              </span>
              <span className="font-display text-6xl font-extrabold text-white">
                {latestResult.away.score}
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://picsum.photos/seed/slugger-falcons/80/80"
                alt=""
                className="h-20 w-20 rounded-full border-4 border-white/30 object-cover"
              />
              <h3 className="font-display text-xl font-bold uppercase text-white">
                {latestResult.away.name}
              </h3>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="#news"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white underline-offset-4 hover:underline"
            >
              Game Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
