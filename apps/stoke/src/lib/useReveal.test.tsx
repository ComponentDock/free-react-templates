import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useReveal } from './useReveal'

class Observer {
  static last: Observer | null = null
  callback: IntersectionObserverCallback
  disconnected = false

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    Observer.last = this
  }

  observe() {}
  unobserve() {}
  disconnect() {
    this.disconnected = true
  }
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

function Band() {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-testid="band" data-shown={shown ? 'true' : 'false'}>
      band
    </div>
  )
}

afterEach(() => {
  Observer.last = null
  vi.unstubAllGlobals()
})

describe('useReveal', () => {
  it('shows the content where no IntersectionObserver exists (jsdom)', () => {
    render(<Band />)
    expect(screen.getByTestId('band')).toHaveAttribute('data-shown', 'true')
  })

  it('starts hidden and reveals once the band intersects', () => {
    vi.stubGlobal('IntersectionObserver', Observer)
    render(<Band />)
    const band = screen.getByTestId('band')
    expect(band).toHaveAttribute('data-shown', 'false')

    act(() => {
      Observer.last!.callback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        Observer.last as unknown as IntersectionObserver,
      )
    })
    expect(band).toHaveAttribute('data-shown', 'false')

    act(() => {
      Observer.last!.callback(
        [{ isIntersecting: true, target: band } as unknown as IntersectionObserverEntry],
        Observer.last as unknown as IntersectionObserver,
      )
    })
    expect(band).toHaveAttribute('data-shown', 'true')
    expect(Observer.last!.disconnected).toBe(true)
  })

  it('shows the content immediately under reduced motion, with no observer', () => {
    vi.stubGlobal('IntersectionObserver', Observer)
    vi.stubGlobal('matchMedia', () => ({ matches: true }))
    render(<Band />)
    expect(screen.getByTestId('band')).toHaveAttribute('data-shown', 'true')
    expect(Observer.last).toBeNull()
  })

  it('disconnects on unmount', () => {
    vi.stubGlobal('IntersectionObserver', Observer)
    const { unmount } = render(<Band />)
    unmount()
    expect(Observer.last!.disconnected).toBe(true)
  })
})
