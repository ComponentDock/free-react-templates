import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentPanel } from './AppointmentPanel'

describe('AppointmentPanel', () => {
  it('renders nothing when closed', () => {
    render(<AppointmentPanel open={false} onClose={() => {}} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows the appointment form fields and submit button when open', () => {
    render(<AppointmentPanel open onClose={() => {}} />)

    expect(screen.getByRole('dialog', { name: 'Book an appointment' })).toBeInTheDocument()
    for (const label of ['Full Name', 'Email Address', 'Phone Number', 'Desired Date']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByLabelText('Select Service')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Request' })).toBeInTheDocument()
  })

  it('closes when the close control is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<AppointmentPanel open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close appointment panel' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('shows a confirmation after the form is submitted', async () => {
    const user = userEvent.setup()
    render(<AppointmentPanel open onClose={() => {}} />)

    await user.type(screen.getByLabelText('Full Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '+1 234 567 890')
    fireEvent.change(screen.getByLabelText('Desired Date'), {
      target: { value: '2026-08-07' },
    })
    await user.selectOptions(screen.getByLabelText('Select Service'), 'Service 1')
    await user.click(screen.getByRole('button', { name: 'Send Request' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you! Your appointment request has been sent.',
    )
  })

  it('resets the form state when reopened', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<AppointmentPanel open onClose={() => {}} />)

    await user.type(screen.getByLabelText('Full Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '+1 234 567 890')
    fireEvent.change(screen.getByLabelText('Desired Date'), {
      target: { value: '2026-08-07' },
    })
    await user.selectOptions(screen.getByLabelText('Select Service'), 'Service 1')
    await user.click(screen.getByRole('button', { name: 'Send Request' }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    rerender(<AppointmentPanel open={false} onClose={() => {}} />)
    rerender(<AppointmentPanel open onClose={() => {}} />)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Request' })).toBeInTheDocument()
  })
})
