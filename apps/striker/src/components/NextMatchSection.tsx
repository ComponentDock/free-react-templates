import type { ReactNode } from 'react'
import { footballLeague, nextMatch } from '../data'
import { Countdown } from './Countdown'
import { Crest } from './Crest'

type WidgetMatch = typeof nextMatch | typeof footballLeague

function MatchInfo({ data }: { data: WidgetMatch }) {
  return (
    <>
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Crest name={data.home.name} tone="brand" />
          <span className="text-sm font-bold text-white">{data.home.name}</span>
        </div>
        <span className="text-2xl font-black text-white/30">vs</span>
        <div className="flex flex-col items-center gap-2">
          <Crest name={data.away.name} tone="dark" />
          <span className="text-sm font-bold text-white">{data.away.name}</span>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-white/70">
        <p className="font-bold text-white">{data.competition}</p>
        <p>{data.league}</p>
        <p>{data.date}</p>
        <p>{data.venue}</p>
      </div>
    </>
  )
}

function StandingsTable({ rows }: { rows: (typeof footballLeague)['standings'] }) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="text-white/50">
          <th className="pb-2 font-normal">Team</th>
          <th className="pb-2 font-normal">P</th>
          <th className="pb-2 font-normal">W</th>
          <th className="pb-2 font-normal">D</th>
          <th className="pb-2 font-normal">L</th>
          <th className="pb-2 font-normal">PTS</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.team} className="border-t border-white/10 text-white/80">
            <td className="py-2">{row.team}</td>
            <td className="py-2">{row.p}</td>
            <td className="py-2">{row.w}</td>
            <td className="py-2">{row.d}</td>
            <td className="py-2">{row.l}</td>
            <td className="py-2 font-bold text-white">{row.pts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function MatchWidget({
  title,
  data,
  footer,
}: {
  title: string
  data: WidgetMatch
  footer: ReactNode
}) {
  return (
    <div className="border border-white/10">
      <div className="bg-brand px-5 py-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="px-6 py-8">
        <MatchInfo data={data} />
        <div className="mt-8">{footer}</div>
      </div>
    </div>
  )
}

/** League widgets band (reference `.widget-next-match`): two bordered
 *  widgets with brand-red title bars — "Next Match" (VS block + info +
 *  ticking countdown) and "Football League" (VS block + standings table). */
export function NextMatchSection() {
  return (
    <section id="players" className="bg-footer py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
        <MatchWidget
          title="Next Match"
          data={nextMatch}
          footer={<Countdown target={nextMatch.target} className="justify-center" />}
        />
        <MatchWidget
          title="Football League"
          data={footballLeague}
          footer={<StandingsTable rows={footballLeague.standings} />}
        />
      </div>
    </section>
  )
}
