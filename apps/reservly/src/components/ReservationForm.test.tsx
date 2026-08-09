import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'
import { ReservationForm } from './ReservationForm'

function fillDestination(value: string) {
  fireEvent.change(screen.getByRole('textbox', { name: /your destination/i }), {
    target: { value },
  })
}

function setCheckIn(value: string) {
  fireEvent.change(screen.getByLabelText(/check in/i), { target: { value } })
}

function setCheckOut(value: string) {
  fireEvent.change(screen.getByLabelText(/check out/i), { target: { value } })
}

describe('ReservationForm', () => {
  it('renders destination, date fields, steppers and the submit button', () => {
    render(<ReservationForm />)
    expect(screen.getByRole('textbox', { name: /your destination/i })).toHaveAttribute(
      'placeholder',
      'Enter a destination or hotel name',
    )
    expect(screen.getByLabelText(/check in/i)).toHaveAttribute('type', 'date')
    expect(screen.getByLabelText(/check out/i)).toHaveAttribute('type', 'date')
    for (const label of ['Rooms', 'Adults', 'Children']) {
      expect(screen.getByText(label)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: `Decrease ${label}` })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: `Increase ${label}` })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /check availability/i })).toBeInTheDocument()
  })

  it('starts with Rooms 1, Adults 1, Children 0', () => {
    render(<ReservationForm />)
    expect(screen.getByTestId('stepper-rooms')).toHaveTextContent('1')
    expect(screen.getByTestId('stepper-adults')).toHaveTextContent('1')
    expect(screen.getByTestId('stepper-children')).toHaveTextContent('0')
  })

  it('shows validation messages when required fields are missing', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)
    await user.click(screen.getByRole('button', { name: /check availability/i }))
    expect(screen.getByText('Please enter a destination')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date')).toBeInTheDocument()
    expect(screen.queryByText(/adults? ·/)).not.toBeInTheDocument()
  })

  it('shows a summary when the form is valid', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)
    fillDestination('Lake Como')
    setCheckIn('2026-08-10')
    setCheckOut('2026-08-14')
    await user.click(screen.getByRole('button', { name: 'Increase Adults' }))
    await user.click(screen.getByRole('button', { name: 'Increase Children' }))
    await user.click(screen.getByRole('button', { name: /check availability/i }))
    expect(
      screen.getByText(/2 adults, 1 child, 1 room · 2026-08-10 → 2026-08-14 · Lake Como/i),
    ).toBeInTheDocument()
    expect(screen.queryByText('Please enter a destination')).not.toBeInTheDocument()
  })

  it('rejects a check-out date before the check-in date', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)
    fillDestination('Lake Como')
    setCheckIn('2026-08-14')
    setCheckOut('2026-08-10')
    await user.click(screen.getByRole('button', { name: /check availability/i }))
    expect(screen.getByText('Check-out must be on or after check-in')).toBeInTheDocument()
    expect(screen.queryByText(/· 2026-08-14 → 2026-08-10/)).not.toBeInTheDocument()
  })

  it('bounds the check-out date to not be before the check-in date', () => {
    render(<ReservationForm />)
    setCheckIn('2026-08-14')
    expect(screen.getByLabelText(/check out/i)).toHaveAttribute('min', '2026-08-14')
  })
})
