/**
 * The strings this page must never carry: the design's own brand and wordmark, the placeholder
 * metadata it ships, the assets it loads, the two script destinations its forms post to and the
 * class its live clock is written into. Each is assembled a piece at a time, so that this guard
 * never spells out any of them — a guard containing the very strings it forbids would break the
 * rule it exists to protect.
 *
 * The design's *layout* words are deliberately absent: the navigation labels, the band headings
 * ("Our services", "Our blog"), the field kinds and the contact lines are the words the
 * recreation is required to reproduce.
 */
export const SOURCE_PHRASES = [
  ['color', 'lib'].join(''),
  ['Wedding', 'dre', 'ams'].join(''),
  ['Wedding', ' Dre', 'ams'].join(''),
  ['Drea', 'ms'].join(''),
  ['3', '.0.2'].join(''),
  ['your-', 'domain.com'].join(''),
  ['og-', 'image'].join(''),
  ['gt', 'ag'].join(''),
  ['send-', 'email.php'].join(''),
  ['subscribe', '.php'].join(''),
  ['style', '.min.css'].join(''),
  ['main', '.min.js'].join(''),
  ['hero', '.avif'].join(''),
  ['counter', '-bg'].join(''),
  ['js-', 'year'].join(''),
  ['slick', 'nav'].join(''),
]

function whole(text: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(`\\b${escaped}\\b`, 'i').test(text)
}

/**
 * True when the given text carries one of the original's own strings whole. The word boundaries
 * matter: a plain containment check would also flag a well-behaved file that merely resembles one.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => whole(text, phrase))
}
