import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { brandName, menuCloseLabel, menuOpenLabel, navLinks, toggleDarkLabel } from '../data'

describe('Navbar', () => {
  it('shows the site name, the hamburger toggle and the dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuOpenLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: toggleDarkLabel })).toBeInTheDocument()
  })

  it('opens the full-screen menu with large links and marks Home as current', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const menu = screen.getByRole('navigation', { name: 'Main menu' })
    for (const link of navLinks) {
      expect(within(menu).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(menu).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('closes the menu when a link is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const menu = screen.getByRole('navigation', { name: 'Main menu' })
    await user.click(within(menu).getByRole('link', { name: 'About' }))
    expect(screen.queryByRole('navigation', { name: 'Main menu' })).not.toBeInTheDocument()
  })

  it('toggles the .dark class on the document root and reflects the mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: toggleDarkLabel })
    // The original design is dark charcoal; the app starts in dark mode.
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(toggle).toHaveAttribute('aria-pressed', 'false')

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })
})
