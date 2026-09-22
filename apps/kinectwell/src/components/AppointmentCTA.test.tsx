import { render, screen } from '@testing-library/react'
import { AppointmentCTA } from './AppointmentCTA'
import { describe, expect, it } from 'vitest'

describe('AppointmentCTA', () => {
  it('renders the CTA heading', () => {
    render(<AppointmentCTA />)
    expect(screen.getByRole('heading', { name: /book your appointment/i })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<AppointmentCTA />)
    expect(screen.getByText(/first step toward recovery/)).toBeInTheDocument()
  })

  it('renders the appointment button', () => {
    render(<AppointmentCTA />)
    expect(screen.getByRole('link', { name: /book appointment/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('has section id for navigation', () => {
    render(<AppointmentCTA />)
    expect(document.getElementById('appointment')).toBeInTheDocument()
  })
})
