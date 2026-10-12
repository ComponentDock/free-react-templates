import { useEffect, useState } from 'react'

/** How long the band's numbers take to roll from zero to their value. */
const ROLL_MS = 1400

/**
 * The band's count-up: zero until the band is in view, then a frame-stepped roll to the value the
 * design prints. When the visitor has asked for reduced motion — or the band never enters the
 * viewport — the value is handed back as it is, with no frames spent.
 */
export function useCountUp(target: number, active: boolean, reduced: boolean): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!active || reduced) {
      return
    }

    let frame = 0
    let start: number | undefined

    const step = (now: number) => {
      start ??= now
      const ratio = Math.min((now - start) / ROLL_MS, 1)
      setProgress(ratio)

      if (ratio < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [active, reduced])

  return reduced ? target : Math.round(target * progress)
}
