import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { prefersReducedMotion } from '../lib/motion'
import { PRELOADER_DELAY_MS } from '../lib/site'
import {
  preloaderCoverClass,
  preloaderFadeClass,
  preloaderLiftedClass,
  preloaderMarkClass,
} from '../lib/styles'

/**
 * The white sheet the design lays over the page before anything is read: a full-screen cover with
 * its loader mark turned above the middle, both lifted 200ms after the document is ready. Under
 * `prefers-reduced-motion` the pair leaves without the fade — the delay itself is kept, because it
 * is the moment the design waits, not an animation.
 */
export function Preloader() {
  const [isLifted, setLifted] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLifted(true)
    }, PRELOADER_DELAY_MS)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  const fades = !prefersReducedMotion()
  const coverClass = cn(
    preloaderCoverClass,
    fades && preloaderFadeClass,
    isLifted && preloaderLiftedClass,
  )
  const markClass = cn(preloaderMarkClass, fades && preloaderFadeClass, isLifted && preloaderLiftedClass)

  return (
    <>
      <div data-testid="preloader-cover" aria-hidden="true" className={coverClass} />
      <div data-testid="preloader-mark" aria-hidden="true" className={markClass}>
        <svg className="h-full w-full animate-spin" viewBox="0 0 50 50" aria-hidden="true" focusable="false">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="90 150"
          />
        </svg>
      </div>
    </>
  )
}
