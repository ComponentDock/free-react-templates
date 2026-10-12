/**
 * The strings this page must never carry: the design's own brand and slug, the page title it wears,
 * the couple it names, the date it prints, the running order it sets out, the venue and the studio
 * details in its foot.
 *
 * They are assembled a piece at a time so that this guard never spells any of them out — a guard
 * that contained the very strings it forbids would break the rule it exists to protect. The design's
 * *layout* headings (the two invitation lines, the band titles, the foot's column names) are
 * deliberately not here: those are the words the recreation is required to reproduce.
 */
export const SOURCE_PHRASES = [
  ['inv', 'its'].join(''),
  ['color', 'lib'].join(''),
  ['Wed', 'ding ', 'HT', 'ML-5 ', 'Tem', 'plate'].join(''),
  ['Jul', 'ia ', '& ', 'Jak', 'son'].join(''),
  ['Fe', 'b ', '1', '4 ', '20', '20'].join(''),
  ['Rehea', 'rsal ', 'Din', 'ner'].join(''),
  ['The ', 'Cere', 'mony'].join(''),
  ['After', 'party'].join(''),
  ['Jul', 'y ', '20', ', ', '20', '20'].join(''),
  ['12:00', 'PM-2:00', 'PM'].join(''),
  ['Sie', 'rra ', 'Re', 'sort'].join(''),
  ['Pac', 'ific ', 'Gr', 'ove'].join(''),
  ['elated-', 'themes'].join(''),
  ['35 ', 'W ', '46', 'nd ', 'Stre', 'et ', 'New ', 'York'].join(''),
  ['hero_', 'circle'].join(''),
  ['nice-', 'select'].join(''),
  ['slick', 'nav'].join(''),
  ['magnific-', 'popup'].join(''),
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
