import { useState } from 'react'

/** Cyclical slider state over `total` items. `next`/`prev` wrap around. */
export function useCarousel(total: number) {
  const [start, setStart] = useState(0)
  const next = () => setStart((current) => (current + 1) % total)
  const prev = () => setStart((current) => (current - 1 + total) % total)
  return { start, next, prev }
}
