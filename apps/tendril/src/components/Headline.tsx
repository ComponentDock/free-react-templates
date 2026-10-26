import { HEADLINE, HEADLINE_ID } from '../data/site'

/**
 * Two nodes, never one sentence: the bare text line and a block-level span in
 * the accent colour. Rendering it as a single string lets the headline wrap to
 * three lines on the way down and pulls every box under it out of position.
 */
export function Headline() {
  return (
    <h1 className="td-title" id={HEADLINE_ID}>
      {HEADLINE.lead} <span>{HEADLINE.accent}</span>
    </h1>
  )
}
