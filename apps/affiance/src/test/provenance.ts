/**
 * The strings this page must never carry: the design's own brand and slug, the couple it names, the
 * venue and dates it prints, its party's names, its milestone titles, its guest card and the typo it
 * heads its contact column with. They are assembled a piece at a time so that this guard never
 * spells any of them out — a guard that contained the very strings it forbids would break the rule
 * it exists to protect.
 *
 * The design's *layout* words (the navigation labels, the band headings, the invitation question,
 * the countdown's script line) are deliberately not here: those are the words the recreation is
 * required to reproduce.
 */
export const SOURCE_PHRASES = [
  ['two', 'hearts'].join(''),
  ['color', 'lib'].join(''),
  ['Leo', 'nardo'].join(''),
  ['Mari', 'anna'].join(''),
  ['Agus', 'tus'].join(''),
  ['Mark ', 'Tomy'].join(''),
  ['John ', 'Henceworth'].join(''),
  ['Rey ', 'Cooper'].join(''),
  ['Robert ', 'Chan'].join(''),
  ['Rose ', 'Jones'].join(''),
  ['Mary ', 'Dell'].join(''),
  ['Alicia ', 'Brean'].join(''),
  ['Angel ', 'Worth'].join(''),
  ['Roger ', 'Scott'].join(''),
  ['Marketing ', 'Manager'].join(''),
  ['First ', 'We ', 'Meet'].join(''),
  ['First ', 'Date'].join(''),
  ['In A ', 'Relationship'].join(''),
  ["We're ", 'Engaged'].join(''),
  ['June ', '10, ', '2017'].join(''),
  ['June ', '14, ', '2017'].join(''),
  ['May. ', '10, ', '2019'].join(''),
  ['Saturday, ', '28, ', '2019'].join(''),
  ['02:00 ', 'pm-10:00 ', 'pm'].join(''),
  ['203 ', 'Fake ', 'St'].join(''),
  ['Mountain ', 'View'].join(''),
  ['+0 (123) ', '456 ', '78 ', '910'].join(''),
  ['+2 392 ', '3929 ', '210'].join(''),
  ['info@', 'yourdomain', '.com'].join(''),
  ['Have a ', 'Questions?'].join(''),
  ['Are ', 'Getting ', 'Married'].join(''),
  ['Far far ', 'away'].join(''),
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
