import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

const validValues = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '555-019-9005',
  department: 'Cardiology',
  message: 'I would like a check-up next week.',
}

async function fillForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Name'), validValues.name)
  await user.type(screen.getByLabelText('Email'), validValues.email)
  await user.type(screen.getByLabelText('Phone'), validValues.phone)
  await user.selectOptions(screen.getByLabelText('Department'), validValues.department)
  await user.type(screen.getByLabelText('Message'), validValues.message)
}

describe('Appointment', () => {
  it('renders the heading, clinic details, and department options', () => {
    render(<Appointment />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Request an Appointment' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('123 Wellness Avenue, Medical District, Springfield'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 (555) 019-9005' })).toHaveAttribute(
      'href',
      'tel:+15550199005',
    )
    expect(screen.getByRole('link', { name: 'hello@medora.clinic' })).toHaveAttribute(
      'href',
      'mailto:hello@medora.clinic',
    )
    expect(screen.getByText(/mon–sat: 8:00 am – 8:00 pm/i)).toBeInTheDocument()

    const select = screen.getByLabelText('Department')
    for (const option of [
      'Cardiology',
      'Pediatrics',
      'Orthopedics',
      'Neurology',
      'Dental Care',
      'Emergency',
    ]) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(select).toHaveValue('')
  })

  it('shows a success message on a valid submission and resets the form', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await fillForm(user)
    await user.click(screen.getByRole('button', { name: 'Request Appointment' }))
    expect(screen.getByRole('status')).toHaveTextContent(/thank you, jane doe/i)
    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByLabelText('Department')).toHaveValue('')
  })

  it('blocks submission and shows errors for empty required fields', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.click(screen.getByRole('button', { name: 'Request Appointment' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument()
    expect(screen.getByText('Please choose a department')).toBeInTheDocument()
    expect(screen.getByText('Please enter a message')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission with an invalid email', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await fillForm(user)
    await user.clear(screen.getByLabelText('Email'))
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Request Appointment' }))
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('clears a field error once the user fixes the input', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.click(screen.getByRole('button', { name: 'Request Appointment' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })
})
