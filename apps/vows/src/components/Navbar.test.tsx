import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('shows the wordmark, all eight section links, and the CTA', () => {
    render(<Navbar />)

    expect(screen.getByText('Vows')).toBeInTheDocument()

    for (const label of [
      'Services',
      'Portfolio',
      'About',
      'Packages',
      'Testimonials',
      'Blog',
      'Gallery',
      'Contact',
    ]) {
      // Desktop + mobile drawer copies
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getAllByRole('link', { name: 'Start Planning' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Start Planning CTA as a rose pill', () => {
    render(<Navbar />)

    const cta = screen.getAllByRole('link', { name: 'Start Planning' })[0]!
    expect(cta).toHaveClass('bg-primary-600')
    expect(cta).toHaveClass('rounded-full')
  })

  it('defaults to light mode and toggles it, persisting the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('vows-theme')).toBe('light')

    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    await user.click(toggle)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('vows-theme')).toBe('dark')

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('vows-theme')).toBe('light')
  })

  it('restores a persisted dark preference on load', () => {
    window.localStorage.setItem('vows-theme', 'dark')
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes the dark class on unmount', () => {
    window.localStorage.setItem('vows-theme', 'dark')
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
    expect(screen.getAllByRole('link', { name: 'Services' })).toHaveLength(2)

    // Clicking a drawer link closes the menu
    await user.click(screen.getAllByRole('link', { name: 'Services' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the drawer when the drawer CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getAllByRole('link', { name: 'Start Planning' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
