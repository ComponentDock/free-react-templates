import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders site name', () => {
    render(<Navbar />)
    expect(screen.getByText('Medical')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /HOME/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /ABOUT/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /DOCTORS/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /CONTACT/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    expect(toggle).toBeInTheDocument()

    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()

    // Mobile links should now be visible
    const mobileLinks = screen.getAllByText(/ABOUT/i)
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /Open menu/i }))

    const aboutLinks = screen.getAllByText(/ABOUT/i)
    fireEvent.click(aboutLinks[aboutLinks.length - 1]!)

    // Should revert to open button
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })
})
