import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { DARK_KEY, Navbar } from './Navbar'

beforeEach(() => {
  window.localStorage.clear()
})

describe('Navbar', () => {
  it('renders the brand, all links, the Book Now CTA, and the dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Seacliff home' })).toBeInTheDocument()
    for (const label of [
      'About',
      'Rooms',
      'Amenities',
      'Dining',
      'Gallery',
      'Rates',
      'Blog',
      'Experiences',
      'Contact',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getAllByRole('link', { name: 'Book Now' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('defaults to light mode and toggles dark mode on the document root, persisting the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Light is the default experience (matches the demo's light-first design).
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem(DARK_KEY)).toBe('1')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem(DARK_KEY)).toBe('0')
  })

  it('opens and closes the mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu with the Escape key', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the mobile menu open when another key is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)

    await user.keyboard('a')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the mobile menu after choosing a link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)

    const mobileLinks = screen.getAllByRole('link', { name: 'Rooms' })
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const ctaLinks = screen.getAllByRole('link', { name: 'Book Now' })
    await user.click(ctaLinks[ctaLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('removes the document keydown listener on unmount', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    // The keydown listener is only attached while the mobile menu is open.
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))

    const removeSpy = vi.spyOn(document, 'removeEventListener')
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
  })
})
