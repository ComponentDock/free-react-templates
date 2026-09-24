import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookAppointment from './BookAppointment'

describe('BookAppointment', () => {
  it('renders form heading', () => {
    render(<BookAppointment />)

    expect(screen.getAllByText('Book Appointment').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Make An Appointment')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<BookAppointment />)

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Department')).toBeInTheDocument()
    expect(screen.getByLabelText('Preferred Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<BookAppointment />)

    expect(screen.getByRole('button', { name: /Book Appointment/ })).toBeInTheDocument()
  })

  it('renders department options', () => {
    render(<BookAppointment />)

    expect(screen.getByText('Select Department')).toBeInTheDocument()
    expect(screen.getByText('Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Neurology')).toBeInTheDocument()
    expect(screen.getByText('Ophthalmology')).toBeInTheDocument()
    expect(screen.getByText('Orthopedics')).toBeInTheDocument()
  })

  it('updates form fields when user types', async () => {
    const user = userEvent.setup()
    render(<BookAppointment />)

    await user.type(screen.getByLabelText('Your Name'), 'John Doe')
    expect(screen.getByLabelText('Your Name')).toHaveValue('John Doe')

    await user.type(screen.getByLabelText('Email Address'), 'john@example.com')
    expect(screen.getByLabelText('Email Address')).toHaveValue('john@example.com')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<BookAppointment />)

    await user.type(screen.getByLabelText('Your Name'), 'Jane')
    await user.click(screen.getByRole('button', { name: /Book Appointment/ }))
  })

  it('selects a department from dropdown', async () => {
    const user = userEvent.setup()
    render(<BookAppointment />)

    await user.selectOptions(screen.getByLabelText('Department'), 'cardiology')
    expect(screen.getByLabelText('Department')).toHaveValue('cardiology')
  })
})
