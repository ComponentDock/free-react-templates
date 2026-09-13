import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Krypton' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('shows a CTA button', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: 'Get Started' }).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles dark mode on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /switch to (dark|light) mode/i })
    expect(toggle).toBeInTheDocument()

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()

    // Clicking a link inside the mobile nav closes it
    await user.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
