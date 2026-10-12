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
  vi.unstubAllEnvs()
  MockIntersectionObserver.instances = []
})

describe('Reveal', () => {
  it('keeps its content in the DOM and visible when no observer exists', () => {
    const { container } = render(
      <Reveal className="extra">
        <p>Always present</p>
      </Reveal>,
    )

    expect(screen.getByText('Always present')).toBeInTheDocument()
    expect(container.firstElementChild).toHaveClass('opacity-100', 'extra')
  })

  it('starts hidden, then fades in once and never reverses', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    const { container } = render(
      <Reveal>
        <p>Scroll block</p>
      </Reveal>,
    )

    const wrapper = container.firstElementChild
    expect(wrapper).toHaveClass('opacity-0')

    const observer = MockIntersectionObserver.instances[0]!
    act(() => {
      observer.trigger([{ isIntersecting: false }])
    })
    expect(wrapper).toHaveClass('opacity-0')

    act(() => {
      observer.trigger([{ isIntersecting: true }])
    })
    expect(wrapper).toHaveClass('opacity-100')
    expect(observer.disconnected).toBe(true)

    act(() => {
      observer.trigger([{ isIntersecting: false }])
    })
    expect(wrapper).toHaveClass('opacity-100')
  })

  it('staggers the fade when a delay is given', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    const { container } = render(<Reveal delayMs={200}>Staggered</Reveal>)

    expect(container.firstElementChild).toHaveStyle({ transitionDelay: '200ms' })
  })

  it('shows everything immediately when the visitor reduces motion', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: true, media: query }))

    const { container } = render(
      <Reveal>
        <p>Static block</p>
      </Reveal>,
    )

    expect(container.firstElementChild).toHaveClass('opacity-100')
  })

  it('disconnects the observer when it unmounts', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    const { unmount } = render(<Reveal>Temporary</Reveal>)
    const observer = MockIntersectionObserver.instances[0]!

    unmount()

    expect(observer.disconnected).toBe(true)
  })

  it('unmounts cleanly when no observer was ever created', () => {
    const { unmount } = render(<Reveal>No observer here</Reveal>)

    expect(() => unmount()).not.toThrow()
  })
})
