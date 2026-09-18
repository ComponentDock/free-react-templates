import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom doesn't implement IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
