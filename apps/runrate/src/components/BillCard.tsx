import { useEffect, useRef } from 'react'
import {
  ANNOUNCE_DELAY,
  BILL_ID,
  BILL_TITLE,
  CALLS_ID,
  COMPONENT_DOCK,
  CTA_LABEL,
  FINE_PRINT,
  STORAGE_ID,
  SUPPORT_ID,
  TOTAL_ID,
} from '../content'
import { announcement, formatUsd, type Estimate } from '../pricing'
import { BillBar } from './BillBar'
import { BillLines } from './BillLines'

interface BillCardProps {
  readonly estimate: Estimate
}

/**
 * The one light surface: title, total, the proportional bar, the four lines, the
 * live region, the call to action and the fine print.
 *
 * The live region is written through a ref after a 700ms lull rather than
 * rendered from state — the visible total moves on every drag step, and a
 * screen reader should hear the settled figure once, not forty of them. The
 * cleanup clears the timer, so a drag that never stops never speaks.
 */
export function BillCard({ estimate }: BillCardProps) {
  const liveRef = useRef<HTMLParagraphElement>(null)
  const { total, cost } = estimate

  useEffect(() => {
    const timer = window.setTimeout(() => {
      liveRef.current!.textContent = announcement(total)
    }, ANNOUNCE_DELAY)
    return () => window.clearTimeout(timer)
  }, [total])

  return (
    <aside className="rr-bill" aria-labelledby={BILL_ID}>
      <h2 className="rr-bill-title" id={BILL_ID}>
        {BILL_TITLE}
      </h2>

      <p className="rr-total">
        <output
          className="rr-out"
          id={TOTAL_ID}
          htmlFor={`${CALLS_ID} ${STORAGE_ID} ${SUPPORT_ID}`}
        >
          {formatUsd(total)}
        </output>
      </p>

      <BillBar cost={cost} />
      <BillLines cost={cost} />

      <p className="rr-vh" role="status" aria-live="polite" aria-atomic="true" ref={liveRef} />

      <a className="rr-cta" href={COMPONENT_DOCK} target="_blank" rel="noreferrer noopener">
        {CTA_LABEL}
      </a>

      <p className="rr-fine">{FINE_PRINT}</p>
    </aside>
  )
}
