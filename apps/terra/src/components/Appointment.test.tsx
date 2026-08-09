import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('shows the heading and the appointment form fields', () => {
    render(<Appointment />)
    expect(screen.getByRole('heading', { name: 'Make An Appointment' })).toBeInTheDocument()

    expect(screen.getByLabelText('Your Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows a thank-you status after submitting the form', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Your Full Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'Booking a massage please.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status', { name: '' })).toHaveTextContent(
      /Thank you! Your appointment request has been sent/,
    )
  })
})
