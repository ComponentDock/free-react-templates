import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the Deskly brand, section links, Book a Tour button and dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Deskly home/ })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const link of ['About', 'Spaces', 'Amenities', 'Community', 'Pricing', 'Contact']) {
      expect(screen.getAllByRole('link', { name: link })).toHaveLength(2)
    }
    expect(screen.getAllByRole('link', { name: 'Book a Tour' })).toHaveLength(2)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('theme')).toBe('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('theme')).toBe('light')
  })

  it('cleans up the dark class when unmounted', async () => {
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
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeVisible()

    await user.keyboard('{ArrowDown}')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeVisible()

    await user.click(within(mobileNav).getByRole('link', { name: 'Pricing' }))
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when the Book a Tour button is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const menu = document.getElementById('mobile-menu')
    expect(menu).not.toBeNull()

    await user.click(within(menu as HTMLElement).getByRole('link', { name: 'Book a Tour' }))
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
