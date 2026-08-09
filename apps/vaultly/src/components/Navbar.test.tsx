import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, section links, Log In, Get Started Free, and dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Finley/ })).toBeInTheDocument()
    for (const link of ['Features', 'How It Works', 'Pricing', 'About']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Log In' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Get Started Free' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the dark class and persists the choice in window.localStorage', async () => {
    const user = userEvent.setup()
    window.localStorage.clear()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('theme')).toBe('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('theme')).toBe('light')
  })

  it('restores a persisted dark preference on mount', () => {
    window.localStorage.setItem('theme', 'dark')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    window.localStorage.clear()
  })

  it('expands and collapses the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Pricing' }).length).toBeGreaterThan(1)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Mobile nav links render after the desktop ones; click the mobile link.
    const mobilePricing = screen.getAllByRole('link', { name: 'Pricing' })[1]!
    await user.click(mobilePricing)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const mobileLogin = screen.getAllByRole('link', { name: 'Log In' })[1]!
    await user.click(mobileLogin)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const mobileCta = screen.getAllByRole('link', { name: 'Get Started Free' })[1]!
    await user.click(mobileCta)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // A non-Escape key leaves the menu open.
    await user.keyboard('{a}')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
