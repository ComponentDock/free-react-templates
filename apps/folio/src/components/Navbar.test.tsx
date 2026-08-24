import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('renders site name and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Folio')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Books' })).toHaveAttribute('href', '#books')
  })

  it('toggles dark mode on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', {
      name: /switch to (dark|light) mode/i,
    })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Mobile links appear
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    // Mobile menu closed — only desktop link remains
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Click the mobile Home link (the second one)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[homeLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('toggles dark mode via mobile menu and closes menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // The mobile toggle has visible text "Dark mode" — use getByText
    const mobileToggle = screen.getByText('Dark mode')
    await user.click(mobileToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    // Menu should close after toggling
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('shows Light mode option in mobile menu when dark is active', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Enable dark mode via desktop toggle first
    const desktopToggle = screen.getByRole('button', {
      name: /switch to dark mode/i,
    })
    await user.click(desktopToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    // Open mobile menu — should show "Light mode"
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileToggle = screen.getByText('Light mode')
    await user.click(mobileToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
