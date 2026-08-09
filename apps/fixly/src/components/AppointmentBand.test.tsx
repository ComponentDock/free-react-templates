import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppointmentBand } from './AppointmentBand'

describe('AppointmentBand', () => {
  it('renders the headline and appointment CTA', () => {
    render(<AppointmentBand />)
    expect(
      screen.getByRole('heading', { name: /Schedule Your Appointment Today/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Make An Appointment/i })).toBeInTheDocument()
  })
})
