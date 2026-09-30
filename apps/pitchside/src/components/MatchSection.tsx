import { nextMatchRows, recentResultsRows } from '../data'

type MatchRowData = (typeof nextMatchRows)[number] | (typeof recentResultsRows)[number]

/** One fixture row (reference `.mc-table`): flag + team on each side, a
 *  center column with the pairing label, VS mark or score, and the date. */
function MatchRow({ row }: { row: MatchRowData }) {
  return (
    <div className="flex items-center gap-4 bg-[#151618]/90 px-5 py-4">
      <div className="flex flex-1 items-center gap-3">
        <img src={row.homeFlag} alt="" className="h-[30px] w-[50px] shrink-0 object-cover" />
        <span className="text-sm font-medium uppercase tracking-wide text-white">{row.home}</span>
      </div>

      <div className="w-[150px] shrink-0 text-center">
        <p className="text-sm text-white/60">{row.label}</p>
        {'score' in row && row.score ? (
          <p className="text-2xl font-bold text-white">{row.score}</p>
        ) : (
          <p className="text-2xl font-bold text-white">VS</p>
        )}
        <p className="text-xs text-white/60">{row.date}</p>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <span className="text-sm font-medium uppercase tracking-wide text-white">{row.away}</span>
        <img src={row.awayFlag} alt="" className="h-[30px] w-[50px] shrink-0 object-cover" />
      </div>
    </div>
  )
}

/** Match section (reference `.match-section`): dark photo band with two
 *  columns — "Next Match" (VS rows) and "Recent Results" (score rows). */
export function MatchSection() {
  return (
    <section id="schedule" className="relative overflow-hidden py-20">
      <img
        src="https://picsum.photos/seed/pitchside-match/1920/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h3 className="mb-6 text-2xl font-bold text-white">Next Match</h3>
          <div className="space-y-4">
            {nextMatchRows.map((row) => (
              <MatchRow key={row.label} row={row} />
            ))}
          </div>
        </div>

        <div id="results">
          <h3 className="mb-6 text-2xl font-bold text-white">Recent Results</h3>
          <div className="space-y-4">
            {recentResultsRows.map((row) => (
              <MatchRow key={row.label} row={row} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
