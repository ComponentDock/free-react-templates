import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { BAND_IDS, NAV_LINKS } from '../content'

class Observer {
  static last: Observer | null = null
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    Observer.last = this
  }

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

function addBands() {
  for (const id of BAND_IDS) {
    const section = document.createElement('section')
    section.id = id
    document.body.append(section)
  }
}

function setScroll(scrollY: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: 4000,
  })
}

afterEach(() => {
  Observer.last = null
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
  setScroll(0)
})

describe('Header', () => {
  it('carries the licence facts above the wordmark', () => {
    render(<Header />)
    const strip = document.querySelector('[data-licence-bar]')
    expect(strip).not.toBeNull()
    expect(within(strip as HTMLElement).getByText('OK MECH #00000')).toBeInTheDocument()
    expect(within(strip as HTMLElement).getByText('NATE-certified on every truck')).toBeInTheDocument()
    expect(within(strip as HTMLElement).getByText('Tulsa metro')).toBeInTheDocument()
    expect(within(strip as HTMLElement).getByText('4.9')).toBeInTheDocument()
    expect(within(strip as HTMLElement).getByText('260+ reviews on Google (sample)')).toBeInTheDocument()
  })

  it('links every nav item to a band that exists on the page', () => {
    addBands()
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const links = within(nav).getAllByRole('link')
    expect(links).toHaveLength(NAV_LINKS.length)
    for (const link of links) {
      const href = link.getAttribute('href') ?? ''
      expect(document.getElementById(href.slice(1))).not.toBeNull()
    }
    expect(links.map((link) => link.textContent)).toEqual([
      'Emergency',
      'Services',
      'Rates',
      'Service areas',
      'About',
      'Contact',
    ])
  })

  it('marks the band in view with aria-current', () => {
    addBands()
    vi.stubGlobal('IntersectionObserver', Observer)
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })

    act(() => {
      Observer.last!.callback(
        [
          { isIntersecting: true, target: { id: 'services' }, intersectionRatio: 0.8 },
        ] as unknown as IntersectionObserverEntry[],
        Observer.last as unknown as IntersectionObserver,
      )
    })

    const active = within(nav)
      .getAllByRole('link')
      .filter((link) => link.getAttribute('aria-current') === 'page')
    expect(active.map((link) => link.textContent)).toEqual(['Services', 'Rates'])
  })

  it('opens and closes the disclosure menu below xl', () => {
    addBands()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobile).getAllByRole('link')).toHaveLength(NAV_LINKS.length + 2)

    fireEvent.click(within(mobile).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('gains its shadow only past 50 px of scroll', () => {
    addBands()
    setScroll(0)
    render(<Header />)
    const header = document.querySelector('[data-header]')
    expect(header).not.toHaveClass('shadow-lg')

    setScroll(240)
    act(() => {
      fireEvent.scroll(window)
    })
    expect(header).toHaveClass('shadow-lg')
  })
})
