import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and a closed hamburger menu trigger', () => {
    render(<Navbar />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#home')
    const trigger = screen.getByRole('button', { name: 'Open menu' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the overlay menu with navigation links and closes it via the close control', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const menu = screen.getByRole('navigation', { name: 'Menu' })
    expect(within(menu).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(menu).getByRole('link', { name: 'Portfolio' })).toHaveAttribute(
      'href',
      '#portfolio',
    )
    expect(within(menu).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(within(menu).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')

    // The overlay's own close control (inside the overlay content, next to the nav).
    const close = within(menu.parentElement as HTMLElement).getByRole('button', {
      name: 'Close menu',
    })
    fireEvent.click(close)
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the menu when a navigation link is clicked', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Menu' })
    fireEvent.click(within(menu).getByRole('link', { name: 'Portfolio' }))

    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('closes the menu when the overlay logo is clicked', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Menu' })
    const overlayLogo = within(menu.parentElement as HTMLElement).getByRole('link', {
      name: 'Gallery',
    })
    fireEvent.click(overlayLogo)

    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('toggles the dark class on the document root and cleans up on unmount', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
