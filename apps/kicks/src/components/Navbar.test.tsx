import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Kicks/ })).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'Men', 'Women', 'About', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders search input, search buttons, wishlist, and cart', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search products')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Search' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: 'Wishlist' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cart with 0 items' })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const homeLink = mobileNav.querySelector('a[href="#home"]')!
    await user.click(homeLink)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
