import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from './Reveal'

class Observer {
  static last: Observer | null = null
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    Observer.last = this
  }

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

afterEach(() => {
  Observer.last = null
  vi.unstubAllGlobals()
})

describe('Reveal', () => {
  it('is already visible where there is no observer', () => {
    render(<Reveal className="max-w-2xl">content</Reveal>)
    const band = screen.getByText('content')
    expect(band).toHaveAttribute('data-animate', 'true')
    expect(band).toHaveAttribute('data-shown', 'true')
    expect(band).toHaveClass('opacity-100', 'translate-y-0', 'max-w-2xl')
  })

  it('holds the band transparent until it scrolls into view, then lifts it', () => {
    vi.stubGlobal('IntersectionObserver', Observer)
    render(<Reveal>content</Reveal>)
    const band = screen.getByText('content')
    expect(band).toHaveAttribute('data-shown', 'false')
    expect(band).toHaveClass('opacity-0', 'translate-y-5')

    act(() => {
      Observer.last!.callback(
        [{ isIntersecting: true, target: band } as unknown as IntersectionObserverEntry],
        Observer.last as unknown as IntersectionObserver,
      )
    })
    expect(band).toHaveAttribute('data-shown', 'true')
    expect(band).toHaveClass('opacity-100')
  })
})
