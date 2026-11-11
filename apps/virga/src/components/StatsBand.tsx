import {
  NETWORK_ID,
  STATS,
  UPTIME_BARS,
  UPTIME_DIP_INDEX,
  UPTIME_SUMMARY,
  type Stat,
} from '../data/site'

/**
 * Twelve monthly checks as twelve `flex: 1` bars, capped at 10 px each: the
 * strip never reaches the cell's right edge, and at 320 the same bars shrink
 * rather than overflow. The tenth is the page's only yellow — one dip in the
 * year. The strip is decorative, so its meaning rides in an sr-only sentence
 * beside the number.
 */
function UptimeStrip() {
  return (
    <>
      <span className="vg-bars" aria-hidden="true">
        {Array.from({ length: UPTIME_BARS }, (_, index) => (
          <i key={index} className={index === UPTIME_DIP_INDEX ? 'is-dip' : undefined} />
        ))}
      </span>
      <span className="vg-sr">{UPTIME_SUMMARY}</span>
    </>
  )
}

function StatCell({ stat }: { readonly stat: Stat }) {
  return (
    <div className="vg-stat">
      <dt>{stat.label}</dt>
      <dd>
        <span className="vg-num">{stat.value}</span>
        {stat.strip ? <UptimeStrip /> : <span className="vg-hint">{stat.hint}</span>}
      </dd>
    </div>
  )
}

/**
 * Four `dt`/`dd` cells in one bordered band — `dl > div > dt + dd` is the valid
 * grouping and it also gives the grid its cells. Cell 2 trades its hint line
 * for the uptime strip, the only thing that makes one cell taller than its
 * neighbours.
 */
export function StatsBand() {
  return (
    <dl className="vg-stats" id={NETWORK_ID}>
      {STATS.map((stat) => (
        <StatCell key={stat.label} stat={stat} />
      ))}
    </dl>
  )
}
