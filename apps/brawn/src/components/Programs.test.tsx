import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { BAND_PROGRAMS } from '../content'
import { Programs } from './Programs'

type Entry = { isIntersecting: boolean }

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly observed: Element[] = []
  constructor(readonly callback: (entries: Entry[]) => void) {
    FakeObserver.instances.push(this)
  }
  observe(node: Element) {
    this.observed.push(node)
  }
  disconnect() {}
}

const realObserver = globalThis.IntersectionObserver

beforeEach(() => {
  FakeObserver.instances = []
})

afterEach(() => {
  globalThis.IntersectionObserver = realObserver
})

describe('Programs', () => {
  it('paints the band brand blue with three white columns and no card surface', () => {
    const { container } = render(<Programs />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.id).toBe('programs')
    expect(band.className).toContain('bg-brand')

    const titles = screen.getAllByRole('heading', { level: 3 }).map((node) => node.textContent)
    expect(titles).toEqual(BAND_PROGRAMS.map((program) => program.title))
    expect(container.querySelectorAll('svg')).toHaveLength(3)
    expect(container.querySelectorAll('.bg-white')).toHaveLength(0)
  })

  it('is fully visible without an observer (no JS, no API)', () => {
    const { container } = render(<Programs />)
    const grid = container.querySelector('[data-revealed]') as HTMLElement
    expect(grid.dataset.revealed).toBe('true')
    grid.querySelectorAll<HTMLElement>('div[style]').forEach((card) => {
      expect(card.className).toContain('opacity-100')
      expect(card.className).toContain('translate-y-0')
    })
  })

  it('reveals with a 100ms stagger once the band scrolls in', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    const { container } = render(<Programs />)
    const grid = container.querySelector('[data-revealed]') as HTMLElement
    expect(grid.dataset.revealed).toBe('false')

    const cards = Array.from(grid.querySelectorAll<HTMLElement>('div[style]'))
    expect(cards.map((card) => card.style.transitionDelay)).toEqual(['0ms', '100ms', '200ms'])
    cards.forEach((card) => expect(card.className).toContain('opacity-0'))

    act(() => FakeObserver.instances[0]!.callback([{ isIntersecting: true }]))
    expect(grid.dataset.revealed).toBe('true')
    cards.forEach((card) => expect(card.className).toContain('opacity-100'))
  })
})
