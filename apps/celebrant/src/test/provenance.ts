/**
 * The strings this page must never carry: the design's house, its own template name, the couple it
 * prints, the date it prints, the title it gives the couples' band, its two misspelled card
 * headings, its filler copy and the names of the assets it loads. Each is assembled a piece at a
 * time, so this guard never spells out any of the strings it forbids.
 *
 * The design's *layout* words are deliberately absent: the navigation labels, the band headings and
 * the card and question titles are the words the recreation is required to reproduce.
 */
export const SOURCE_PHRASES = [
  ['color', 'lib'].join(''),
  ['wedding', '-officiant'].join(''),
  ['Wedding ', 'Officiant'].join(''),
  ['Jo', 'shua'].join(''),
  ['Se', 'lene'].join(''),
  ['July 20th, ', '2019'].join(''),
  ['Marriages I ', 'Officiate'].join(''),
  ['Ini', 'vitation'].join(''),
  ['Red Wine ', 'Tast'].join(''),
  ['Lorem ', 'ipsum'].join(''),
  ['hero_', '1.jpg'].join(''),
  ['loader', '.gif'].join(''),
]

function whole(text: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(`\\b${escaped}\\b`, 'i').test(text)
}

/**
 * True when the given text carries one of the design's own strings whole. The word boundaries
 * matter: the design's truncated card heading is a prefix of the recreation's full one, and only
 * the boundary keeps the guard from flagging a corrected heading.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => whole(text, phrase))
}
