import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the wordmark, nav links and reserve CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Sapor home' })).toBeInTheDocument()
    expect(screen.getByText('Sapor')).toBeInTheDocument()

    for (const label of ['Home', 'Menu', 'About', 'Gallery', 'Contact']) {
      // Desktop + mobile drawer copies
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getAllByRole('link', { name: 'Reserve a Table' }).length).toBeGreaterThanOrEqual(
      1,
    )
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
    expect(screen.getAllByRole('link', { name: 'Gallery' }).length).toBe(2)

    // Clicking a drawer link closes the menu
    const drawerLink = screen.getAllByRole('link', { name: 'Gallery' })[1]!
    await user.click(drawerLink)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the drawer when the drawer CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    const drawerCta = screen.getAllByRole('link', { name: 'Reserve a Table' })[1]!
    await user.click(drawerCta)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
