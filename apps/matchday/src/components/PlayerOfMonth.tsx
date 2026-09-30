import { player } from '../data'
import { SectionTitle } from './SectionTitle'

/** Player of the month: number chip + huge orange name + bio, with two
 *  bottom-anchored photos spanning the left half of the viewport. */
export function PlayerOfMonth() {
  return (
    <section id="team" className="relative overflow-hidden bg-white py-[104px]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-xl">
          <SectionTitle
            title="Player of the month"
            subtitle="What's next this month"
            align="left"
          />
          <div className="mt-8 flex items-center gap-4">
            <span className="flex h-[71px] w-[71px] shrink-0 items-center justify-center bg-navy-alt text-3xl font-medium text-white">
              {player.number}
            </span>
            <h3 className="text-[44px] font-medium leading-[0.75] text-brand lg:text-6xl">
              {player.name}
            </h3>
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed">
            {player.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-3 px-4 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-[calc(50vw+55px)] lg:px-0">
        <img
          src="https://picsum.photos/seed/matchday-player-1/600/700"
          alt="Michael Brooks in action"
          className="mr-3 h-56 w-1/2 object-cover lg:mr-10 lg:h-[420px]"
        />
        <img
          src="https://picsum.photos/seed/matchday-player-2/600/700"
          alt="Michael Brooks portrait"
          className="h-56 w-1/2 object-cover lg:h-[420px]"
        />
      </div>
    </section>
  )
}
