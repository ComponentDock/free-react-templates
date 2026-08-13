import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand with its law-firm tagline', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: /Gavel/ })
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveTextContent('Gavel')
    expect(brand).toHaveTextContent('A Law Firm')
  })

  it('renders every section link on desktop', () => {
    render(<Navbar />)
    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu via the hamburger switch', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'gavel-mobile-menu')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBe(2)

    await user.click(screen.getAllByRole('link', { name: 'Home' })[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
