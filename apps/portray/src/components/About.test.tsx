import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { About } from './About'
import { about, skills } from '../data'

class FakeObserver {
  static instances: FakeObserver[] = []
  callback: IntersectionObserverCallback
  disconnected = false
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    FakeObserver.instances.push(this)
  }
  observe() {}
  unobserve() {}
  disconnect() {
    this.disconnected = true
  }
  takeRecords() {
    return []
  }
  fire(entries: Array<Partial<IntersectionObserverEntry>>) {
    this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

function firstFill() {
  return screen.getAllByRole('progressbar')[0]!.firstElementChild as HTMLElement
}

afterEach(() => {
  vi.unstubAllGlobals()
  FakeObserver.instances = []
})

describe('About', () => {
  it('renders the white card, statement, CTA and four final-width skill bars', () => {
    render(<About />)
    expect(screen.getByText(about.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(about.statement)
    expect(screen.getByRole('link', { name: about.cta.label })).toHaveAttribute(
      'href',
      about.cta.href,
    )
    const bars = screen.getAllByRole('progressbar')
    expect(bars.map((bar) => bar.getAttribute('aria-valuenow'))).toEqual(['60', '89', '60', '89'])
    expect(bars.map((bar) => bar.getAttribute('aria-label'))).toEqual(
      skills.map((skill) => skill.label),
    )
    const fills = bars.map((bar) => bar.firstElementChild as HTMLElement)
    expect(fills.map((fill) => fill.style.width)).toEqual(['60%', '89%', '60%', '89%'])
  })

  it('derives the final widths during render when IntersectionObserver is unavailable', () => {
    expect(typeof IntersectionObserver).toBe('undefined')
    render(<About />)
    const fill = screen.getAllByRole('progressbar')[0]!.firstElementChild as HTMLElement
    expect(fill.style.width).toBe('60%')
  })

  it('animates from zero and fills when the band scrolls into view', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    render(<About />)
    expect(firstFill().style.width).toBe('0%')
    expect(FakeObserver.instances).toHaveLength(skills.length)

    act(() => {
      FakeObserver.instances[0]!.fire([{ isIntersecting: false }])
    })
    expect(firstFill().style.width).toBe('0%')

    act(() => {
      FakeObserver.instances[0]!.fire([{ isIntersecting: true }])
    })
    expect(firstFill().style.width).toBe('60%')
    expect(FakeObserver.instances[0]!.disconnected).toBe(true)
  })
})
