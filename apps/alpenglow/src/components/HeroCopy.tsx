import { HEADLINE, KICKER, SUB, TITLE_ID } from '../data/site'

/**
 * Three blocks of decreasing weight in a 720 px column. The kicker stays an
 * inline-level element (a `<p>` with `inline-flex`) on purpose: it sits inside
 * the paragraph's line box, and blockifying it would lift the headline by the
 * two pixels of strut above it.
 */
export function HeroCopy() {
  return (
    <>
      <p className="ap-kicker">{KICKER}</p>
      <h1 className="ap-title" id={TITLE_ID}>
        {HEADLINE}
      </h1>
      <p className="ap-sub">{SUB}</p>
    </>
  )
}
