import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links and the phone order button', () => {
    render(<Navbar />)

    expect(screen.getByText('Pieslice')).toBeInTheDocument()

    const navLinks = ['Home', 'About', 'Menu', 'Best Sellers', 'Contact']
    for (const label of navLinks) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('link', { name: /ORDER: \+34/ })).toHaveAttribute(
      'href',
      'tel:+346857788892',
    )
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)

    // After clicking, button label changes to "Close menu"
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Mobile nav should be visible
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeVisible()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open menu
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)

    // Click a mobile nav link (the first "Home" link inside the mobile nav)
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    const homeLink = mobileNav.querySelector('a[href="#home"]') as HTMLElement
    await user.click(homeLink)

    // Menu should close (button label back to "Open menu")
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
