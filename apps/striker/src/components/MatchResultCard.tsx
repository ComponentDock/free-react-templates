import { matchResult } from '../data'
import { Crest } from './Crest'

type TeamSide = (typeof matchResult)['home'] | (typeof matchResult)['away']

function TeamHalf({ team }: { team: TeamSide }) {
  return (
    <div className="flex-1 px-6 py-12 text-center">
      <Crest name={team.name} tone={team.tone} className="mx-auto" />
      <h3 className="mt-4 text-xl font-bold text-white">
        {team.name} <span className="text-sm font-normal text-white/50">{team.result}</span>
      </h3>
      <ul className="mt-4 space-y-1 text-sm text-white/80">
        {team.scorers.map((scorer) => (
          <li key={scorer.name}>
            {scorer.name} ({scorer.number})
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Match-result VS card (reference `.team-vs`): overlaps the hero bottom by
 *  -90px; dark home half on the left, brand-red away half with a diagonal
 *  split edge on the right, big white score centered between them. */
export function MatchResultCard() {
  return (
    <section id="matches" className="relative z-10 mx-auto -mt-[90px] max-w-5xl px-4">
      <div className="overflow-hidden rounded-[10px] bg-card shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
        <div className="relative flex flex-col md:flex-row">
          <div className="flex-1 bg-card">
            <TeamHalf team={matchResult.home} />
          </div>
          <div className="flex-1 bg-brand md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            <TeamHalf team={matchResult.away} />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white md:text-5xl">{matchResult.score}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
