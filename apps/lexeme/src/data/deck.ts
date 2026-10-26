/**
 * The deck the band shows. Four cards, one sentence of meaning each; the
 * counter on the back reads `Card N of DECK_SIZE`, so the deck size is a
 * constant rather than a literal repeated four times.
 */
export interface DeckCard {
  id: string
  /** Grammar pill on the front, e.g. `noun · feminine` (U+00B7, not a bullet). */
  pos: string
  /** The word itself, set in Spanish. */
  word: string
  /** Phonetic spelling between slashes, syllables separated by U+00B7. */
  say: string
  meaning: string
  /** Example sentence in Spanish, wrapped in U+201C/U+201D. */
  example: string
  translation: string
  /** Front face fill. */
  face: string
  /** Front face ink — the only run this colours; the back is always dark on white. */
  ink: string
  /**
   * Whether the pronunciation can be drawn at 85 % opacity. White ink on the
   * indigo face is 5.00:1 and drops to 4.07:1 when faded, so that card keeps
   * it at full strength; the three dark-ink faces sit at 5.16 / 6.99 / 4.62.
   */
  quietSay: boolean
}

export const DECK_SIZE = 40

export const DECK: DeckCard[] = [
  {
    id: 'sobremesa',
    pos: 'noun \u00b7 feminine',
    word: 'la sobremesa',
    say: '/so\u00b7bre\u00b7ME\u00b7sa/',
    meaning: 'The time spent talking at the table after a meal is finished.',
    example: '\u201cLa sobremesa dur\u00f3 hasta las seis.\u201d',
    translation: 'The after-lunch chat lasted until six.',
    face: '#ff6b4a',
    ink: '#2b0b03',
    quietSay: true,
  },
  {
    id: 'madrugar',
    pos: 'verb',
    word: 'madrugar',
    say: '/ma\u00b7dru\u00b7GAR/',
    meaning: 'To get up very early, usually before sunrise.',
    example: '\u201cMa\u00f1ana tengo que madrugar.\u201d',
    translation: 'I have to get up early tomorrow.',
    face: '#5b5bf0',
    ink: '#ffffff',
    quietSay: false,
  },
  {
    id: 'estrenar',
    pos: 'verb',
    word: 'estrenar',
    say: '/es\u00b7tre\u00b7NAR/',
    meaning: 'To use or wear something for the very first time.',
    example: '\u201cHoy estreno zapatos.\u201d',
    translation: 'I am wearing new shoes for the first time today.',
    face: '#ffc53d',
    ink: '#2e2000',
    quietSay: true,
  },
  {
    id: 'antojo',
    pos: 'noun \u00b7 masculine',
    word: 'el antojo',
    say: '/an\u00b7TO\u00b7jo/',
    meaning: 'A sudden craving, usually for a particular food.',
    example: '\u201cTengo antojo de churros.\u201d',
    translation: 'I am craving churros.',
    face: '#14b8a6',
    ink: '#022c28',
    quietSay: true,
  },
]
