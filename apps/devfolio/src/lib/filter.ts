import type { DemoRecord } from '../content'

/** The unfiltered option in both demo toolbars. */
export const ALL = 'All'

/**
 * An unknown or empty value falls back to `All`, the way the reference's shared
 * demo controller behaves when a stale query string names a status it no longer
 * knows.
 */
export function normalizeCategory(value: string, known: readonly string[]): string {
  return value === '' || value === ALL || !known.includes(value) ? ALL : value
}

/** Case-insensitive match across id, title and notes, combined with the category. */
export function filterRecords(
  records: readonly DemoRecord[],
  query: string,
  category: string,
): DemoRecord[] {
  const term = query.trim().toLowerCase()
  const known = [...new Set(records.map((record) => record.category))]
  const selected = normalizeCategory(category, known)

  return records.filter((record) => {
    const matchesCategory = selected === ALL || record.category === selected
    const haystack = `${record.id} ${record.title} ${record.notes.join(' ')}`.toLowerCase()
    return matchesCategory && (term === '' || haystack.includes(term))
  })
}
