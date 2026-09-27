import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock IntersectionObserver for Counter
class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  trigger(isIntersecting = true) {
    this.callback(
      [
        {
          isIntersecting,
          intersectionRatio: isIntersecting ? 0.5 : 0,
        } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver,
    )
  }
}

const allObservers: MockIntersectionObserver[] = []
let lastObserver: MockIntersectionObserver | null = null

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: function (callback: IntersectionObserverCallback) {
    const obs = new MockIntersectionObserver(callback)
    lastObserver = obs
    allObservers.push(obs)
    return obs
  },
})

export function getLastObserver() {
  return lastObserver
}

export function triggerAllObservers(isIntersecting = true) {
  for (const obs of allObservers) {
    obs.trigger(isIntersecting)
  }
}

export function resetObservers() {
  allObservers.length = 0
  lastObserver = null
}
