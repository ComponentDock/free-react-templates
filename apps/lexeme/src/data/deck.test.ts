import { describe, it, expect } from 'vitest'
import { DECK, DECK_SIZE } from './deck'

describe('deck data', () => {
  it('holds four cards and a deck size the counters derive from', () => {
    expect(DECK).toHaveLength(4)
    expect(DECK_SIZE).toBe(40)
  })

  it('keeps the four faces in the designed order with their own ink', () => {
    expect(DECK.map((card) => card.word)).toEqual([
      'la sobremesa',
      'madrugar',
      'estrenar',
      'el antojo',
    ])
    expect(DECK.map((card) => `${card.face}/${card.ink}`)).toEqual([
      '#ff6b4a/#2b0b03',
      '#5b5bf0/#ffffff',
      '#ffc53d/#2e2000',
      '#14b8a6/#022c28',
    ])
  })

  it('writes the pronunciation dots as U+00B7 and the examples in curly quotes', () => {
    for (const card of DECK) {
      expect(card.say).toMatch(/^\/(?:[A-Za-z]+\u00b7)+[A-Za-z]+\/$/)
      expect(card.example.startsWith('\u201c')).toBe(true)
      expect(card.example.endsWith('\u201d')).toBe(true)
    }
  })

  it('carries the position pill, a definition and its translation for every card', () => {
    expect(DECK.map((card) => card.pos)).toEqual([
      'noun \u00b7 feminine',
      'verb',
      'verb',
      'noun \u00b7 masculine',
    ])
    for (const card of DECK) {
      expect(card.meaning.length).toBeGreaterThan(20)
      expect(card.translation.length).toBeGreaterThan(10)
      expect(card.id).toMatch(/^[a-z-]+$/)
    }
  })

  it('keeps the faded pronunciation only on ink that survives it', () => {
    // White ink on the indigo face is 5.00:1; at 85 % it drops to 4.07:1, so
    // that one card declares a full-strength pronunciation instead.
    expect(DECK.map((card) => card.quietSay)).toEqual([true, false, true, true])
  })
})
