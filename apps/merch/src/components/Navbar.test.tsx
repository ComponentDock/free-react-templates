import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo with green dot accent', () => {
    render(<Navbar />)
    const logo = screen.getByText('Merch')
    expect(logo).toBeInTheDocument()
    const dot = screen.getByText('.')
    expect(dot).toHaveClass('text-primary-400')
  })

  it('renders all menu links', () => {
    render(<Navbar />)
    const links = ['New', 'Men', 'Women', 'Accessories', 'Jewelry', 'About', 'Contact']
    for (const label of links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders search, user, and cart icon buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /user account/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /shopping cart/i })).toBeInTheDocument()
  })

  it('shows cart badge with count', () => {
    render(<Navbar />)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Menu links should be visible in mobile menu
    expect(screen.getAllByText('New').length).toBeGreaterThanOrEqual(1)

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileLinks = screen.getAllByText('Men')
    const lastLink = mobileLinks[mobileLinks.length - 1]
    expect(lastLink).toBeDefined()
    await user.click(lastLink!)

    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})
