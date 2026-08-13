import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppointmentForm } from './AppointmentForm'

function fill(values: { name?: string; email?: string; date?: string; message?: string }) {
  if (values.name !== undefined) {
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: values.name } })
  }
  if (values.email !== undefined) {
    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: values.email } })
  }
  if (values.date !== undefined) {
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: values.date } })
  }
  if (values.message !== undefined) {
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: values.message } })
  }
}

describe('AppointmentForm', () => {
  it('renders the heading, all fields and the full-width submit button', () => {
    render(<AppointmentForm />)
    expect(screen.getByRole('heading', { level: 3, name: 'appointment now' })).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    const submit = screen.getByRole('button', { name: 'appointment now' })
    expect(submit).toHaveClass('w-full')
  })

  it('shows validation messages and does not submit when required fields are empty', () => {
    render(<AppointmentForm />)
    fireEvent.click(screen.getByRole('button', { name: 'appointment now' }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Date is required')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
  })

  it('rejects an invalid email with a message', () => {
    render(<AppointmentForm />)
    fill({ name: 'Jane Doe', email: 'not-an-email', date: '2026-09-01' })
    fireEvent.click(screen.getByRole('button', { name: 'appointment now' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
  })

  it('clears a field error as soon as the field is edited', () => {
    render(<AppointmentForm />)
    fireEvent.click(screen.getByRole('button', { name: 'appointment now' }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Jane' } })
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('shows a success message after a valid submit', () => {
    render(<AppointmentForm />)
    fill({ name: 'Jane Doe', email: 'jane@example.com', date: '2026-09-01', message: 'Hello' })
    fireEvent.click(screen.getByRole('button', { name: 'appointment now' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Your appointment request has been received.',
    )
    expect(screen.queryByLabelText('Your Name')).not.toBeInTheDocument()
  })
})
