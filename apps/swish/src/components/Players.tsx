import { players } from '../data'
import { SectionTitle } from './SectionTitle'

export function Players() {
  return (
    <section id="players" className="bg-light py-16 md:py-24" aria-label="Player info">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle overline="Our Team" title="Meet the Players" />
        <div className="grid gap-8 md:grid-cols-3">
          {players.map((player, index) => (
            <article key={`${player.name}-${index}`} className="bg-white p-6 text-center shadow-sm">
              <img
                src={`https://picsum.photos/seed/swish-player-${index + 1}/300/300`}
                alt={`Portrait of ${player.name}`}
                className="mx-auto h-36 w-36 rounded-full object-cover"
                width={144}
                height={144}
              />
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{player.name}</h3>
              <p className="mt-1 text-xs font-bold tracking-widest text-brand uppercase">
                {player.club}
              </p>
              <p className="mt-3 leading-relaxed text-body">{player.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
