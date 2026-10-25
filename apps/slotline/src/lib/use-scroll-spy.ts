import { useEffect, useState } from 'react'

/**
 * Marks the band under the header as it passes. Only ids that exist can ever
 * win, so a label pointing at an absent band simply never lights up.
 */
export function useScrollSpy(ids: readonly string[], offset = 120): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const read = () => {
      let current: string | null = null
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element !== null && element.getBoundingClientRect().top - offset <= 0) {
          current = id
        }
      }
      setActive(current)
    }
    read()
    window.addEventListener('scroll', read, { passive: true })
    window.addEventListener('resize', read)
    return () => {
      window.removeEventListener('scroll', read)
      window.removeEventListener('resize', read)
    }
  }, [ids, offset])

  return active
}
