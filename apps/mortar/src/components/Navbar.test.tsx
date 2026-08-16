import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks, siteName } from '../data'

describe('Navbar', () => {
  it('shows the wordmark and the seven navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const link of navLinks) {
      expect(within(desktopNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu via the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: 'About' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
