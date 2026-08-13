import { useState } from 'react'

/** Cyclical carousel state over `total` items. `next`/`prev` wrap around;
 *  `goTo` clamps and wraps to the requested index. */
export function useCarousel(total: number) {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((current) => (current + 1) % total)
  const prev = () => setIndex((current) => (current - 1 + total) % total)
  const goTo = (target: number) => setIndex(((target % total) + total) % total)
  return { index, next, prev, goTo }
}
