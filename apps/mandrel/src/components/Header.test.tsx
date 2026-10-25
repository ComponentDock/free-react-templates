import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { CHROME, NAV_LINKS } from '../content'

const originalMatchMedia = window.matchMedia

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.className = ''
})

describe('Header', () => {
  it('renders the six nav labels and the steel CTA', () => {
    render(<Header lifted={false} />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    NAV_LINKS.forEach((link) => {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    })
    expect(nav.className).toContain('xl:flex')
    expect(screen.getAllByRole('link', { name: 'Request a quote' }).length).toBeGreaterThan(0)
  })

  it('shows no shadow at rest and a shadow once lifted', () => {
    const { rerender } = render(<Header lifted={false} />)
    const header = document.querySelector('[data-header]') as HTMLElement
    expect(header.className).not.toContain('shadow-lg')

    rerender(<Header lifted />)
    expect((document.querySelector('[data-header]') as HTMLElement).className).toContain(
      'shadow-lg',
    )
  })

  it('opens and closes the mobile panel with a glyph swap', () => {
    render(<Header lifted={false} />)
    const toggle = document.querySelector('[data-mobile-toggle]') as HTMLElement
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(toggle.getAttribute('aria-label')).toBe(CHROME.menuOpen)
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()

    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(toggle.getAttribute('aria-label')).toBe(CHROME.menuClose)
    expect(document.querySelector('[data-mobile-menu]')).not.toBeNull()

    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
  })

  it('closes the mobile panel when a link inside it is used', () => {
    render(<Header lifted={false} />)
    fireEvent.click(document.querySelector('[data-mobile-toggle]') as HTMLElement)
    const panel = document.querySelector('[data-mobile-menu]') as HTMLElement
    const firstLink = panel.querySelector('a') as HTMLElement
    fireEvent.click(firstLink)
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
  })

  it('shows the phone pill and the mobile city pill', () => {
    render(<Header lifted={false} />)
    expect(screen.getAllByRole('link', { name: '(555) 010-0205' }).length).toBeGreaterThan(0)
    fireEvent.click(document.querySelector('[data-mobile-toggle]') as HTMLElement)
    expect(screen.getAllByRole('link', { name: 'Cleveland, OH' }).length).toBeGreaterThan(0)
  })

  it('flips the dark mode toggle and stores the choice', () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: false }),
    })
    render(<Header lifted={false} />)
    const toggle = screen.getByRole('button', { name: CHROME.darkToggle })
    expect(toggle.getAttribute('aria-pressed')).toBe('false')

    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-pressed')).toBe('true')
    expect(window.localStorage.getItem('theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    fireEvent.click(toggle)
    expect(window.localStorage.getItem('theme')).toBe('light')

    Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia })
  })
})
