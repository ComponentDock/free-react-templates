import { EYEBROW, HEADLINE, PROOF, PROOF_ID, SUB, TITLE_ID } from '../data/site'

/**
 * The copy column: an orange rule and a teal eyebrow, a three-line display
 * headline whose last phrase is the italic accent, a three-line paragraph and
 * the proof row. The row wraps inside the column at 1440 — the third item is
 * 26 px past the column's right edge — so its `margin-top: 26` is what keeps
 * the gap to the paragraph readable.
 */
export function HeroCopy() {
  return (
    <div className="lk-copy">
      <p className="lk-eyebrow">{EYEBROW}</p>
      <h1 className="lk-title" id={TITLE_ID}>
        {HEADLINE.roman} <em>{HEADLINE.accent}</em>
      </h1>
      <p className="lk-sub">{SUB}</p>
      <ul className="lk-proof" id={PROOF_ID}>
        {PROOF.map((item) => (
          <li key={item.phrase}>
            <strong>{item.figure}</strong> {item.phrase}
          </li>
        ))}
      </ul>
    </div>
  )
}
