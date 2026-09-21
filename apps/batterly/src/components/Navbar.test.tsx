import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Batterly')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders top bar with currency and language selectors', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Currency')).toBeInTheDocument()
    expect(screen.getByLabelText('Language')).toBeInTheDocument()
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })

  it('renders icon buttons for search, wishlist, cart', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByLabelText('Wishlist')).toBeInTheDocument()
    expect(screen.getByLabelText('Cart')).toBeInTheDocument()
  })

  it('shows cart badge count', () => {
    render(<Navbar />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('toggles pages dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pagesBtn = screen.getByRole('button', { name: /pages/i })
    expect(screen.queryByText('Shop Details')).not.toBeInTheDocument()
    await user.click(pagesBtn)
    expect(screen.getByText('Shop Details')).toBeInTheDocument()
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Toggle menu')
    await user.click(menuBtn)
    // Mobile menu shows nav links (duplicate set for mobile)
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThan(1)
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Toggle menu')
    await user.click(menuBtn)
    await user.click(menuBtn)
    // Back to single set of nav links
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBe(1)
  })
})
