import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  readonly root = null
  readonly rootMargin = ''
  readonly thresholds = [0]

  observe() {}
  unobserve() {}
  disconnect() {}

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

beforeEach(() => {
  MockIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  vi.useFakeTimers()
})

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

describe('AboutSection', () => {
  it('renders the photo, eyebrow and headline with the counter at zero', () => {
    const { container } = render(<AboutSection />)

    expect(screen.getByText('A Few Words About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We're Functioning for Almost 0 Years/ }),
    ).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/flexly-about/800/700',
    )
  })

  it('counts up to 20 years once the section scrolls into view', () => {
    render(<AboutSection />)

    act(() => {
      MockIntersectionObserver.instances[0]!.trigger(true)
    })
    // 20 increments at 60ms each = 1200ms of fake time.
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(
      screen.getByRole('heading', { name: /We're Functioning for Almost 20 Years/ }),
    ).toBeInTheDocument()
  })

  it('does not start counting before the section is visible', () => {
    render(<AboutSection />)

    act(() => {
      MockIntersectionObserver.instances[0]!.trigger(false)
    })
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(
      screen.getByRole('heading', { name: /We're Functioning for Almost 0 Years/ }),
    ).toBeInTheDocument()
  })
})
