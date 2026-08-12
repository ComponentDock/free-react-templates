import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EmergencyBand } from './EmergencyBand'
import { contact } from '../data'

describe('EmergencyBand', () => {
  it('renders the emergency phone panel', () => {
    render(<EmergencyBand onOpenAppointment={vi.fn()} />)

    expect(screen.getByRole('heading', { name: 'For Any Emergency Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contact.phoneEmergency })).toBeInTheDocument()
  })

  it('renders the online appointment panel and opens the modal', async () => {
    const user = userEvent.setup()
    const onOpenAppointment = vi.fn()
    render(<EmergencyBand onOpenAppointment={onOpenAppointment} />)

    expect(screen.getByRole('heading', { name: 'Make an Online Appointment' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Make an Appointment' }))
    expect(onOpenAppointment).toHaveBeenCalledTimes(1)
  })
})
