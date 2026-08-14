import { cn } from '@free-react-templates/ui'
import { useCarousel } from '../hooks/useCarousel'
import { squadIntro, squadPlayers } from '../data'

const visible = 3
const intervalMs = 4000

export function TeamSquad() {
  const { start, maxIndex, goTo } = useCarousel(squadPlayers.length, visible, intervalMs)
  const players = squadPlayers.slice(start, start + visible)

  return (
    <section aria-label="Team squad" className="relative overflow-hidden bg-dark py-24">
      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,#171b21_50%,#207dff_50%)] opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-bold uppercase text-white md:text-5xl">
          Our Team <span className="text-brand">Squad</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-white/70">
          {squadIntro}
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <article key={player.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/slugger-${player.name.toLowerCase().replace(/\s+/g, '-')}/224/224`}
                alt={player.name}
                className="mx-auto h-56 w-56 rounded-full border-4 border-white/10 object-cover"
              />
              <h3 className="mt-5 font-display text-xl font-extrabold uppercase text-white">
                {player.name}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-brand">{player.position}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === start ? 'true' : undefined}
              onClick={() => goTo(index)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                index === start ? 'w-6 bg-brand' : 'w-2.5 bg-white/30 hover:bg-white/50',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
