/**
 * The source's own slug, its placeholder wordmark and its copy, assembled a piece at a time so
 * that this guard never spells any of it out — the repo-wide rule is that the app carries no
 * trace of where the design came from, and a guard that contained the very strings it forbids
 * would break it.
 */
export const SOURCE_PHRASES = [
  ['Website ', 'Menu ', 'V15'].join(''),
  ['Website ', 'menu #', '05'].join(''),
  ['Website ', 'menu ', '05'].join(''),
  ['website', '-', 'menu', '-', '15'].join(''),
  ['color', 'lib'].join(''),
]

/**
 * The source's own row labels, its wordmark and the five placeholder strings its list ships.
 * Kept apart from the phrases above because these are ordinary English words: they are only
 * forbidden as the *whole* label the design ships, which is why the rendered page is checked
 * against them rather than the files (where a word like an icon's own name is a legitimate
 * identifier).
 */
const EDGE_WORDS = [
  ['Ho', 'me'].join(''),
  ['Access', 'ories'].join(''),
  ['Sh', 'op'].join(''),
  ['Prod', 'ucts'].join(''),
  ['Cont', 'act'].join(''),
  ['Lo', 'go'].join(''),
  ['Me', 'nu'].join(''),
  ['Act', 'ion'].join(''),
]

/**
 * True when the given text carries one of the source's own strings as a whole phrase. The
 * boundaries matter: the source's wordmark is a substring of ordinary English words, so a
 * plain containment check would flag a well-behaved file.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => new RegExp(`\\b${phrase}\\b`, 'i').test(text))
}

/**
 * True when the given text carries one of the design's own labels whole — the check the
 * rendered page has to pass, since these words are unremarkable on their own.
 */
export function carriesSourceLabel(text: string): boolean {
  return EDGE_WORDS.some((word) => new RegExp(`\\b${word}\\b`, 'i').test(text))
}
