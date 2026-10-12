/**
 * The strings this page must never carry: the design's own brand and slug, its couple, the date lines
 * it prints, its venue and address, its phone number, the one word it spells wrong and the analytics
 * id its head loads. They are assembled a piece at a time so that this guard never spells any of them
 * out — a guard that contained the very strings it forbids would break the rule it exists to protect.
 *
 * The design's *layout* words (the navigation labels, the band headings, the invitation question, the
 * field kinds) are deliberately not here: those are the words the recreation is required to
 * reproduce.
 */
export const SOURCE_PHRASES = [
  ['color', 'lib'].join(''),
  ['We', 'd'].join(''),
  ['Denn', 'is'].join(''),
  ['Jud', 'ith'].join(''),
  ['janu', 'ary 23'].join(''),
  ['April ', '20, ', '2016'].join(''),
  ['5:', '30 ', 'PM'].join(''),
  ['the ', 'Mayflow', 'er'].join(''),
  ['1127 ', 'Connecti', 'cut'].join(''),
  ['resa', 'rve'].join(''),
  ['+', ' (123)', ' 456'].join(''),
  ['U', 'A-', '23581568'].join(''),
]

function whole(text: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(`\\b${escaped}\\b`, 'i').test(text)
}

/**
 * True when the given text carries one of the design's own strings whole. The word boundaries matter:
 * a plain containment check would also flag a well-behaved file that merely resembles one (the page
 * prints the word for a marriage celebration, never the design's four-letter wordmark).
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => whole(text, phrase))
}
