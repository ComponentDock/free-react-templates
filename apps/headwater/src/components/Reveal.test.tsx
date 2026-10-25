import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Reveal } from './Reveal'

const originalIO = (globalThis as { IntersectionObserver?: unknown }).IntersectionObserver

class FakeObserver {
  static last: FakeObserver | undefined
  readonly observe = () => undefined
  readonly unobserve = () => undefined
  readonly disconnect = () => undefined
  readonly takeRecords = () => []

  constructor(readonly callback: IntersectionObserverCallback) {
    FakeObserver.last = this
  }

  fire(intersecting: boolean) {
    this.callback([{ isIntersecting: intersecting }] as unknown as IntersectionObserverEntry[], this as never)
  }
}

afterEach(() => {
  FakeObserver.last = undefined
  Object.defineProperty(globalThis, 'IntersectionObserver', {
    configurable: true,
    writable: true,
    value: originalIO,
  })
})

describe('Reveal', () => {
  it('renders its children visible in a jsdom without IntersectionObserver', () => {
    render(<Reveal>Copy</Reveal>)
    expect(screen.getByText('Copy')).toHaveAttribute('data-shown', 'true')
  })

  it('carries no delay attributes when no delay is given', () => {
    render(<Reveal>Plain</Reveal>)
    const wrapper = screen.getByText('Plain')
    expect(wrapper).not.toHaveAttribute('data-delay')
    expect(wrapper.style.transitionDelay).toBe('')
  })

  it('staggers with a delay when one is given', () => {
    render(<Reveal delay={200}>Delayed</Reveal>)
    const wrapper = screen.getByText('Delayed')
    expect(wrapper).toHaveAttribute('data-delay', '200')
    expect(wrapper.style.transitionDelay).toBe('200ms')
  })
})

describe('Reveal before it is seen', () => {
  it('starts translated and transparent until the observer reports an intersection', () => {
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      configurable: true,
      writable: true,
      value: FakeObserver,
    })
    render(<Reveal>Hidden</Reveal>)
    const wrapper = screen.getByText('Hidden')
    expect(wrapper).toHaveAttribute('data-shown', 'false')
    expect(wrapper.className).toContain('translate-y-5')

    act(() => FakeObserver.last!.fire(true))
    expect(wrapper).toHaveAttribute('data-shown', 'true')
    expect(wrapper.className).toContain('translate-y-0')
  })
})
