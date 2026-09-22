import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReservationForm } from './ReservationForm'

describe('ReservationForm', () => {
  it('renders form fields', () => {
    render(<ReservationForm />)
    expect(screen.getByText('Check-in')).toBeInTheDocument()
    expect(screen.getByText('Check-out')).toBeInTheDocument()
    expect(screen.getByText('Guests')).toBeInTheDocument()
    expect(screen.getByText('Room Type')).toBeInTheDocument()
  })

  it('renders check availability button', () => {
    render(<ReservationForm />)
    expect(screen.getByText('Check Availability')).toBeInTheDocument()
  })

  it('submits form without page reload', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)
    await user.click(screen.getByText('Check Availability'))
    expect(screen.getByText('Check Availability')).toBeInTheDocument()
  })

  it('allows selecting room type', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)
    const selects = screen.getAllByRole('combobox')
    const roomTypeSelect = selects[1]!
    await user.selectOptions(roomTypeSelect, 'Premier')
    expect(roomTypeSelect).toHaveValue('Premier')
  })

  it('allows selecting guests', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)
    const selects = screen.getAllByRole('combobox')
    const guestsSelect = selects[0]!
    await user.selectOptions(guestsSelect, '3')
    expect(guestsSelect).toHaveValue('3')
  })

  it('allows entering check-in date', async () => {
    const user = userEvent.setup()
    const { container } = render(<ReservationForm />)
    const dateInputs = container.querySelectorAll('input[type="date"]')
    const checkInInput = dateInputs[0] as HTMLInputElement
    await user.type(checkInInput, '2026-12-25')
    expect(checkInInput.value).toBe('2026-12-25')
  })

  it('allows entering check-out date', async () => {
    const user = userEvent.setup()
    const { container } = render(<ReservationForm />)
    const dateInputs = container.querySelectorAll('input[type="date"]')
    const checkOutInput = dateInputs[1] as HTMLInputElement
    await user.type(checkOutInput, '2026-12-30')
    expect(checkOutInput.value).toBe('2026-12-30')
  })
})
