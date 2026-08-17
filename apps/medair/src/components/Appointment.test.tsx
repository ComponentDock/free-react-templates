import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders the Who We Are column and the Drop A Message form fields', () => {
    render(<Appointment />)

    expect(screen.getByRole('heading', { name: 'We Best Nutrition' })).toBeInTheDocument()
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
    expect(screen.getByText('Good Products')).toBeInTheDocument()
    expect(screen.getByText('Natural & Healthy Foods')).toBeInTheDocument()

    expect(screen.getByLabelText('Your Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows client-side errors and does not submit when fields are invalid', () => {
    render(<Appointment />)

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.getByText('Please write a short message.')).toBeInTheDocument()
    expect(screen.getAllByRole('alert').length).toBe(3)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('shows a confirmation state after a valid submit', () => {
    render(<Appointment />)

    fireEvent.change(screen.getByLabelText('Your Full Name'), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'jane@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Select Subject'), {
      target: { value: 'Personal Nutrition' },
    })
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'I would like to book a session.' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/has been sent/)
  })
})
