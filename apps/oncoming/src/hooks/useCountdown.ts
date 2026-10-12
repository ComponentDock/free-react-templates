import { useEffect, useState } from 'react'
import { splitRemaining, type CountdownValues } from '../lib/countdown'

const SECOND = 1000

/**
 * A live countdown to `target`, ticking once a second. The first frame paints
 * immediately; the interval clears itself once the target has passed and on
 * unmount.
 */
export function useCountdown(target: number): CountdownValues {
  const [values, setValues] = useState<CountdownValues>(() => splitRemaining(target - Date.now()))

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = target - Date.now()

      if (remaining <= 0) {
        clearInterval(timer)
      }

      setValues(splitRemaining(remaining))
    }, SECOND)

    return () => clearInterval(timer)
  }, [target])

  return values
}
