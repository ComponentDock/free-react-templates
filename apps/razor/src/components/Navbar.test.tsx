import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and a Home link pointing to the page root', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /Razor/ })
    expect(homeLink).toHaveAttribute('href', '#home')
  })

  it('shows a dark-mode toggle button that flips the .dark class', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('navigation', { name: 'Mobile' }).querySelector('a')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
