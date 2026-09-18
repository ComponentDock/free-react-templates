import '@testing-library/jest-dom/vitest'

/* jsdom has no IntersectionObserver; Counters (and therefore App) needs
   one. The base mock is inert; Counters.test.tsx triggers the counter
   state via the mock's callback directly. */
class IntersectionObserverMock {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds = [0]

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

globalThis.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver
