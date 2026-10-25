import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from './Reveal'

type Entry = { isIntersecting: boolean; target: Element; intersectionRatio: number }

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly callback: (entries: Entry[]) => void

  constructor(callback: (entries: Entry[]) => void) {
    this.callback = callback
    FakeObserver.instances.push(this)
  }

  observe() {}
  disconnect() {}
}

afterEach(() => {
  vi.unstubAllGlobals()
  FakeObserver.instances = []
})

describe('Reveal', () => {
  it('starts transparent and resolves once the band is in view', () => {
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
        { isIntersecting: true, target: node, intersectionRatio: 0.5 },
      ])
    })

    expect(node.dataset.shown).toBe('true')
    expect(node).toHaveClass('translate-y-0', 'opacity-100')
  })

  it('is already visible where there is no observer', () => {
    const { container } = render(<Reveal>Band</Reveal>)
    const node = container.querySelector('[data-animate]') as HTMLElement
    expect(node.dataset.shown).toBe('true')
    expect(node).toHaveClass('translate-y-0', 'opacity-100')
  })
})
