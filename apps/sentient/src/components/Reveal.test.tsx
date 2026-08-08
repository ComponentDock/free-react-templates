import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reveal } from './Reveal'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback
  disconnect = vi.fn()

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  readonly root = null
  readonly rootMargin = ''
  readonly thresholds = [0]

  observe() {}
  unobserve() {}
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
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Reveal', () => {
  it('renders children immediately visible when IntersectionObserver is unavailable', () => {
    render(
      <Reveal>
        <p>Hello</p>
      </Reveal>,
    )
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Hello').parentElement).toHaveClass('opacity-100')
  })

  it('applies a transition delay when provided', () => {
    render(
      <Reveal delay={200}>
        <p>Delayed</p>
      </Reveal>,
    )
    expect(screen.getByText('Delayed').parentElement).toHaveStyle('transition-delay: 200ms')
  })

  it('reveals the content once it scrolls into view', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    render(
      <Reveal>
        <p>Scrolled</p>
      </Reveal>,
    )
    const wrapper = screen.getByText('Scrolled').parentElement!
    expect(wrapper).toHaveClass('opacity-0')
    expect(MockIntersectionObserver.instances).toHaveLength(1)

    MockIntersectionObserver.instances[0]!.trigger(true)
    expect(wrapper).toHaveClass('opacity-100')

    const { unmount } = render(<Reveal />)
    unmount()
    expect(MockIntersectionObserver.instances[1]!.disconnect).toHaveBeenCalled()
  })

  it('stays hidden while the element is not intersecting', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    render(
      <Reveal>
        <p>Below fold</p>
      </Reveal>,
    )
    const wrapper = screen.getByText('Below fold').parentElement!
    MockIntersectionObserver.instances[0]!.trigger(false)
    expect(wrapper).toHaveClass('opacity-0')
  })
})
