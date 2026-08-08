import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, beforeEach } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
    window.localStorage.clear()
  })

  it('shows the site name and section links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /zenith home/i })).toBeInTheDocument()
    for (const label of ['Features', 'Pricing', 'Testimonials', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Get Started' }).length).toBeGreaterThan(0)
  })

  it('toggles dark mode on the document root and persists it', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('zenith-dark')).toBe('1')

    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('zenith-dark')).toBe('0')
  })

  it('restores the persisted dark mode on mount', () => {
    window.localStorage.setItem('zenith-dark', '1')
    render(<Navbar />)
    expect(document.documentElement).toHaveClass('dark')
  })

  it('expands the mobile menu and reflects aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Features' }).length).toBeGreaterThan(0)

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    const pricingLinks = screen.getAllByRole('link', { name: 'Pricing' })
    expect(pricingLinks.length).toBeGreaterThan(0)

    // Clicking a mobile menu link closes the menu (mobile links come last in the DOM)
    await user.click(pricingLinks[pricingLinks.length - 1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    // The mobile "Get Started" CTA also closes the menu
    await user.click(menuButton)
    const getStartedLinks = screen.getAllByRole('link', { name: 'Get Started' })
    await user.click(getStartedLinks[getStartedLinks.length - 1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
