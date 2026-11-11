import type { CSSProperties } from 'react'
import {
  EDITION,
  FACES,
  FACTS,
  FACTS_ID,
  HEADLINE,
  STANDFIRST,
  TITLE_ID,
  type Fact,
} from '../data/site'

/**
 * One fact's `dd`. Three shapes, one per row: a two-part `<time>` range, an
 * initials cluster plus a count, and plain text. The cluster is `aria-hidden`
 * because "24 talks" already carries the meaning.
 */
function FactValue({ fact }: { fact: Fact }) {
  if (fact.dates) {
    const [start, end] = fact.dates
    return (
      <>
        <time dateTime={start.iso}>{start.text}</time>–<time dateTime={end.iso}>{end.text}</time>
      </>
    )
  }

  if (fact.faces) {
    return (
      <>
        <span className="sp-faces" aria-hidden="true">
          {FACES.map((face) => (
            <span key={face.initials} style={{ '--c': face.fill } as CSSProperties}>
              {face.initials}
            </span>
          ))}
        </span>
        {fact.value}
      </>
    )
  }

  return <>{fact.value}</>
}

/**
 * The copy column: edition pill → two-line uppercase headline whose second line
 * mixes solid type with a stroked year → standfirst → hairline facts row.
 *
 * The headline is deliberately two blocks rather than one string: line 2 is a
 * wrapping flex row, so the year falls to a third line only when the content box
 * drops under ~274 px.
 */
export function HeroCopy() {
  return (
    <div>
      <p className="sp-edition">{EDITION}</p>

      <h1 className="sp-title" id={TITLE_ID}>
        <span>{HEADLINE.line1}</span>
        <span className="sp-t2">
          {HEADLINE.line2} <span className="sp-year">{HEADLINE.year}</span>
        </span>
      </h1>

      <p className="sp-sub">{STANDFIRST}</p>

      <dl className="sp-facts" id={FACTS_ID}>
        {FACTS.map((fact) => (
          <div className="sp-fact" id={fact.id} key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>
              <FactValue fact={fact} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
