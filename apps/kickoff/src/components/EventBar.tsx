import { eventBar, countdownLabels } from '../data'
import { useCountdown } from '../useCountdown'

const pad = (value: number) => String(value).padStart(2, '0')

/** Event bar (reference `.game-wrap-1`): dark #232931 bar floating ~60px
 *  over the hero with overlapping team logos + names, the league/stage, a
 *  live countdown, and a gold "Buy Tickets" button. */
export function EventBar() {
  const timeLeft = useCountdown(eventBar.targetDate)

  return (
    <section
      aria-label="Upcoming game"
      className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 lg:px-8"
    >
      <div className="rounded-[5px] bg-slate p-4 shadow-[0_75px_94px_-66px_rgba(0,0,0,0.66)]">
        <div className="grid items-center gap-8 p-2 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex items-center gap-4 lg:col-span-3">
            <div className="flex shrink-0">
              <img
                src={eventBar.homeLogo}
                alt=""
                aria-hidden="true"
                className="h-[60px] w-[60px] rounded-full border-2 border-white object-cover"
              />
              <img
                src={eventBar.awayLogo}
                alt=""
                aria-hidden="true"
                className="-ml-5 h-[60px] w-[60px] rounded-full border-2 border-white object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-white">{eventBar.homeTeam}</p>
              <p className="text-lg font-bold text-white">{eventBar.awayTeam}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg text-white/50">{eventBar.league}</h3>
            <p className="mt-1 text-white/80">{eventBar.stage}</p>
          </div>

          <div className="flex items-center gap-5 lg:col-span-4">
            {(['days', 'hours', 'minutes', 'seconds'] as const).map((key, index) => (
              <div key={key} className="text-center">
                <span className="block text-2xl font-bold text-white tabular-nums">
                  {pad(timeLeft[key])}
                </span>
                <span className="mt-1 block text-xs text-white/50">{countdownLabels[index]}</span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <a
              href="#contact"
              className="inline-block rounded-[3px] bg-gold px-6 py-3 text-sm font-bold text-black shadow-[0_24px_36px_-11px_rgba(0,0,0,0.09)] transition-colors hover:bg-black hover:text-white"
            >
              {eventBar.buyLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
