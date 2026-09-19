import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Bloomfield' })).toHaveAttribute('href', '#home')
  })

  it('renders all desktop nav links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'About', 'Shop', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('has accessible search, wishlist, and cart buttons/links', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wishlist (5 items)' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cart (1 item)' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
