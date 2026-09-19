import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Lacecraft')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    for (const link of ['Shop', 'Categories', 'New Arrivals', 'Sale', 'About']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the main navigation landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('renders search, wishlist, and cart buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Wishlist' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cart' })).toBeInTheDocument()
  })
})
