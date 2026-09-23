import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, expect, it } from 'vitest'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Kinetic')).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Services', 'Portfolio', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows hamburger button on mobile', () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    expect(btn).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Nav links in mobile menu
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2) // desktop + mobile
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileAbout = screen.getAllByText('About')
    await user.click(mobileAbout.at(-1)!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})
