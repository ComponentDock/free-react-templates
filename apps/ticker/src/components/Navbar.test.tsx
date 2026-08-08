import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('shows the wordmark and the five section links plus CTAs', () => {
    render(<Navbar />)

    expect(screen.getByText('Ticker')).toBeInTheDocument()

    for (const label of ['Courses', 'Mentors', 'Markets', 'Pricing', 'About']) {
      // Desktop + mobile drawer copies
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getAllByRole('link', { name: 'Sign in' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Start Trading' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Start Trading CTA with the brand gradient', () => {
    render(<Navbar />)

    const cta = screen.getAllByRole('link', { name: 'Start Trading' })[0]!
    expect(cta).toHaveClass('from-primary-500')
    expect(cta).toHaveClass('to-primary-600')
  })

  it('defaults to dark mode and toggles it, persisting the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('ticker-theme')).toBe('dark')

    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    await user.click(toggle)

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('ticker-theme')).toBe('light')

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('ticker-theme')).toBe('dark')
  })

  it('restores a persisted light preference on load', () => {
    window.localStorage.setItem('ticker-theme', 'light')
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('removes the dark class on unmount', () => {
    const { unmount } = render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile drawer', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Courses' })).toHaveLength(2)

    // Clicking a drawer link closes the menu
    await user.click(screen.getAllByRole('link', { name: 'Courses' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the drawer when a drawer CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getAllByRole('link', { name: 'Start Trading' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    await user.click(screen.getAllByRole('link', { name: 'Sign in' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
