import { BULLETS, EYEBROW, HEADING_ID, HEADLINE, LEDE } from '../content'

/**
 * The copy column: eyebrow, headline, lede and the six dash-marked items. It
 * carries no card and no border of its own — the only rule on this side of the
 * page is the list's hairline top border.
 */
export function PlanSummary() {
  return (
    <div className="pr-info">
      <p className="pr-eyebrow">{EYEBROW}</p>
      <h1 className="pr-title" id={HEADING_ID}>
        {HEADLINE}
      </h1>
      <p className="pr-lede">{LEDE}</p>

      <ul className="pr-list">
        {BULLETS.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
