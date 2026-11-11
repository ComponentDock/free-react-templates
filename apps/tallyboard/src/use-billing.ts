import { useEffect, useRef, useState } from 'react'
import { ANNUAL_PRICES, MONTHLY_PRICES, STATUS_ANNUAL, STATUS_MONTHLY } from './content'
import { COUNT_UP_MS, figureAt, readFigure } from './lib/ease'

export interface Billing {
  readonly annual: boolean
  readonly figures: readonly number[]
  readonly status: string
  readonly toggle: () => void
}

/** Cancels every in-flight count-up and empties the register. */
function cancelFrames(frames: Set<number>) {
  for (const id of frames) cancelAnimationFrame(id)
  frames.clear()
}

/** Read at click time, so a mid-session preference change is honoured. */
function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * The page's only state: which billing period is active, the four figures on
 * screen and the live-region sentence.
 *
 * Every count-up is a per-figure `requestAnimationFrame` that starts from the
 * value currently displayed (never from the stale monthly price), is cancelled
 * and replaced on a re-click, and settles on the target at `COUNT_UP_MS`. When
 * the browser cannot animate — reduced motion, or no `requestAnimationFrame` —
 * the figures are set in one commit instead of looping.
 */
export function useBilling(): Billing {
  const [annual, setAnnual] = useState(false)
  const [figures, setFigures] = useState<readonly number[]>(MONTHLY_PRICES)
  const [status, setStatus] = useState('')
  const frames = useRef<Set<number>>(new Set())

  useEffect(
    () => () => {
      cancelFrames(frames.current)
    },
    [],
  )

  function toggle() {
    const next = !annual
    const targets = next ? ANNUAL_PRICES : MONTHLY_PRICES

    cancelFrames(frames.current)

    setAnnual(next)
    setStatus(next ? STATUS_ANNUAL : STATUS_MONTHLY)

    const starts = figures
    if (prefersReducedMotion() || typeof requestAnimationFrame !== 'function') {
      setFigures(targets)
      return
    }

    const shown = [...starts]
    starts.forEach((start, index) => {
      const target = readFigure(targets, index, start)
      if (start === target) return

      let startedAt: number | null = null
      const tick = (time: number) => {
        startedAt ??= time
        const progress = Math.min(1, (time - startedAt) / COUNT_UP_MS)
        shown[index] = figureAt(start, target, progress)
        setFigures([...shown])
        if (progress < 1) frames.current.add(requestAnimationFrame(tick))
      }
      frames.current.add(requestAnimationFrame(tick))
    })
  }

  return { annual, figures, status, toggle }
}
