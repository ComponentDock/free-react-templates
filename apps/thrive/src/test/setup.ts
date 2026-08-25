import '@testing-library/jest-dom/vitest'

/* jsdom 30 removed localStorage/sessionStorage (breaking change). The app
   persists the dark-mode preference via window.localStorage; provide a small
   in-memory Storage polyfill so tests can exercise persistence. */
class MemoryStorage implements Storage {
  private readonly store = new Map<string, string>()

  get length(): number {
    return this.store.size
  }

  clear(): void {
    this.store.clear()
  }

  getItem(key: string): string | null {
    return this.store.get(key) ?? null
  }

  key(index: number): string | null {
    return Array.from(this.store.keys())[index] ?? null
  }

  removeItem(key: string): void {
    this.store.delete(key)
  }

  setItem(key: string, value: string): void {
    this.store.set(key, String(value))
  }
}

if (!window.localStorage) {
  Object.defineProperty(window, 'localStorage', {
    value: new MemoryStorage(),
    configurable: true,
  })
}

/* jsdom does not implement IntersectionObserver -- provide a minimal stub
   so components using it (e.g. StatsBand counter animation) don't throw. */
if (!window.IntersectionObserver) {
  Object.defineProperty(window, 'IntersectionObserver', {
    value: class IntersectionObserverStub {
      root = null
      rootMargin = ''
      scrollMargin = ''
      thresholds = [0]
      private cb: IntersectionObserverCallback
      constructor(cb: IntersectionObserverCallback) {
        this.cb = cb
      }
      observe(_target: Element) {
        /* Auto-trigger for test convenience: assume visible. */
        this.cb(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return []
      }
    },
    configurable: true,
    writable: true,
  })
}
