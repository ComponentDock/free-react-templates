import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { AppointmentForm } from './AppointmentForm'
import {
  confirmationMessage,
  reservationHeading,
  serviceOptions,
  serviceSelectLabel,
  submitLabel,
  timeOptions,
  timeSelectLabel,
} from '../data'

describe('AppointmentForm', () => {
  it('renders the heading, selects and submit button', () => {
    render(<AppointmentForm />)

    expect(screen.getByRole('heading', { level: 2, name: reservationHeading })).toBeInTheDocument()
    expect(screen.getByLabelText(serviceSelectLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(timeSelectLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: submitLabel })).toBeInTheDocument()
  })

  it('offers the service and time options', () => {
    render(<AppointmentForm />)

    const service = screen.getByLabelText(serviceSelectLabel)
    // The source repeats the same option label 4 times — expect 4 + placeholder.
    expect(screen.getAllByRole('option', { name: serviceOptions[0]! })).toHaveLength(4)
    expect(service).toHaveDisplayValue(serviceSelectLabel)

    const time = screen.getByLabelText(timeSelectLabel)
    for (const option of timeOptions) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(time).toHaveDisplayValue(timeSelectLabel)
  })

  it('shows a confirmation message on submit', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)

    await user.click(screen.getByRole('button', { name: submitLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(confirmationMessage)
  })
})
