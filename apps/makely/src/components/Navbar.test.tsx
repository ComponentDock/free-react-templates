import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Makely logo with teal dot', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Makely/i })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // After toggle, there are two sets of nav links (desktop + mobile)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBe(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // Click a mobile nav link (the second Home link is in mobile menu)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    const mobileLink = homeLinks[1]
    expect(mobileLink).toBeDefined()
    await user.click(mobileLink!)
    // After clicking, menu should close - back to 1 Home link
    const remaining = screen.getAllByRole('link', { name: 'Home' })
    expect(remaining.length).toBe(1)
  })
})
