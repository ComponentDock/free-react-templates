import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo with brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Prop')).toBeInTheDocument()
    expect(screen.getByText('wise')).toBeInTheDocument()
  })

  it('renders all navigation links on desktop', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Service' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Property' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('has correct href for nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Service' })).toHaveAttribute('href', '#service')
  })

  it('renders hamburger button on mobile', () => {
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    expect(hamburger).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(hamburger)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Mobile menu shows links (duplicated for mobile)
    const mobileHomeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileHomeLinks.length).toBeGreaterThanOrEqual(1)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Click a mobile menu link
    const mobileLinks = screen.getAllByRole('link', { name: 'Service' })
    await user.click(mobileLinks[mobileLinks.length - 1]!)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
