import { useState } from 'react'

/** Cyclical carousel state over `total` items. `next`/`prev` wrap around;
 *  `goTo` jumps to an explicit index. */
export function useCarousel(total: number) {
  const [start, setStart] = useState(0)
  const next = () => setStart((current) => (current + 1) % total)
  const prev = () => setStart((current) => (current - 1 + total) % total)
  const goTo = (index: number) => setStart(index)
  return { start, next, prev, goTo }
}
