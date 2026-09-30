import { useEffect, useState } from 'react'

/** Rotates through `items` on a fixed interval; returns the current index.
 *  Stops for single-item lists and cleans up its timer on unmount. */
export function useRotator(items: readonly string[], intervalMs: number): number {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) {
      return
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [items.length, intervalMs])

  return index
}
