import { useEffect, useState } from 'react'

/**
 * 1 slide below 640 px, 2 from 640, 3 from 1024 — the reference's carousel
 * re-derives this on resize; the hook keeps that behaviour without a fixed
 * breakpoint read in render.
 */
export function readPerView(): number {
  if (typeof window.matchMedia !== 'function') {
    return 3
  }
  if (window.matchMedia('(min-width: 1024px)').matches) {
    return 3
  }
  if (window.matchMedia('(min-width: 640px)').matches) {
    return 2
  }
  return 1
}

export function usePerView(): number {
  const [perView, setPerView] = useState(readPerView)

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return undefined
    }
    const queries = [
      window.matchMedia('(min-width: 640px)'),
      window.matchMedia('(min-width: 1024px)'),
    ]
    const onChange = () => setPerView(readPerView())
    for (const query of queries) {
      query.addEventListener('change', onChange)
    }
    return () => {
      for (const query of queries) {
        query.removeEventListener('change', onChange)
      }
    }
  }, [])

  return perView
}
