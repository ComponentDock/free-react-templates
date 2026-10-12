import { SECTIONS } from './site'
import type { Section } from './site'

/**
 * The search field's own model: the one string a block is matched on, the rule that decides
 * whether a block stays on the page, and the line the page draws while it is narrowing. The
 * field's own state lives in `App`, so the bar and the blocks below it always read the same
 * query.
 */

/** The query as the matcher reads it: trimmed, and case-insensitive. */
export function normalise(query: string): string {
  return query.trim().toLowerCase()
}

/**
 * Everything a block offers the field, in one lowercased string: its kicker, its heading, its
 * opening paragraph and every card's title and body. The line the page draws is not part of it —
 * the copy the visitor searches is the copy the design ships.
 */
export function searchableText(section: Section): string {
  return [
    section.eyebrow,
    section.heading,
    section.body,
    ...section.items.flatMap((item) => [item.title, item.body]),
  ]
    .join(' ')
    .toLowerCase()
}

/**
 * True when a block answers the query. An empty query keeps every block, which is what lets the
 * page render its full self the moment the field is cleared.
 */
export function carries(section: Section, query: string): boolean {
  const needle = normalise(query)

  return needle === '' || searchableText(section).includes(needle)
}

/** The blocks the page renders for a query, in the order the page keeps them. */
export function filterSections(query: string): Section[] {
  return SECTIONS.filter((section) => carries(section, query))
}

/** True while the field is narrowing the page, which is when the page says so. */
export function isFiltering(query: string): boolean {
  return normalise(query) !== ''
}

/** The line the page draws while a query is narrowing it. */
export function filterSummary(shown: number, query: string): string {
  return `Showing ${shown} of ${SECTIONS.length} blocks for “${query.trim()}”.`
}
