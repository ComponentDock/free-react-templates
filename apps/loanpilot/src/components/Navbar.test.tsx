import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo with green pilot text', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Loan/i })).toBeInTheDocument()
    expect(screen.getByText('pilot')).toHaveClass('text-primary')
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Blog', 'Pages', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders the search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('About')
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
