import { describe, it, expect } from 'vitest'
import { COMPONENT_DOCK_URL, HEAD } from './content'

describe('content', () => {
  it('names the two head strings verbatim', () => {
    expect(HEAD.title).toBe('Where to go when the season turns')
    expect(HEAD.eyebrow).toBe('Field guides \u00b7 2026 edition')
  })

  it('separates the eyebrow with a middle dot, not a hyphen or bullet', () => {
    expect(HEAD.eyebrow).toContain('\u00b7')
    expect(HEAD.eyebrow).not.toContain('-')
    expect(HEAD.eyebrow).not.toContain('\u2022')
  })

  it('points attribution at the Component Dock site', () => {
    expect(COMPONENT_DOCK_URL).toBe('https://www.componentdock.com/')
  })
})
