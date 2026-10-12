import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { prefersReducedMotion } from '../lib/motion'
import {
  preloaderClass,
  preloaderDiscClass,
  preloaderDiscWrapClass,
  preloaderFadeClass,
  preloaderHiddenClass,
  preloaderMarkClass,
  preloaderShownClass,
} from '../lib/styles'
import { BrandMark } from './BrandMark'

/**
 * The design fades its cover 450 ms after `window.load`. The bundle mounts long after that event has
 * fired, so the same 450 ms is counted from mount — the visitor sees the identical first paint.
 */
export const COVER_LEAVE_MS = 450

/**
 * The design's first-paint cover: a full-screen `#f7f7f7` sheet holding a 100px white disc whose only
 * coloured border edge is the scarlet top arc, spinning a full turn every two seconds around the
 * wordmark's own sprig. It is `aria-hidden`, holds nothing focusable, and leaves on its opacity
 * transition — instantly, without the rotation, when the visitor asks for reduced motion.
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
      <div className={preloaderDiscWrapClass}>
        <span className={preloaderDiscClass} />
        <BrandMark className={preloaderMarkClass} />
      </div>
    </div>
  )
}
