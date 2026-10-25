import { useEffect, useRef, useState } from 'react'

export interface InView<T extends HTMLElement> {
  ref: React.RefObject<T | null>
  inView: boolean
}

/**
 * A one-shot viewport gate. Environments without `IntersectionObserver`
 * (jsdom, very old browsers) report `true` immediately so nothing is ever
 * hidden behind an animation that cannot run.
 */
export function useInView<T extends HTMLElement>(threshold = 0.5): InView<T> {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (node === null || typeof IntersectionObserver === 'undefined') {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSeen(true)
            observer.disconnect()
          }
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView: typeof IntersectionObserver === 'undefined' ? true : seen }
}
