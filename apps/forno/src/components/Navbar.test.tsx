import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the wordmark, nav links and book-a-table CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Forno home' })).toBeInTheDocument()
    expect(screen.getByText('Forno')).toBeInTheDocument()

    for (const label of ['Home', 'About', 'Menu', 'Stories', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getAllByRole('link', { name: 'Book a table' }).length).toBeGreaterThanOrEqual(1)
  })

  it('switches from transparent to solid on scroll and cleans up', () => {
    const original = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })

    const { unmount } = render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'solid')

    unmount()
    Object.defineProperty(window, 'scrollY', {
      value: original,
      writable: true,
      configurable: true,
    })
  })

  it('opens and closes the mobile drawer', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Stories' }).length).toBe(2)

    // Clicking a drawer link closes the menu
    const drawerLink = screen.getAllByRole('link', { name: 'Stories' })[1]!
    await user.click(drawerLink)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the drawer when the drawer CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    const drawerCta = screen.getAllByRole('link', { name: 'Book a table' })[1]!
    await user.click(drawerCta)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
