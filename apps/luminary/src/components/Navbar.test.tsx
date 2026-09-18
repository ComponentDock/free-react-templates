import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo with colored dot', () => {
    render(<Navbar />)
    expect(screen.getByText('Luminary')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Services', 'FAQ', 'About', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('has correct href anchors', () => {
    render(<Navbar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveAttribute('href', '#home')
  })

  it('shows the mobile toggle button', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })

    // Open
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    // Close
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })

    await user.click(toggle)
    // Click a mobile link
    const mobileLinks = screen.getAllByText('Services')
    // The mobile link is the second one (desktop is first)
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('is sticky', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('sticky')
  })
})
