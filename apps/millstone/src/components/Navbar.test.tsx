import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Millstone logo', () => {
    render(<Navbar />)
    expect(screen.getAllByText(/Millstone/).length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Industries', 'Works', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })

  it('renders the Get A Quote CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Get A Quote/i })).toBeInTheDocument()
  })

  it('has 6 navigation links in the nav list', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    const navLinks = nav.querySelectorAll('ul a')
    expect(navLinks.length).toBe(6)
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })

    // Mobile menu: no duplicate mobile links initially (only desktop)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // Open mobile menu
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Mobile menu renders additional links (desktop + mobile = 12 total)
    const allLinks = screen.getAllByText('Home')
    expect(allLinks.length).toBe(2)

    // Close mobile menu
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
