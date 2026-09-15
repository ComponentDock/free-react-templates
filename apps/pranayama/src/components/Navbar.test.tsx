import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('renders the logo, all desktop nav links, and the dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Pranayama' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()

    for (const label of ['Home', 'Classes', 'About', 'Shop', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument()
  })

  it('renders a hamburger button on mobile and a hidden mobile nav', () => {
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    expect(hamburger).toBeInTheDocument()
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    // Mobile nav exists but is collapsed (max-h-0)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav.parentElement).toHaveClass('max-h-0')
  })

  it('opens the mobile menu when the hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const hamburger = screen.getByRole('button', { name: 'Close menu' })
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav.parentElement).toHaveClass('max-h-64')
  })

  it('closes the mobile menu when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Close
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav.parentElement).toHaveClass('max-h-0')
  })

  it('toggles dark mode on documentElement when the dark-mode button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Initially light
    expect(document.documentElement).not.toHaveClass('dark')

    // Switch to dark
    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()

    // Switch back to light
    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument()
  })

  it('dark-mode toggle button has correct type and label', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /dark mode/i })
    expect(toggle).toHaveAttribute('type', 'button')
  })

  it('desktop nav links have correct href attributes', () => {
    render(<Navbar />)

    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' })
    const expected = [
      { label: 'Home', href: '#home' },
      { label: 'Classes', href: '#classes' },
      { label: 'About', href: '#about' },
      { label: 'Shop', href: '#shop' },
      { label: 'Contact', href: '#contact' },
    ]

    for (const { label, href } of expected) {
      const link = within(desktopNav).getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', href)
    }
  })

  it('mobile nav links are also present when the menu opens', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const label of ['Home', 'Classes', 'About', 'Shop', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
