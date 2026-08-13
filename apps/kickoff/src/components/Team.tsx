import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCarousel, windowed } from '../carousel'
import { team } from '../data'

const WINDOW = 4

/** Team squad (reference `.ftco-team.img`): dark background-image section
 *  with the centered white heading and a carousel of player cards (photo,
 *  name, position) with prev/next controls. */
export function Team() {
  const { start, next, prev } = useCarousel(team.players.length)
  const visible = windowed(team.players, start, WINDOW)

  return (
    <section aria-label="Team" className="relative py-24">
      <img
        src={team.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-slate/80" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-4xl font-black text-white">{team.heading}</h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map(({ item, index }) => (
            <figure key={index} className="text-center">
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-56 w-full rounded-[5px] object-cover"
                loading="lazy"
              />
              <figcaption>
                <h3 className="mt-4 text-lg font-bold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-white/70">{item.position}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous players"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-slate"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next players"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-slate"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
