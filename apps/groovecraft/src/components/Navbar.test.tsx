import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Groovecraft')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Albums', 'Events', 'News', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the cart button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /shopping cart/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Mobile nav links should be visible
    const mobileNav = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileNav.length).toBeGreaterThanOrEqual(2)
    // Close it
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Click a mobile nav link (the one inside the mobile nav)
    const links = screen.getAllByRole('link', { name: 'Albums' })
    const lastLink = links.at(-1)
    expect(lastLink).toBeDefined()
    await user.click(lastLink!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
