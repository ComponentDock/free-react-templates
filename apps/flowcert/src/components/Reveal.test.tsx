import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from './Reveal'

class MockObserver {
  static instances: MockObserver[] = []
  readonly callback: IntersectionObserverCallback
  readonly observed: Element[] = []
  disconnected = false
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds: number[] = []

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockObserver.instances.push(this)
  }

  observe(element: Element) {
    this.observed.push(element)
  }

  unobserve() {}

  disconnect() {
    this.disconnected = true
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  trigger(isIntersecting: boolean) {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
}

function installObserver() {
  MockObserver.instances = []
  Object.defineProperty(globalThis, 'IntersectionObserver', {
    value: MockObserver,
    configurable: true,
    writable: true,
  })
}

afterEach(() => {
  Reflect.deleteProperty(globalThis, 'IntersectionObserver')
  Reflect.deleteProperty(window, 'matchMedia')
  vi.restoreAllMocks()
})

describe('Reveal', () => {
  it('renders content visible when the browser has no IntersectionObserver', () => {
    const { container } = render(<Reveal>content</Reveal>)

    const wrapper = container.querySelector('[data-reveal]')
    expect(wrapper).toHaveAttribute('data-reveal', 'shown')
    expect(wrapper).toHaveClass('opacity-100')
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('renders content visible when the visitor prefers reduced motion', () => {
    installObserver()
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ matches: true }),
      configurable: true,
      writable: true,
    })

    const { container } = render(<Reveal>content</Reveal>)

    expect(container.querySelector('[data-reveal]')).toHaveAttribute('data-reveal', 'shown')
    expect(MockObserver.instances).toHaveLength(0)
  })

  it('stays hidden until the band intersects, then reveals once', () => {
    installObserver()
    const { container } = render(<Reveal>content</Reveal>)

    const wrapper = container.querySelector('[data-reveal]')
    expect(wrapper).toHaveAttribute('data-reveal', 'pending')
    expect(wrapper).toHaveClass('opacity-0', 'translate-y-5')

    const observer = MockObserver.instances[0]!
    expect(observer.observed).toHaveLength(1)

    act(() => observer.trigger(false))
    expect(container.querySelector('[data-reveal]')).toHaveAttribute('data-reveal', 'pending')

    act(() => observer.trigger(true))
    expect(container.querySelector('[data-reveal]')).toHaveAttribute('data-reveal', 'shown')
    expect(container.querySelector('[data-reveal]')).toHaveClass('opacity-100')
  })

  it('disconnects its observer on unmount', () => {
    installObserver()
    const { unmount } = render(<Reveal>content</Reveal>)

    const observer = MockObserver.instances[0]!
    unmount()

    expect(observer.disconnected).toBe(true)
  })
})
