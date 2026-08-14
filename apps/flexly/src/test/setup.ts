import '@testing-library/jest-dom/vitest'

/* jsdom has no IntersectionObserver; AboutSection (and therefore App)
   needs one. The base mock is inert; AboutSection.test.tsx installs a
   richer triggerable mock. */
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
