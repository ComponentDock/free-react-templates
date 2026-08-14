import '@testing-library/jest-dom/vitest'

/* jsdom has no IntersectionObserver; DotNav (scroll-spy) and
   AboutSection (counter) need one. The base mock is inert; the
   component tests install a richer triggerable mock. */
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

/* jsdom does not implement scrollIntoView (DotNav smooth-scroll
   handler would throw). */
Element.prototype.scrollIntoView = () => {}
