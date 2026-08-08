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
    expect(screen.getByRole('link', { name: /sooth home/i })).toBeInTheDocument()
    for (const label of ['Services', 'Specialists', 'Gallery', 'Packages', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Book Now' }).length).toBeGreaterThan(0)
  })

  it('toggles dark mode on the document root and persists it', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('sooth-theme')).toBe('dark')

    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('sooth-theme')).toBe('light')
  })

  it('restores the persisted dark mode on mount', () => {
    window.localStorage.setItem('sooth-theme', 'dark')
    render(<Navbar />)
    expect(document.documentElement).toHaveClass('dark')
  })

  it('expands the mobile menu and reflects aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Services' }).length).toBeGreaterThan(0)

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    // Clicking a mobile menu link closes the menu (mobile links come last in the DOM)
    const galleryLinks = screen.getAllByRole('link', { name: 'Gallery' })
    await user.click(galleryLinks[galleryLinks.length - 1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    // The mobile "Book Now" CTA also closes the menu
    await user.click(menuButton)
    const bookNowLinks = screen.getAllByRole('link', { name: 'Book Now' })
    await user.click(bookNowLinks[bookNowLinks.length - 1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
