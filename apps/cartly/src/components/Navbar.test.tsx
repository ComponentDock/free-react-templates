import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and navigation links', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /Cartly/i })
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('navigation', { name: /Primary/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /^Home$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /^Shop$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /^Blog$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /^Contact$/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders icon links with accessible names', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: /Search/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /^Cart$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Account/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Wishlist/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    render(<Navbar />)
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /Open menu/i })

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    render(<Navbar />)
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    // Click the mobile "Home" link (first one in the mobile nav)
    const mobileNav = screen.getByRole('navigation', { name: /Mobile/i })
    const homeLink = mobileNav.querySelector('a')!
    await user.click(homeLink)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })
})
