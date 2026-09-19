import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Glint/i })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    // The second one is the mobile link
    await user.click(mobileLinks[1]!)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('renders Get Appointment button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Get Appointment/i })).toBeInTheDocument()
  })
})
