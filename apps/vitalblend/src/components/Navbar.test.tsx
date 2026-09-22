import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('VitalBlend')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the Make an Appointment CTA button on desktop', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(hamburger)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Mobile nav links should be visible
    const mobileNav = screen.getByLabelText('Mobile navigation')
    expect(mobileNav).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    await user.click(aboutLinks[1]!)

    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('closes mobile menu when Make an Appointment is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const ctaLinks = screen.getAllByRole('link', { name: 'Make an Appointment' })
    await user.click(ctaLinks[1]!)

    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })
})
