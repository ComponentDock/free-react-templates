import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookAppointment from './BookAppointment'

describe('BookAppointment', () => {
  it('renders form heading', () => {
    render(<BookAppointment />)

    expect(screen.getByText('Book an')).toBeInTheDocument()
    expect(screen.getByText('Appointment')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<BookAppointment />)

    expect(screen.getByLabelText('Select doctor')).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your age')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone number')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Appointment date')).toBeInTheDocument()
    expect(screen.getByLabelText('Preferred time')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<BookAppointment />)

    expect(screen.getByRole('button', { name: /Make an Appointment/ })).toBeInTheDocument()
  })

  it('renders doctor options', () => {
    render(<BookAppointment />)

    expect(screen.getByText('Please select doctor to visit')).toBeInTheDocument()
    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Emily Chen')).toBeInTheDocument()
  })

  it('updates form fields when user types', async () => {
    const user = userEvent.setup()
    render(<BookAppointment />)

    await user.type(screen.getByLabelText('Your name'), 'John Doe')
    expect(screen.getByLabelText('Your name')).toHaveValue('John Doe')

    await user.type(screen.getByLabelText('Email address'), 'john@example.com')
    expect(screen.getByLabelText('Email address')).toHaveValue('john@example.com')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<BookAppointment />)

    await user.type(screen.getByLabelText('Your name'), 'Jane')
    await user.click(screen.getByRole('button', { name: /Make an Appointment/ }))
  })

  it('selects a doctor from dropdown', async () => {
    const user = userEvent.setup()
    render(<BookAppointment />)

    await user.selectOptions(screen.getByLabelText('Select doctor'), 'Dr. James Wilson')
    expect(screen.getByLabelText('Select doctor')).toHaveValue('Dr. James Wilson')
  })
})
