import { useEffect, useState } from 'react'
import { useReducedMotion } from './use-reduced-motion'

const DURATION = 2000

/**
 * A two-second ease-out count. Three ways out, in priority order:
 * no observer or no animation frame means the final figure is rendered
 * straight away (so the number is never wrong, only unanimated); reduced
 * motion does the same; otherwise the figure counts up once the band is in
 * view and stays at zero until then.
 */
export function useCounter(target: number, active: boolean): number {
  const reduced = useReducedMotion()
  const canAnimate =
    typeof IntersectionObserver !== 'undefined' &&
    typeof requestAnimationFrame === 'function' &&
    !reduced
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active || !canAnimate) {
      return
    }
    let frame = 0
    let start = 0
    const step = (now: number) => {
      if (start === 0) {
        start = now
      }
      const t = Math.min(1, (now - start) / DURATION)
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))))
      if (t < 1) {
        frame = requestAnimationFrame(step)
      }
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, canAnimate, target])

  if (!canAnimate) {
    return target
  }
  return active ? value : 0
}
