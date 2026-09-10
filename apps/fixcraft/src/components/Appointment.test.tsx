import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders heading', () => {
    render(<Appointment />)
    expect(screen.getByText('Free Consultation')).toBeDefined()
  })

  it('renders all form fields', () => {
    render(<Appointment />)
    expect(screen.getByLabelText('Your Name')).toBeDefined()
    expect(screen.getByLabelText('Phone')).toBeDefined()
    expect(screen.getByLabelText('Date')).toBeDefined()
    expect(screen.getByLabelText('Time')).toBeDefined()
    expect(screen.getByLabelText('Message')).toBeDefined()
  })

  it('shows confirmation after valid submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.type(screen.getByLabelText('Your Name'), 'John')
    await user.type(screen.getByLabelText('Phone'), '+1234567890')
    await user.type(screen.getByLabelText('Date'), '2026-10-01')
    await user.type(screen.getByLabelText('Time'), '10:30')
    await user.type(screen.getByLabelText('Message'), 'Need engine check')
    await user.click(screen.getByText('Send message'))
    expect(screen.getByText(/Booking confirmed/)).toBeDefined()
  })

  it('does not confirm when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.click(screen.getByText('Send message'))
    expect(screen.queryByText(/Booking confirmed/)).toBeNull()
  })
})
