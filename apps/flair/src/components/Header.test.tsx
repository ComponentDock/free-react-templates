import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from './Header'
import { NAV_LINKS } from '../data'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Header', () => {
  it('renders the wordmark, nav links and icon controls', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Flair' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shopping bag' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    // The desktop nav is display:none under the jsdom viewport — query it hidden.
    for (const link of NAV_LINKS) {
      const matches = screen.getAllByRole('link', { name: link, hidden: true })
      expect(matches.length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('link', { name: 'Home', hidden: true })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('turns dark once the page is scrolled past the hero', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header?.className).not.toContain('rgba(4,8,29,0.85)')

    window.scrollY = 600
    fireEvent.scroll(window)
    expect(header?.className).toContain('rgba(4,8,29,0.85)')

    window.scrollY = 0
    fireEvent.scroll(window)
    expect(header?.className).not.toContain('rgba(4,8,29,0.85)')
  })

  it('opens the search overlay and closes it with Escape or the close button', () => {
    render(<Header />)
    expect(screen.queryByLabelText('Search input')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    const input = screen.getByLabelText('Search input')
    expect(input).toHaveAttribute('placeholder', '| Enter Your Search...')

    // A non-Escape key keeps the overlay open.
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByLabelText('Search input')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByLabelText('Search input')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByLabelText('Search input')).not.toBeInTheDocument()
  })

  it('toggles the mobile menu with aria-expanded reflecting the state', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of NAV_LINKS) {
      expect(mobileNav).toHaveTextContent(link)
    }

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
