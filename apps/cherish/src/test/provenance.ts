/**
 * The design's own slug, its several names, its headlines and its copy, assembled a piece at a time
 * so that this guard never spells any of it out — the rule is that the app carries no trace of where
 * the design came from, and a guard that contained the very strings it forbids would break it.
 */
export const SOURCE_PHRASES = [
  ['dream', 'wed'].join(''),
  ['color', 'lib'].join(''),
  ['Dream ', 'Template'].join(''),
  ['Iren', 'ne'].join(''),
  ['Jen', 'kins'].join(''),
  ['Bar', 'ia'].join(''),
  ['Save ', 'The ', 'Date'].join(''),
  ['Our ', 'Story ', 'Wedding'].join(''),
  ["Let's ", 'Save Your ', 'Best Moments'].join(''),
  ['Location ', '& ', 'Time'].join(''),
  ['Where ', '& ', 'When'].join(''),
  ['Wedding ', 'Plans'].join(''),
  ['Photo ', 'Album'].join(''),
  ['Guest', 'book'].join(''),
  ['The ', 'Church'].join(''),
  ['Cake ', 'Cutting'].join(''),
  ['Organ', 'izations'].join(''),
  ['Wedding ', 'Events'].join(''),
  ['RSVP ', 'Here'].join(''),
  ['Are You ', 'Attending'].join(''),
  ['Don’t ', 'Miss It'].join(''),
  ['Wedding ', 'Officiant'].join(''),
]

/**
 * The words the design uses as *labels* — the strings a recreation must never reprint. They are
 * ordinary English, so they are checked against the app's own labels and titles rather than against
 * a block's prose: what the rule forbids is reprinting the design's names, not its vocabulary.
 */
const LABEL_WORDS = [
  ['Home'].join(''),
  ['Blog'].join(''),
  ['Pages'].join(''),
  ['Story'].join(''),
  ['Gallery'].join(''),
  ['Rsvp'].join(''),
  ['Photography'].join(''),
  ['Ceremony'].join(''),
  ['Guest', 'book'].join(''),
  ['Blog ', 'Details'].join(''),
  ['Wedding ', 'Plans'].join(''),
  ['Photo ', 'Album'].join(''),
  ['Save ', 'The ', 'Date'].join(''),
  ['Our ', 'Story ', 'Wedding'].join(''),
]

function whole(text: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(`\\b${escaped}\\b`, 'i').test(text)
}

/**
 * True when the given text carries one of the design's own strings as a whole phrase. The
 * boundaries matter: a plain containment check would also flag a well-behaved file that merely
 * looks like one.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => whole(text, phrase))
}

/** True when the given text carries one of the design's own labels whole. */
export function carriesSourceLabel(text: string): boolean {
  return LABEL_WORDS.some((word) => whole(text, word))
}
