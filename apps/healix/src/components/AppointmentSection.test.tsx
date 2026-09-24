import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AppointmentSection } from './AppointmentSection'

describe('AppointmentSection', () => {
  it('renders the welcome heading', () => {
    render(<AppointmentSection />)
    expect(screen.getByRole('heading', { name: /welcome to/i })).toBeInTheDocument()
  })

  it('renders the appointment form heading', () => {
    render(<AppointmentSection />)
    expect(screen.getByRole('heading', { name: /appointment form/i })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<AppointmentSection />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/department/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/preferred time/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<AppointmentSection />)
    expect(screen.getByRole('button', { name: /request appointment/i })).toBeInTheDocument()
  })

  it('renders the make an appointment CTA', () => {
    render(<AppointmentSection />)
    expect(screen.getByRole('link', { name: /make an appointment/i })).toBeInTheDocument()
  })
})
