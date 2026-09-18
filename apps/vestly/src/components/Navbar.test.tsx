import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo with brand gold and white text', () => {
    render(<Navbar />)
    expect(screen.getByText('in')).toHaveClass('text-brand')
    expect(screen.getByText('vest')).toHaveClass('text-white')
  })

  it('displays crypto prices in the top bar', () => {
    render(<Navbar />)
    expect(screen.getByText(/BTC \$10,200/)).toBeInTheDocument()
    expect(screen.getByText(/ETH \$979/)).toBeInTheDocument()
    expect(screen.getByText(/LTC \$230/)).toBeInTheDocument()
  })

  it('renders register and login buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /register/i })).toHaveClass('bg-brand')
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('displays phone and email contact info', () => {
    render(<Navbar />)
    expect(screen.getByText('+825 25 800 800')).toBeInTheDocument()
    expect(screen.getByText('office@vestly.com')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    // Click a mobile link — should close the menu
    const mobileLinks = screen.getAllByText('About Us')
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    // Menu should close (button reverts to "Open menu")
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
