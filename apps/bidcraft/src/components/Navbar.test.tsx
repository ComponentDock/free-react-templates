import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Bidcraft brand', () => {
    render(<Navbar />)
    expect(screen.getByText('Bidcraft')).toBeInTheDocument()
  })

  it('renders main navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sell' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Sign In / Register link', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Sign In / Register').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('shows dropdown on hover for Services', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const servicesLink = screen.getByRole('link', { name: /Services/ })
    await user.hover(servicesLink.closest('div')!)
    expect(screen.getByText('Sell Items')).toBeInTheDocument()
    expect(screen.getByText('Buy Items')).toBeInTheDocument()
    expect(screen.getByText('Submit a Bid')).toBeInTheDocument()
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const servicesLink = screen.getByRole('link', { name: /Services/ })
    const wrapper = servicesLink.closest('div')!
    await user.hover(wrapper)
    expect(screen.getByText('Sell Items')).toBeInTheDocument()
    await user.unhover(wrapper)
    expect(screen.queryByText('Sell Items')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(
      screen
        .getByRole('navigation', { name: 'Mobile navigation' })
        .querySelector('a[href="#home"]')!,
    )
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('has accessible nav landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
