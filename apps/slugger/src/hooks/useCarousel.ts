import { useCallback, useEffect, useState } from 'react'

/**
 * Auto-advancing carousel state: shows `visible` items starting at `start`,
 * advances one step every `intervalMs`, wraps at the end, and exposes
 * `goTo` for dot navigation.
 */
export function useCarousel(total: number, visible: number, intervalMs: number) {
  const maxIndex = Math.max(0, total - visible)
  const [start, setStart] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setStart((current) => (current >= maxIndex ? 0 : current + 1))
    }, intervalMs)
    return () => clearInterval(id)
  }, [maxIndex, intervalMs])

  const goTo = useCallback(
    (index: number) => {
      setStart(Math.min(Math.max(0, index), maxIndex))
    },
    [maxIndex],
  )

  return { start, maxIndex, goTo }
}
