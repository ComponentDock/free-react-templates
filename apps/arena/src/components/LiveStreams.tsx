import { Play } from 'lucide-react'
import { btnBrand } from '../brand'
import { streams } from '../data'

export function LiveStreams() {
  return (
    <section id="streams" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl text-white uppercase">
              <span className="text-ember-500">live</span> stareams
            </h2>
          </div>
          <a href="#pricing" className={btnBrand}>
            Install Now
          </a>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {streams.map((stream) => (
            <article
              key={stream.id}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-navy-800"
            >
              <img
                src={stream.image}
                alt={`${stream.title} stream cover`}
                className="h-56 w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-l from-ember-500/70 via-magenta-500/50 to-ember-500/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <a
                href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                aria-label={`Watch stream ${stream.title}`}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7" aria-hidden="true" />
                </span>
              </a>
              <div className="relative p-6">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{stream.score}</span>
                  <span>{stream.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl text-white">{stream.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
