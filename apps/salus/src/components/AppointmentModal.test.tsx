import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentModal } from './AppointmentModal'
import { appointmentDepartments, appointmentDoctors } from '../data'

describe('AppointmentModal', () => {
  it('renders nothing when closed', () => {
    render(<AppointmentModal open={false} onClose={vi.fn()} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the full field set when open', () => {
    render(<AppointmentModal open onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog', { name: 'Make an Appointment' })
    expect(dialog).toBeInTheDocument()

    expect(screen.getByLabelText('Select Department')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Doctor')).toBeInTheDocument()
    expect(screen.getByLabelText('Pick date')).toBeInTheDocument()
    expect(screen.getByLabelText('Suitable time')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone no.')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()

    for (const item of appointmentDepartments) {
      expect(screen.getByRole('option', { name: item })).toBeInTheDocument()
    }
    for (const item of appointmentDoctors) {
      expect(screen.getByRole('option', { name: item })).toBeInTheDocument()
    }
  })

  it('closes via the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<AppointmentModal open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes via the backdrop', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<AppointmentModal open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close modal' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('shows a success message on submit', async () => {
    const user = userEvent.setup()
    render(<AppointmentModal open onClose={vi.fn()} />)

    await user.selectOptions(screen.getByLabelText('Select Department'), 'Eye Care')
    await user.selectOptions(screen.getByLabelText('Select Doctor'), 'Aria Bennett')
    await user.type(screen.getByLabelText('Pick date'), '2026-09-01')
    await user.type(screen.getByLabelText('Suitable time'), '10:30')
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Phone no.'), '123456789')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Confirm' }))

    expect(screen.getByRole('status')).toHaveTextContent(/request has been received/)
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
  })

  it('resets the form when reopened', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const { rerender } = render(<AppointmentModal open onClose={onClose} />)

    await user.selectOptions(screen.getByLabelText('Select Department'), 'Eye Care')
    await user.selectOptions(screen.getByLabelText('Select Doctor'), 'Aria Bennett')
    await user.type(screen.getByLabelText('Pick date'), '2026-09-01')
    await user.type(screen.getByLabelText('Suitable time'), '10:30')
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Phone no.'), '123456789')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Confirm' }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    rerender(<AppointmentModal open={false} onClose={onClose} />)
    rerender(<AppointmentModal open onClose={onClose} />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
