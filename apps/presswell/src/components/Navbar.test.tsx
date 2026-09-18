import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Presswell/i })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('(08) 728 256 266')).toBeInTheDocument()
  })

  it('renders the appointment CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Make an Appointment/i })).toBeInTheDocument()
  })

  it('toggles the mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    // The mobile nav link is the last 'Home' link in the DOM
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[homeLinks.length - 1]!)
    // Menu should close
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })
})
