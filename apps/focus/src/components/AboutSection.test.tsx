import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { ABOUT } from '../data'
import { AboutSection } from './AboutSection'

class TriggerableObserver {
  static instances: TriggerableObserver[] = []
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    TriggerableObserver.instances.push(this)
  }

  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = () => []

  trigger(entries: Array<Partial<IntersectionObserverEntry>>) {
    this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

const counterParagraph = () => screen.getByText('0').parentElement!

describe('AboutSection', () => {
  beforeEach(() => {
    TriggerableObserver.instances = []
    vi.stubGlobal('IntersectionObserver', TriggerableObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the heading, copy, counter, small photos and pull quote', () => {
    const { container } = render(<AboutSection />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Focus is A Creative Direction/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(ABOUT.paragraph)).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Project complete')).toBeInTheDocument()
    expect(screen.getByText(ABOUT.quote)).toBeInTheDocument()
    expect(screen.getByText('— Lucy Lee')).toBeInTheDocument()
    /* Decorative photos have alt="" (no img role) — count via the DOM. */
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })

  it('animates the counter from 0 to 120 once the section scrolls into view', () => {
    vi.useFakeTimers()
    render(<AboutSection />)
    const paragraph = counterParagraph()
    const observer = TriggerableObserver.instances[0]!
    act(() => {
      observer.trigger([{ target: paragraph, isIntersecting: true }])
    })
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.queryByText('0')).not.toBeInTheDocument()

    /* A second intersection must not restart the animation. */
    act(() => {
      observer.trigger([{ target: paragraph, isIntersecting: true }])
    })
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText('120')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('disconnects the observer on unmount', () => {
    const { unmount } = render(<AboutSection />)
    const observer = TriggerableObserver.instances[0]!
    unmount()
    expect(observer.disconnect).toHaveBeenCalled()
  })
})
