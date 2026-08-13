import { Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { gameReport } from '../data'

/** Game report (reference `.scoreboard`): subheading + 40px/900 heading, a
 *  divider line, the win/lost scoreboard with team logos, a gold "More
 *  Details" button, and a tall victory photo with a play button. */
export function GameReport() {
  return (
    <section id="games" aria-label="Game report" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm tracking-wider uppercase">{gameReport.subheading}</p>
          <h2 className="mt-2 text-4xl font-black text-ink">{gameReport.heading}</h2>

          <div className="mt-8 border-t border-ink/10 pt-4 text-center text-sm text-ink/70">
            {gameReport.divider}
          </div>

          <div className="mt-8 flex items-center justify-between gap-6">
            {gameReport.teams.map(({ name, score, result }) => (
              <div key={name} className="flex items-center gap-3">
                <img
                  src={result === 'win' ? gameReport.homeLogo : gameReport.awayLogo}
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-16 rounded-full border-2 border-ink/10 object-cover"
                />
                <div className="text-center">
                  <span
                    className={cn(
                      'block text-5xl font-extrabold',
                      result === 'win' ? 'border-b-[5px] border-gold' : 'text-ink/20',
                    )}
                  >
                    {score}
                  </span>
                  <span className="mt-1 block text-base font-bold text-ink">{name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center lg:text-left">
            <a
              href="#contact"
              className="inline-block rounded-[3px] bg-gold px-6 py-3 text-sm font-bold text-black shadow-[0_24px_36px_-11px_rgba(0,0,0,0.09)] transition-colors hover:bg-black hover:text-white"
            >
              {gameReport.cta}
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[5px]">
          <img
            src={gameReport.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative text-center">
            <a
              href="#games"
              aria-label={gameReport.highlightsLabel}
              className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gold"
            >
              <Play className="h-6 w-6" aria-hidden="true" />
            </a>
            <p className="mt-3 text-base text-white">{gameReport.highlightsLabel}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
