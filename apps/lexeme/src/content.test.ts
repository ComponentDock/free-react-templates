import { describe, it, expect } from 'vitest'
import { COMPONENT_DOCK_URL, HEAD } from './content'

describe('content', () => {
  it('quotes the head copy with a middle dot, not a bullet', () => {
    expect(HEAD.eyebrow).toBe('Everyday Spanish \u00b7 Deck 3')
    expect(HEAD.title).toBe('Words worth knowing')
    expect(HEAD.sub).toBe(
      'Hover a card, or tap it (Enter or Space on a keyboard), to see the meaning.',
    )
  })

  it('points attribution at the Component Dock home page', () => {
    expect(COMPONENT_DOCK_URL).toBe('https://www.componentdock.com/')
  })
})
