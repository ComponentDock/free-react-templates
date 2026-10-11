export const SCROLL_THRESHOLD = 100
export const ACTIVE_OFFSET = 120

/** Whether the navbar should switch to its solid scrolled state. */
export function isScrolled(scrollY: number): boolean {
  return scrollY > SCROLL_THRESHOLD
}

/**
 * Resolve which section id is active for a given scroll position.
 * `tops[i]` is the page-space top of section `ids[i]`; sections with an
 * unknown top (`undefined` / `Infinity`) never become active.
 */
export function resolveActiveId(
  ids: readonly string[],
  tops: readonly number[],
  scrollY: number,
): string {
  let active = ids[0] ?? ''
  for (let i = 0; i < ids.length; i += 1) {
    const top = tops[i]
    if (top !== undefined && top <= scrollY + ACTIVE_OFFSET) {
      active = ids[i]!
    }
  }
  return active
}
