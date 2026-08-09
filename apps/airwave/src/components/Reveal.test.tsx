import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from './Reveal'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback
  disconnected = false

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  observe(_element: Element): void {}

  unobserve(_element: Element): void {}

  disconnect(): void {
    this.disconnected = true
  }

  trigger(entries: Array<Partial<IntersectionObserverEntry>>): void {
    this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

afterEach(() => {
  vi.unstubAllGlobals()
  MockIntersectionObserver.instances = []
})

describe('Reveal', () => {
  it('renders children and applies the delay style', () => {
    const { container } = render(
      <Reveal delay={200} className="extra">
        <p>Revealed content</p>
      </Reveal>,
    )
    expect(screen.getByText('Revealed content')).toBeInTheDocument()
    const wrapper = container.firstElementChild
    expect(wrapper).toHaveStyle({ transitionDelay: '200ms' })
    expect(wrapper).toHaveClass('extra', 'opacity-100')
  })

  it('renders with no delay style when delay is not provided', () => {
    const { container } = render(<Reveal>Content</Reveal>)
    expect(container.firstElementChild).not.toHaveAttribute('style')
  })

  it('stays hidden while the observed element is not intersecting', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    const { container } = render(
      <Reveal>
        <p>Off-screen content</p>
      </Reveal>,
    )
    const observer = MockIntersectionObserver.instances[0]!
    act(() => {
      observer.trigger([{ isIntersecting: false }])
    })
    expect(container.firstElementChild).toHaveClass('opacity-0')
  })

  it('reveals and disconnects once the element intersects', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    const { container } = render(
      <Reveal>
        <p>In-view content</p>
      </Reveal>,
    )
    const observer = MockIntersectionObserver.instances[0]!
    act(() => {
      observer.trigger([{ isIntersecting: true }])
    })
    expect(container.firstElementChild).toHaveClass('opacity-100')
    expect(observer.disconnected).toBe(true)
  })

  it('disconnects the observer when unmounted', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    const { unmount } = render(<Reveal>Temp</Reveal>)
    const observer = MockIntersectionObserver.instances[0]!
    unmount()
    expect(observer.disconnected).toBe(true)
  })
})
