import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and all primary navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Tonsor/i })).toBeInTheDocument()
    for (const label of [
      'Home',
      'About',
      'Barbers',
      'Gallery',
      'Pricing',
      'Services',
      'Blog',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('colors the home link in the brand gold', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-brand')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is selected', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Pricing' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('toggles dark mode and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('tonsor-theme')).toBe('dark')
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toContainElement(
      document.querySelector('svg.lucide-sun'),
    )

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('tonsor-theme')).toBe('light')
  })

  it('restores the dark preference on mount and cleans up on unmount', () => {
    window.localStorage.setItem('tonsor-theme', 'dark')
    const { unmount } = render(<Navbar />)

    expect(document.documentElement).toHaveClass('dark')

    unmount()
    expect(document.documentElement).not.toHaveClass('dark')
    window.localStorage.removeItem('tonsor-theme')
  })
})
