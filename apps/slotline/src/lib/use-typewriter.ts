import { useEffect, useState } from 'react'
import { useReducedMotion } from './use-reduced-motion'

const CYCLE = 3000

/**
 * The hero's second line. A single interval advances the phrase; under
 * reduced motion the first phrase is simply the permanent line.
 */
export function useTypewriter(phrases: readonly string[], intervalMs = CYCLE): string {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced || phrases.length < 2) {
      return
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length)
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [intervalMs, phrases.length, reduced])

  const phrase = phrases[reduced ? 0 : index]
  return phrase === undefined ? '' : phrase
}
