import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { navItems, siteName } from '../data'

describe('Header', () => {
  it('shows the logo and a closed hamburger toggle', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: `${siteName} home` })).toBeInTheDocument()
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the full-screen menu with all nav links and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    await user.click(screen.getByRole('link', { name: navItems[2] }))
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('closes the menu when the toggle is pressed again', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
