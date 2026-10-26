import { describe, it, expect } from 'vitest'
import { GUIDES } from './guides'

describe('GUIDES', () => {
  it('holds four field guides with unique ids', () => {
    expect(GUIDES).toHaveLength(4)
    expect(new Set(GUIDES.map((guide) => guide.id)).size).toBe(4)
  })

  it('keeps the reference copy for every card', () => {
    expect(GUIDES.map((guide) => guide.tag)).toEqual(['Hiking', 'City break', 'Trekking', 'Winter'])
    expect(GUIDES.map((guide) => guide.place)).toEqual([
      'Dolomites, Italy',
      'Tokyo, Japan',
      'Cusco region, Peru',
      'Troms\u00f8, Norway',
    ])
    expect(GUIDES.map((guide) => guide.title)).toEqual([
      'Lakes and larches',
      'Neon after dark',
      'Above the clouds',
      'Chasing the lights',
    ])
  })

  it('spells Tromsø with a slashed o (U+00F8), not a plain o', () => {
    const tromso = GUIDES[3]!.place
    expect(tromso).toContain('\u00f8')
    expect(tromso).toBe('Troms\u00f8, Norway')
  })

  it('gives every card exactly two fact chips', () => {
    expect(GUIDES.map((guide) => guide.facts)).toEqual([
      ['5 routes', '6 min read'],
      ['18 places', '9 min read'],
      ['4 days', '11 min read'],
      ['3 nights', '7 min read'],
    ])
    for (const guide of GUIDES) {
      expect(guide.facts).toHaveLength(2)
      expect(guide.facts.every((fact) => fact.length > 0)).toBe(true)
    }
  })

  it('points every photograph at a seeded 560x720 placeholder', () => {
    expect(GUIDES.map((guide) => guide.image)).toEqual([
      'https://picsum.photos/seed/roadbook-1/560/720',
      'https://picsum.photos/seed/roadbook-2/560/720',
      'https://picsum.photos/seed/roadbook-3/560/720',
      'https://picsum.photos/seed/roadbook-4/560/720',
    ])
  })

  it('describes every scene, and no two descriptions repeat', () => {
    expect(GUIDES.every((guide) => guide.alt.trim().length > 0)).toBe(true)
    expect(new Set(GUIDES.map((guide) => guide.alt)).size).toBe(4)
  })

  it('keeps every blurb to a single sentence-length line block', () => {
    for (const guide of GUIDES) {
      expect(guide.blurb.endsWith('.')).toBe(true)
      expect(guide.blurb.length).toBeGreaterThan(60)
    }
  })
})
