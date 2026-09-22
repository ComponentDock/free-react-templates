import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Praxis')).toBeInTheDocument()
    expect(screen.getByText('Plastic Surgery')).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Services', 'News', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('displays working hours and phone number', () => {
    render(<Navbar />)
    expect(screen.getByText(/Mo–Sat: 8am–9pm/)).toBeInTheDocument()
    expect(screen.getByText(/\+34 586 778 8892/)).toBeInTheDocument()
  })

  it('shows Make an Appointment button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('renders social links with accessible labels', () => {
    render(<Navbar />)
    for (const label of ['Instagram', 'Facebook', 'Twitter']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(hamburger)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(hamburger)
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    await user.click(aboutLinks[1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when appointment button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(hamburger)
    // There are two "Make an Appointment" links — desktop (hidden) and mobile
    const appointmentLinks = screen.getAllByRole('link', { name: 'Make an Appointment' })
    // The mobile one is the second visible one
    await user.click(appointmentLinks[1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
