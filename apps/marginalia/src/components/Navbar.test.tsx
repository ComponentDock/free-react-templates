import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, beforeEach } from 'vitest'
import { Navbar } from './Navbar'
import { darkStorageKey, navLinks } from '../data'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders a search trigger on the left, the site name centered, and a menu trigger on the right', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open search' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Marginalia' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens a full-width search bar with a placeholder and closes it again', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open search' }))
    const input = screen.getByPlaceholderText('Search...')
    expect(input).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
  })

  it('opens a mobile menu with the navigation links and closes it again', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(menu).toHaveTextContent(link)
    }
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a navigation link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(menu).getByRole('link', { name: 'Blog' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('toggles the dark class on the document root and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem(darkStorageKey)).toBe('dark')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem(darkStorageKey)).toBe('light')
  })

  it('applies the persisted dark preference on mount', () => {
    window.localStorage.setItem(darkStorageKey, 'dark')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
