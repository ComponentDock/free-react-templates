import { render, screen, act } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Reveal } from './Reveal'

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = []
  callback: IntersectionObserverCallback
  observe = vi.fn()
  disconnect = vi.fn()

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    FakeIntersectionObserver.instances.push(this)
  }

  trigger() {
    this.callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
}

describe('Reveal', () => {
  it('renders children and appears immediately when IntersectionObserver is unavailable', () => {
    render(
      <Reveal delay={100}>
        <p>Revealed content</p>
      </Reveal>,
    )
    expect(screen.getByText('Revealed content')).toBeInTheDocument()
    const wrapper = screen.getByText('Revealed content').parentElement!
    expect(wrapper).toHaveClass('opacity-100')
    expect(wrapper).toHaveStyle({ transitionDelay: '100ms' })
    expect(wrapper).toHaveAttribute('data-animate', 'fade-in-up')
  })

  it('stays hidden until the element intersects, then fades in', () => {
    vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver)
    render(
      <Reveal>
        <p>Revealed content</p>
      </Reveal>,
    )
    const wrapper = screen.getByText('Revealed content').parentElement!
    expect(wrapper).toHaveClass('opacity-0')
    expect(wrapper).not.toHaveClass('opacity-100')

    const observer = FakeIntersectionObserver.instances.at(-1)!
    act(() => observer.trigger())
    expect(wrapper).toHaveClass('opacity-100')
    expect(wrapper).not.toHaveClass('opacity-0')
    vi.unstubAllGlobals()
  })
})
