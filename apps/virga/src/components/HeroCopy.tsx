import { ChevronRight } from 'lucide-react'
import { ANNOUNCE, HEADLINE, SUB, TITLE_ID } from '../data/site'

/**
 * The pill, the headline and the paragraph — three centred blocks of decreasing
 * weight. The headline is one `<h1>` in two runs and the second run is a block
 * `span`, so the gradient paints across the whole line; the space between the
 * runs is a real text node so the two lines read as one sentence.
 */
export function HeroCopy() {
  return (
    <>
      <a className="vg-announce" href={ANNOUNCE.href}>
        <span className="vg-announce-tag">{ANNOUNCE.tag}</span>
        {ANNOUNCE.text}
        <ChevronRight size={14} aria-hidden="true" />
      </a>

      <h1 className="vg-title" id={TITLE_ID}>
        {HEADLINE.lead} <span className="vg-title-tail">{HEADLINE.tail}</span>
      </h1>

      <p className="vg-sub">{SUB}</p>
    </>
  )
}
