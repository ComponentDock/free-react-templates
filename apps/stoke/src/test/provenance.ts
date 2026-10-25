/**
 * The strings this page must never carry: the source design's slug, its catalogue
 * name, its own brand line and the placeholder mailbox it prints. They are
 * assembled a piece at a time so that this guard never spells any of them out — a
 * guard that contained the very strings it forbids would break the rule it exists
 * to protect.
 *
 * The design's *layout* words (the six nav labels, the band headings, the three
 * window promises, the town list) are deliberately not here: those are the words
 * the recreation is required to reproduce.
 */
export const SOURCE_PHRASES = [
  ['cold', 'snap'].join(''),
  ['color', 'lib'].join(''),
  ['Cold', 'Snap'].join(''),
  ['dispatch@', 'cold', 'snaphvac', '.example'].join(''),
]

function whole(text: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(`\\b${escaped}\\b`, 'i').test(text)
}

/**
 * True when the given text carries one of the source design's own strings whole.
 * The word boundaries matter: a plain containment check would also flag a
 * well-behaved file that merely resembles one.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => whole(text, phrase))
}
