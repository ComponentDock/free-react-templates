/** One row of the album's track list. Durations are seconds. */
export interface Track {
  readonly n: number
  readonly name: string
  readonly length: string
  readonly duration: number
}

export interface Podcast {
  readonly eyebrow: string
  readonly title: string
  readonly byline: string
  /** Two lines the cover sets over its own art. */
  readonly coverLines: readonly [string, string]
  readonly duration: number
  readonly elapsed: number
}

export interface Album {
  readonly eyebrow: string
  readonly title: string
  readonly byline: string
  readonly tracks: readonly Track[]
}

/** The repository's standing attribution line. */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/**
 * The episode opens 18:42 in, so the bar is not empty on load — that offset is
 * the design's own state, not a placeholder.
 */
export const PODCAST: Podcast = {
  eyebrow: 'Episode 84 · 42 min',
  title: 'Why cities are planting forests on rooftops',
  byline: 'The Long Commute · with Priya Nair',
  coverLines: ['The Long', 'Commute'],
  duration: 2538,
  elapsed: 1122,
}

/** Five tracks, 1,142 s in total — the byline's "19 min". */
export const ALBUM: Album = {
  eyebrow: 'Album · 2026',
  title: 'Night Swim',
  byline: 'Juniper Coast · 5 songs, 19 min',
  tracks: [
    { n: 1, name: 'Low Tide Lights', length: '3:34', duration: 214 },
    { n: 2, name: 'Salt in the Radio', length: '4:11', duration: 251 },
    { n: 3, name: 'Harbour Cats', length: '3:18', duration: 198 },
    { n: 4, name: 'Swimming After Midnight', length: '4:36', duration: 276 },
    { n: 5, name: 'Postcards (Reprise)', length: '3:23', duration: 203 },
  ],
}
