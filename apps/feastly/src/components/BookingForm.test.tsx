import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the heading and form inputs', () => {
    render(<BookingForm />)

    expect(screen.getByRole('heading', { name: /book.*your.*table/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book a table/i })).toBeInTheDocument()
  })

  it('has the contact section id', () => {
    render(<BookingForm />)

    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('allows filling in form fields', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const dateInput = screen.getByLabelText(/date/i)
    const timeInput = screen.getByLabelText(/time/i)
    const guestsInput = screen.getByLabelText(/number of guests/i)

    await user.type(dateInput, '2025-12-25')
    await user.type(timeInput, '19:00')
    await user.type(guestsInput, '4')

    expect(dateInput).toHaveValue('2025-12-25')
    expect(timeInput).toHaveValue('19:00')
    expect(guestsInput).toHaveValue(4)
  })

  it('submits without errors', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.click(screen.getByRole('button', { name: /book a table/i }))
  })
})
