import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand and all six uppercase links with the active underline on Home', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Marina' })).toHaveAttribute('href', '#home')
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    const home = within(nav).getByRole('link', { name: 'Home' })
    expect(home.className).toContain('after:absolute')
  })

  it('opens and closes the mobile menu, closing after a link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const link of navLinks) {
      expect(within(mobileNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    await user.click(within(mobileNav).getByRole('link', { name: 'About Us' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
