import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useReveal } from './useReveal'
import { prefersReducedMotion } from './motion'

const originalMatchMedia = window.matchMedia
const originalIO = (globalThis as { IntersectionObserver?: unknown }).IntersectionObserver

function stubReducedMotion(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockReturnValue({ matches }),
  })
}

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly observe = vi.fn()
  readonly disconnect = vi.fn()
  readonly unobserve = vi.fn()
  readonly takeRecords = vi.fn(() => [])

  constructor(readonly callback: IntersectionObserverCallback) {
    FakeObserver.instances.push(this)
  }

  fire(entries: Array<{ isIntersecting: boolean }>) {
    this.callback(entries as unknown as IntersectionObserverEntry[], this as never)
  }
}

function Probe() {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return <div ref={ref} data-testid="probe" data-shown={shown ? 'true' : 'false'} />
}

afterEach(() => {
  FakeObserver.instances = []
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia })
  Object.defineProperty(globalThis, 'IntersectionObserver', {
    configurable: true,
    writable: true,
    value: originalIO,
  })
})

describe('prefersReducedMotion via the hook', () => {
  it('is consulted on every render', () => {
    stubReducedMotion(true)
    expect(prefersReducedMotion()).toBe(true)
  })
})

describe('useReveal', () => {
  it('shows the content straight away when motion is reduced', () => {
    stubReducedMotion(true)
    const { getByTestId } = render(<Probe />)
    expect(getByTestId('probe')).toHaveAttribute('data-shown', 'true')
  })

  it('shows the content straight away without an IntersectionObserver', () => {
    stubReducedMotion(false)
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      configurable: true,
      writable: true,
      value: undefined,
    })
    const { getByTestId } = render(<Probe />)
    expect(getByTestId('probe')).toHaveAttribute('data-shown', 'true')
  })

  it('waits for an intersecting entry, then disconnects', () => {
    stubReducedMotion(false)
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      configurable: true,
      writable: true,
      value: FakeObserver,
    })
    const { getByTestId } = render(<Probe />)
    const observer = FakeObserver.instances[0]!
    expect(getByTestId('probe')).toHaveAttribute('data-shown', 'false')

    act(() => observer.fire([{ isIntersecting: false }]))
    expect(getByTestId('probe')).toHaveAttribute('data-shown', 'false')

    act(() => observer.fire([{ isIntersecting: true }]))
    expect(getByTestId('probe')).toHaveAttribute('data-shown', 'true')
    expect(observer.disconnect).toHaveBeenCalled()
  })
})
