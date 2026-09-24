import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppointmentForm from './AppointmentForm'

describe('AppointmentForm', () => {
  it('renders heading', () => {
    render(<AppointmentForm />)
    expect(screen.getByText('Book an Appointment')).toBeInTheDocument()
  })

  it('renders all 6 form fields', () => {
    render(<AppointmentForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Specialty')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Doctor')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<AppointmentForm />)
    expect(screen.getByRole('button', { name: /Make an Appointment/ })).toBeInTheDocument()
  })

  it('allows filling in fields and submitting', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)

    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.selectOptions(screen.getByLabelText('Specialty'), 'Cardiology')
    await user.type(screen.getByLabelText('Phone'), '1234567890')
    await user.selectOptions(screen.getByLabelText('Doctor'), 'Dr. Melissa Smith')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Date'), '2026-10-01')

    expect(screen.getByLabelText('Name')).toHaveValue('John Doe')
    expect(screen.getByLabelText('Specialty')).toHaveValue('Cardiology')
    expect(screen.getByLabelText('Phone')).toHaveValue('1234567890')
    expect(screen.getByLabelText('Doctor')).toHaveValue('Dr. Melissa Smith')
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com')
    expect(screen.getByLabelText('Date')).toHaveValue('2026-10-01')

    await user.click(screen.getByRole('button', { name: /Make an Appointment/ }))
  })
})
