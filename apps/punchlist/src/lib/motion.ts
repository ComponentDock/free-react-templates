import { useState } from 'react'

/** Read once: the reduced-motion preference does not change mid-visit. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useReducedMotion(): boolean {
  const [reduced] = useState(prefersReducedMotion)
  return reduced
}
