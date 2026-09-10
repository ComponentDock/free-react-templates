import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo, phone number, hours, and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    expect(screen.getByText('Veloce')).toBeInTheDocument()
    expect(screen.getByText('(+123) 4567-7890-123')).toBeInTheDocument()
    expect(screen.getByText('Mon-Sat: 10:00 - 16:00 / Sunday Close')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pages' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  })

  it('renders search and cart buttons', () => {
    render(<Navbar />)

    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shopping cart' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(screen.queryByText('Home')).toBeInTheDocument()

    await user.click(menuButton)

    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('shows Find us on map link', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Find us on map/ })).toBeInTheDocument()
  })
})
