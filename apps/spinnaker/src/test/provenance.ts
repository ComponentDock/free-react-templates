/**
 * The source's own slug, its placeholder heading and its copy, assembled a piece at a time so that
 * this guard never spells any of it out — the repo-wide rule is that the app carries no trace of
 * where the design came from, and a guard that contained the very strings it forbids would break
 * it.
 */
export const SOURCE_PHRASES = [
  ['Website ', 'Menu ', 'V18'].join(''),
  ['Website ', 'menu #', '08'].join(''),
  ['website', '-', 'menu', '-', '18'].join(''),
  ['color', 'lib'].join(''),
  ['Mega', 'width'].join(''),
  ['Amazing ', 'Architec', 'ture'].join(''),
]

/**
 * The words the source's own wordmark, rows, menu and cards use as *labels* — the strings a
 * recreation must never reprint. They are ordinary English, so they are checked against the
 * chrome's own labels and titles rather than against a block's prose, where several of them ('a
 * page', 'at work') are perfectly good copy: what the rule forbids is reprinting the design's
 * names, not using its vocabulary.
 */
const LABEL_WORDS = [
  ['Mega', 'width'].join(''),
  ['Amazing ', 'Architec', 'ture'].join(''),
  ['Architec', 't'].join(''),
  ['Page ', '1'].join(''),
  ['Page ', '2'].join(''),
  ['Page ', '3'].join(''),
  ['Page ', '4'].join(''),
]

/**
 * True when the given text carries one of the source's own strings as a whole phrase. The
 * boundaries matter: the source's own slug and heading are printable anywhere, but its words are
 * substrings of ordinary English ones, so a plain containment check would flag a well-behaved file.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => new RegExp(`\\b${phrase}\\b`, 'i').test(text))
}

/**
 * True when the given text carries one of the design's own labels whole — the check the chrome's
 * own labels and titles have to pass, since these words are unremarkable on their own.
 */
export function carriesSourceLabel(text: string): boolean {
  return LABEL_WORDS.some((word) => new RegExp(`\\b${word}\\b`, 'i').test(text))
}
