import { useState } from 'react'

/** Cyclical carousel state over `total` items. `next`/`prev` wrap around. */
export function useCarousel(total: number) {
  const [start, setStart] = useState(0)
  const next = () => setStart((current) => (current + 1) % total)
  const prev = () => setStart((current) => (current - 1 + total) % total)
  return { start, next, prev }
}

/** Returns up to `size` items starting at `start`, wrapping around the list,
 *  paired with their original indexes (stable React keys). */
export function windowed<T>(
  items: readonly T[],
  start: number,
  size: number,
): { item: T; index: number }[] {
  return Array.from({ length: Math.min(size, items.length) }, (_, offset) => {
    const index = (start + offset) % items.length
    return { item: items[index]!, index }
  })
}
