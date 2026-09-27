import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentForm } from './AppointmentForm'

describe('AppointmentForm', () => {
  it('renders the form heading and all fields', () => {
    render(<AppointmentForm />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /education appointment form/i,
    )
    expect(screen.getByLabelText('Title')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone number')).toBeInTheDocument()
    expect(screen.getByLabelText('Course Type')).toBeInTheDocument()
    expect(screen.getByLabelText('By phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Hours : 8am 10pm')).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /i agree/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /request an appointment/i })).toBeInTheDocument()
  })

  it('shows a thank-you message after successful submission', async () => {
    render(<AppointmentForm />)

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Mr' } })
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('Phone number'), { target: { value: '555-1234' } })
    fireEvent.change(screen.getByLabelText('Course Type'), { target: { value: 'Web Development' } })
    fireEvent.change(screen.getByLabelText('By phone'), { target: { value: 'By phone' } })
    fireEvent.change(screen.getByLabelText('Hours : 8am 10pm'), { target: { value: '8am - 10am' } })

    fireEvent.click(screen.getByRole('checkbox', { name: /i agree/i }))
    fireEvent.submit(screen.getByRole('form'))

    expect(screen.getByRole('heading', { name: /thank you/i })).toBeInTheDocument()
    expect(screen.getByText(/appointment request has been submitted/i)).toBeInTheDocument()
  })

  it('does not submit when required fields are missing', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)

    await user.click(screen.getByRole('button', { name: /request an appointment/i }))
    expect(screen.queryByRole('heading', { name: /thank you/i })).not.toBeInTheDocument()
  })

  it('does not submit when terms checkbox is not checked', () => {
    render(<AppointmentForm />)

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Dr' } })
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Jane' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jane@test.com' } })
    fireEvent.change(screen.getByLabelText('Phone number'), { target: { value: '555-0000' } })
    fireEvent.change(screen.getByLabelText('Course Type'), { target: { value: 'Data Science' } })
    fireEvent.change(screen.getByLabelText('By phone'), { target: { value: 'By email' } })
    fireEvent.change(screen.getByLabelText('Hours : 8am 10pm'), {
      target: { value: '10am - 12pm' },
    })
    // Do NOT check the terms checkbox
    fireEvent.submit(screen.getByRole('form'))

    expect(screen.queryByRole('heading', { name: /thank you/i })).not.toBeInTheDocument()
  })

  it('does not submit when terms are checked but some fields are empty', () => {
    render(<AppointmentForm />)

    // Only fill some fields, leave others empty
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Mr' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } })
    // Leave name, phone, courseType, contactMethod, hours empty
    fireEvent.click(screen.getByRole('checkbox', { name: /i agree/i }))
    fireEvent.submit(screen.getByRole('form'))

    expect(screen.queryByRole('heading', { name: /thank you/i })).not.toBeInTheDocument()
  })

  it('links to Terms and Conditions', () => {
    render(<AppointmentForm />)
    const termsLink = screen.getByRole('link', { name: /terms and conditions/i })
    expect(termsLink).toHaveAttribute('href', '#terms')
  })

  it('has correct number of select fields', () => {
    render(<AppointmentForm />)
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(3) // Course Type, By phone, Hours
  })
})
