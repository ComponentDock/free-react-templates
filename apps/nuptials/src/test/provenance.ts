/**
 * The strings this page must never carry: the original design's house, its couple, the date it
 * prints, its phone number, its mailbox, the names of the assets it loads and the carousel class its
 * markup is built from. Each is assembled a piece at a time, so that this guard never spells out any
 * of them — a guard containing the very strings it forbids would break the rule it exists to protect.
 *
 * The design's *layout* words are deliberately not here: the navigation labels, the band headings
 * ("Wedding Information", "Reservation Form") and the field kinds are the words the recreation is
 * required to reproduce.
 */
export const SOURCE_PHRASES = [
  ['color', 'lib'].join(''),
  ['Ja', 'mes'].join(''),
  ['Ju', 'lie'].join(''),
  ['20 March ', '2018'].join(''),
  ['+880 ', '1234 ', '654 953'].join(''),
  ['support@', 'color', 'lib.com'].join(''),
  ['header-', 'bg.jpg'].join(''),
  ['reservation.', 'jpg'].join(''),
  ['available-', 'calendar'].join(''),
  ['99, ', 'West ', 'Panthapath'].join(''),
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
