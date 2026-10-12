/**
 * The design's own slug, its several names and its copy, assembled a piece at a time so that this
 * guard never spells any of it out — the repo-wide rule is that the app carries no trace of where
 * the design came from, and a guard that contained the very strings it forbids would break it.
 */
export const SOURCE_PHRASES = [
  ['Website ', 'Menu ', 'V', '20'].join(''),
  ['Website ', 'menu ', '#', '08'].join(''),
  ['Website ', 'Menu ', '#', '10'].join(''),
  ['website', '-', 'menu', '-', '20'].join(''),
  ['color', 'lib'].join(''),
  ['Company ', 'Logo'].join(''),
  ['Lorem ', 'ipsum', ' dolor ', 'sit ', 'amet'].join(''),
]

/**
 * The words the design uses as *labels* — the strings a recreation must never reprint. They are
 * ordinary English, so they are checked against the app's own labels and titles rather than against
 * a block's prose: what the rule forbids is reprinting the design's names, not its vocabulary.
 */
const LABEL_WORDS = [['Home'].join(''), ['About'].join(''), ['Blog'].join(''), ['Contact'].join('')]

/**
 * True when the given text carries one of the design's own strings as a whole phrase. The
 * boundaries matter: the slug and its names are printable anywhere, but a plain containment check
 * would also flag a well-behaved file that merely looks like one.
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
