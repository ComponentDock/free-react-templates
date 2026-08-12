import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'
import { contact } from '../data'

describe('Services', () => {
  it('renders the three service cards', () => {
    render(<Services onOpenAppointment={vi.fn()} />)

    expect(screen.getByRole('heading', { name: 'Hospitality' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Emergency Care' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Chamber Service' })).toBeInTheDocument()
  })

  it('renders the Apply For a Bed link and the emergency phone', () => {
    render(<Services onOpenAppointment={vi.fn()} />)

    expect(screen.getByRole('link', { name: 'Apply For a Bed' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contact.phoneServices })).toBeInTheDocument()
  })

  it('opens the appointment modal from the Chamber Service card', async () => {
    const user = userEvent.setup()
    const onOpenAppointment = vi.fn()
    render(<Services onOpenAppointment={onOpenAppointment} />)

    await user.click(screen.getByRole('button', { name: 'Make an Appointment' }))

    expect(onOpenAppointment).toHaveBeenCalledTimes(1)
  })
})
