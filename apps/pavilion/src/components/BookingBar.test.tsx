import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingBar } from './BookingBar'

describe('BookingBar', () => {
  it('renders all booking form fields and the submit button', () => {
    render(<BookingBar />)
    expect(screen.getByLabelText(/Check In/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Check Out/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Adults/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Children/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Rooms/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument()
  })

  it('allows selecting values in dropdowns and submitting the form', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)
    await user.selectOptions(screen.getByLabelText(/Adults/i), '2')
    expect(screen.getByLabelText(/Adults/i)).toHaveValue('2')
    await user.selectOptions(screen.getByLabelText(/Children/i), '1')
    expect(screen.getByLabelText(/Children/i)).toHaveValue('1')
    await user.selectOptions(screen.getByLabelText(/Rooms/i), '3')
    expect(screen.getByLabelText(/Rooms/i)).toHaveValue('3')
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
  })
})
