import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { AppointmentForm } from './AppointmentForm'
import {
  appointmentTitle,
  nameLabel,
  emailLabel,
  phoneLabel,
  departmentLabel,
  dateLabel,
  messageLabel,
  submitLabel,
  confirmationMessage,
} from '../data'

describe('AppointmentForm', () => {
  it('renders the section heading', () => {
    render(<AppointmentForm />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(appointmentTitle)
  })

  it('renders all form fields', () => {
    render(<AppointmentForm />)
    expect(screen.getByLabelText(new RegExp(nameLabel))).toBeInTheDocument()
    expect(screen.getByLabelText(new RegExp(emailLabel))).toBeInTheDocument()
    expect(screen.getByLabelText(new RegExp(phoneLabel))).toBeInTheDocument()
    expect(screen.getByLabelText(new RegExp(departmentLabel))).toBeInTheDocument()
    expect(screen.getByLabelText(new RegExp(dateLabel))).toBeInTheDocument()
    expect(screen.getByLabelText(new RegExp(messageLabel))).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<AppointmentForm />)
    expect(screen.getByRole('button', { name: submitLabel })).toBeInTheDocument()
  })

  it('shows confirmation after submission', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)

    await user.type(screen.getByLabelText(/your name/i), 'John Doe')
    await user.type(screen.getByLabelText(/your email/i), 'john@example.com')
    await user.selectOptions(screen.getByLabelText(/department/i), 'cardiology')
    await user.type(screen.getByLabelText(/preferred date/i), '2026-02-15')
    await user.click(screen.getByRole('button', { name: submitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(confirmationMessage)
  })

  it('allows typing in the name field', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)

    const nameInput = screen.getByLabelText(/your name/i)
    await user.type(nameInput, 'Test Name')
    expect(nameInput).toHaveValue('Test Name')
  })
})
