import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from './Reveal'

type Entry = { isIntersecting: boolean; target: Element; intersectionRatio: number }

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly callback: (entries: Entry[]) => void
  disconnected = false

  constructor(callback: (entries: Entry[]) => void) {
    this.callback = callback
    FakeObserver.instances.push(this)
  }

  observe() {}
  disconnect() {
    this.disconnected = true
  }
}

afterEach(() => {
  vi.unstubAllGlobals()
  FakeObserver.instances = []
})

describe('Reveal', () => {
  it('starts transparent and resolves once the element is in view', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    const { container } = render(
      <Reveal className="max-w-2xl">
        <p>Band</p>
      </Reveal>,
    )
    const node = container.querySelector('[data-animate]') as HTMLElement
    expect(node.dataset.shown).toBe('false')
    expect(node).toHaveClass('translate-y-5', 'opacity-0', 'max-w-2xl')

    act(() => {
      FakeObserver.instances[0]!.callback([
        { isIntersecting: false, target: node, intersectionRatio: 0.01 },
      ])
    })
    expect(node.dataset.shown).toBe('false')

    act(() => {
      FakeObserver.instances[0]!.callback([
        { isIntersecting: true, target: node, intersectionRatio: 0.9 },
      ])
    })
    expect(node.dataset.shown).toBe('true')
    expect(node).toHaveClass('translate-y-0', 'opacity-100')
    expect(FakeObserver.instances[0]!.disconnected).toBe(true)
  })

  it('is already visible where there is no observer', () => {
    const { container } = render(<Reveal>Band</Reveal>)
    const node = container.querySelector('[data-animate]') as HTMLElement
    expect(node.dataset.shown).toBe('true')
    expect(node).toHaveClass('translate-y-0', 'opacity-100')
    expect(node).not.toHaveAttribute('data-delay')
    expect(node.getAttribute('style')).toBeNull()
  })

  it('shows immediately under reduced motion, even with an observer present', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    )
    const { container } = render(<Reveal delay={300}>Band</Reveal>)
    const node = container.querySelector('[data-animate]') as HTMLElement
    expect(node.dataset.shown).toBe('true')
    expect(FakeObserver.instances).toHaveLength(0)
  })

  it('staggers a delayed reveal with the reference’s millisecond offset', () => {
    const { container } = render(<Reveal delay={200}>Band</Reveal>)
    const node = container.querySelector('[data-animate]') as HTMLElement
    expect(node.dataset.delay).toBe('200')
    expect(node).toHaveStyle({ transitionDelay: '200ms' })
  })
})
