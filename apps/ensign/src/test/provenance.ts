/**
 * The source's own slug and copy, assembled a piece at a time so that this guard never
 * spells any of it out — the repo-wide rule is that the app carries no trace of where the
 * design came from, and a guard that contained the very strings it forbids would break it.
 */
export const SOURCE_PHRASES = [
  ['Res', 'to'].join(''),
  ['Website ', 'Menu ', '11'].join(''),
  ['Website ', 'menu #', '01'].join(''),
  ['Book a ', 'table'].join(''),
  ['website', '-', 'menu', '-', '11'].join(''),
  ['color', 'lib'].join(''),
]

/**
 * True when the given text carries one of the source's own strings as a whole phrase.
 * The boundaries matter: the source's wordmark is a substring of ordinary English words,
 * so a plain containment check would flag a well-behaved file.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => new RegExp(`\\b${phrase}\\b`, 'i').test(text))
}
