import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the Get Certificate button with an accessible name', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Get Certificate' })).toBeInTheDocument()
  })

  it('renders all seven desktop nav links with Home active', () => {
    render(<Navbar />)

    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home.className).toContain('text-brand')
  })

  it('opens and closes the mobile menu with the Menu toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // With the menu open both the desktop and mobile links are rendered;
    // clicking the mobile (last) link closes the panel.
    const pricingLinks = screen.getAllByRole('link', { name: 'Pricing' })
    await user.click(pricingLinks[pricingLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
