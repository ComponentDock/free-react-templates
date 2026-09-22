import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders section heading and description', () => {
    render(<Intro />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Welcome to our Clinic')).toBeInTheDocument()
    expect(screen.getByText(/leading plastic surgery clinic/)).toBeInTheDocument()
  })

  it('displays milestone stats', () => {
    render(<Intro />)
    expect(screen.getByText('5,000+')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Patients')).toBeInTheDocument()
    expect(screen.getByText('352')).toBeInTheDocument()
    expect(screen.getByText('Face Liftings')).toBeInTheDocument()
    expect(screen.getByText('718')).toBeInTheDocument()
    expect(screen.getByText('Injectibles')).toBeInTheDocument()
  })

  it('renders appointment form with all fields', () => {
    render(<Intro />)
    // "Make an Appointment" appears as both h3 heading and button
    expect(screen.getAllByText('Make an Appointment').length).toBe(2)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Phone')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Speciality')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Doctor')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('shows success message on form submit', async () => {
    const user = userEvent.setup()
    render(<Intro />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Your Email'), 'jane@test.com')
    await user.type(screen.getByPlaceholderText('Your Phone'), '555-1234')
    await user.selectOptions(screen.getByDisplayValue('Speciality'), 'Rhinoplasty')
    await user.selectOptions(screen.getByDisplayValue('Doctor'), 'Dr. Smith')
    // Date input — use container query since date inputs may not register as textbox in jsdom
    const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement
    expect(dateInput).not.toBeNull()
    await user.type(dateInput, '2026-10-01')
    await user.click(screen.getByRole('button', { name: 'Make an Appointment' }))
    expect(screen.getByText(/Thank you/)).toBeInTheDocument()
  })
})
