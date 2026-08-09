import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
    window.localStorage.clear()
  })

  it('renders the site name, a Home link and a dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Tressly' })).toHaveAttribute('href', '#home')
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toHaveAttribute('href', '#home')
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the .dark class on the document root and persists the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('tressly-dark')).toBe('0')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('tressly-dark')).toBe('1')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('tressly-dark')).toBe('0')
  })

  it('applies a saved dark preference on mount', () => {
    window.localStorage.setItem('tressly-dark', '1')
    render(<Navbar />)
    expect(document.documentElement).toHaveClass('dark')
  })

  it('restores the light class when unmounted', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    unmount()
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Desktop + mobile navs both render the links; the mobile one is last.
    const mobileContact = screen.getAllByRole('link', { name: 'Contact' }).at(-1)!
    expect(mobileContact).toBeVisible()

    await user.click(mobileContact)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
