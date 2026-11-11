import { useState } from 'react'

/** The one breakpoint the table changes shape at. */
export const NARROW_QUERY = '(max-width: 720px)'

/**
 * Read once, at mount — the reference asks `matchMedia` a single time when the
 * table initialises and never listens for changes. A page that loaded wide
 * therefore keeps every group open even if the window is dragged narrow.
 */
export function useNarrow(): boolean {
  const [narrow] = useState(
    () => typeof window.matchMedia === 'function' && window.matchMedia(NARROW_QUERY).matches,
  )
  return narrow
}
