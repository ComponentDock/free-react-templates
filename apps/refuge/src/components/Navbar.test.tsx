import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('REFUGE')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Get A Quote CTA button', () => {
    render(<Navbar />)
    const ctaButtons = screen.getAllByText('Get A Quote')
    expect(ctaButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('toggles insurance dropdown on desktop', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const insuranceBtn = screen.getByText('Insurance')
    await user.click(insuranceBtn)
    expect(screen.getByText('Home Insurance')).toBeInTheDocument()
    expect(screen.getByText('Auto Insurance')).toBeInTheDocument()
    expect(screen.getByText('Travel Insurance')).toBeInTheDocument()
  })
})
