import { useEffect, useState } from 'react'

/** The one route the app has beyond the home page (`#/resume`). */
export const RESUME_HASH = '#/resume'

/** Reads the hash route and re-reads it on `hashchange` — no router dependency. */
export function useHashRoute(): string {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}
