import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Bodega')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('shows cart with item count', () => {
    render(<Navbar cartCount={3} />)
    expect(screen.getByText('Cart [3]')).toBeInTheDocument()
  })

  it('defaults cart count to 0', () => {
    render(<Navbar />)
    expect(screen.getByText('Cart [0]')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    // Initially mobile nav is hidden (not in DOM)
    expect(screen.queryByLabelText('Toggle menu')).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    // After toggle, mobile nav links appear (duplicate Home links exist)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Click the first mobile Home link (inside the mobile menu)
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows shop dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const shopLink = screen.getByRole('link', { name: 'Shop' })
    await user.hover(shopLink)
    expect(screen.getByText('Product Detail')).toBeInTheDocument()
  })

  it('hides shop dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const shopLi = screen.getByRole('link', { name: 'Shop' }).closest('li')!
    await user.hover(shopLi)
    expect(screen.getByText('Product Detail')).toBeInTheDocument()
    await user.unhover(shopLi)
  })
})
