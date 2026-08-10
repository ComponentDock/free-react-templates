import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('shows the Book a Appointment heading and form fields', () => {
    render(<Appointment />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Book a Appointment' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Appointment' })).toBeInTheDocument()
  })

  it('shows a confirmation after submitting the form', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('First Name'), 'Alex')
    await user.type(screen.getByLabelText('Last Name'), 'Morgan')
    await user.type(screen.getByLabelText('Phone'), '555-0100')
    await user.click(screen.getByRole('button', { name: 'Appointment' }))

    expect(screen.getByText(/Thanks, Alex!/)).toBeInTheDocument()
    expect(screen.queryByLabelText('First Name')).not.toBeInTheDocument()
  })
})
