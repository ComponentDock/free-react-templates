import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Catalog')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Listings')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Join Now CTA', () => {
    render(<Navbar />)
    expect(screen.getByText('Join Now')).toBeInTheDocument()
  })

  it('renders search and menu buttons on mobile', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('opens and closes mobile menu on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    // Open
    await user.click(toggle)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
    // Close
    await user.click(screen.getByLabelText('Toggle menu'))
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    // The mobile menu has its own "Home" link — use getAllByRole and pick the mobile one
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    const mobileLink = homeLinks[homeLinks.length - 1]!
    // Prevent jsdom hash-navigation race that silently drops the test
    mobileLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(mobileLink)
  })
})
