import { useEffect, useState } from 'react'

export interface ScrollState {
  readonly y: number
  /** 0–100, the fraction of the scrollable document already passed. */
  readonly progress: number
}

export function readScroll(): ScrollState {
  const y = window.scrollY
  const span = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
  return { y, progress: Math.min(100, Math.round((y / span) * 10000) / 100) }
}

/** One passive scroll listener for the progress bar, the header and the disc. */
export function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>(readScroll)

  useEffect(() => {
    const onScroll = () => setState(readScroll())
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return state
}
