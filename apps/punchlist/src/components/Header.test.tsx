import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CONTACT_LABEL, NAV_LINKS } from '../content'
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
  it('renders the wordmark, seven labels, the toggle and the CTA', () => {
    render(<Header lifted={false} onOpenQuote={vi.fn()} />)
    expect(screen.getByRole('link', { name: 'Punchlist home' })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    NAV_LINKS.forEach((link) => {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    })
    expect(screen.getAllByRole('button', { name: CONTACT_LABEL }).length).toBe(1)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })

  it('gains its shadow only past 50 px of scroll', () => {
    const { rerender } = render(<Header lifted={false} onOpenQuote={vi.fn()} />)
    const header = document.querySelector('[data-header]') as HTMLElement
    expect(header.className).not.toContain('shadow-md')
    rerender(<Header lifted onOpenQuote={vi.fn()} />)
    expect(header.className).toContain('shadow-md')
  })

  it('opens the desktop CTA dialog', () => {
    const onOpenQuote = vi.fn()
    render(<Header lifted={false} onOpenQuote={onOpenQuote} />)
    fireEvent.click(screen.getByRole('button', { name: CONTACT_LABEL }))
    expect(onOpenQuote).toHaveBeenCalledTimes(1)
  })

  it('opens and closes the mobile disclosure, returning focus on Escape', () => {
    render(<Header lifted={false} onOpenQuote={vi.fn()} />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(burger).toHaveAttribute('aria-controls', 'mobile-menu')
    expect(document.getElementById('mobile-menu')).toBeNull()

    fireEvent.click(burger)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.getElementById('mobile-menu')).not.toBeNull()

    fireEvent.keyDown(document, { key: 'a' })
    expect(document.getElementById('mobile-menu')).not.toBeNull()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(document.getElementById('mobile-menu')).toBeNull()
    expect(document.activeElement).toBe(burger)
  })

  it('closes the panel when a link inside it is activated', () => {
    render(<Header lifted={false} onOpenQuote={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = document.getElementById('mobile-menu') as HTMLElement
    fireEvent.click(panel.querySelector('a') as HTMLAnchorElement)
    expect(document.getElementById('mobile-menu')).toBeNull()
  })

  it('closes the panel and opens the dialog from its CTA', () => {
    const onOpenQuote = vi.fn()
    render(<Header lifted={false} onOpenQuote={onOpenQuote} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = document.getElementById('mobile-menu') as HTMLElement
    fireEvent.click(panel.querySelector('button') as HTMLButtonElement)
    expect(document.getElementById('mobile-menu')).toBeNull()
    expect(onOpenQuote).toHaveBeenCalledTimes(1)
  })

  it('flips the theme and reports it with aria-pressed', () => {
    render(<Header lifted={false} onOpenQuote={vi.fn()} />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('marks the band in view with aria-current', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    document.body.innerHTML = '<section id="rates"></section>'
    render(<Header lifted={false} onOpenQuote={vi.fn()} />)

    act(() => {
      FakeObserver.instances[0]!.callback([
        { isIntersecting: true, intersectionRatio: 0.6, target: { id: 'rates' } as Element },
      ])
    })

    const rates = screen.getAllByRole('link', { name: 'Rates' })[0]!
    expect(rates).toHaveAttribute('aria-current', 'true')
    const work = screen.getAllByRole('link', { name: 'Recent work' })[0]!
    expect(work).not.toHaveAttribute('aria-current')
  })
})
