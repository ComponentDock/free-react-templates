import { useState } from 'react'

/**
 * The visitor's motion preference, read once at mount. Every animated band on
 * the page resolves to its final visible state when this is true: no reveal is
 * left at zero opacity, the typewriter stops, the counters print their final
 * strings, and the carousel does not advance by itself.
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useReducedMotion(): boolean {
  return useState(prefersReducedMotion)[0]
}
