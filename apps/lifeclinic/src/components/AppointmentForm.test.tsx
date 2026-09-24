import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentForm } from './AppointmentForm'
import {
  appointmentTitle,
  appointmentSubmitLabel,
  appointmentConfirmation,
  appointmentPhone,
  appointmentEmail,
  appointmentAddress,
  appointmentHours,
} from '../data'
import { describe, expect, it } from 'vitest'

describe('AppointmentForm', () => {
  it('renders the form title', () => {
    render(<AppointmentForm />)
    expect(screen.getByRole('heading', { level: 2, name: appointmentTitle })).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<AppointmentForm />)
    expect(screen.getByRole('button', { name: appointmentSubmitLabel })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<AppointmentForm />)
    expect(screen.getByText(appointmentPhone)).toBeInTheDocument()
    expect(screen.getByText(appointmentEmail)).toBeInTheDocument()
    expect(screen.getByText(appointmentAddress)).toBeInTheDocument()
    expect(screen.getByText(appointmentHours)).toBeInTheDocument()
  })

  it('shows confirmation after form submission', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)

    await user.click(screen.getByRole('button', { name: appointmentSubmitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(appointmentConfirmation)
  })

  it('has speciality and doctor dropdowns', () => {
    render(<AppointmentForm />)
    expect(screen.getByLabelText(/speciality/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/doctor/i)).toBeInTheDocument()
  })

  it('updates speciality selection', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    const select = screen.getByLabelText(/speciality/i)
    await user.selectOptions(select, 'cardiology')
    expect(select).toHaveValue('cardiology')
  })

  it('updates doctor selection', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    const select = screen.getByLabelText(/doctor/i)
    await user.selectOptions(select, 'dr-smith')
    expect(select).toHaveValue('dr-smith')
  })
})
