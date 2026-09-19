import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Closet')).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search items')).toBeInTheDocument()
  })

  it('renders the cart icon', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
  })

  it('renders the user icon', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('User account')).toBeInTheDocument()
  })

  it('renders the phone number on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 912-252-7350')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('links to the homepage', () => {
    render(<Navbar />)
    const brandLink = screen.getByText('Closet').closest('a')
    expect(brandLink).toHaveAttribute('href', '#')
  })
})
