import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /lattice/i })).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    const allHomeLinks = screen.getAllByRole('link', { name: /^home$/i })
    expect(allHomeLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    // Before click: mobile nav container not in DOM
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
    await user.click(toggle)
    // After click: mobile nav appears
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    expect(mobileNav).toBeInTheDocument()
    // Click the mobile home link (scoped to mobile nav)
    const mobileHomeLink = within(mobileNav).getByRole('link', { name: /^home$/i })
    await user.click(mobileHomeLink)
    // Mobile nav should be gone
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })
})
