import { useEffect, useState } from 'react'
import { MS_SECOND, splitDuration, type CountdownParts } from './countdown'

/**
 * The page's clock. It ticks once a second off a single interval — an interval, not a frame loop, so
 * the countdown still completes in a throttled or backgrounded tab — and reads the wall clock on
 * every tick rather than counting its own ticks, so a suspended tab catches up on the way back.
 */
export function useCountdown(target: number): CountdownParts {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => {
      setNow(Date.now())
    }, MS_SECOND)

    return () => {
      window.clearInterval(id)
    }
  }, [])

  return splitDuration(target, now)
}
