/**
 * The strings this page must never carry: the design's house, its own template name, the couple it
 * prints, the date it prints, the line it prints over them, the placeholder it gives the page, the
 * typo it ships in that date, the address and telephone number it prints, its filler paragraph and
 * the names of the assets it loads. Each is assembled a piece at a time, so this guard never spells
 * out any of the strings it forbids.
 *
 * The design's *layout* words are deliberately absent: the navigation labels, the band headings and
 * the four timeline titles are the words the recreation is required to reproduce.
 */
export const SOURCE_PHRASES = [
  ['color', 'lib'].join(''),
  ['wedding', '2'].join(''),
  ['Wedding', '2'].join(''),
  ['Jen', 'ny'].join(''),
  ['Mar', 'k'].join(''),
  ['Save The ', 'Date'].join(''),
  ['23 ', 'SET', 'PEMBER'].join(''),
  ['784-412-', '0646'].join(''),
  ['14 Baria ', 'street'].join(''),
  ['Lorem ', 'ipsum'].join(''),
  ['slider-1-', '1600x900.jpg'].join(''),
  ['counter-1-', '1600x600.jpg'].join(''),
  ['Background_', 'Circle.png'].join(''),
  ['logo-', 'white.png'].join(''),
  ['logo-', 'black.png'].join(''),
  ['maps.googleapis', '.com'].join(''),
  ['AIza', 'Sy'].join(''),
  ['UA-', '23581568'].join(''),
]

function whole(text: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(`\\b${escaped}\\b`, 'i').test(text)
}

/**
 * True when the given text carries one of the design's own strings whole. The word boundaries
 * matter: the recreation corrects the design's misspelled date and its misspelled navigation, and
 * only the boundary keeps the guard from flagging a corrected word.
 */
export function carriesSourceText(text: string): boolean {
  return SOURCE_PHRASES.some((phrase) => whole(text, phrase))
}
