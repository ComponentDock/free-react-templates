import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Molars')).toBeInTheDocument()
  })

  it('shows desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('has a mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('opens and closes mobile menu on toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    // Mobile links should appear
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Close via toggle
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Click a mobile link (there are 2 sets — desktop hidden, mobile visible)
    // The mobile "Home" link is inside the mobile menu
    const mobileLinks = screen.getAllByText('Home')
    // The last one is the mobile link (desktop is hidden in jsdom)
    const mobileLink = mobileLinks[mobileLinks.length - 1]
    if (mobileLink) await user.click(mobileLink)

    // Menu should close
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
