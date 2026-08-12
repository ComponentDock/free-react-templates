import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('From'), '01 / 08 / 2026')
  await user.type(screen.getByLabelText('To'), '05 / 08 / 2026')
  await user.click(screen.getByRole('button', { name: 'Increase adults' }))
  await user.click(screen.getByRole('button', { name: 'Increase adults' }))
  await user.click(screen.getByRole('button', { name: 'Increase children' }))
  await user.click(screen.getByRole('button', { name: 'Increase rooms' }))
  await user.selectOptions(screen.getByLabelText('Room type'), 'Double Room')
}

describe('BookingForm', () => {
  it('renders the Check Availability heading', () => {
    render(<BookingForm />)
    expect(screen.getByRole('heading', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('renders date fields, guest steppers and the room dropdown', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('From')).toBeInTheDocument()
    expect(screen.getByLabelText('To')).toBeInTheDocument()

    expect(screen.getByText('Adults')).toBeInTheDocument()
    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByLabelText('Adults')).toHaveValue('0')
    expect(screen.getByLabelText('Children')).toHaveValue('0')
    expect(screen.getByLabelText('Rooms')).toHaveValue('0')

    const roomSelect = screen.getByLabelText('Room type')
    expect(roomSelect).toHaveDisplayValue('Eg. Master suite')
    expect(screen.getByRole('option', { name: 'Special Room' })).toBeInTheDocument()
  })

  it('adjusts guest counts with the stepper buttons and never goes below zero', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.click(screen.getByRole('button', { name: 'Increase adults' }))
    await user.click(screen.getByRole('button', { name: 'Increase adults' }))
    expect(screen.getByLabelText('Adults')).toHaveValue('2')

    await user.click(screen.getByRole('button', { name: 'Decrease adults' }))
    expect(screen.getByLabelText('Adults')).toHaveValue('1')

    await user.click(screen.getByRole('button', { name: 'Decrease adults' }))
    expect(screen.getByLabelText('Adults')).toHaveValue('0')

    await user.click(screen.getByRole('button', { name: 'Decrease adults' }))
    expect(screen.getByLabelText('Adults')).toHaveValue('0')
  })

  it('shows per-field errors for an empty submission', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.click(screen.getByRole('button', { name: 'Go' }))

    expect(screen.getByText('Please enter a check-in date')).toBeInTheDocument()
    expect(screen.getByText('Please enter a check-out date')).toBeInTheDocument()
    expect(screen.getByText('At least one adult is required')).toBeInTheDocument()
    expect(screen.getByText('At least one room is required')).toBeInTheDocument()
    expect(screen.getByText('Please choose a room type')).toBeInTheDocument()
  })

  it('rejects dates that are not in dd / mm / yyyy format', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.type(screen.getByLabelText('From'), 'yesterday')
    await user.click(screen.getByRole('button', { name: 'Go' }))

    expect(screen.getByText('Please use the dd / mm / yyyy format')).toBeInTheDocument()
  })

  it('shows a success confirmation for a valid submission', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Go' }))

    expect(screen.getByRole('status')).toHaveTextContent(/reservation request has been received/i)
    expect(screen.queryByRole('heading', { name: 'Check Availability' })).not.toBeInTheDocument()
  })
})
