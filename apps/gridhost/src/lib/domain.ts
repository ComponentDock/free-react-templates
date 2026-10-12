/**
 * The six TLD tints the price strip paints per column index: the first four
 * columns take their own tint and every column from the fifth on shares the
 * last one.
 */
export function tldTintClass(index: number): string {
  switch (index) {
    case 0:
      return 'text-tld-1'
    case 1:
      return 'text-tld-2'
    case 2:
      return 'text-tld-3'
    case 3:
      return 'text-tld-4'
    default:
      return 'text-tld-5'
  }
}

/**
 * Validation for the domain-search bar: a label is required and the combined
 * host has to look like a domain (a name, a dot and a two-or-more letter TLD).
 */
export function validateDomain(name: string, tld: string): string | null {
  const trimmed = name.trim()

  if (trimmed.length === 0) {
    return 'Enter a domain name to search — for example yourbrand.'
  }

  if (/\s/.test(trimmed)) {
    return 'Domain names cannot contain spaces.'
  }

  if (trimmed.includes('.')) {
    return `Search for the name only — the ${tld} ending is already selected.`
  }

  return null
}
