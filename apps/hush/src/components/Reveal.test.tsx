import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Reveal } from './Reveal'

describe('Reveal', () => {
  it('renders children without IntersectionObserver (jsdom fallback)', () => {
    render(
      <Reveal>
        <p>Revealed content</p>
      </Reveal>,
    )
    expect(screen.getByText('Revealed content')).toBeInTheDocument()
  })

  it('reveals content when it intersects the viewport', () => {
    class MockObserver {
      callback: IntersectionObserverCallback
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
      disconnect() {}
      unobserve() {}
      takeRecords() {
        return []
      }
      root = null
      rootMargin = ''
      thresholds = []
    }
    vi.stubGlobal('IntersectionObserver', MockObserver)
    const { container } = render(<Reveal delay={50}>Intersected</Reveal>)
    expect(container.firstChild).toHaveStyle({ transitionDelay: '50ms' })
    expect(screen.getByText('Intersected')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})
