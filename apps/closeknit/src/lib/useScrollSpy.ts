import { useEffect, useState } from 'react'

/**
 * Emphasises the nav item for the band in view. With no IntersectionObserver
 * (jsdom included) nothing is emphasised, which is the reference's behaviour
 * above the first band.
 */
export function useScrollSpy(ids: readonly string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        let visible: IntersectionObserverEntry | undefined
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (visible === undefined || entry.intersectionRatio > visible.intersectionRatio)
          ) {
            visible = entry
          }
        }
        if (visible !== undefined) {
          setActive(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
