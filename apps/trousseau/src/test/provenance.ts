/**
 * The strings this page must never carry: the design's own brand and slug, the couple it names, the
 * venue and dates it prints, its party's names and its card titles. They are assembled a piece at a
 * time so that this guard never spells any of them out — a guard that contained the very strings it
 * forbids would break the rule it exists to protect.
 *
 * The design's *layout* headings (the invitation line, the countdown line, the band titles) are
 * deliberately not here: those are the words the recreation is required to reproduce.
 */
export const SOURCE_PHRASES = [
  ['hon', 'ey'].join(''),
  ['color', 'lib'].join(''),
  ['James ', '& ', 'Julie'].join(''),
  ['Travor ', 'james'].join(''),
  ['Julia ', 'Robberts'].join(''),
  ['Santa ', 'Monica'].join(''),
  ['Rocky ', 'Beach'].join(''),
  ['13th of ', 'may, ', '2018'].join(''),
  ['20 ', 'May ', '2018'].join(''),
  ['Abbie ', 'Norman'].join(''),
  ['Bess ', 'Wolfe'].join(''),
  ['Mathilda ', 'Moss'].join(''),
  ['Blake ', 'Hunter'].join(''),
  ['Norman ', 'Ramsey'].join(''),
  ['Tommy ', 'Phillips'].join(''),
  ['Love at ', 'first ', 'sight'].join(''),
  ['First ', 'Kissing'].join(''),
  ['Living ', 'Together'].join(''),
  ['Cherished ', 'Proposal'].join(''),
  ['Wedding ', 'Multi'].join(''),
]

function whole(text: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(`\\b${escaped}\\b`, 'i').test(text)
}

/**
 * True when the given text carries one of the design's own strings whole. The word boundaries
 * matter: a plain containment check would also flag a well-behaved file that merely resembles one.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => whole(text, phrase))
}
