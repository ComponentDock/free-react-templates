import { prefersReducedMotion } from './prefers-reduced-motion'

function withMotionChoice(reduce: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: reduce,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

describe('prefersReducedMotion', () => {
  afterEach(() => withMotionChoice(false))

  it('is false for a visitor who allows motion', () => {
    expect(prefersReducedMotion()).toBe(false)
  })

  it('is true for a visitor who reduced motion', () => {
    withMotionChoice(true)

    expect(prefersReducedMotion()).toBe(true)
  })
})
