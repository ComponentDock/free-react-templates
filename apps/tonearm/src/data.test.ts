import { describe, expect, it } from 'vitest'
import { ALBUM, COMPONENT_DOCK_URL, PODCAST } from './data'

describe('data', () => {
  it('opens the episode 18:42 into a 42:18 episode', () => {
    expect(PODCAST.duration).toBe(2538)
    expect(PODCAST.elapsed).toBe(1122)
    expect(PODCAST.coverLines).toEqual(['The Long', 'Commute'])
    expect(PODCAST.eyebrow).toBe('Episode 84 · 42 min')
    expect(PODCAST.byline).toBe('The Long Commute · with Priya Nair')
  })

  it('lists five tracks that total the byline minutes', () => {
    expect(ALBUM.tracks).toHaveLength(5)
    const total = ALBUM.tracks.reduce((sum, track) => sum + track.duration, 0)
    expect(total).toBe(1142)
    expect(ALBUM.tracks.map((track) => track.name)).toEqual([
      'Low Tide Lights',
      'Salt in the Radio',
      'Harbour Cats',
      'Swimming After Midnight',
      'Postcards (Reprise)',
    ])
    expect(ALBUM.tracks.map((track) => track.length)).toEqual([
      '3:34',
      '4:11',
      '3:18',
      '4:36',
      '3:23',
    ])
  })

  it('carries the repository attribution URL', () => {
    expect(COMPONENT_DOCK_URL).toBe('https://www.componentdock.com/')
  })
})
