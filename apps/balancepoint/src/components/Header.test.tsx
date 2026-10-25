import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { CITY, NAV_LINKS, PHONE_DISPLAY } from '../content'
import { Header } from './Header'

type Entry = { isIntersecting: boolean; intersectionRatio: number; target: Element }
const originalObserver = globalThis.IntersectionObserver

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly observed: Element[] = []
  disconnected = false
  constructor(readonly callback: (entries: Entry[]) => void) {
    FakeObserver.instances.push(this)
  }
  observe(node: Element) {
    this.observed.push(node)
  }
  disconnect() {
    this.disconnected = true
  }
}

beforeEach(() => {
  window.localStorage.clear()
  window.localStorage.setItem('theme', 'light')
})

afterEach(() => {
  FakeObserver.instances = []
  globalThis.IntersectionObserver = originalObserver
  document.body.innerHTML = ''
})

describe('Header', () => {
  it('renders the wordmark, six labels, the phone pill and the CTA', () => {
    render(<Header lifted={false} />)
    expect(screen.getByRole('link', { name: 'Balancepoint home' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    NAV_LINKS.forEach((link) => {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    })
    expect(screen.getAllByRole('link', { name: PHONE_DISPLAY }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Get your net price' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: CITY })).toBeInTheDocument()
  })

  it('gains its shadow only past 50 px of scroll', () => {
    const { rerender } = render(<Header lifted={false} />)
    const header = document.querySelector('[data-header]') as HTMLElement
    expect(header.className).not.toContain('shadow-lg')
    rerender(<Header lifted />)
    expect(header.className).toContain('shadow-lg')
  })

  it('opens and closes the mobile disclosure, returning focus on Escape', () => {
    render(<Header lifted={false} />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()

    fireEvent.click(burger)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.querySelector('[data-mobile-menu]')).not.toBeNull()

    fireEvent.keyDown(document, { key: 'a' })
    expect(document.querySelector('[data-mobile-menu]')).not.toBeNull()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
    expect(document.activeElement).toBe(burger)
  })

  it('closes the panel when a link inside it is activated', () => {
    render(<Header lifted={false} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = document.querySelector('[data-mobile-menu]') as HTMLElement
    const firstLink = panel.querySelector('nav a, a') as HTMLAnchorElement
    fireEvent.click(firstLink)
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
  })

  it('closes the panel from its full-width CTA', () => {
    render(<Header lifted={false} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const cta = document
      .querySelector('[data-mobile-menu]')!
      .querySelectorAll('a[href="#quote"]')
    const last = cta[cta.length - 1] as HTMLAnchorElement
    fireEvent.click(last)
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
  })

  it('flips the theme and reports it with aria-pressed', () => {
    render(<Header lifted={false} />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('marks the band in view with aria-current', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    document.body.innerHTML = '<section id="services"></section>'
    render(<Header lifted={false} />)

    act(() => {
      FakeObserver.instances[0]!.callback([
        { isIntersecting: true, intersectionRatio: 0.6, target: { id: 'services' } as Element },
      ])
    })

    const services = screen.getAllByRole('link', { name: 'Services' })[0]!
    expect(services).toHaveAttribute('aria-current', 'true')
    const rebates = screen.getAllByRole('link', { name: 'Rebates' })[0]!
    expect(rebates).not.toHaveAttribute('aria-current')
  })
})
