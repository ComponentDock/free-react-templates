/**
 * The design's own slug, its heading and its six labels, assembled a piece at a time so that this
 * guard never spells any of it out — the repo-wide rule is that the app carries no trace of where
 * the design came from, and a guard that contained the very strings it forbids would break it.
 */
export const SOURCE_PHRASES = [
  ['Website ', 'Menu ', 'V19'].join(''),
  ['Website ', 'menu ', '#', '09'].join(''),
  ['website', '-', 'menu', '-', '19'].join(''),
  ['color', 'lib'].join(''),
  ['Heading ', 'Two'].join(''),
]

/**
 * The words the design uses as *labels* — the strings a recreation must never reprint. They are
 * ordinary English, so they are checked against the app's own labels and titles rather than against
 * a block's prose: what the rule forbids is reprinting the design's names, not its vocabulary.
 */
const LABEL_WORDS = [
  ['Home'].join(''),
  ['Project'].join(''),
  ['About'].join(''),
  ['Services'].join(''),
  ['Blog'].join(''),
  ['Contact'].join(''),
]

/**
 * True when the given text carries one of the design's own strings as a whole phrase. The
 * boundaries matter: the slug and the heading are printable anywhere, but its words are substrings
 * of ordinary English ones, so a plain containment check would flag a well-behaved file.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => new RegExp(`\\b${phrase}\\b`, 'i').test(text))
}

/**
 * True when the given text carries one of the design's own labels whole — the check the app's own
 * labels and titles have to pass, since these words are unremarkable on their own.
 */
export function carriesSourceLabel(text: string): boolean {
  return LABEL_WORDS.some((word) => new RegExp(`\\b${word}\\b`, 'i').test(text))
}
