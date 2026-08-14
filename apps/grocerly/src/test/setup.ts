import '@testing-library/jest-dom/vitest'

/* jsdom 30 removed localStorage/sessionStorage (breaking change). Mission
   does not persist state, but the polyfill keeps the test environment
   consistent with sibling apps in the monorepo. */
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

Object.defineProperty(window, 'localStorage', {
  value: new MemoryStorage(),
  writable: true,
})

Object.defineProperty(window, 'sessionStorage', {
  value: new MemoryStorage(),
  writable: true,
})
