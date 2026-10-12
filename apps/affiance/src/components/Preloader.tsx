import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { prefersReducedMotion } from '../lib/motion'
import {
  preloaderArcClass,
  preloaderClass,
  preloaderFadeClass,
  preloaderHiddenClass,
  preloaderRingClass,
  preloaderShownClass,
  preloaderTrackClass,
} from '../lib/styles'

/** The source drops its cover's `show` class one millisecond after its script runs. */
export const COVER_LEAVE_MS = 1

/**
 * The design's first-paint cover: a full-screen white sheet holding a 48px ring — a #eeeeee track
 * under a #F96D00 arc, spinning while it sweeps. It is `aria-hidden`, holds nothing focusable, and
 * leaves on the design's own `opacity .4s ease-out` transition (instantly when the visitor asks for
 * reduced motion).
 */
export function Preloader() {
  const [shown, setShown] = useState(true)
  const instant = prefersReducedMotion()

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShown(false)
    }, COVER_LEAVE_MS)

    return () => {
      window.clearTimeout(id)
    }
  }, [])

  return (
    <div
      data-testid="preloader"
      aria-hidden="true"
      className={cn(
        preloaderClass,
        shown ? preloaderShownClass : preloaderHiddenClass,
        instant ? 'transition-none' : preloaderFadeClass,
      )}
    >
      <svg className={preloaderRingClass} viewBox="0 0 50 50" role="presentation" focusable="false">
        <circle className={preloaderTrackClass} cx="25" cy="25" r="22" fill="none" strokeWidth="4" />
        <circle
          className={preloaderArcClass}
          cx="25"
          cy="25"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
