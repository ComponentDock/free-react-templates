import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './motion'

export interface Typewriter {
  text: string
  fading: boolean
}

/**
 * Cycles the h1's second line every three seconds, fading out for 300 ms on
 * either side of the swap. Under reduced motion it never starts — the first
 * phrase simply stays put.
 */
export function useTypewriter(
  phrases: readonly string[],
  holdMs = 3000,
  fadeMs = 300,
): Typewriter {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (reduced || phrases.length < 2) {
      return
    }
    const swaps: number[] = []
    const cycle = window.setInterval(() => {
      setFading(true)
      swaps.push(
        window.setTimeout(() => {
          setIndex((current) => (current + 1) % phrases.length)
          setFading(false)
        }, fadeMs),
      )
    }, holdMs)

    return () => {
      window.clearInterval(cycle)
      swaps.forEach((id) => window.clearTimeout(id))
    }
  }, [fadeMs, holdMs, phrases.length, reduced])

  return { text: phrases[index] ?? phrases[0] ?? '', fading: !reduced && fading }
}
