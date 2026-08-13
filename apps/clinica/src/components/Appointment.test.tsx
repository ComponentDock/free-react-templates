import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Appointment } from './Appointment'
import { appointment } from '../data'

const fillValid = () => {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Jane Doe' } })
  fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '01654.066.456' } })
  fireEvent.change(screen.getByLabelText('Doctor'), { target: { value: 'saiful islam' } })
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jane@example.com' } })
  fireEvent.change(screen.getByLabelText('Message'), {
    target: { value: 'I would like to book a checkup.' },
  })
}

describe('Appointment', () => {
  it('renders the title, fields, doctor options and submit button', () => {
    render(<Appointment />)
    expect(screen.getByText(appointment.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: appointment.title })).toBeInTheDocument()

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Doctor')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()

    const doctorSelect = screen.getByLabelText('Doctor') as HTMLSelectElement
    expect(doctorSelect.options).toHaveLength(appointment.doctors.length + 1)
    for (const doctor of appointment.doctors) {
      expect(screen.getByRole('option', { name: doctor })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: /Submit Now/ })).toBeInTheDocument()
    expect(screen.getByAltText(appointment.alt)).toBeInTheDocument()
  })

  it('shows validation messages on an empty submit and no success', () => {
    render(<Appointment />)
    fireEvent.click(screen.getByRole('button', { name: /Submit Now/ }))

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Phone is required')).toBeInTheDocument()
    expect(screen.getByText('Please choose a doctor')).toBeInTheDocument()
    expect(screen.getByText('Email address is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects a malformed email', () => {
    render(<Appointment />)
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: /Submit Now/ }))
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success message on a valid submit', () => {
    render(<Appointment />)
    fillValid()
    fireEvent.click(screen.getByRole('button', { name: /Submit Now/ }))
    expect(screen.getByRole('status')).toHaveTextContent('Your appointment request has been sent!')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
