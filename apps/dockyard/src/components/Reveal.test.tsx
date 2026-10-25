import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Reveal } from './Reveal'
import { mockReducedMotion } from '../test/match-media'

class MockObserver {
  callback: IntersectionObserverCallback
  disconnected = false

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }

  observe() {
    this.callback(
      [
        { isIntersecting: false } as IntersectionObserverEntry,
        { isIntersecting: true } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver,
    )
  }

  disconnect() {
    this.disconnected = true
  }

  unobserve() {}

  takeRecords() {
    return []
  }

  root = null
  rootMargin = ''
  thresholds = []
}

class NeverIntersects extends MockObserver {
  override observe() {
    this.callback([{ isIntersecting: false } as IntersectionObserverEntry], this as unknown as IntersectionObserver)
  }
}

describe('Reveal', () => {
  it('shows its content straight away when no observer exists', () => {
    render(<Reveal>Band copy</Reveal>)

    expect(screen.getByText('Band copy')).toHaveClass('opacity-100')
  })

  it('fades in the first time the band intersects', () => {
    vi.stubGlobal('IntersectionObserver', MockObserver)
    render(<Reveal delay={150}>Band copy</Reveal>)

    const wrapper = screen.getByText('Band copy') as HTMLElement
    expect(wrapper).toHaveClass('opacity-100')
    expect(wrapper.style.transitionDelay).toBe('150ms')
    vi.unstubAllGlobals()
  })

  it('stays faded while nothing intersects', () => {
    vi.stubGlobal('IntersectionObserver', NeverIntersects)
    render(<Reveal>Band copy</Reveal>)

    expect(screen.getByText('Band copy')).toHaveClass('opacity-0')
    vi.unstubAllGlobals()
  })

  it('skips the observer entirely under reduced motion', () => {
    mockReducedMotion()
    const observe = vi.fn()
    vi.stubGlobal(
      'IntersectionObserver',
      class extends MockObserver {
        override observe() {
          observe()
        }
      },
    )
    render(<Reveal>Band copy</Reveal>)

    expect(screen.getByText('Band copy')).toHaveClass('opacity-100')
    expect(observe).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
  })

  it('disconnects its observer when the band unmounts', () => {
    const disconnect = vi.fn()
    vi.stubGlobal(
      'IntersectionObserver',
      class extends NeverIntersects {
        override disconnect() {
          disconnect()
        }
      },
    )
    const { unmount } = render(<Reveal>Band copy</Reveal>)

    unmount()

    expect(disconnect).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })

  it('keeps an extra class alongside the reveal transition', () => {
    render(<Reveal className="mx-auto">Band copy</Reveal>)

    expect(screen.getByText('Band copy')).toHaveClass('mx-auto')
  })
})
