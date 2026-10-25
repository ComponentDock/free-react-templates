import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { PRODUCT_MENU } from '../content'

const originalMatchMedia = window.matchMedia

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.className = ''
})

afterEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockReturnValue({ matches: false }),
  })
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia })
})

describe('Header', () => {
  it('renders the wordmark, the four labels and the catalogue dropdown', () => {
    render(<Header lifted={false} />)
    expect(screen.getByRole('link', { name: 'Headwater home' })).toHaveAttribute('href', '#top')

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: /Products/ })).toHaveAttribute('href', '#products')
    expect(within(nav).getByRole('link', { name: 'Learn' })).toHaveAttribute('href', '#quiz')
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#why-us')
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')

    const menu = document.querySelector('[data-products-menu]') as HTMLElement
    for (const item of PRODUCT_MENU) {
      expect(within(menu).getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        item.href,
      )
    }
  })

  it('shows the phone pill, the city pill and the CTA outside the burger', () => {
    render(<Header lifted={false} />)
    expect(screen.getAllByRole('link', { name: '(555) 010-0221' }).length).toBeGreaterThan(0)
    expect(screen.getAllByText('Tucson, AZ').length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Test your water' }).length).toBeGreaterThan(0)
  })

  it('gains its shadow once lifted', () => {
    const { container, rerender } = render(<Header lifted={false} />)
    const header = container.querySelector('header') as HTMLElement
    expect(header.className).not.toContain('shadow-lg')

    rerender(<Header lifted />)
    expect(header.className).toContain('shadow-lg')
  })

  it('toggles the theme, the class and the glyph', () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: false }),
    })
    render(<Header lifted={false} />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(toggle).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('theme')).toBe('dark')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens the mobile panel with the Products accordion and closes again', () => {
    render(<Header lifted={false} />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(burger)
    const panel = document.querySelector('[data-mobile-menu]') as HTMLElement
    expect(panel).not.toBeNull()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    const accordion = within(panel).getByRole('button', { name: 'Products' })
    expect(accordion).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(accordion)
    expect(accordion).toHaveAttribute('aria-expanded', 'true')
    const products = document.querySelector('[data-mobile-products]') as HTMLElement
    expect(within(products).getByRole('link', { name: 'Water softeners' })).toHaveAttribute(
      'href',
      '#product-softener',
    )

    fireEvent.click(accordion)
    expect(accordion).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-mobile-products]')).toBeNull()

    fireEvent.click(accordion)
    const reopened = document.querySelector('[data-mobile-products]') as HTMLElement
    fireEvent.click(within(reopened).getByRole('link', { name: 'Reverse osmosis' }))
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopenedPanel = document.querySelector('[data-mobile-menu]') as HTMLElement
    fireEvent.click(within(reopenedPanel).getByText('Tucson, AZ'))
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const finalPanel = document.querySelector('[data-mobile-menu]') as HTMLElement
    fireEvent.click(within(finalPanel).getByRole('link', { name: 'Learn' }))
    expect(document.querySelector('[data-mobile-menu]')).toBeNull()
  })
})
