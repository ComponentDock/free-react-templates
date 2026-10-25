import { act, render, renderHook, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { prefersReducedMotion, useReveal } from './useReveal'

type Entry = { isIntersecting: boolean }

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly observed: Element[] = []
  disconnected = false
  constructor(readonly callback: (entries: Entry[]) => void) {
    FakeObserver.instances.push(this)
  }
  observe(node: Element) {
    this.observed.push(node)
  }
  disconnect() {
    this.disconnected = true
  }
}

function Probe() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-testid="probe">
      {visible ? 'visible' : 'hidden'}
    </div>
  )
}

const realObserver = globalThis.IntersectionObserver
const realMatchMedia = window.matchMedia

beforeEach(() => {
  FakeObserver.instances = []
})

afterEach(() => {
  globalThis.IntersectionObserver = realObserver
  window.matchMedia = realMatchMedia
  vi.restoreAllMocks()
})

describe('prefersReducedMotion', () => {
  it('reads the media query when the browser exposes one', () => {
    window.matchMedia = vi
      .fn()
      .mockReturnValue({ matches: true }) as unknown as typeof window.matchMedia
    expect(prefersReducedMotion()).toBe(true)
  })

  it('reports false when the media query says no', () => {
    window.matchMedia = vi
      .fn()
      .mockReturnValue({ matches: false }) as unknown as typeof window.matchMedia
    expect(prefersReducedMotion()).toBe(false)
  })

  it('reports false when matchMedia is missing altogether', () => {
    // jsdom ships without matchMedia, so the guard runs on the plain platform.
    expect(typeof window.matchMedia).toBe('undefined')
    expect(prefersReducedMotion()).toBe(false)
  })
})

describe('useReveal', () => {
  it('starts visible when no observer exists and stays visible', () => {
    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveTextContent('visible')
  })

  it('hides until the observer reports an intersection, then disconnects', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    render(<Probe />)
    const observer = FakeObserver.instances[0]!
    expect(observer.observed).toHaveLength(1)
    expect(screen.getByTestId('probe')).toHaveTextContent('hidden')

    act(() => observer.callback([{ isIntersecting: false }]))
    expect(screen.getByTestId('probe')).toHaveTextContent('hidden')

    act(() => observer.callback([{ isIntersecting: true }]))
    expect(screen.getByTestId('probe')).toHaveTextContent('visible')
    expect(observer.disconnected).toBe(true)
  })

  it('disconnects the observer on unmount', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    const { unmount } = render(<Probe />)
    const observer = FakeObserver.instances[0]!
    unmount()
    expect(observer.disconnected).toBe(true)
  })

  it('is visible without an intersection when the visitor asked for less motion', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    window.matchMedia = vi
      .fn()
      .mockReturnValue({ matches: true }) as unknown as typeof window.matchMedia
    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveTextContent('visible')
  })

  it('returns a ref and the visible flag', () => {
    const { result } = renderHook(() => useReveal<HTMLDivElement>())
    expect(result.current.visible).toBe(true)
    expect(result.current.ref.current).toBeNull()
  })
})
